import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import CardsRouter from './CardsRouter'
class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/cards' component={CardsRouter} />
        </div>
      </Router>
    )
  }
}

export default App
