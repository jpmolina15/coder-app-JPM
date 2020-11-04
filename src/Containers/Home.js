import React, { Component } from 'react';
import ItemCount from '../Components/ItemCount'

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

        </div>)

}


export default home