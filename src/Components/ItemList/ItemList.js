import React, { Component } from 'react';
import classes from './ItemList.module.css'
import Item from '../Item/Item'

const listaProductos = [
    {
        id: 1,
        title: "Zapatillas",
        price: "$1500"
    },
    {
        id: 2,
        title: "Remera",
        price: "$1500"
    },
    {
        id: 3,
        title: "Pantalon",
        price: "$2000"
    },
    {
        id: 4,
        title: "Campera",
        price: "$3500"
    }
]

class ItemList extends Component {

    state = {
        productos: listaProductos,
        loading: false
    };



    render() {
        let items = "CARGANDO"
        if (!this.state.loading) {
            items =
                this.state.productos.map(prod => {
                    return <Item title={prod.title}
                        index={prod.id}
                        price={prod.price}

                    />
                })
        } 



        return (
            <div className={classes.Lista}>
                {items}
            </div>
        )
    }
}


export default ItemList