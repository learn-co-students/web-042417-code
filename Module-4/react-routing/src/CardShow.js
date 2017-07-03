import React, { Component } from 'react'
import CardFactory from './CardFactory'
import Card from './Card'

class CardShow extends Component {
  loading () {
    if (this.props.card) {
      return <Card {...this.props.card} key={this.props.card.multiverseid} />
    } else {
      return <h2>Loading...</h2>
    }
  }
  render () {
    return (
      <div>
        { this.loading() }
      </div>
    )
  }
}

export default CardFactory(CardShow)
