import React from "react";

function CallToAction() {
  return (
    <div className="text-center web:mt-20 xl:mt-16 tab:mt-12 mt-9 web:mb-28 lg:mb-20 mb-11">
      <h2 className="font-bold xl:text-6xl tab:txet-4xl text-3xl text-black">
        Ready to try Netlify?
      </h2>
      <button
        class="block mx-auto xl:text-xl text-base w-40 h-10 bg-[#2E51ED] 
      hover:scale-95 duration-300 font-semibold text-white rounded-md
      xl:mt-14 lg:mt-10 sm:mt-8 mt-5 shadow-md"
      >
        Request demo
      </button>
    </div>
  );
}

export default CallToAction;
