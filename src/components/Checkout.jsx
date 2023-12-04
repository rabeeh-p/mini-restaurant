import React, { useContext } from 'react'
import {StateContext} from '../context/AppProvider'
import Card2 from './Card2'
import Message from './Message'

const Checkout = () => {
    let cartState= useContext(StateContext)


    console.log('checkout state',cartState)

    let cartItems= cartState.cartitem.map((item)=>{
      console.log('cart item check',item)
      return (
         <Card2 allItems={item}/>
      )
    })

  return (<div className='checkout'>
    <h1 style={{textAlign:'center',padding:'0',marginTop:'30px',fontFamily:'cursive',marginBottom:'0'}}>Cart Items</h1>
    <div className="checkout-body">
      {cartItems.length == 0? <Message/> :cartItems}
    </div>
  </div>

  )
}

export default Checkout
