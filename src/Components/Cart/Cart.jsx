import cal from '../../assets/cal.png'
import time from '../../assets/time.png'
import PropTypes from 'prop-types';

const Cart = ({cart,handleCook}) => {
  const{recipe_name,short_description,ingredients,recipe_image,preparing_time,calories
  }=cart
  return (
    <div>
      
      <div className="card lg:w-96 bg-base-100 border-2">
        <figure>
          <img className='h-64 w-full px-2 pt-2 rounded-2xl'
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-medium text-lg">{recipe_name}</h2>
          <p className="border-b-2 pb-2">{short_description}</p>
          <div className="border-b-2 pb-5 ">
            <h1 className="font-bold pb-2">Ingredients:{ingredients.length}</h1>
            <ul className="list-disc pl-4">
              {
                ingredients.map((ingredient,id)=>
                  <li key={id}>{ingredient}</li>)
              }
            </ul>
          </div>
          <div className='flex  justify-between py-3'>
            <span className='flex items-center space-x-1'><img className='w-6' src={time} alt="" /> <p>{preparing_time} minutes</p></span>
            <span className='flex items-center space-x-1'><img className='w-6' src={cal} alt="" />{calories} calories<p></p></span>
          </div>
          <div className="card-actions ">
            <button onClick={()=>handleCook(cart)} className="bg-[#0BE58A] px-3 py-2 rounded-lg font-medium">Want to Cook</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};
Cart.propTypes ={
  cart:PropTypes.array.isRequired,
  handleCook:PropTypes.func.isRequired
}

export default Cart;
