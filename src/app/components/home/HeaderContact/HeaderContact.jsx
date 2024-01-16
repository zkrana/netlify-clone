import React from "react";

function HeaderContact() {
  return (
    <div className="flex items-center xl:gap-6 gap-4">
      <ul className="flex xl:gap-5 gap-3 items-center xl:text-lg text-base xl:font-medium">
        <li className="hover:scale-95 duration-300 lg:block hidden">
          <a href="/Contact">Contact</a>
        </li>
        <li className="hover:scale-95 duration-300">
          <a href="/Login">Login</a>
        </li>
      </ul>
      <button className=" lg:block hidden xl:text-xl text-base w-28 h-10 bg-[#2E51ED] hover:scale-95 duration-300 font-medium text-white rounded-lg">
        Sign Up
      </button>
    </div>
  );
}

export default HeaderContact;
