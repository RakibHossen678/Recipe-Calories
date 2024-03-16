const Details = ({Cart}) => {
  return (
    <div className="mt-16 border-2  ">
      
      <div className="">
        <h1 className="text-center text-lg font-medium border-b-2 pb-2 border-gray-300">
          Want to cook: 01
        </h1>
        {/* <table>
          <tr className=" lg:space-x-20 space-x-16">
            <th></th>
            <th>Name</th>
            <th className="pl-6">Time</th>
            <th>Calories</th>
            <th></th>
          </tr>
          <tr className=" ">
            
            <td>1</td>
            <td className="lg:pr-12 pr-10 pl-3 max-w-4">Alfreds Futterkiste</td>
            <td className="lg:px-14 px-10 max-w-4">Maria Anders</td>
            <td className="lg:px-7 ">Germany</td>
            <td className="px-7">
              <button className="
              bg-[#0BE58A] px-4 font-medium py-1 rounded-full">Prepared</button>
            </td>
          </tr>
        </table> */}
        <div className="px-2">
          <div className="flex  pt-2 pb-4 font-medium text-gray-500">
            <div className="flex lg:space-x-20 space-x-16">
              <p> Name</p>
              <p className="pl-2">Time</p>
              <p className="">Calories</p>
            </div>
          </div>
          <div className="  pb-3">
            
              {
                Cart.map(cart=>(
                  <div key={cart.recipe_id} className="flex lg:space-x-10 space-x-16 pb-4">
                  <p >
                  <span  className="pr-1 max-w-5">{cart.recipe_id}.</span>{cart.recipe_name}
                  </p>
                  <p className="">
                    <h1>{cart.preparing_time}</h1>
                    <p>minutes</p>
                  </p>
                  <p>
                  <h1>{cart.calories}</h1>
                    <p>calories</p>
                  </p>
                  <div>
                    <button className="
              bg-[#0BE58A] px-4 font-medium py-1 rounded-full">Prepared</button>
                  </div>
                 </div>


                ))
              } 
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
