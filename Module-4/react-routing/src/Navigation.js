import React from 'react'
import {Link} from 'react-router-dom'
// import { Menu } from 'semantic-ui-react'
const Navigation = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/cards'>My Cards</Link></li>
      </ul>
    </div>

  )
}

export default Navigation
