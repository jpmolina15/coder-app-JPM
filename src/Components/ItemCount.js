import React, { useState } from 'react'


const ItemCount = (props) => {

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
            <div>
                <p>Cantidad: {items}</p>
                <button onClick={sacarItems}>-</button>
                <button onClick={sumarItems}>+</button>
            </div>
            <div>
                <button>Comprar {items}</button>
            </div>
        </div>
    )
}





export default ItemCount