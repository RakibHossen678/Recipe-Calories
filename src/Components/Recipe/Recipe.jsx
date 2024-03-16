import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { useState } from "react";


const Recipe = ({handleCook}) => {
    const [carts,setCarts]=useState([])
    useEffect(()=>{
        fetch('./recipe.json')
        .then(res=>res.json())
        .then(data=>setCarts(data))
    },[])
    // console.log(carts)
    return (
        <div className=" pt-14 grid lg:grid-cols-2  gap-y-20 ">
            {
                carts.map(cart=><Cart handleCook={handleCook} key={cart.id} cart={cart}></Cart>)

            }
        </div>
    );
};

export default Recipe;