import React from 'react';
import classes from './Item.module.css';
import { NavLink, Router } from 'react-router-dom';
import ItemCount from '../ItemCount';



const item = (props) => {






    return (
        <article
            key={props.index}
            className={classes.Item}
        >
            <p className={classes.Title}>{props.title}</p>
            <p>Precio: {props.price}</p>
            <NavLink to={"/itemDetail/:" + props.index}>Detalles</NavLink>
            <ItemCount />
            

        </article >
    )
};

export default item;