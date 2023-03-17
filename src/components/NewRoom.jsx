import React from 'react'
import { useState } from 'react';
import {Navigate, useNavigate } from 'react-router-dom';

export default function NewRoom(props) {

  const [room, setRoom] = useState({ type: '', name: '', color: '', products: []});
  const nav = useNavigate();


  const addRoom = () => {
    if (room.name == "")
      alert("You must enter room name")
    else if (room.type.length < 5) {
      alert("You must select room type")
    }
    else {
      props.addfunc(room)
    }
    nav('/')
  }

  return (
    <div>
      <select onChange={(e) => { setRoom({ ...room, type: e.target.value }) }}>
        <option value=" ">Room Type</option>
        <option value="BedRoom">BedRoom</option>
        <option value="BathRoom">BathRoom</option>
        <option value="Kitchen">Kitchen</option>
      </select><br />
      <input type="text" onChange={(e) => { setRoom({ ...room, name: e.target.value }) }} maxLength={5} placeholder='Room Name' /><br />
      Enter Your Room Color:
      <input type="color" onChange={(e) => { setRoom({ ...room, color: e.target.value }) }} /><br />
      <button onClick={() => { addRoom() }}>CREATE</button>
    </div>
  )
}
