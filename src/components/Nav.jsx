import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
      <Link to ="/">
        <h2>TicketBooking.com</h2>
      </Link>
    </div>
  )
}

export default Nav
