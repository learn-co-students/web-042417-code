import React from 'react'
import {Switch, Route} from 'react-router-dom'
import CardsList from './CardsList'
import CardDetails from './CardDetails'

const CardRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/cards' component={CardsList} />
        <Route path='/cards/:cardId' component={CardDetails} />
      </Switch>
    </div>
  )
}

export default CardRouter
