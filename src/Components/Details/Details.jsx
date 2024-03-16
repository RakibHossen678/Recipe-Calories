import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

const Details = ({ Cart, handleCurrentlyCooking, deleteCart }) => {
  return (
    <div className="mt-16 border-2  ">
      <div className="">
        <h1 className="text-center text-lg font-medium border-b-2 pb-2 border-gray-300">
          Want to cook: {Cart.reduce((p, c) => p + c.id, 0)}
        </h1>

        <div className="px-2">
          <div className="flex  pt-2 pb-4 font-medium text-gray-500">
            <div className="flex lg:space-x-20 space-x-16">
              <p> Name</p>
              <p className="pl-2">Time</p>
              <p className="">Calories</p>
            </div>
          </div>
          <div className="  pb-3">
            {Cart.map((cart) => (
              <div
                key={cart.recipe_id}
                className="flex lg:space-x-10 space-x-7 pb-4"
              >
                <p>
                  <span className="pr-1">{cart.recipe_id}.</span>
                  {cart.recipe_name}
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
                  <button
                    onClick={() => handleCurrentlyCooking(cart)}
                    className="
              bg-[#0BE58A] px-4 font-medium py-1 rounded-full"
                  >
                    Prepared
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <h1 className="text-center text-lg font-medium border-b-2 pb-2 border-gray-300">
            Currently cooking:{deleteCart.length}
          </h1>

          <div className="px-2">
            <div className="flex  pt-2 pb-4 font-medium text-gray-500">
              <div className="flex lg:space-x-24 space-x-16">
                <p> Name</p>
                <p className="pl-2">Time</p>
                <p className="">Calories</p>
              </div>
            </div>
            {deleteCart.map((delCart, idx) => (
              <CurrentlyCooking key={idx} delCart={delCart}></CurrentlyCooking>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
