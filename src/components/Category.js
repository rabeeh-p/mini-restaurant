import React,{useContext, useState,useEffect} from 'react'
import NotFound from './NotFound'
import Pagination from './Pagination'
import Card2 from './Card2'

import {AllCardItemContext} from './Meals'

const Category = (props) => {


    let [finalCategory,setFinalCategory]=useState([]) 
    let [activeCls,setActive]=useState("Beef")


    // child export
    let[sample,setSample]=useState(1)
    let[activeCls1,setActiveCls]=useState("")



    // card showing numbers state
    let [currentPage, setCurrentPage]=useState(1)
    let[itemsPerPage,setItemsPerPage]=useState(4)




    let [category,setCategory]=useState([])
    let [singleDish,setSingleDish]=useState([])




    let getCategory= async()=>{
        const Api="https://www.themealdb.com/api/json/v1/1/categories.php"
        let responce= await fetch(Api)
        let data= await responce.json()
        setCategory(data.categories)
    }

    let getSingleDish= async()=>{
        const Api="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
        let responce= await fetch(Api)
        let data= await responce.json()
        console.log("data is new",data.meals)
        setSingleDish(data.meals)
    }


    useEffect(()=>{
        getCategory()
        getSingleDish()
    },[])

  

    let indexOfLastDish = currentPage * itemsPerPage
    // 1 * 4 = 4
    // 2 * 4 = 8
    // 3 * 4 = 12

    let indexOfFirstDish = indexOfLastDish - itemsPerPage
    // 4 - 4 = 0
    // 8 - 4 = 4
    // 12 - 4 = 8


    let sliceItems= finalCategory.slice(indexOfFirstDish,indexOfLastDish)

    // setContext
    let menuCard= useContext(AllCardItemContext)


//    select category item
    let singleCategory = (obj)=>{
        setActive(obj)
        setCurrentPage(1)

        // child sett
        setSample(1)
        setActiveCls("")

        // props.menu
        setSingleDish([])

        let finalresult = menuCard.filter((value)=>{
            return value.strCategory === obj
        }).map((values)=>{
            return(
                // reusable component
                <Card2 allItems={values}/>
            )
        })
        setFinalCategory(finalresult)
        // props.setLoading(false)
    }

    // showing categories
    let categories= category.map((item)=>{
        return(
            <li className={` li ${item.strCategory === activeCls ? 'active':null} ` } onClick={()=>{
                singleCategory(item.strCategory)
            }}>{item.strCategory}</li>
        )
    })

    


    // singel dish showing
    let SingleDish= singleDish.map((item)=>{
        return(

            // reusable componentl
                // <CardDish allItems={item}/>
                <Card2 allItems={item} />
            )
    })

    // ole.log("final result",finalCategory.length)

  return (
    <div className='meals-container'>
        <div className="meals-box">
            <h1>Menus</h1>
            <div className="meals-body">
                <ul className='categories'>
                    {categories}
                </ul>

            </div>
            <div className="categor-card">
                {SingleDish.slice(0,4)}

                {/* first attempt */}
                {/* { finalCategory == 0 ?  <NotFound />  : <>{sliceItems}</>} */}

                {/* Second */}
                {/* { load !== false ||finalCategory !== 0 ?  <>{sliceItems}</>  : <NotFound />} */}

                {/* final  */}
                { SingleDish != 0 ||finalCategory != 0 ?  <>{sliceItems}</>  : <NotFound />}

            </div>
            <Pagination allItems={finalCategory} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage}
                setSample={setSample} sample={sample}   activeCls={activeCls1} setActiveCls={setActiveCls}/>


        </div>
    </div>
  )
}

export default Category
