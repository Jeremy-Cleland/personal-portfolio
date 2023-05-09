import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import redEclipse from "../../assets/img/redEclipse.png";
import yellowEclipse from "../../assets/img/yellowEclipse.png";
import greenEclipse from "../../assets/img/greenEclipse.png";

const SidebarSizeToggle = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <button
      className={clsx(
        "p-1text-gray-600-900 fixed left-2 top-0 z-10 flex h-6 flex-row",
        isSidebarOpen ? "justify-end" : "mx-auto w-16 justify-center"
      )}
      onClick={toggleSidebar}
    >
      {isSidebarOpen ? (
        <>
          <img
            src={redEclipse}
            alt="close button"
            className="sticky left-4 top-0 transition-all duration-200"
          />
          <img
            src={yellowEclipse}
            alt="minimize button"
            className="sticky left-8 top-0 transition-all duration-200"
          />
          <img
            src={greenEclipse}
            alt="enter full screen button"
            className="sticky left-12 top-0 transition-all duration-200"
          />
        </>
      ) : (
        <img
          src={greenEclipse}
          alt="enter full screen button"
          className="mx-auto transition-all duration-200"
        />
      )}
    </button>
  );
};

SidebarSizeToggle.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default SidebarSizeToggle;
