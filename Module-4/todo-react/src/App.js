import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

class App extends Component {
  constructor (props) {
    // Pass props to parent class
    super(props)
    // Set initial state
    this.state = {
      todos: ['Teach like a beast', 'Play MTG like a pro']
    }
  }
  componentWillMount(){
  }
  shouldComponentUpdate(){
    console.log("update");
  }
  // Add todo handler
  addTodo (event) {
    event.preventDefault()
    const todo = event.target[0].value
    event.target[0].value = ''
    this.setState({todos: [...this.state.todos, todo]})
  }
  render () {
    return (
      <div>
        <div className='header'>
          <h1>Tony's Todo List</h1>
        </div>
        <div className='main'>
          <div className='list'>
            <TodoList todos={this.state.todos} />
          </div>
          <TodoForm addTodo={this.addTodo.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App
