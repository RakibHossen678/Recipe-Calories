import './App.css'
import Banner from './Components/Banner/Banner'

import Details from './Components/Details/Details'
import Navbar from './Components/Navbar/Navbar'
import Recipe from './Components/Recipe/Recipe'
import Recipes from './Components/Recipes/Recipes'

function App() {
  
  return (
    <div className='lg:w-10/12 w-11/12 mx-auto py-5'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='lg:w-3/4'>
          <Recipe></Recipe>
        </div>
        <div className='lg:w-5/12'>
          <Details></Details>
        </div>
      </div>
    </div>
  )
}

export default App
