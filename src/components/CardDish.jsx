import React from 'react'

const CardDish = (props) => {
    // console.log("props final in ",props)
    
  return (
    <div className='card' key={props.allItems.idMeal}  onClick={()=> props.CardHandler(props.allItems.strMeal)}>
                <img src={props.allItems.strMealThumb} alt="" />
                <h5>{props.allItems.strMeal}</h5>
            </div>
  )
}

export default CardDish
