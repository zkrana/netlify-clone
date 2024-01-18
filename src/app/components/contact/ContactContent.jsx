import React from "react";
import Enterprise from "../home/solutions/Enterprise";

function ContactContent() {
  return (
    <div className="text-left sm:w-[calc(42%-16px)] w-full">
      <h1 className="xl:text-2xl lg:text-xl text-base font-semibold text-white">
        Ready to deploy with Netlify?
      </h1>
      <p className="text-white pt-3">
        Learn how to scale your company effortlessly with the Netlify Composable
        Web Platform or get a demo to see it in action.
        <br />
        <br /> Please enter your information, and we’ll get back to you as soon
        as possible.
      </p>

      <div className="con-details lg:mt-5 mt-2 bg-white rounded-lg lg:p-6 sm:p-5 p-3">
        <span className="lg:text-2xl text-xl font-bold">Partner Programs</span>
        <p className="lg:my-3 my-2 text-sm">
          Get access to exclusive support, resources, programs, and connections.
        </p>
        <a
          href="/your-link-url"
          className="lg:mt-4 mt-2 flex items-center gap-2 text-base font-medium underline transition-colors hover:underline hover:text-[#32E6E2]"
        >
          Agency partners
          <div className="w-4 h-6 mt-1 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <path
                style={{ fill: "#32E6E2" }}
                d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                data-name="Right"
              />
            </svg>
          </div>
        </a>
        <a
          href="/your-link-url"
          className="lg:mt-2 mt-1 flex items-center gap-2 text-base font-medium underline transition-colors hover:underline hover:text-[#32E6E2]"
        >
          Technology partners
          <div className="w-4 h-6 mt-1 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <path
                style={{ fill: "#32E6E2" }}
                d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                data-name="Right"
              />
            </svg>
          </div>
        </a>
      </div>

      <div className="con-details lg:mt-8 mt-4 bg-white rounded-lg lg:p-6 sm:p-5 p-3">
        <span className="lg:text-2xl text-xl font-bold">
          Looking for support?
        </span>
        <p className="lg:my-3 my-2 text-sm">
          Get support at all levels, and browse documentation, guides, and
          forums.
        </p>
        <a
          href="/your-link-url"
          className="lg:mt-4 mt-2 flex items-center gap-2 text-base font-medium underline transition-colors hover:underline hover:text-[#32E6E2]"
        >
          Visit our Support Center
          <div className="w-4 h-6 mt-1 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <path
                style={{ fill: "#32E6E2" }}
                d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                data-name="Right"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactContent;
