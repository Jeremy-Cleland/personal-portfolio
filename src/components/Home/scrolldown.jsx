import React from "react";

const ScrollDown = () => {
  return (
    <div className="scroll__down">
      <a href="#about" className="mouse__wrapper">
        <span className="home__scroll-name">Scroll Down</span>
        <span className="relative mx-auto mt-16 block h-6 w-4 rounded-2xl">
          <span className="absolute left-1/2 top-16 h-2 w-2 translate-x-2/4"></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
