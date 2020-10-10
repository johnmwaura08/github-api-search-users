import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import mockEvents from './mockData.js/mockEvents'
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

// i have access to a provider and a consumer, i wont use a consumer now because of usecontext hook

// i'm using the static data first before i do the ajax requests

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);
    const [events, setEvents] = useState(mockEvents)
    //request loading
    const [requests, setRequests] = useState(0);
    const [isLoading, setIsLoading] = useState(false)
    //error
    const [error, setError] = useState({ show: false, msg: "" })

    const searchGithubUser = async (user) => {
        toggleError();
        setIsLoading(true);
      
        const response = await axios.get(`${rootUrl}/users/${user}`)
            .catch(err => console.log(err));

        if (response) {
            setGithubUser(response.data);
            const { login, followers_url } = response.data;

            await Promise.allSettled([
                axios.get(`${rootUrl}/users/${login}/repos?per_page=100`),
                axios.get(`${followers_url}?per_page=100`),
                axios.get(`${rootUrl}/users/${login}/events`)
            ]).then((results) => {
                const [repos, followers, events] = results;
                const status = 'fulfilled';
                if (repos.status === status) {
                    setRepos(repos.value.data)
                }
                if (followers.status === status) {
                    setFollowers(followers.value.data)
                }
                 if (events.status === status) {
                    setEvents(events.value.data)
                }
            }).catch(err => console.log(err))
        }
        else {
            toggleError(true, 'there is no user with that username')
        }
        checkRequests();
        setIsLoading(false);
    };

    //check rate
    const checkRequests = () => {

        axios.get(`${rootUrl}/rate_limit`)
            .then(({ data }) => {
                let { rate: { remaining } } = data;
                setRequests(remaining)
                if (remaining === 0) {
                    toggleError(true, "sorry you have exceeded your hourly rate limit!")
                }
            })
            .catch((err) => console.log(err))
    }

    function toggleError(show = false, msg = "") {
        setError({ show, msg })
    }

    useEffect(checkRequests, [])

    return (<GithubContext.Provider value={{ githubUser, repos, followers, requests, error, events, searchGithubUser, isLoading }}>
        {children}
    </GithubContext.Provider>
    );
};

export { GithubProvider, GithubContext };
//my github provider is returning the provider from github context and i'll wrap the whole application in it at index.js
//i'm also exporting github context so i can make use of usecontext  which now replaces the consumer