import Image from "next/image";
import React from "react";
import Copyright from "../footer/Copyright";

const ServiceLogo = ({ src, alt, width, height }) => {
  return (
    <div className="mx-auto">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

function Footer() {
  return (
    <div className="container tab:max-w-7xl w-[90%] mx-auto pt-11">
      <div className="flex justify-between gap-6 flex-wrap mb-12">
        <div className="text-center flex flex-col gap-3">
          <ServiceLogo
            src="/contact/uptime.svg"
            alt="uptime"
            width={70}
            height={70}
          />
          <div>
            <span className="font-bold text-2xl text-center">99.99%</span>
            <p className="">Uptime SLA</p>
          </div>
        </div>

        <div className="text-center flex flex-col gap-3">
          <ServiceLogo
            src="/contact/support.svg"
            alt="support"
            width={70}
            height={70}
          />
          <div>
            <span className="font-bold text-2xl text-center">24x7x365</span>
            <p className="">Technical support</p>
          </div>
        </div>

        <div className="text-center flex flex-col gap-3">
          <ServiceLogo
            src="/contact/gdpr.svg"
            alt="gdpr"
            width={70}
            height={70}
          />
          <div>
            <span className="font-bold text-2xl text-center">GDPR</span>
            <p className="">Compliant</p>
          </div>
        </div>

        <div className="text-center flex flex-col gap-3">
          <ServiceLogo
            src="/contact/soc.svg"
            alt="soc"
            width={70}
            height={70}
          />
          <div>
            <span className="font-bold text-2xl text-center">SOC 2</span>
            <p className="">Type 2 certified</p>
          </div>
        </div>

        <div className="text-center flex flex-col gap-3">
          <ServiceLogo
            src="/contact/uptime.svg"
            alt="iso"
            width={70}
            height={70}
          />
          <div>
            <span className="font-bold text-2xl text-center">ISO 27001</span>
            <p className="">Certified</p>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;
