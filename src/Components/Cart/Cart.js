import React, { Fragment, useContext, useState } from 'react'
import './Cart.css'
import CartContext from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { GetDBFireBase } from '../../tools/firebaseFactory'


const Cart = (props) => {
    const context = useContext(CartContext);
    const DB = GetDBFireBase();
    const [name, setName] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mail, setMail] = useState('')
    const [ordenId, setOrdenId] = useState('')
    const [encargo, setEncargo] = useState(false);
    const [cuentaPedida, setPedirCuenta] = useState(false)

    let precioTotal = []
    let precio = 0
    let cuenta = null
    let ordenCompleta = null
    let carrito = <div>

        No hay productos seleccionados.
        <Link to="/">Por favor elige uno</Link>
    </div>
    function handleChangeName(event) {
        setName(event.target.value);
    };
    function handleChangeTel(event) {
        setTelefono(event.target.value);
    };
    function handleChangeMail(event) {
        setMail(event.target.value);
    }

    let nuevaOrden = {
        cliente: {
            name: "AAAA",
            telefono: '11-5158-9632',
            mail: "hola@hola.com"
        },
        items: [],
        total: 10000
    };
    function postOrden() {
        const ordenes = DB.collection("ordenes")
        ordenes
            .add(nuevaOrden)
            .then(({ id }) => {
                setOrdenId(id)

            })
            .catch((error) => console.log(error))
            .finally(() => { })
    };
    const orden = () => {
        nuevaOrden.cliente.name = name
        nuevaOrden.cliente.telefono = telefono
        nuevaOrden.cliente.mail = mail
        nuevaOrden.items = context.productos
        nuevaOrden.total = 6400
        postOrden()
        setEncargo(true)
        console.log(nuevaOrden)
        setPedirCuenta(true)
    }

    if (context.productos.length > 0) {
        carrito = context.productos.map((prod, id) => {
            precioTotal.push(prod.price)
            nuevaOrden.items.push(prod)
            return <ul key={id}>
                <li>{prod.title}</li>
                <li>Precio por unidad: ${prod.price}</li>
            </ul>
        })
        precioTotal.forEach(function (numero) {
            precio += numero;
        })
        cuenta = <div><h3>Precio Total: {precio}</h3>
            <label>
                Nombre:
                </label>
            <input type="text" value={name} onChange={handleChangeName} />
            <br />
            <label>
                telefono:
                </label>
            <input type="text" value={telefono} onChange={handleChangeTel} />
            <br />
            <label>
                Mail:
                </label>
            <input type="email" value={mail} onChange={handleChangeMail} />

            <button onClick={orden}>Ordenar</button>
        </div>;
    }


    if (encargo) {
        let pedido = nuevaOrden.items.map(p => {
            return <ul key={p.id}>
                <li>{p.title}</li>
                <li>Precio por unidad: ${p.price}</li>
            </ul>
        })
        ordenCompleta = <div>
            <h2>Tu Orden Id: {ordenId}</h2>
            <h5>Nombre: {name}</h5>
            <h5>Telefono: {telefono}</h5>
            <h5>Mail: {mail}</h5>
            <h3>Productos</h3>
            {pedido}
            <h3>precio total {precio}</h3>

        </div>
    }
    let finalizar = <div><h1>Tú Carrito </h1>
        {carrito}
        <div>{cuenta}</div>

    </div>
    if (cuentaPedida) {
        finalizar = <div>{ordenCompleta}</div>
    }
    return (
        <Fragment>
            {finalizar}
            {/* <h1>Tú Carrito </h1>
            {carrito}
            <div>{cuenta}</div>


            <label>
                Nombre:
                </label>
            <input type="text" value={name} onChange={handleChangeName} />
            <br />
            <label>
                telefono:
                </label>
            <input type="text" value={telefono} onChange={handleChangeTel} />
            <br />
            <label>
                Mail:
                </label>
            <input type="email" value={mail} onChange={handleChangeMail} />

            <button onClick={orden}>Ordenar</button> */}
            {/* {ordenCompleta} */}

        </Fragment>
    )
}

export default Cart