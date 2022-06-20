import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import TodoItem from '../components/TodoItem'

const TodoList = () => {
    const todos=useSelector((state)=>state.todos)
  return (
    <div>
      <Navbar/>
        <ul className="list-group">
            {todos.map((todo)=>
            <TodoItem id={todo.id} title={todo.title} completed={todo.complete}/>)}
        </ul>
    </div>
  )
}

export default TodoList