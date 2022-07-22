import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="containers">
        <div className="item logo">Logo</div>
        <div className="item nav1">
            <ul className="nav__items">
            
            <Link to="/" className='nav__list'>Home</Link>
            <Link to="/todo" className='nav__list'>Todo</Link>
            <Link to="/completed" className='nav__list'>Completed</Link>

            {/* <Link to="/" className='nav__list'>Home</Link> */}


            </ul>
        </div>
    </div>
  )
}

export default Navbar