import React from 'react'
import { useNavigate } from 'react-router-dom';
import Room from './Room'
import './style.css'

export default function Home(props) {

  const nav = useNavigate();

  return (
    
    <div style={{ paddingLeft: '20px' }}>
      <div className='roomsDiv'>
        {props.roomsArr.map((val, index) => {
          return <div><Room room={val} index={index} changeInd={props.changeInd}/></div>
        })}
      </div>
      <button className="button-78" role="button" onClick={() => { nav('/newroom') }}>+</button>
    </div>
  )
}