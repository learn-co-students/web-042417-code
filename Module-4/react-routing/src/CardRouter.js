import React from 'react'
import {Switch, Route} from 'react-router-dom'
import CardList from './CardList'
import CardShow from './CardShow'

const CardRouter = () => {
  return (
    <div>

      <Route exact path='/cards' component={CardList} />
      <Route path='/cards/:cardId' component={CardShow} />

    </div>
  )
}

export default CardRouter
