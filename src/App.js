import React from 'react'
import Meals from './components/Meals'
import Header from './components/Header'
import SeaFood from './components/SeaFood'
import Hero from './components/Hero'

import './components/StyleC.css'
import AppProvider from '../src/context/AppProvider'


// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Checkout from './components/Checkout'


const App =()=>{
  
  return (
    <Router>
      <Header/>
      <Hero/>

      <AppProvider>
      <Routes>
        <Route exact path='/' Component={Meals}></Route>
        <Route path='/seafood/' Component={SeaFood}></Route>
        <Route path='/checkout/' Component={Checkout}></Route>
      </Routes>
      </AppProvider>
      


    </Router>
  )
}

export default App