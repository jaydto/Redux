import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import TodoItem from '../components/TodoItem'
import TodoList from '../components/TodoList'

const Info = () => {
    const todos=useSelector((state)=>state.todos)
  return (
    <div>
      <Navbar/>
    <TodoList/>
    </div>
  )
}

export default Info