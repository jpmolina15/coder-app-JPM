import React, { useState, useContext, useEffect } from 'react';
import classes from './ItemList.module.css'
import Item from '../Item/Item'
import ItemCount from '../ItemCount';
import CartContext from '../../context/cartContext'
import { GetDBFireBase } from '../../tools/firebaseFactory'



const ItemList = (props) => {

    const context = useContext(CartContext);
    // const [productos, setProductos] = useState(listaProductos)

    // const [items, setItems] = useState(0);
    // const [cantidad, setCantidad] = useState(0);
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const DB = GetDBFireBase();

    
    useEffect(() => {
        setLoading(true);
        const products = DB.collection("productos")
        products
            .get()
            .then((product) => {
                setItem(product);


                let lista = []
                product.docs.map(doc => {
                    lista.push(doc.data())
                    console.log(doc.data())
                })
                setItem(lista)
                console.log("item" + item)

                setLoading(false)

            });

        console.log("Use Effect");
    }, []);

    let carrito = []
    if (item.length > 0) {
        carrito = item.map((prod, i) => {

            return (<div>

                <Item title={prod.title}
                    key={i}

                    price={prod.price}
                >

                    <ItemCount comprar={() => context.AgregarProd(prod)} />
                    <button onClick={() => console.log(prod)}>ID</button>
                </Item >
            </div>)
        })
    }

    return (
        <div>
            {loading ? (

                <p>Cargando..</p>

            ) : (
                    <div className={classes.Lista}>
                        {carrito}

                    </div>
                )}
        </div>

    )

}


export default ItemList