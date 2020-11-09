import React from 'react';
import classes from './Item.module.css';




const item = (props) => {






    return (
        <article
            id={props.key}
            className={classes.Item}
        >
            <p className={classes.Title}>{props.title}</p>
            <p>Precio: {props.price}</p>
        </article >
    )
};

export default item;