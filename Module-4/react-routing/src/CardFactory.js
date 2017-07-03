import React, {Component} from 'react'

const CardFactory = BaseComponent => {
  return class CardComponent extends Component {
    componentWillMount () {
      const Url = 'http://api.magicthegathering.io/v1/cards/'
      const cardId = this.props.match.params.cardId
      const apiUrl = cardId ? Url + cardId : Url
      fetch(apiUrl)
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({...jsonRes})
      })
    }
    render () {
      return (
        <BaseComponent {...this.state} {...this.props} />
      )
    }
  }
}

export default CardFactory
