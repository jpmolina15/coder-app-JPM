import React, { useState, useEffect } from 'react';
import classes from '../Item/Item.module.css';
import ItemDetail from './ItemDetail';


let producto = {
    id: 1,
    title: "Zapatillas",
    price: "$1500"

};



const itemDetails = new Promise((result, reject) =>
    setTimeout(() => result(producto), 3000)
);



const ItemDetailContainer = (props) => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log("Arranco");

    useEffect(() => {
        setLoading(true);
        itemDetails.then((product) => {

            setItem(product);
            setLoading(false);
        });

        console.log("Esa");
    }, [itemDetails]);
    
    return (
        <div>

            {loading ? (

                <p>Cargando..</p>

            ) : (

                    <ItemDetail id={item.id} title={item.Title} price={item.price} />

                )}

        </div>

    );

};
export default ItemDetailContainer;