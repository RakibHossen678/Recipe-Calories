const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[500px] my-16 bg-cover bg-center rounded-3xl overflow-hidden">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Discover a world of tantalizing tastes and mouthwatering recipes
              that will ignite your passion for cooking. Whether you're a
              seasoned chef or a kitchen novice, our curated collection of
              recipes will take your taste buds on a journey like never before.
            </p>
            <div className="space-x-3">
            <button className="bg-[#0BE58A] px-6 rounded-full text-black font-medium  py-3">Explore Now</button>
            <button className="border-2 px-5 rounded-full font-medium  py-3 text-white hover:bg-black hover:text-white hover:border-black">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
