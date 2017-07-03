import React, { Component } from 'react'
import Card from './Card'
import CardFactory from './CardFactory'

class CardsList extends Component {
  loading () {
    if (this.props.cards) {
      const cardsList = this.props.cards.map(card => <Card {...card} key={card.multiverseid} />)
      return cardsList
    } else {
      return <h2>Loading...</h2>
    }
  }
  render () {
    return (
      <div>
        {this.loading()}
      </div>
    )
  }
}

export default CardFactory(CardsList)
