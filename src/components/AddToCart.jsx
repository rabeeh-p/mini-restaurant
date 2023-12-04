import React, { useContext,  } from 'react'
import {StateContext} from '../context/AppProvider'

const AddToCart = ({addtocart}) => {

  let cartState=useContext(StateContext)
  console.log("this is cartstate",cartState.cartitem)


  const orderItem = addtocart.map((item)=>{
    return(
      <>
          <div style={{borderBottom:"2px solid black"}}>
              <img className='addtocart-img' src={item.Img} alt="" />
               <h6 className='addtocarttitle'>{item.name}</h6>
          </div>
       </>
    )
  })


  let cartItemNew=cartState.cartitem.map((item)=>{
    console.log("items are",item)
    return(
      <>
      <img className='addtocart-img' src={item.strMealThumb} alt="" />
        <h6 className='addtocarttitle'>{item.strMeal}</h6>
      </>
    )
   })

  return (
    <div className='add-to-cart-wrapper'>
        <div className="add-to-cart-item">
            {/* {orderItem} */}
             {/* {orderItem.length !=0? orderItem: <div className='your-cart'>Your cart</div>}   */}

             <div style={{borderBottom:"2px solid black"}}>
              
               {/* {cartItemNew} */}
               {cartItemNew.length? cartItemNew:<div className='your-cart'>Your cart</div>}
          </div>
        </div>
    </div>
  )
}

export default AddToCart
