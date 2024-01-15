import React from "react";

function HeaderContact() {
  return (
    <div className="flex items-center gap-6">
      <ul className="flex gap-5 items-center text-lg font-medium">
        <li className="hover:scale-95 duration-300">
          <a href="/Contact">Contact</a>
        </li>
        <li className="hover:scale-95 duration-300">
          <a href="/Login">Login</a>
        </li>
      </ul>
      <button className="text-xl w-28 h-10 bg-[#2E51ED] hover:scale-95 duration-300 font-medium text-white  rounded-lg">
        Sign Up
      </button>
    </div>
  );
}

export default HeaderContact;
