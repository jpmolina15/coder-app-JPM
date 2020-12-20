import React, { useContext, useState } from 'react'
import './Cart.css'
import CartContext from '../../context/cartContext';
import { Link, NavLink } from 'react-router-dom';


const Resumen = (props) => {
    const context = useContext(CartContext);
    const [hide, setHide] = useState('hide')
    let comprando = true

    let precioTotal = []
    let precio = 0
    let cuenta = null
    let carrito = <div>

        No hay productos seleccionados.
        <Link to="/">Por favor elige uno</Link>
    </div>

    const comprar = () => {
        comprando = !comprando
        console.log(comprando)
    }
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
    let final = <div>
        <h2>Resumen de Compra</h2>
        <h3>ID: Hm5ZkpmdTeZ74PcyhbTG </h3>
        <ul>
            <li>Comprador: Juan Pablo</li>
            <li>Mail: hola@prueba.com</li>
            <li>Direccion: Calle 123</li>

        </ul>
        <h3>Productos</h3>
        {carrito}
        <div>{cuenta}</div>
        <button><NavLink to='/'>Confirmar compra</NavLink></button>
    </div>
    let termina = null
    if (comprando) {
        termina = <div>

            <h1>Tú Carrito </h1>
            {carrito}
            <div>{cuenta}</div>
            <form>
                <label>
                    Nombre:
            </label>
                <input type="text" />
                <br />
                <label>
                    Dirección:
            </label>
                <input type="text" />
                <br />
                <label>
                    Mail:
            </label>
                <input type="email" />
                <button onClick={() => context.Limpiar()}>COMPRAR</button>
            </form>
        </div>
    } else {
        termina = 
        <div>{final}</div>
    }

    return (
        <div>
{final}
        </div>
    )
}

export default Resumen