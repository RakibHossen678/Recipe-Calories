import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";

import Details from "./Components/Details/Details";
import Navbar from "./Components/Navbar/Navbar";
import Recipe from "./Components/Recipe/Recipe";
import Recipes from "./Components/Recipes/Recipes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [Cart, setCart] = useState([]);
  const [deleteCarts,setDeleletCarts]=useState([])


  const handleCook = (cart) => {
    const duplicate = Cart.find((c) => c.recipe_id == cart.recipe_id);
    if (!duplicate) {
      setCart([...Cart,cart]);
    } else {
      toast.error("You can't click twice");
     
    }
  };
  // console.log(Cart);
  const handleCurrentlyCooking=(item)=>{
    // console.log(item)
    const deleteItem=Cart.filter(c=>c.recipe_id != item.recipe_id)
    const getdeleteItem=Cart.filter(c=>c.recipe_id === item.recipe_id)
    setCart(deleteItem)
    setDeleletCarts([...deleteCarts,getdeleteItem])
  }
 

  return (
    <div className="lg:w-10/12  mx-auto py-5">
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-3/4">
          <Recipe handleCook={handleCook}></Recipe>
        </div>
        <div className="lg:w-5/12">
          <Details handleCurrentlyCooking={handleCurrentlyCooking}  Cart={Cart} deleteCart={deleteCarts}></Details>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
