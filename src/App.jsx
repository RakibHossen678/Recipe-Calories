import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'

import Details from './Components/Details/Details'
import Navbar from './Components/Navbar/Navbar'
import Recipe from './Components/Recipe/Recipe'
import Recipes from './Components/Recipes/Recipes'

function App() {
  
  const [Cart,setCart]=useState([])
  const handleCook=(cart)=>{
    setCart([...Cart,cart])
  }
  console.log(Cart)

  return (
    <div className='lg:w-10/12 w-11/12 mx-auto py-5'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='lg:w-3/4'>
          <Recipe handleCook={handleCook}></Recipe>
        </div>
        <div className='lg:w-5/12'>
          <Details></Details>
        </div>
      </div>
    </div>
  )
}

export default App
