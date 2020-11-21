import React, { useState } from 'react';
import classes from '../Item/Item.module.css';
import ItemCount from '../ItemCount';

import casaca from '../../assets/camisetaBoca.jpg'

const ItemDetail = (props) => {
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
        <div>
              <article
                    id={props.id}
                    className={classes.Item}>
                    <p className={classes.Title}>{props.title}</p>
                    <p>Precio: {props.price}</p>
                    <img src={casaca} />
                    <ItemCount items={items} mas={sumarItems} menos={sacarItems} />
                </article>

        </div>
    )
};

export default ItemDetail;