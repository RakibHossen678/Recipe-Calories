

const CurrentlyCooking = ({ delCart }) => {
    
  
  return (
    <div>
        {
            delCart.map(item=>(
                <div
            key={item.recipe_id}
            className="flex lg:space-x-10 space-x-7 pb-4"
          >
            <p>
              <span className="pr-1 ">{item.recipe_id}.</span>
              {item.recipe_name.slice(0,14)}
            </p>
            <p className="">
              <h1>{item.preparing_time}</h1>
              <p>minutes</p>
            </p>
            <p className="pl-9">
              <h1>{item.calories}</h1>
              <p>calories</p>
            </p>
          </div>
    
            ))
        }

      
    </div>
  );
};

export default CurrentlyCooking;
