import React from "react";

const SocialLink = ({ icon: Icon, href, isSidebarOpen }) => (
  <a
    href={href}
    target="_blank"
    className="mx-3 hover:underline"
    rel="noopener noreferrer"
    style={{
      display: isSidebarOpen ? "inline-block" : "block",
      margin: isSidebarOpen ? "0 3px" : "3px 0",
    }}
  >
    <Icon size={24} />
  </a>
);

export default SocialLink;
