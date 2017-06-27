import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
  return (
    <div>
      {todos.map((item, index) => <TodoItem key={index + item} title={item} />)}
    </div>
  )
}

export default TodoList
