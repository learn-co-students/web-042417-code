import React, { Component } from 'react'
import Card from './Card'

class CardDetails extends Component{
  state = {
    card: {},
    apiUrl: `http://api.magicthegathering.io/v1/cards/${this.props.match.params.cardId}`
  }
  componentWillMount(){
    fetch(this.state.apiUrl)
    .then(res => res.json())
    .then(jsonRes => {
            const {card} = jsonRes
            this.setState({card})
    })
  }
  render(){
    return(
      <div>
        <Card {...this.state.card} />
      </div>
    )
  }
}

export default CardDetails
