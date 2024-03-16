const Details = () => {
  return (
    <div className="mt-16 border-2  ">
      <div className="">
        <h1 className="text-center text-lg font-medium border-b-2 pb-2 border-gray-300">
          Want to cook: 01
        </h1>
        <table>
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
        </table>
        {/* <div className="px-2">
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
        </div> */}
      </div>
    </div>
  );
};

export default Details;
