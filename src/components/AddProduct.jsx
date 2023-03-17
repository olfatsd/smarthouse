import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AddProduct(props) {
    const [product, setProduct] = useState("");
    const nav = useNavigate();

    const add = () => {
        if (props.room.products.length == 5)
            alert("Room is full")
        else if (props.room.products.length == 0)
            props.addProduct(product)
        else if (product == 'stereo') {
            props.room.products.map((val, index) => {
                if (val.name == 'stereo')
                    return alert('there is a stereo already')
                else props.addProduct(product)
            })
        }
        else if (product == 'heater') {
            if (props.room.products.type != 'BathRoom')
                alert('you cant add this product to this room')
        }
        else {
            props.addProduct(product)
        }
        nav('/room')
    }

    return (
        <div>
            <select onChange={(e) => { setProduct(e.target.value) }}>
                <option value=" ">Product</option>
                <option value="stereo">Stereo</option>
                <option value="air conditioner">Air-Conditioner</option>
                <option value="heater">Heater</option>
                <option value="lamp">Lamp</option>
            </select>
            <button className="button-78" role="button" onClick={() => { add() }}>ADD</button>
        </div>
    )
}
