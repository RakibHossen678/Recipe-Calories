const Details = () => {
  return (
    <div className="mt-10 border-2 ">
      <div className="">
        <h1 className="text-center text-lg font-medium border-b-2 pb-2 border-gray-300">
          Want to cook: 01
        </h1>
        <div className="px-2">
          <div className="flex  pt-2 pb-4 font-medium text-gray-500">
            <div className="flex lg:space-x-20 space-x-16">
              <p> Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div>
          </div>
          <div className="flex justify-between pb-3">
            <div className="flex lg:space-x-20 space-x-16">
              <p>
                <span className="pr-2">1</span>Name
              </p>
              <p>Time</p>
              <p>Calories</p>
            </div>
            <div>
              <button className="">Prepare</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
