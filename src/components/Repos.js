import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import ForkedBar3D from './Charts/ForkedBar3D';
import LanguageDoughnut2D from './Charts/LanguageDoughnut2D';
import LanguagesPie3D from './Charts/LanguagesPie3D';
import LargestRepColumn3D from './Charts/LargestRepColumn3D';
import PortfolioBar3D from './Charts/PortfolioBar3D';
import StarColumn3D from './Charts/StarColumn3D';

const Repos = () => {

  const { repos } = React.useContext(GithubContext);

  const firstReposData = repos.slice(0, 10).map((repo) => {
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

  //stars , forks
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();
  console.log(stars);

  return (

    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData} /> */}
        <LanguagesPie3D data={mostUsed} />
        <LanguageDoughnut2D data={mostPopular} />

        { stars.length > 1 && 
        <StarColumn3D data={stars} />
        }
        {
          forks.length > 1 &&
        <ForkedBar3D data={forks} />
        }
        <LargestRepColumn3D data={repoSizeData} />
        <PortfolioBar3D data={firstReposData} />

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
