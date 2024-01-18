import React from "react";

function HeaderContact() {
  return (
    <div className="flex items-center xl:gap-6 gap-4">
      <ul className="main-nav flex xl:gap-5 gap-3 items-center xl:text-lg text-base xl:font-medium">
        <li className="relative px-4 py-2 rounded hover:scale-95 duration-300 lg:block hidden">
          <a href="/contact">Contact</a>
        </li>
        <li className="relative px-4 py-2 rounded hover:scale-95 duration-300">
          <a href="/login">Login</a>
        </li>
      </ul>
      <a
        href="/signup"
        className=" lg:flex hidden xl:text-xl text-base w-28 h-10 justify-center items-center bg-[#2E51ED] hover:scale-95 duration-300 font-medium text-white rounded-lg"
      >
        Sign Up
      </a>
    </div>
  );
}

export default HeaderContact;
