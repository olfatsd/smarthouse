import React from 'react'
import { useState } from 'react';

export default function Product(props) {
    return (
        <div onClick={() => { props.updateProduct() }} className='productDiv' style={{backgroundColor: props.color}}>
            <h2>{props.product.name}</h2>
        </div>
    )
}
