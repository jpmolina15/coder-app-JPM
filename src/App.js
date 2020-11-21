import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import ItemList from './Components/ItemList/ItemList';
import NavBar from './Components/NavBar/NavBar';
import CartContext from './context/cartContext'


class App extends Component {
  constructor() {
    super();

    this.state = {
      productos: [],
      AgregarProd: this.AgregarProd,
    };
  }

  AgregarProd = (prod) => {
    if (prod) {
      this.setState({ productos: [prod, ...this.state.productos] });
    }
  };
  render() {
    return (
      <div>
        <CartContext.Provider value={this.state}>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path='/'>
                <ItemList />
              </Route>
              <Route path='/itemDetail'>
                <ItemDetailContainer />
              </Route>
              <Route path='/Cart'>
                <Cart />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartContext.Provider>
      </div>
    );
  }
}

export default App;

