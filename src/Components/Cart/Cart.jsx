import cal from '../../assets/cal.png'
import time from '../../assets/time.png'
const Cart = () => {
  return (
    <div>
      <div className="card lg:w-96 bg-base-100 border-2">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p className="border-b-2 pb-2">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="border-b-2 pb-5 ">
            <h1 className="font-bold pb-2">Ingredients: 6</h1>
            <ul className="list-disc pl-4">
              <li>500g ground beef</li>

              <li>2 cloves garlic, minced</li>
              <li>1 onion, chopped</li>
            </ul>
          </div>
          <div className='flex  justify-between py-3'>
            <span className='flex items-center space-x-1'><img className='w-6' src={time} alt="" /> <p>30 minutes</p></span>
            <span className='flex items-center space-x-1'><img className='w-6' src={cal} alt="" />600 calories<p></p></span>
          </div>
          <div className="card-actions ">
            <button className="bg-[#0BE58A] px-3 py-2 rounded-lg font-medium">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
