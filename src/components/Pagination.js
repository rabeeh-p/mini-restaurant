import React, { useState } from 'react'

const Pagination = (props) => {


    // console.log("items page number",Math.ceil(props.allItems.length/props.itemsPerPage))
    let number=[]
    // Math.ceil( props.allItems.length/props.itemsPerPage)
    for(let i=1;i<= Math.ceil(props.allItems.length/props.itemsPerPage) ;i++){
        // console.log("number",i)
        number.push(i)
    }

    // console.log("number",number)


    let ChangeFunction = (e) => {
        // console.log("Clicked",e.target.id)
        props.setCurrentPage(e.target.id)
        props.setActiveCls(e.target.id)
        // console.log("id is ",activeCls)
        props.setSample('')


    }
    
    

    let result= number.map((item)=>{
        // console.log("itemssss",item)
        return(
            <li  key={item} id={item} onClick={ChangeFunction}  className={`li pagination-li ${ item == props.sample ||item == props.activeCls ?  'active' :null}  `}   >{item}</li>

        )

    })

  return (
    <div className=' pagination'>
        <div className="pagination-body">
            <ul className='pagination-ul'>

                {result}
                
                {/* <li className='li pagination-li'>2</li>
                <li className='li pagination-li'>3</li> */}
                
                
            </ul>
        </div>
    </div>
  )
}

export default Pagination
