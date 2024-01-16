"use client";
import React, { useState, useEffect } from "react";
import "./header.css";
import Image from "next/image";
import Search from "../home/Search/Search";
import HeaderContact from "../home/HeaderContact/HeaderContact";

function Header() {
  const [transparentBg, setTransparentBg] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100; // You can adjust this threshold based on your design

      // Check if the scroll position is below the threshold
      if (scrollPosition > threshold) {
        setTransparentBg(false);
      } else {
        setTransparentBg(true);
      }
    };

    // Attach the event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const headerClasses = `navigation fixed top-0 left-0 right-0 z-10 h-[72px] ${
    transparentBg ? "transparent" : "opaque"
  }`;

  return (
    <div className={headerClasses}>
      <div className="container flex justify-between items-center max-w-7xl mx-auto web:px-0 px-4">
        <div className="nav-menu flex xl:gap-6 gap-4 items-center sm:px-4 py-3">
          <a href="/">
            <Image src="/logo.svg" width={122} height={50} alt="Logo" />
          </a>
          <ul className=" xl:gap-5 gap-3 items-center xl:text-lg text-base xl:font-medium hidden lg:flex">
            <li className="hover:scale-95 duration-300">
              <a href="/Platform">Platform</a>
            </li>
            <li className="hover:scale-95 duration-300">
              <a href="/Solutions">Solutions</a>
            </li>
            <li className="hover:scale-95 duration-300">
              <a href="/Integrations">Integrations</a>
            </li>
            <li className="hover:scale-95 duration-300">
              <a href="/StartBuilding">Start Building</a>
            </li>
            <li className="hover:scale-95 duration-300">
              <a href="/Docs">Docs</a>
            </li>
            <li className="hover:scale-95 duration-300">
              <a href="/Pricing">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="actions flex xl:gap-7 gap-4 items-center">
          <Search />
          <HeaderContact />
        </div>
      </div>
    </div>
  );
}

export default Header;
