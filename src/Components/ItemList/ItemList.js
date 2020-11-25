import React, { useState, useContext } from 'react';
import classes from './ItemList.module.css'
import Item from '../Item/Item'
import ItemCount from '../ItemCount';
import CartContext from '../../context/cartContext'
import { GetDBFireBase } from '../../tools/firebaseFactory'



const ItemList = (props) => {

    const listaProductos = [
        {
            id: 1,
            title: "Zapatillas",
            price: 1500,
            cantidad: 0
        },
        {
            id: 2,
            title: "Remera",
            price: 1500,
            cantidad: 0
        },
        {
            id: 3,
            title: "Pantalon",
            price: 2000,
            cantidad: 0
        },
        {
            id: 4,
            title: "Campera",
            price: 3500,
            cantidad: 0
        }
    ]

    // const [productos, setProductos] = useState(listaProductos)

    const [items, setItems] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    const context = useContext(CartContext);

    const getDB = (id) => {
        const DB = GetDBFireBase();

        const productos = DB.collection("productos")
// .doc(id)

        productos
            .get()
            .then((res) => {
                // console.log(res)
                // console.log(res.data)

                res.docs.map((doc) => {
                    console.log(doc.data())
                })
            })
            .catch(() => console.log('mal ahi'))
            .finally(() => { })
    }

    const lista = listaProductos.map(prod => {
        return (<div><Item title={prod.title}
            index={prod.id}
            price={prod.price}

        >
            <ItemCount comprar={() => context.AgregarProd(prod)} />
        </Item >
            <button onClick={() => getDB(
                // "Hm5ZkpmdTeZ74PcyhbTG"
            )} >PROBANDO </button>
        </div>)
    })

    return (
        <div>
            {/* <NavBar cant={this.state.cantidad}/> */}
            <div className={classes.Lista}>
                {lista}
            </div>
        </div>

    )

}


export default ItemList