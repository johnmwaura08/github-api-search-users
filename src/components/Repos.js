import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D, TestChart } from './Charts';

const Repos = () => {

  const { repos } = React.useContext(GithubContext);

  const firstReposData = repos.slice(0, 5).map((repo) => {
    const { name } = repo;
    return (
      {
        label: name,
        value: 5
      }
    )
  });

  const repoSizeData = Object.values(repos).sort((a, b) => {
    const { size } = repos;
    return b.size - a.size
  }).map((repo, i) => {
      const { name, size } = repo;
      return (
        {
          label: name,
          value: size
        }
      )
    }).slice(0, 5)

  let languages = repos.reduce((total, item) => {
    let { language, stargazers_count } = item;

    if (!language) return total;
    if (!stargazers_count) stargazers_count = 1

    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count }
    }
    else {
      total[language] = { ...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count }
    }
    return total
  }, {});

  const mostUsed = Object.values(languages).sort((a, b) => {
    return b.value - a.value
  }).slice(0, 5)

  const mostPopular = Object.values(languages).sort((a, b) => {
    return b.stars - a.stars
  }).map((item) => {
    return { ...item, value: item.stars }
  }).slice(0, 5)


  const chartData = [
    // {
    //   label: newChartData[0].label,
    //   value: newChartData[0].value
    // },
    {
      label: "CSS",
      value: 1

    },
    {
      label: "JAVASCRIPT",
      value: 1

    },
    {
      label: "TYPESCRIPT",
      value: 1

    }
  ];
  return (

    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={mostUsed} />
        <Doughnut2D data={mostPopular} />
        <Column3D data={repoSizeData} />
        <Bar3D data={firstReposData} />
      </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
