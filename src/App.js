import React from 'react';
import './App.css';
import Dashboard from '../src/pages/Dashboard';
import Login from '../src/pages/Login';
import Error from '../src/pages/Error';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact={true}>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
