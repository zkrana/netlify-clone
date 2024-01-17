import React from "react";

function FooterSubscription() {
  return (
    <div className=" tab:max-w-md tab:mx-auto lg:mt-5 mt-4 text-left web:mb-24 lg:mb-20 tab:mb-16 mb-9">
      <span className="text-sm block">Stay up to date with Netlify news</span>
      <form className=" flex gap-4 mt-4">
        <div className="form-controller w-full h-10">
          <input
            className="sm:w-[338px] w-full border border-gray-400 h-full text-sm pl-2 rounded"
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </div>
        <button className="sm:text-xl text-base px-5 h-10 rounded-md bg-[#32E6E2] hover:bg-[#59fbf3] transition-colors font-medium text-[#014847]">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default FooterSubscription;
