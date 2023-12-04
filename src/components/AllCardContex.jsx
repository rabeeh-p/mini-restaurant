import React,{useState,useEffect} from 'react'
import Loading from './Loading'

export const CardMenu=React.createContext()

const AllCardContext = (props) => {
    let [card,setCard]=useState([])
    let [food,setFood]=useState(false)


  return (
    <div>
        <CardMenu.Provider value={card}>

            {/* <h1>hello</h1> */}
            {!food ? props.child  : <Loading />}


        {/* {popUp &&  props.child}
        {!food ? props.child : <Loading />} */}

        </CardMenu.Provider>
      
    </div>
  )
}

export default AllCardContext
