import React from 'react';
import classes from './Item.module.css';




const item = (props) => {



    // if (props.priceList > props.priceSell) {   // Aplica Descuento y su estilo 
    //     price = <div className={classes.Price}>
    //         <p className={classes.PriceList}>{'$' + props.priceList}</p>
    //         <p className={classes.PriceSell}>{'$' + props.priceSell}</p>
    //     </div>
    // } else {
    //     price =
    //         <div className={classes.Price}>
    //             <p className={classes.NoPriceList}>{'$' + props.priceList}</p>
    //             <p className={classes.PriceSell}>{'$' + props.priceSell}</p>
    //         </div>
    // }

    // // Cambia imagen
    // if (props.image === 'atun.jpg') {
    //     image = atun
    // } else if (props.image === 'galletitas.jpg') {
    //     image = galletitas
    // } else if (props.image === 'manteca.jpg') {
    //     image = manteca
    // } else if (props.image === 'cebolla.jpg') {
    //     image = cebolla
    // }


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