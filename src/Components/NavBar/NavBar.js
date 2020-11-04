import React, { Component } from 'react';
import './NavBar.css'
import CartIcon from '../Carticon'


class NavBar extends Component {
    render() {
        return (
            <div>
                <ul id='button' class='navbar'> 
                    <li id='icono'><CartIcon/></li>
                    <li>Sobre nosotros</li>
                    <li>Servicios</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
            </div>
        )
    }
};

export default NavBar