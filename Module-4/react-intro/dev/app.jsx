import React , { Component } from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = React.createClass({
  render: function () {
    return (
      <h1 className='myClass'>Hello, Tony</h1>
    )
  }
})

const HiWorld = () => <h1 className='myClass'>Hello, From Functional</h1>

class MyComponent extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        Hello,
        {this.props.word}
      </div>
    )
  }
}

ReactDOM.render(<MyComponent word='Class Component' />, document.getElementById('container'))
