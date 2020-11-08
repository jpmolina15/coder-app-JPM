import React, { useState } from 'react'

const ItemCount = (props) => {

    const [items, setItems] = useState(0)
    const sumarItems = () => {
        setItems(items + 1)
    }
    const sacarItems = () => {
        setItems(items - 1)
    }

    return (
        <div>
            <p>Estás llevando: {items} productos</p>
            <button onClick={sacarItems}>Quitar producto</button>
            <button onClick={sumarItems}>Agregar producto</button>
        </div>
    )
}





export default ItemCount