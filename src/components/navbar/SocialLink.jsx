import React from "react";

const SocialLink = ({ icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    className="mx-3 hover:underline"
    rel="noopener noreferrer"
  >
    <Icon size={24} />
  </a>
);

export default SocialLink;
