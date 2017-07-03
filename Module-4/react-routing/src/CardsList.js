import React, { Component } from 'react'
import Card from './Card'

class CardsList extends Component{
  state = {
    cards: [],
    apiUrl: 'http://api.magicthegathering.io/v1/cards'
  }
  componentWillMount(){
    fetch(this.state.apiUrl)
    .then(res => res.json())
    .then(jsonRes => {
            console.log(jsonRes)
            this.setState({cards: [...jsonRes.cards]})
    })
  }
  render(){
    const cardsList = this.state.cards.map(card => <Card {...card} key={card.multiverseid} />)
    return(
      <div>
      { cardsList }
      </div>
    )
  }
}

export default CardsList
