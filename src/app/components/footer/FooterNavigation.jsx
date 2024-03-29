"use client";
import React, { useState } from "react";

const navigationData = [
  {
    header: "Netlify",
    linksText: [
      "Customers",
      "Composable Web Platform",
      "Security",
      "Agency Partner Program",
      "Technology Partner Program",
    ],
  },
  {
    header: "Products",
    linksText: [
      "Composable Web Platform",
      "Netlify Connect",
      "Netlify Core",
      "Netlify Create",
      "Netlify SDK",
      "Pricing",
      "Changelog",
      "Add-ons",
    ],
  },
  {
    header: "Explore",
    linksText: [
      "Docs",
      "Integrations",
      "Netlify Core",
      "Netlify Create",
      "Netlify SDK",
      "Pricing",
      "Changelog",
    ],
  },
  {
    header: "Company",
    linksText: [
      "Blog",
      "About",
      "Career",
      "Netlify Create",
      "Netlify SDK",
      "Pricing",
      "Changelog",
      "Technologies",
    ],
  },
  {
    header: "Contact Us",
    linksText: ["Sales", "Support", "Status", "Forums", "Hire an agency"],
  },
];

function NavigationSection({ header, linksText }) {
  const [showLink, setShowLink] = useState(false);

  const showFooterNav = (e) => {
    e.preventDefault();
    setShowLink((prevShowLink) => !prevShowLink);
  };

  return (
    <ul className="xl:w-[calc(20%-64px)] lg:w-[calc(20%-45px)] tab:w-[calc(25%-29.3333px)] sm:w-[calc(33.3333%-29.3333px)] w-full text-[#545A61] text-sm">
      <li className="f-nav-header text-black text-lg font-semibold mb-3">
        <span className="sm:block hidden"> {header} </span>
        <div
          className="sm:hidden flex justify-between items-center"
          onClick={showFooterNav}
        >
          {header}
          <div className=" transform rotate-90">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
            </svg>
          </div>
        </div>
      </li>
      <div className="sm:block hidden">
        {linksText.map((link, index) => (
          <li key={index} className="pb-2">
            <a href="" className="hover:underline">
              {link}
            </a>
          </li>
        ))}
      </div>
      <div className="sm:hidden block transition-all">
        {showLink && (
          <>
            {linksText.map((link, index) => (
              <li key={index} className="pb-2">
                <a href="" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </>
        )}
      </div>
    </ul>
  );
}

function FooterNavigation() {
  return (
    <div className="xl:mt-9 mt-4 tab:max-w-5xl w-full mx-auto flex flex-wrap xl:gap-20 lg:gap-14 sm:gap-11 gap-5">
      {navigationData.map((section, index) => (
        <NavigationSection key={index} {...section} />
      ))}
    </div>
  );
}

export default FooterNavigation;
