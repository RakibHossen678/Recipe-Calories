import PropTypes from 'prop-types';
const CurrentlyCooking = ({ delCart }) => {
  // console.log(delCart)
 
  
  return (
    <div>
      <div key={delCart.recipe_id}>
          <div className="flex lg:space-x-10 space-x-7 pb-4">
            <p>
              <span className="pr-1 ">{delCart.recipe_id}.</span>
              {delCart.recipe_name.slice(0, 14)}
            </p>
            <p className="">
              <h1>{delCart.preparing_time}</h1>
              <p>minutes</p>
            </p>
            <p className="pl-9">
              <h1>{delCart.calories}</h1>
              <p>calories</p>
            </p>
          </div>
         
        </div>
    </div>
  );
};
CurrentlyCooking.propTypes ={
  delCart:PropTypes.object.isRequired
}

export default CurrentlyCooking;
