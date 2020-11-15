import React, { useState } from 'react'


const ItemCount = (props) => {



    return (
        <div>
            <div>
                <p>Cantidad: {props.items}</p>
                <button onClick={props.menos}>-</button>
                <button onClick={props.mas}>+</button>
            </div>
            <div>
                <button>Comprar {props.items}</button>
            </div>
        </div>
    )
}





export default ItemCount