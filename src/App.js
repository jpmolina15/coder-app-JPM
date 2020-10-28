import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />


      </header>
    </div>
  );
}

export default App;

