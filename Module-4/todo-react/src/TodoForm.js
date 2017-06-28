import React from 'react'
import './TodoForm.css'

const TodoForm = ({addTodo}) => {
  return(
    <form onSubmit={addTodo} className="form">
      <div className="form-container">
        <input id="todo-text" type="text" className="form-input" placeholder="Add item"/>
      </div>
      <button type="submit" className="btn">+</button>
    </form>
  )
}

export default TodoForm
