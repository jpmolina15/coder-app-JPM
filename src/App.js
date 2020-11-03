import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Home from './Containers/Home';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Home greetings="Hola Bienvenido" />
      </div>
    );
  }
}

export default App;

