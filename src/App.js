import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Resumen from './Components/Cart/Resumen';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import ItemList from './Components/ItemList/ItemList';
import NavBar from './Components/NavBar/NavBar';
import Camiseta from './Components/Por Categoría/Camiseta';
import Zapatillas from './Components/Por Categoría/Zapatillas';
import CartContext from './context/cartContext';



class App extends Component {
  constructor() {
    super();

    this.state = {
      productos: [],
      AgregarProd: this.AgregarProd,
      Limpiar: this.Limpiar
    };
  }

  AgregarProd = (prod) => {
    if (prod) {
      this.setState({ productos: [prod, ...this.state.productos] });
    }
  };
  Limpiar = () => {
    this.setState({ productos: [] });
  }
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
              <Route exact path='/category/:1'>
                <Camiseta />
              </Route>
              <Route exact path='/categoria'>
                <Zapatillas />
              </Route>
              <Route path='/Cart'>
                <Cart />
              </Route>
              <Route path='/ResumenDeCuenta'>
                <Resumen />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartContext.Provider>
      </div>
    );
  }
}

export default App;

