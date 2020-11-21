import React, { useContext } from 'react'

import CartContext from '../../context/cartContext';
import { Link } from 'react-router-dom';


const Cart = (props) => {
    const context = useContext(CartContext);

    let precioTotal = []
    let precio = 0
    let cuenta = null
    let carrito = <div>

        No hay productos seleccionados.
        <Link to="/">Por favor elige uno</Link>
    </div>
    if (context.productos.length > 0) {


        carrito = context.productos.map(prod => {
            precioTotal.push(prod.price)
            return <ul>
                <li>{prod.title}</li>
                <li>Precio por unidad: ${prod.price}</li>

            </ul>
        })
        precioTotal.forEach(function (numero) {
            precio += numero;
        })
        cuenta = <h3>Precio Total: {precio}</h3>;
    }

    return (
        <div>

            <h1>Tú Carrito </h1>
            {carrito}
            <div>{cuenta}</div>
        </div>
    )
}

export default Cart