import React, { useState, useEffect, useContext } from 'react';
import { GetDBFireBase } from '../../tools/firebaseFactory';
import CartContext from '../../context/cartContext'
import ItemDetail from './ItemDetail';
import ItemCount from '../ItemCount';

let producto = {
    id: 1,
    title: "Zapatillas",
    price: "$1500"

};



const itemDetails = new Promise((result, reject) =>
    setTimeout(() => result(producto), 3000)
);



const ItemDetailContainer = (props) => {
    const context = useContext(CartContext);
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const DB = GetDBFireBase();
    console.log("Arranco");
    
    useEffect((id) => {
        setLoading(true);
        const products = DB.collection("productos").doc("Hm5ZkpmdTeZ74PcyhbTG")
        products
                .get()
                .then((product) => {
                    let lista = []
                    if (!product.exists) {
                        console.log("no existe")
                    } else {
                        console.log(product.data())
                        lista.push(product.data())
                    }

                    setItem(lista);
                    
                    // product.data().map(doc => {
                        
                    //     console.log(doc.data())
                    // })
                    // setItem(lista)
                    console.log("item" + item)

                    setLoading(false)
                    console.log(loading)
                });

        console.log("Use Effect");
    }, []);

    let carrito = []
    if (item.length > 0) {
        carrito = item.map(prod => {

            return (<div>

                <ItemDetail title={prod.description}
                    index={prod.id}
                    index={prod.id}
                    price={prod.price}

                >
                    <ItemCount comprar={() => context.AgregarProd(prod)} />
                </ItemDetail >
            </div>)
        })
    }
    return (
        <div>
            {loading ? (

                <p>Cargando..</p>

            ) : (
                    <div >
                        {carrito}

                    </div>
                )}
        </div>

    );

};
export default ItemDetailContainer;