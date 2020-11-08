import React from 'react';
import ItemCount from '../Components/ItemCount';
import ItemList from '../Components/ItemList/ItemList'

const home = (props) => {
    return (
        <div>
            <div>
            {props.greetings}
            </div>
            <div>

                <h3>PRODUCTO 1</h3>
            <ItemCount />
            </div>
        <ItemList />
        </div>)

}


export default home