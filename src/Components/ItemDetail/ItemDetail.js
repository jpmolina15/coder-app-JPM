import React from 'react';
import classes from '../Item/Item.module.css';
import ItemCount from '../ItemCount';

import casaca from '../../assets/camisetaBoca.jpg'

const ItemDetail = (props) => {

     return (
        <div>

                <article
                    id={props.id}
                    className={classes.Item}>
                    <p className={classes.Title}>{props.title}</p>
                    <p>Precio: {props.price}</p>
                    <img src={casaca} />
                    <ItemCount  />

                </article>

        </div>
    )
};

export default ItemDetail;