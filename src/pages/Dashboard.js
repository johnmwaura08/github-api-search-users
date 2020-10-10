import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
import Events from '../components/Events';

const Dashboard = () => {
  const {isLoading} = React.useContext(GithubContext)

  if(isLoading){
    return <main>
      <Navbar />
      <Search />
      <img src={loadingImage} className="loading-img" alt="loading" />
    </main>
  }
  return (
    <React.Fragment>  
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </React.Fragment>
  );
};

export default Dashboard;
