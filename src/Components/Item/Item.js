import React, { useState } from 'react';
import classes from './Item.module.css';
import { NavLink} from 'react-router-dom';




const Item = (props) => {

    // const [items, setItems] = useState(0)
    // const sumarItems = () => {
    //     setItems(items + 1)
    // }
    // const sacarItems = () => {
    //     if (items > 0) {
    //         setItems(items - 1)
    //     } else if (items === 0) {
    //         setItems(0)
    //     }
    // }

    return (
        <article
            key={props.index}
            className={classes.Item}
        >
            <p className={classes.Title}>{props.title}</p>
            <p>Precio: {props.price}</p>
            <NavLink to={"/itemDetail/:" + props.title}>Detalles</NavLink>
            {props.children}

        </article >
    )
};

export default Item;