import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import CardList from './CardList'
class App extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <CardList />
      </div>
    )
  }
}

export default App
