// Import dynamic from next/dynamic
import dynamic from "next/dynamic";

// Use dynamic to load FooterNavigation, FooterSubscription, and Copyright dynamically
const FooterTopBar = dynamic(() => import("./FooterTopBar"));
const FooterNavigation = dynamic(() => import("./FooterNavigation"));
const FooterSubscription = dynamic(() => import("./FooterSubscription"));
const Copyright = dynamic(() => import("./Copyright"));

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
