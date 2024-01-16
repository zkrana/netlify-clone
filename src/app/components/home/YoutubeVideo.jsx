"use client";
import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function YoutubeVideo() {
  return (
    <div className="container w-[90%] tab:max-w-7xl mx-auto web:-mt-64 xl:-mt-52 lg:-mt-48 tab:-mt-32 -mt-20 web:mb-24 xl:mb-20 lg:mb-14 mb-10">
      <div className="yt-wrapper">
        <LiteYouTubeEmbed
          id="tJ95Q2ETMA4"
          playlist={false}
          title="Play Video: Keynote (Google I/O '18)"
          aspectRatio={null} // Disable aspect ratio
          style={{ height: "400px !important" }} // Set the desired height
          wrapperClass="yt-lite"
          thumbnail="/video-poster.png"
        />
      </div>
      <article className="mx-auto text-center web:mt-14 lg:mt-9 mt-4">
        <h1 className="font-bold xl:text-5xl tab:txet-4xl text-3xl text-black">
          Netlify Composable Web Platform
        </h1>
        <p className="text-center sm:text-lg text-sm text-black max-w-3xl mx-auto web:mt-10 lg:mt-6 mt-3">
          Streamlined orchestration, simplified and unified workflows, and
          real-time updates across infrastructure, workflows, websites and teams
          — all supported by Enterprise-grade security, services, and a
          world-class partner ecosystem.
        </p>

        <button className="text-xl inline-block mx-auto px-5 h-10 rounded-md bg-[#2036A1] hover:bg-[#303e85] transition-colors font-medium text-white web:mt-11 lg:mt-8 mt-4">
          Explore pltaforn
        </button>
      </article>
    </div>
  );
}

export default YoutubeVideo;
