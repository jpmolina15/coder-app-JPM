import React, { useState, useContext, useEffect } from 'react';
import classes from './ItemList.module.css'
import Item from '../Item/Item'
import ItemCount from '../ItemCount';
import CartContext from '../../context/cartContext'
import { GetDBFireBase } from '../../tools/firebaseFactory';
import camisetaBoca from '../../assets/camisetaBoca.jpg';
import camisetaArgentina from '../../assets/camisetaArgentina.jpeg';
import camisetaRiver from '../../assets/camisetaRiver.jpeg';
import camperaBoca from '../../assets/camperaBoca.jpeg';




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
            let foto = null
            if (prod.image === 'camisetaArgentina') {
                foto = camisetaArgentina
            }
            if(prod.image === 'camisetaBoca') {
                foto = camisetaBoca
            }
            if(prod.image === 'camisetaRiver') {
                foto = camisetaRiver
            }
            if(prod.image === 'camperaBoca') {
                foto = camperaBoca
            }
            return (<div>

                <Item title={prod.title}
                    key={i}
                    image={foto}
                    price={prod.price}
                >

                    <ItemCount comprar={() => context.AgregarProd(prod)} />
                    <button onClick={() => console.log(prod.image)}>Imagen</button>
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