import React,{useState,useEffect, useContext} from 'react'
import Loading from './Loading'

import {StateContext} from '../context/AppProvider'

const SeaFood = () => {

  let sampleState=useContext(StateContext)
  console.log('seafoood context issss',sampleState)

  let [food,setFood]=useState([])
  let [loading,setLoading]=useState(false)


  let getCategory= async()=>{
    setLoading(true)
    const Api="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    let responce= await fetch(Api)
    let data= await responce.json()
    // console.log("data",data.meals)
    setFood(data.meals)

    setLoading(false)


}

// console.log("sea food is ",food)

  useEffect(()=>{
    getCategory()

  },[])



  let SeaFood= food.map((item)=>{
    return(<div className='card' key={item.idMeal}>
      <img src={item.strMealThumb} alt="" />
      <h5>{item.strMeal}</h5>
      </div>

    
    )
  })
  return (
    <div className='sea-container'>
      <div className="sea-title">
        <h1 >Sea Food </h1>
      </div>
      <div className="sea-body">
      <ul className='categories'>
        {!loading ?  <>{SeaFood}</> :  <Loading/> }
      

      </ul>

      </div>
    </div>
  )
}

export default SeaFood
