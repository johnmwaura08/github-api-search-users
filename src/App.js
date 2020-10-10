import React from 'react';
import './App.css';
import Dashboard from '../src/pages/Dashboard';
import Login from '../src/pages/Login';
import Error from '../src/pages/Error';
import PrivateRoute from '../src/pages/PrivateRoute';
import AuthWrapper from '../src/pages/AuthWrapper'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <AuthWrapper>
        <Router>
          <Switch>
            <PrivateRoute path='/' exact={true}>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </AuthWrapper>

    </div>
  );
}

export default App;
