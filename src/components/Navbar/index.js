import React from 'react'
import {Link} from 'react-router-dom'
import Style from './navbar.module.css'

function Navbar() {
  return (
    <div>
      <nav className={[['navbar'], ['navbar-expand-lg'], ['navbar-light'], Style['navbar-style']].join(' ')}>
        <div className="container">
          <Link className={Style['coffee-icon']} to="/"></Link>
          <Link className={Style['navbar-brand']} to="/">Coffee Shop</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav m-lg-auto ">
              <Link className={[Style['nav-item'], ['active']].join(' ')} to="#">Home <span className="sr-only">(current)</span></Link>
              <Link className={Style['nav-item']} to="#">Product</Link>
              <Link className={Style['nav-item']} to="#">Your Cart</Link>
              <Link className={Style['nav-item']} to="#">History</Link>
              </div>
          </div>

          <Link className={Style['nav-signin']} to="/signin">Login</Link>
          <button type="button" class={[['btn'], Style['nav-btn-signup']].join(' ')}>Sign Up</button>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
