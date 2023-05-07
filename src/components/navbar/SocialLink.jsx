import React from "react";

const SocialLink = ({ icon: Icon, href, isNavOpen }) => (
  <a
    href={href}
    target="_blank"
    className="mx-3 hover:underline"
    rel="noopener noreferrer"
    style={{
      display: isNavOpen ? "inline-block" : "block",
      margin: isNavOpen ? "0 3px" : "3px 0",
    }}
  >
    <Icon size={24} />
  </a>
);

export default SocialLink;
