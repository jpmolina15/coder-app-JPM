import React, { Component } from 'react';
import './NavBar.css'
import CartIcon from '../Carticon'


class NavBar extends Component {
    render() {
        return (
            <div>

                <ul id='button'>
                    <li><a href='#'><CartIcon/></a></li>
                    <li><a href='#'>Sobre nosotros</a></li>
                    <li><a href='#'>Servicios</a></li>
                    <li><a href='#'>Productos</a></li>
                    <li><a href='#'>Contacto</a></li>
                </ul>
            </div>
        )
    }
};

export default NavBar