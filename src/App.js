import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Info from './Routes/Info';

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/todo" element={<Info/>}/>
      </Routes>
    </div>
  )
}

export default App