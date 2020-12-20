import React, { useState, useContext } from 'react';
import classes from '../Item/Item.module.css';

import CartContext from '../../context/cartContext'
import casaca from '../../assets/camisetaBoca.jpg'

const ItemDetail = (props) => {
    
     return (
        <div>
              <article
                    id={props.id}
                    className={classes.Item}>
                    <p className={classes.Title}>{props.title}</p>
                    <p>Precio: {props.price}</p>
                    <img src={casaca} alt={"camiseta"} />
                {props.children}
                </article>

        </div>
    )
};

export default ItemDetail;