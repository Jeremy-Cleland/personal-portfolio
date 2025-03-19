// Scroll to top button when user scrolls down

import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

const UseScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const scrollToTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", scrollToTop);

    return function cleanup() {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, [showScroll]);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <FiChevronUp
        className="fixed bottom-[50px] right-[50px] z-50 h-[45px] w-[45px] rounded-full bg-dark-50 p-3 shadow-xl hover:text-orange-400 dark:bg-dark-900"
        onClick={backToTop}
        style={{
          display: showScroll ? "flex" : "none",
        }}
      />
    </>
  );
};

export default UseScrollToTop;
