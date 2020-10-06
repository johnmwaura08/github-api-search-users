import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

// i have access to a provider and a consumer, i wont use a consumer now because of usecontext hook

const GithubProvider= ({children}) => {

    return (<GithubContext.Provider value={'hello'}>
        {children}
    </GithubContext.Provider>
    );
};

export {GithubProvider, GithubContext};
//my github provider is returning the provider from github context and i'll wrap the whole application in it at index.js
//i'm also exporting github context so i can make use of usecontext  which now replaces the consumer