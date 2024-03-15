import search from '../../assets/search.png'
import profile from '../../assets/profile.png'
const Navbar = () => {
  return (
    <div className="flex  justify-between items-center">
      <div>
        <h1 className='font-medium text-xl lg:text-3xl'>Recipe Calories</h1>
      </div>
      <div>
        <ul className='lg:flex hidden  lg:space-x-6 space-x-2 items-center'>
          <li >Home</li>
          <li >Recipes</li>
          <li >About</li>
          <li >Search</li>
        </ul>
      </div>
      <div className='flex items-center lg:space-x-4 space-x-2'>
        <div className='bg-gray-200 px-2 py-2 rounded-3xl  text-black flex items-center space-x-2'>
          <img className='w-6' src={search} alt="" />
          <input className='bg-transparent  outline-none border-none ' type="text" placeholder="Search" />
        </div>
        <div>
          <div className="w-12 rounded-full bg-green-200 ">
            <img className="rounded-full"
              alt="Tailwind CSS examples"
              src={profile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
