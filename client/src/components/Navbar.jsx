import React from 'react'
import { Link } from 'react-router-dom'
import SearchComponent from './SearchComponent'

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="container">
        <Link to="/">
            <h2>Workout Buddy!</h2>
          </Link>
          <SearchComponent />
          <ul className="navLinks">
              <li><Link to="/">Home</Link></li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar