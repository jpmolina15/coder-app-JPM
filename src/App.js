import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar'
import Home from './Containers/Home';

class App extends Component {

  render() {
    return (
      <div>

        <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
          <Home greetings="Hola Bienvenido" />
          </Route>
          <Route path='/itemDetail'>
            <ItemDetailContainer />
          </Route>
          <Route path='/Cart'>
            <Cart />
          </Route>
        </Switch>
        </BrowserRouter>
  
      </div>
    );
  }
}

export default App;

