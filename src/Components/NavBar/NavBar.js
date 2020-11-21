import React, { Component } from 'react';
import './NavBar.css'
import CartIcon from '../CartIcon/Carticon'
import { Link } from 'react-router-dom';


const navBar = (props) => {
        return (
            <div>
                <ul id='button' className='navbar'>
                    <Link to='/Cart'><CartIcon className='icono' cant={props.cant} /></Link>
                    <li><a href='/'>Sobre nosotros</a></li>
                    <li><a href='/'>Servicios</a></li>
                    <li><a href='/'>Productos</a></li>
                    <li><a href='/'>Contacto</a></li>
                </ul>
            </div>
        )}
    


export default navBar