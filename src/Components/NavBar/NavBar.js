import React, { Component } from 'react';
import './NavBar.css'
import CartIcon from '../CartIcon/Carticon'


class NavBar extends Component {
    render() {
        return (
            <div>
                <ul id='button' className='navbar'>
                    <li ><CartIcon className='icono' /></li>
                    <li><a>Sobre nosotros</a></li>
                    <li><a>Servicios</a></li>
                    <li><a>Productos</a></li>
                    <li><a>Contacto</a></li>
                </ul>
            </div>
        )
    }
};

export default NavBar