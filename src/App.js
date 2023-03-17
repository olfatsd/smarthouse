import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NewRoom from './components/NewRoom';
import RoomInfo from './components/RoomInfo';
import AddProduct from './components/AddProduct';

function App() {

  const [roomsArr, setRoomsArr] = useState([]);
  const [ind, setInd] = useState(0);


  const add = (room) => {
    setRoomsArr([...roomsArr, room])
  }
  const changeInd = (ind) => {
    setInd(ind)
  }
  const addProduct = (product) => {
    setRoomsArr(roomsArr.map((val, index) => {
      if (index == ind)
        return { ...val, products: [...val.products, { name: product, on: false }] }
    }))
  }
  const updateProduct = () => {
    // setRoomsArr(roomsArr.map((val, index) => {
    //   if (index == ind)
    //     return { ...val, products: [val.products[proInd],  {on:bool}] }
    //     else  return { ...val, products: [...val.products[proInd], (!{on:bool}) ] }
    // }))

  }

  return (
    <div className="App">
      <BrowserRouter>
        <h1>SMART HOUSE</h1>
        <Routes>
          <Route path='/' element={<Home roomsArr={roomsArr} changeInd={changeInd} />} />
          <Route path='/newroom' element={<NewRoom addfunc={add} />} />
          <Route path='/room/' element={<RoomInfo room={roomsArr[ind]} updateProduct={updateProduct} />} />
          <Route path='/addproduct' element={<AddProduct room={roomsArr[ind]} addProduct={addProduct} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
