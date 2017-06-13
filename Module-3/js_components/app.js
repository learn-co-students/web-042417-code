// todo list item > presentational component
class TodoListItem {
  constructor (text) {
    this.title = text
  }
  render () {
    return (
      `<p>
          <input type="checkbox" class="checkboxes">
          <i class="glyphicon glyphicon-star"></i>
          <span>${this.title}</span>
          <i class="glyphicon glyphicon-remove"></i>
        </p>`
    )
  }

}
// container component create all the todo list items
class TodoList {
  constructor () {
    this.todoItems = [new TodoListItem('Finish Learn Labs')]
  }

  renderTodos () {
    return this.todoItems.map(todo => todo.render())
  }

  addTodoItem (text) {
    const todo = new TodoListItem(text)
    this.todoItems.push(todo)
  }

  removeTodoItem (text) {
    this.todoItems = this.todoItems.filter(todo => todo.title !== text)
  }

  render () {
    return this.renderTodos().join('')
  }

}

class App {
  constructor () {
    this.todoContainer = document.querySelector('.list')
    this.submitBtn = document.querySelector('button')
    this.todoText = document.querySelector('#todo-text')
    this.todoList = new TodoList()
    this.submitBtn.addEventListener('click', this.onSubmit.bind(this))
  // this.submitBtn.addEventListener('click', () => this.onSubmit() )
  }

  onSubmit () {
    event.preventDefault()
    const text = this.todoText.value
    this.todoList.addTodoItem(text)
    this.todoText.value = ''
    this.render()
  }

  render () {
    this.todoContainer.innerHTML = this.todoList.render()
  }

}

const tonysTodoApp = new App()

tonysTodoApp.render()
