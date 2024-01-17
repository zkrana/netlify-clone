import React from "react";
import FooterTopBar from "./FooterTopBar";
import FooterNavigation from "./FooterNavigation";
import FooterSubscription from "./FooterSubscription";
import Copyright from "./Copyright";

function Footer() {
  return (
    <div className="container tab:max-w-7xl w-[90%] mx-auto flex flex-col gap-4">
      <FooterTopBar />
      <FooterNavigation />
      <FooterSubscription />
      <Copyright />
    </div>
  );
}

export default Footer;
