import React from 'react'
import AddTodo from '../components/AddTodo'
import Navbar from '../components/Navbar'
import TodoList from '../components/TodoList'
import TotalCompleteItems from '../components/TotalCompleteItems'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <AddTodo/> 
			<TodoList/>
			<TotalCompleteItems/>
      </div>
  )
}

export default Home