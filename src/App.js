import React from 'react';
import './App.css';
import Dashboard from '../src/pages/Dashboard';
import Login from '../src/pages/Login';
import Error from '../src/pages/Error'

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Login />
      <Error />
    </div>
  );
}

export default App;
