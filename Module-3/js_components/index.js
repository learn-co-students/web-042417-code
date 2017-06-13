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
          this.todoList.removeTodo(clickedEl.parentNode.childNodes[2].innerText)
          clickedEl.parentNode.classList.add('zoomOutDown')
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

class AppDrawer extends HTMLElement {

  // A getter/setter for an open property.
  get open () {
    return this.hasAttribute('open')
  }

  set open (val) {
    // Reflect the value of the open property as an HTML attribute.
    if (val) {
      this.setAttribute('open', '')
    } else {
      this.removeAttribute('open')
    }
    this.toggleDrawer()
  }

  // A getter/setter for a disabled property.
  get disabled () {
    return this.hasAttribute('disabled')
  }

  set disabled (val) {
    // Reflect the value of the disabled property as an HTML attribute.
    if (val) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  // Can define constructor arguments if you wish.
  constructor () {
    // If you define a ctor, always call super() first!
    // This is specific to CE and required by the spec.
    super()

    // Setup a click listener on <app-drawer> itself.
    this.addEventListener('click', e => {
      // Don't toggle the drawer if it's disabled.
      if (this.disabled) {
        return
      }
      this.toggleDrawer()
    })
  }

  toggleDrawer () {}
}

customElements.define('app-drawer', AppDrawer)
