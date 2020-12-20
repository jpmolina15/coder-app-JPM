import React from 'react';
import classes from './Item.module.css';
import { NavLink} from 'react-router-dom';




const Item = (props) => {

    return (
        <article
            key={props.index}
            className={classes.Item}
        > 
            <p className={classes.Title}>{props.title}</p>
          <img src={props.image} alt="imagen"></img>
            <p>Precio: {props.price}</p>
            <NavLink to={"/itemDetail/:" + props.title}>Detalles</NavLink>
            {props.children}

        </article >
    )
};

export default Item;