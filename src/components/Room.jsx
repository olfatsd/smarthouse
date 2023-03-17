import React from 'react'
import {useNavigate } from 'react-router-dom';

export default function Room(props) {
  const nav = useNavigate();
  const roomInfo = () => {
    props.changeInd(props.index); 
    nav(`/room${ props.room.name}`);
  }
  return (
    <div onClick={() => { roomInfo() }} className='roomDiv' style={{ background: props.room.color }}>
      <h1>{props.room.name}</h1>
    </div>
  )
}