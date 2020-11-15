import React, { useState } from 'react';
import classes from './Item.module.css';
import { NavLink, Router } from 'react-router-dom';
import ItemCount from '../ItemCount';



const Item = (props) => {

    const [items, setItems] = useState(0)
    const sumarItems = () => {
        setItems(items + 1)
    }
    const sacarItems = () => {
        if (items > 0){
        setItems(items - 1)
    }else if (items === 0){
        setItems(0)
    }
    }

    return (
        <article
            key={props.index}
            className={classes.Item}
        >
            <p className={classes.Title}>{props.title}</p>
            <p>Precio: {props.price}</p>
            <NavLink to={"/itemDetail/:" + props.index}>Detalles</NavLink>
            <ItemCount items={items} mas={sumarItems} menos={sacarItems} />


        </article >
    )
};

export default Item;