import Image from "next/image";
import React from "react";
import SignupBody from "../components/signup/SignupBody";

function signup() {
  return (
    <div className="w-full h-screen pt-7 pb-20">
      <div className="container tab:max-w-7xl w-[90%] mx-auto">
        <div className="h-[92vh] w-full flex flex-col justify-between">
          <a className="logo-login" href="/">
            <Image src="/logo.svg" width={98} height={40} alt="Logo" />
          </a>
          <SignupBody />
          <p className="text-sm font-light text-[#6a6a6a] text-center">
            By signing up with Netlify, you agree to our{" "}
            <a href="" className=" font-medium underline">
              terms of service
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default signup;
