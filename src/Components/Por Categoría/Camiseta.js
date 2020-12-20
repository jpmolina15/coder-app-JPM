import React, { useState, useContext, useEffect } from 'react';
import classes from './ItemList.module.css'
import Item from '../Item/Item'
import ItemCount from '../ItemCount';
import CartContext from '../../context/cartContext'
import { GetDBFireBase } from '../../tools/firebaseFactory'



const CamisetaList = (props) => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const context = useContext(CartContext);
    const DB = GetDBFireBase();




    useEffect(() => {
        setLoading(true);
        const products = DB.collection("productos")

        const filter = products.where("categoryId", "==", 1)
        filter
            .get()
            .then((product) => {
                setItem(product);

                let lista = []
                product.docs.map(doc => {
                    lista.push(doc.data())
                    console.log(doc.data().image)
                })
                setItem(lista)
                console.log("item" + item)


                setLoading(false)
                console.log(loading)
            });

        console.log("Esa");
    }, []);
    // const getByWhere = () => {
    //     const producto = DB.collection("productos")
    //     const filter = producto.where("categoryId", "==", 1)

    //     filter
    //         .get()
    //         .then((res) => {
    //             if (res.size == 0) {
    //                 console.log("no result  ")
    //             } else {
    //                 res.docs.map((doc) => {
    //                     console.log(doc.data())
    //                 })
    //             }
    //         }
    //         )
    //         .catch()
    // }

    let carrito = []
    if (item.length > 0) {
        carrito = item.map(prod => {
            console.log("Carrito" + prod)
            return (<div>

                <Item title={prod.title}
                    index={prod.id}
                    price={prod.price}

                >
                    <ItemCount comprar={() => context.AgregarProd(prod)} />
                </Item >
            </div>)
        })
    }
    

    return (
        <div>
            {loading ? (

                <h2>Cargando..</h2>

            ) : (
                    <div className={classes.Lista}>
                        {carrito}

                    </div>
                )}
        </div>

    )

}


export default CamisetaList