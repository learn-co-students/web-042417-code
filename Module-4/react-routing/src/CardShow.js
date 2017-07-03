import React, { Component } from 'react'
import Card from './Card'

class CardShow extends Component{
  state = {
    card: {},
    apiUrl: `http://api.magicthegathering.io/v1/cards/${this.props.match.params.cardId}`
  }
  componentWillMount(){
    fetch(this.state.apiUrl)
    .then(res => res.json())
    .then(jsonRes => {
          console.log("card show", jsonRes)
            this.setState({card: jsonRes.card})
    })
  }
  render(){
    return(
      <Card {...this.state.card} key={this.state.card.multiverseid} />
    )
  }
}

export default CardShow
