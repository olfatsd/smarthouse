import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Product from './Product'

export default function RoomInfo(props) {
  const nav = useNavigate();
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div style={{ textAlign: 'left' }}>
          <h1>Room Name: {props.room.name}</h1>
          <h1>Room Type: {props.room.type}</h1>
        </div>
        <div>
          {props.room.products.map((val, index) => {
            let color
            if (val.on == false)
              color = 'red';
            else color = 'green'
            return <div><Product product={val} color={color} updateProduct={props.updateProduct} index={index}/></div>
          })}
        </div>
      </div>
      <button className="button-78" role="button" onClick={() => { nav('/addproduct') }}>Add Product</button>
    </div>
  )
}
