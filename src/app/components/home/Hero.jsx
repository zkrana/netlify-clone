import React from "react";

function Hero() {
  return (
    <div className="hero bg-blue-800 web:min-h-[730px] xl:min-h-[630px] min-h-[520px] flex justify-center items-start relative overflow-hidden mt-[72px]">
      <div className="bg-image"></div>
      <article className="relative h-full z-10 pt-20 px-4 sm:px-0">
        <h1 className="flex flex-col justify-center items-center font-bold xl:text-7xl tab:txet-4xl text-3xl text-white">
          <span>Connect everything. </span>
          <span>Build anything</span>
        </h1>
        <p className="text-center sm:text-lg text-sm text-white max-w-3xl mx-auto mt-10">
          Netlify is the modern development platform for Enterprises to realize
          the speed, agility and performance of a scalable, composable web
          architecture.
        </p>

        <div className="hero-actions flex flex-wrap justify-center sm:gap-7 gap-4 items-center web:mt-11 lg:mt-8 mt-4">
          <button className="sm:text-xl text-base px-5 h-10 rounded-md bg-[#32E6E2] hover:bg-[#59fbf3] transition-colors font-medium text-[#014847]">
            Explore pltaforn
          </button>

          <button className=" sm:text-xl text-base px-5 h-10 rounded-md border-2 border-gray-200 font-medium text-white">
            Request demo
          </button>
        </div>
      </article>
    </div>
  );
}

export default Hero;
