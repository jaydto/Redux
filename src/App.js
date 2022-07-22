import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Info from './Routes/Info';
import Commpleted from './Routes/Commpleted';

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/todo" element={<Info/>}/>
        <Route path="/completed" element={<Commpleted/>}/>

      </Routes>
    </div>
  )
}

export default App