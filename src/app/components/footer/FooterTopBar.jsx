import Image from "next/image";
import React from "react";

const SocialLogo = ({ src, width, height, alt, href }) => {
  // Check if href is provided, if yes, wrap the component with an anchor tag
  const logoComponent = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="w-6 h-5 flex justify-center items-center">
        <Image src={src} width={width} height={height} alt={alt} />
      </div>
    </a>
  ) : (
    <div className="w-6 h-5 flex justify-center items-center">
      <Image src={src} width={width} height={height} alt={alt} />
    </div>
  );

  return logoComponent;
};

function FooterTopBar() {
  return (
    <div className="footer-topbar flex justify-between items-center">
      <div>
        <Image
          src="/footer-logo.png"
          width={50}
          height={45}
          alt="Footer Logo"
        />
      </div>
      <div className="max-w-[200px] flex justify-end gap-2 w-full">
        <SocialLogo
          src="/footer/github.svg"
          width={18}
          height={20}
          alt="github"
          href="https://github.com/your-github-profile"
        />

        <SocialLogo
          src="/footer/youtube.svg"
          width={18}
          height={20}
          alt="youtube"
          href="https://www.youtube.com/your-channel"
        />

        <SocialLogo
          src="/footer/twitter.svg"
          width={18}
          height={20}
          alt="twitter"
          href="https://twitter.com/your-twitter-handle"
        />

        <SocialLogo
          src="/footer/linkedin.svg"
          width={18}
          height={20}
          alt="linkedin"
          href="https://www.linkedin.com/in/your-linkedin-profile"
        />

        <SocialLogo
          src="/footer/chat.svg"
          width={18}
          height={20}
          alt="chat"
          href="https://your-chat-link"
        />
      </div>
    </div>
  );
}

export default FooterTopBar;
