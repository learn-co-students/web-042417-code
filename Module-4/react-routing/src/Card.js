import React from 'react'
import {Link} from 'react-router-dom'
const Card = ({imageUrl, name, multiverseid}) => {
  const cardLink = `/cards/${multiverseid}`
  return (
    <div>
      <Link to={cardLink}>
        <img src={imageUrl} />
      </Link>
    </div>
  )
}

export default Card
