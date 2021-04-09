import React from 'react'
import {Link} from 'react-router-dom'
import Style from './navbar.module.css'
import {navchat, navsearch, navuser} from '../../assets/images'
// import swal from 'sweetalert2'
// import {Redirect} from 'react-router-dom'
// const jwt = require('jsonwebtoken')

function Navbar() {
  const handleLogut = () =>{
    // const doLogout = localStorage.removeItem("token");
    //  if(doLogout){
    //    <Redirect to="/" />
    //   }
    //  swal("You Have Been Logged Out!")
   }

  //  =======BELUM LOGIN========
  // const isAuthenticated = localStorage.getItem('token')
  // let decode = jwt.decode(isAuthenticated)
  // if(!isAuthenticated){
    // return (
    //   <div>
    //     <nav className={[['navbar'], ['navbar-expand-lg'], ['navbar-light'], Style['navbar-style']].join(' ')}>
    //       <div className="container">
    //         <Link className={Style['coffee-icon']} to="/"></Link>
    //         <Link className={Style['navbar-brand']} to="/">Coffee Shop</Link>
    //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //             <div className="navbar-nav m-lg-auto ">
    //             <Link className={[Style['nav-item'], ['active']].join(' ')} to="#">Home <span className="sr-only">(current)</span></Link>
    //             <Link className={Style['nav-item']} to="#">Product</Link>
    //             <Link className={Style['nav-item']} to="#">Your Cart</Link>
    //             <Link className={Style['nav-item']} to="#">History</Link>
    //             </div>
    //         </div>

    //         <Link className={Style['nav-signin']} to="/signin">Login</Link>
    //         <button type="button" className={[['btn'], Style['nav-btn-signup']].join(' ')}>Sign Up</button>
  
    //       </div>
    //     </nav>
    //   </div>
    // )
  // }
  // ========= TUTUP BELUM LOGIN ========

  // ========= JIKA LOGIN =========
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
    
          <div className="logined">
            <div className="row">
              <div className="co">
                <img className={Style['navsearch']} src={navsearch} alt=""/>
              </div>
              <div className="col">
                <Link to="/chat">
                  <img className={Style['navchat']} src={navchat} alt=""/>
                </Link>
              </div>
              <div className="col">
                  <Link className="" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className={Style['profile-img']} src={navuser} alt=""/>
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <Link className="dropdown-item" to="/profile">Profile</Link>
                      <Link onClick={handleLogut} className="dropdown-item" to="/">Logout</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default Navbar
