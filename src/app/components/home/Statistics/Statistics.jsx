import React from "react";
import "./stats.css";
function Statistics() {
  return (
    <div className="stats-wrapper xl:pt-20 tab:pt-14 pt-11 xl:min-h-[450px] tab:min-h-[360px] sm:min-h-[320px]  min-h-[450px] text-white">
      <div className="container mx-auto">
        <div className="w-[90%] tab:max-w-6xl mx-auto flex flex-wrap gap-10 justify-between  items-center">
          <div className="stats-item sm:w-fit w-full">
            <span className="web:text-6xl xl:text-5xl text-4xl font-bold text-center block">
              35M+
            </span>
            <span className="xl:text-xl tab:text-base text-sm font-medium text-center block">
              Websites deployed on Netlify
            </span>
          </div>

          <div className="stats-item sm:w-fit w-full">
            <span className="web:text-6xl xl:text-5xl text-4xl font-bold text-center block">
              4M+
            </span>
            <span className="xl:text-xl tab:text-base text-sm font-medium text-center block">
              Developers
            </span>
          </div>

          <div className="stats-item sm:w-fit w-full">
            <span className="web:text-6xl xl:text-5xl text-4xl font-bold text-center block">
              99.99%
            </span>
            <span className="xl:text-xl tab:text-base text-sm font-medium text-center block">
              Uptime SLA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
