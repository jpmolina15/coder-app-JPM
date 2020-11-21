import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import icono from '../../assets/peli.png';
import './CartIcon.css';
import CartContext from '../../context/cartContext'


const CartIcon = (props) => {
    
    const context = useContext(CartContext);
    let cantidad = context.productos.length
    return (
        <div className="carrito"><img src={icono} alt="icono" />
            <p>{cantidad}</p>
        </div>)
}
export default CartIcon
