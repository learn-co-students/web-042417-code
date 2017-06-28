import React from 'react'

 const TodoItem = (props) => {
   return(
     <p>
       <input type="checkbox" className="checkboxes"/>
       <i className="glyphicon glyphicon-star"></i>
       <span>{props.title}</span>
       <i className="glyphicon glyphicon-remove"></i>
     </p>
   )
}


export default TodoItem
