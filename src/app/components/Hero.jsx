import React from "react";

function Hero() {
  return (
    <div className="hero bg-blue-800 min-h-[730px] flex justify-center items-center relative overflow-hidden">
      <div className="bg-image"></div>
      <article className="relative h-full z-10">
        <h1 className="flex flex-col justify-center items-center font-bold text-7xl text-white">
          <span>Connect everything. </span>
          <span>Build anything</span>
        </h1>
        <p className="text-center text-lg text-white max-w-3xl mx-auto mt-10">
          Netlify is the modern development platform for Enterprises to realize
          the speed, agility and performance of a scalable, composable web
          architecture.
        </p>

        <div className="hero-actions flex justify-center gap-7 items-center mt-11">
          <button className="text-xl px-5 h-10 rounded-md bg-[#32E6E2] hover:bg-[#59fbf3] transition-colors font-medium text-[#014847]">
            Explore pltaforn
          </button>

          <button className="text-xl px-5 h-10 rounded-md border-2 border-gray-200 font-medium text-white">
            Request demo
          </button>
        </div>
      </article>
    </div>
  );
}

export default Hero;
