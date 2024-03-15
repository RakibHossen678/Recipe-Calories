import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'

function App() {
  
  return (
    <div className='lg:w-10/12 w-11/12 mx-auto py-5'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
    </div>
  )
}

export default App
