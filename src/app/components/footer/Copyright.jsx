import React from "react";

function Copyright() {
  return (
    <div className="pt-5 border-t border-gray-200 flex flex-wrap gap-4 sm:gap-0 justify-between items-center web:pb-32 xl:pb-24 lg:pb-20 sm:pb-14 pb-9">
      <ul className=" flex gap-5 flex-wrap items-center text-[#545A61] text-sm transition-all">
        <li>
          <a href="" className="hover:underline">
            Trust Center
          </a>
        </li>
        <li>
          <a href="" className="hover:underline">
            Privacy
          </a>
        </li>
        <li>
          <a href="" className="hover:underline">
            Security
          </a>
        </li>
        <li>
          <a href="" className="hover:underline">
            GDPR/CCPA
          </a>
        </li>
        <li>
          <a href="" className="hover:underline">
            Abuse
          </a>
        </li>
        <li>
          <a href="" className="hover:underline">
            Cookie Settings
          </a>
        </li>
      </ul>

      <span className="block text-[#545A61] text-sm">© 2024 Netlify</span>
    </div>
  );
}

export default Copyright;
