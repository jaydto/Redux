import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import TodoList from './Routes/TodoList'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/todo" element={<TodoList/>}/>
      </Routes>
    </div>
  )
}

export default App