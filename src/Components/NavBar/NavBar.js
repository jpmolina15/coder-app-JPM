import React from 'react';
import './NavBar.css'
import CartIcon from '../CartIcon/Carticon'
import { Link } from 'react-router-dom';


const navBar = (props) => {
        return (
            <div>
                <ul id='button' className='navbar'>
                    <Link to='/Cart'><CartIcon className='icono' cant={props.cant} /></Link>
                    <Link to="/" className="item"> Inicio</Link>
                    <Link to="/" className="item"> Inicio</Link>
                    <Link to="/" className="item"> Inicio</Link>
                    <Link to="/" className="item"> Inicio</Link>
                </ul>
            </div>
        )}
    


export default navBar