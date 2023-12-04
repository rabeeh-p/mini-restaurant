import React from 'react'

const CardDish = (props) => {
   
  return (
    <div className='card' key={props.allItems.idMeal} onClick={props.cardHandler2}>
                <img src={props.allItems.strMealThumb} alt="" />
                <h5>{props.allItems.strMeal}</h5>
            </div>
  )
}

export default CardDish
