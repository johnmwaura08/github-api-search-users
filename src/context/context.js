import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

// i have access to a provider and a consumer, i wont use a consumer now because of usecontext hook

// i'm using the static data first before i do the ajax requests

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);

    return (<GithubContext.Provider value={{githubUser, repos, followers}}>
        {children}
    </GithubContext.Provider>
    );
};

export { GithubProvider, GithubContext };
//my github provider is returning the provider from github context and i'll wrap the whole application in it at index.js
//i'm also exporting github context so i can make use of usecontext  which now replaces the consumer