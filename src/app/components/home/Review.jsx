import React from "react";

function Review() {
  return (
    <div className="container tab:max-w-7xl w-[90%] mx-auto -mt-40">
      <div className="review max-w-5xl mx-auto rounded-md p-7 bg-white">
        <div className="testimonial">
          <figure className="company-logos flex items-center gap-5">
            <img
              src="/enterprise/logo-netlify-small-monochrome-lightmode.svg"
              alt="Netlify"
              width="108"
              height="43"
              className="company-logo"
            />
            <span className="separator"></span>
            <img
              src="/enterprise/riot-games.svg"
              alt="Riot Games"
              width="148"
              height="47"
              className="company-logo"
            />
          </figure>
        </div>
        <p className="sm:text-2xl text-sm text-black web:mt-10 lg:mt-6 mt-3">
          "We aspire to be the most player-focused gaming company in the world,
          and Netlify absolutely carries the same spirit of aspiring to be the
          most developer-focused technology company in the world…
          <strong>
            Ultimately, there was a sense of deep collaboration, understanding
            and meeting our business requirements, and providing extremely
            knowledgeable and highly professional solutions every single step
            along the way.
          </strong>
          "
        </p>
      </div>
    </div>
  );
}

export default Review;
