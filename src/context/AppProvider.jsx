import React, { createContext, useReducer } from 'react'


export let DispatchContext=createContext()
export let StateContext=createContext()


const AppProvider = (props) => {

    const initialstate= {
        cartitem:[],
    }

    let reducer=(state,action)=>{
        console.log('actions',action)
        switch(action.type){
            case "add_to_cart":
                // return{...state,cartitem:[action.payload.title,action.payload.img]}
                return{...state,cartitem:[...state.cartitem ,{ strMeal: action.payload.title, strMealThumb: action.payload.img }]}
        default:{

            return state;
        }
        }
    }
    let [state,dispatch]=useReducer(reducer,initialstate)
    console.log('state issss ',state)


  return (
    <div>
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {props.children}
                {console.log("props children",props.children)}

            </StateContext.Provider>
        </DispatchContext.Provider>
      
    </div>
  )
}

export default AppProvider
