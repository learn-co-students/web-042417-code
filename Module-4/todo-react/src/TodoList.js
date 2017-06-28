import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {

  return(
    <div>
      {todos.map( (todo,index) => <TodoItem key={ todo + index} title={todo}/>)}
    </div>
  )
}

export default TodoList
