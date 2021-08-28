import React from 'react';
import './App.css';
import Dashboard from './DashBoard/Dashboard';
import Login from './Login/Login';

const App: React.FC = () => {
  return (
    <div className="App">
        <Login/>
        <h1>Chess Game</h1>
    </div>
  );
}

export default App;
