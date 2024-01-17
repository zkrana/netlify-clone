import React from "react";
import Image from "next/image";

function Review() {
  return (
    <div className="container tab:max-w-7xl w-[90%] mx-auto lg:-mt-40 sm:-mt-32 -mt-20">
      <div className="review max-w-5xl mx-auto rounded-md p-7 bg-white">
        <div className="testimonial">
          <figure className="company-logos flex items-center gap-5">
            <Image
              src="/enterprise/logo-netlify-small-monochrome-lightmode.svg"
              alt="Netlify"
              width="108"
              height="43"
              className="company-logo"
            />
            <span className="separator"></span>
            <Image
              src="/enterprise/riot-games.svg"
              alt="Riot Games"
              width="148"
              height="47"
              className="company-logo"
            />
          </figure>
        </div>
        <p className="sm:text-2xl text-sm text-black web:mt-10 lg:mt-6 mt-3">
          {
            '"We aspire to be the most player-focused gaming company in the world,'
          }
          {
            " and Netlify absolutely carries the same spirit of aspiring to be the"
          }
          {" most developer-focused technology company in the world…"}
          <strong>
            {
              "Ultimately, there was a sense of deep collaboration, understanding"
            }
            {" and meeting our business requirements, and providing extremely"}
            {
              " knowledgeable and highly professional solutions every single step"
            }
            {" along the way."}
          </strong>
          {'"'}
        </p>
        <div className="author flex items-center gap-3 xl:mt-14 tab:mt-9 mt-5">
          <Image
            className=" rounded-full"
            src="/reviewer/jason-rose.jpg"
            alt="author"
            width={70}
            height={70}
          />
          <div className="author-details flex flex-col gap-2">
            <span className="sm:text-lg text-base font-bold text-black block">
              Jason Rose
            </span>
            <span className="sm:text-sm text-xs sm:max-w-40 text-black block">
              Senior Web Developer, Riot Games
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
