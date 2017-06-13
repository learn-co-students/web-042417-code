window.onload = function () {
  // presentational component
  class TodoItem {
    constructor (text) {
      this.title = text
    }
    // return html with text for todo item
    render () {
      return (`<p><input type="checkbox" class="checkboxes"><i class="glyphicon glyphicon-star"></i><span>${this.title}</span><i class="glyphicon glyphicon-remove"></i></p>`)
    }
  }
  // container component
  class TodoList {
    constructor () {
      this.todos = [new TodoItem('Cheese')]
    }
    // go through all todos and call render
    renderTodos () {
      return this.todos.map(todo => todo.render()).join('')
    }
    // add the todo to the list of all todos
    addTodo (text) {
      const todo = new TodoItem(text)
      this.todos.push(todo)
    }
    // when todo gets removed from dom also delete from array
    removeTodo (text) {
      this.todos = this.todos.filter(todo => todo.title !== text)
    }
    render () {
      return this.renderTodos()
    }
  }
  // Main app container component
  class App {
    // collect all your elements and add events
    constructor () {
      this.textBox = document.querySelector('#todo-text')
      this.submitBtn = document.querySelector('button')
      this.submitBtn.addEventListener('click', this.onSubmit.bind(this))
      this.todoList = new TodoList()
      this.todoContainer = document.querySelector('.list')
      this.todoContainer.addEventListener('click', this.starXcheck.bind(this))
    }
    // when button is clicked add todo and clear box then re-render list
    onSubmit () {
      event.preventDefault()
      this.todoList.addTodo(this.textBox.value)
      this.textBox.value = ''
      this.render()
    }
    // event delegation for clicking on checkboxes, stars and x
    starXcheck () {
      const clickedEl = event.target
      switch (clickedEl.className) {
        case 'glyphicon glyphicon-remove':
          // remove todo item from array
          this.todoList.removeTodo(clickedEl.parentNode.childNodes[2].innerText)
          // remove todo item from the dom
          clickedEl.parentNode.parentNode.removeChild(clickedEl.parentNode)
          break
        case 'glyphicon glyphicon-star':
          clickedEl.classList.add('active')
          break
        case 'glyphicon glyphicon-star active':
          clickedEl.classList.remove('active')
          break
        case 'checkboxes':
          clickedEl.nextSibling.nextSibling.classList.toggle('strikethrough')
          break
        default:
      }
    }

    render () {
      this.todoContainer.innerHTML = this.todoList.render()
    }
  }

  const tonysTodoList = new App()

  tonysTodoList.render()
}
