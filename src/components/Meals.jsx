import React,{useState,useEffect} from 'react'
import Category from './Category'
import Loading from './Loading'
import CardDish from './CardDish'
import Popup from './Popup'
import AddToCart from './AddToCart'


// step1 globel props || single item state globel
export const AllCardItemContext= React.createContext()

const Meals = () => {

    let [card,setCard]=useState([])
    let [addtocart,setAddToCart]=useState([])

    // loading condition
    let [food,setFood]=useState(false)

    // Popup
    let[popUp,setPopUp]=useState(false)

    // order now 
    let [order,setOrderNow]=useState('')


// function body
    let getApi= async()=>{
        setFood(true)
        // const Api="https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
        // const s="https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        let responce= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
        let data= await responce.json()
        setCard(data.meals)
        setFood(false)
    }
    
    // first card
    let CardHandler=(item)=>{
        setOrderNow(item)
        setPopUp(true)
      }


    // useEffect
    useEffect(()=>{
        getApi()
    },[])


    let maxdishes= 10
    

   let detailsCard= card.map((obj,index)=>{
        if(index < maxdishes){
            return (
            <>
            <CardDish  allItems={obj} CardHandler={CardHandler} />
            </>
            )}
    })

   

  return (
    <div className='meals-container'>

            <AllCardItemContext.Provider value={card} >

            <div className='meals-box'>
                <h1 className='special'>Specials</h1>
                <AddToCart addtocart={addtocart}/>

                {/* popup show here */}
                {popUp &&  <Popup   order={order}  setPopUp={setPopUp} /> }

                <div className='meals-body'>
                    {!food ?<> {detailsCard} </>  : <Loading />}
                
                </div>
            </div>
            {/* {!loading ? <Category
                    setLoading={setLoading}
                    loading={loading}
                    // allCategory={category} 
                    // useContext
                    //  menu={card}
                    //  singledish={singleDish}
                    //  setSingle={setSingleDish}
                    />: <h1>loading</h1>  } */}
            <Category/>
            </AllCardItemContext.Provider>
    </div>
  )
}

export default Meals

