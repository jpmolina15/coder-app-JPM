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
        title: "Zapatillas",
        price: "$1500"
    },
    {
        id: 3,
        title: "Zapatillas",
        price: "$1500"
    },
    {
        id: 4,
        title: "Zapatillas",
        price: "$1500"
    }
]

class ItemList extends Component {

    state = {
        productos: []
    };

    nuevoState = () => {
        new Promise(() => {
            setTimeout(() => {
                this.setState({ productos: listaProductos })
                console.log('1')
            }, 3000)
        }
        )
    }
    componentDidMount(){
        this.nuevoState()
    }

    render() {

        const items =
            this.state.productos.map(prod => {
                return <Item title={prod.title}
                    id={prod.id}
                    price={prod.price}

                />
            })



        return (
            <div className={classes.Lista}>
                {items}
            </div>
        )
    }
}


export default ItemList