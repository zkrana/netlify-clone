import React from "react";
import Image from "next/image";

const EnterpriseLogo = ({ src, alt }) => (
  <div>
    <Image src={src} width={127} height={76} alt={alt} />
  </div>
);

function Enterprise({ title }) {
  return (
    <div className="enterprise xl:mt-20 lg:mt-16 mt-9">
      <h2 className="xl:text-5xl text-3xl font-bold text-center text-black">
        {title}
      </h2>
      <div className="enterprise-banner flex flex-wrap justify-center items-center gap-8 mt-9">
        <EnterpriseLogo src="/enterprise/twilio.svg" alt="Twilio" />
        <EnterpriseLogo src="/enterprise/mattel.svg" alt="Mattel" />
        <EnterpriseLogo src="/enterprise/riot-games.svg" alt="Riot Games" />
        <EnterpriseLogo src="/enterprise/google.svg" alt="Google" />
        <EnterpriseLogo src="/enterprise/unilever.svg" alt="Unilever" />
        <EnterpriseLogo src="/enterprise/peloton.svg" alt="Peloton" />
      </div>
    </div>
  );
}

export default Enterprise;
