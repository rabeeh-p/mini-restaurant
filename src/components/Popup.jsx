import React,{useContext} from 'react'
import {AllCardItemContext} from './Meals'

import {DispatchContext} from '../context/AppProvider'

const Popup = ({ setPopUp,order}) => {
    
    let dispatch= useContext(DispatchContext)

    // useContext
    let CardContext = useContext(AllCardItemContext)

    let popItem=CardContext.filter((item)=>{

      return order == item.strMeal
    }).map((i,id)=>{
      return(<div className="pop-content" key={id}>
        <div className="pop-content-data">
        <h5 className='close'onClick={()=>setPopUp(false)}  >close</h5>

          <img className='pop-img' src={i.strMealThumb} alt="" />
          <h3 className='category'>{i.strCategory}</h3>
        </div>
          <h3 className='pop-title'>{i.strMeal}</h3>
          <p className='p'>
            {i.strInstructions}
          </p>

          <ul className='pop-ingredient'>
            <li>{i.strIngredient1}</li>
            <li>{i.strIngredient2}</li>
            <li>{i.strIngredient3}</li>
            <li>{i.strIngredient4}</li>
          </ul>
          {/* <button className='Btn' onClick={()=>popupHandler(i.strMealThumb,i.strMeal)}>Order now</button> */}
          <button className='Btn' onClick={()=>{
            dispatch({type:'add_to_cart',payload:{title:i.strMeal,img:i.strMealThumb}})
             setPopUp(false);
            }}>Order now</button>
        </div>
      )})

  return (
    <div  className='popup'>
        <div className="pop-content">
            {/* <h3> {order}</h3> */}
            {popItem}
            
        </div>
      
    </div>
  )
}

export default Popup 
