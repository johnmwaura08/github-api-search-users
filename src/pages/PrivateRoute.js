import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({children,...restOfTheProps}) => {  //the children will be the dashboard
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Route 
    {...restOfTheProps} 
    render={() => {
      return isUser? children: <Redirect to='/login'/>
    }}
    >
    </Route>
  );

};
export default PrivateRoute;
