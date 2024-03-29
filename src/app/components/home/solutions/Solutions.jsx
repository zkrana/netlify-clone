import React from "react";
import SolutionsCards from "./SolutionsCards";
import Enterprise from "./Enterprise";

const InlineSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="87"
    height="96"
    viewBox="0 0 87 96"
    fill="none"
    ariahidden="true"
  >
    <path
      stroke="url(#a)"
      stroke-width=".649"
      d="m70.918 57.691-23.493-15.6-.873-.577-.043-.029-.05-.014-.966-.265-.042-.012h-4.754l-.043.011-.965.266-.05.014-.043.029-.873.578-23.493 15.6-.871.579-.059.039-.037.06-.4.64-.049.08V62.373l.05.079.4.64.037.06.058.04.87.579 23.494 15.6.873.578.043.028.05.014.965.265.043.012h4.754l.042-.012.966-.265.05-.014.043-.028.872-.579 23.494-15.6.87-.579.06-.039.036-.06.4-.64.05-.079v-3.285l-.05-.079-.4-.64-.037-.06-.058-.039-.87-.58Z"
    ></path>
    <path
      stroke="url(#b)"
      stroke-width=".649"
      d="m70.918 44.729-23.493-15.6-.873-.578-.043-.029-.05-.014-.966-.265-.042-.012h-4.754l-.043.012-.965.265-.05.014-.043.029-.873.578-23.493 15.6-.871.58-.059.038-.037.06-.4.64-.049.08V49.41l.05.079.4.64.037.06.058.04.87.579 23.494 15.6.873.578.043.028.05.014.965.266.043.011h4.754l.042-.011.966-.266.05-.014.043-.028.872-.578 23.494-15.6.87-.58.06-.039.036-.06.4-.64.05-.079v-3.285l-.05-.079-.4-.64-.037-.06-.058-.039-.87-.58Z"
    ></path>
    <path
      stroke="url(#c)"
      stroke-width=".649"
      d="m70.918 32.691-23.493-15.6-.873-.577-.043-.029-.05-.014-.966-.265-.042-.012h-4.754l-.043.012-.965.265-.05.014-.043.029-.873.578-23.493 15.6-.871.579-.059.039-.037.06-.4.64-.049.08V37.373l.05.079.4.64.037.06.058.04.87.579 23.494 15.6.873.578.043.028.05.014.965.266.043.011h4.754l.042-.011.966-.266.05-.014.043-.029.872-.578 23.494-15.6.87-.579.06-.039.036-.06.4-.64.05-.079v-3.285l-.05-.079-.4-.64-.037-.06-.058-.039-.87-.58Z"
    ></path>
    <path
      stroke="url(#d)"
      stroke-width="1.299"
      d="M36.336 3.559a12.338 12.338 0 0 1 13.94 0l30.068 20.586c3.36 2.3 5.368 6.11 5.368 10.18v27.35c0 4.07-2.009 7.88-5.368 10.18L50.276 92.441a12.338 12.338 0 0 1-13.94 0L6.267 71.855A12.338 12.338 0 0 1 .9 61.675v-27.35c0-4.07 2.009-7.88 5.368-10.18L36.336 3.559Z"
    ></path>
    <defs>
      <linearGradient
        id="a"
        x1="7.056"
        x2="87.563"
        y1="76.02"
        y2="50.284"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#112CAF"></stop>
        <stop offset="1" stop-color="#5CEBDF"></stop>
      </linearGradient>
      <linearGradient
        id="b"
        x1="7.056"
        x2="87.563"
        y1="63.057"
        y2="37.321"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#112CAF"></stop>
        <stop offset="1" stop-color="#5CEBDF"></stop>
      </linearGradient>
      <linearGradient
        id="c"
        x1="7.056"
        x2="87.563"
        y1="51.02"
        y2="25.284"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#112CAF"></stop>
        <stop offset="1" stop-color="#5CEBDF"></stop>
      </linearGradient>
      <linearGradient
        id="d"
        x1="-10.29"
        x2="117.479"
        y1="87.787"
        y2="64.433"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#112CAF"></stop>
        <stop offset="1" stop-color="#5CEBDF"></stop>
      </linearGradient>
    </defs>
  </svg>
);

function Solutions() {
  return (
    <div className="container w-[90%] tab:max-w-7xl mx-auto text-center lg:mb-16 mb-12">
      <h2 className="title flex justify-center items-center sm:gap-6 gap-3">
        <span className="gradient-text">3 solutions</span>
        <InlineSVG />
        <span className="gradient-text">1 platform</span>
      </h2>
      <SolutionsCards />
      <Enterprise title="Enterprises run on Netlify" />
    </div>
  );
}

export default Solutions;
