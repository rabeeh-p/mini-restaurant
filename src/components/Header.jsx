import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <h3 className='title'>Mini restuarent</h3>
        

        <ul className='ul'>
            <Link to="/"  className='li'>Menu</Link>
            <Link to="seafood/"  className='li' >Sea Food</Link>
            <Link to="checkout/"  className='li' >Checkout</Link>
        </ul>
      
    </div>
  )
}

export default Header
