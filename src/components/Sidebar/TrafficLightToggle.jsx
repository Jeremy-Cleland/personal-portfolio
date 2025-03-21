import { useState } from "react";
import PropTypes from "prop-types";
import { CloseIcon, MaxIcon, MinIcon } from "../../assets/icons/ui";

const TrafficLightToggle = ({ toggleSidebar }) => {
  const [closeHover, setCloseHover] = useState(false);
  const [minimizeHover, setMinimizeHover] = useState(false);
  const [maximizeHover, setMaximizeHover] = useState(false);

  return (
    <div className="absolute left-2 top-1 z-40">
      <div className="fixed flex items-center space-x-3">
        <div
          className="h-2.5 w-2.5 rounded-full bg-traffic-closeRed shadow-lg shadow-traffic-closeRed transition-all duration-200 hover:bg-traffic-closeRedActive active:bg-traffic-closeRedActive"
          onMouseEnter={() => setCloseHover(true)}
          onMouseLeave={() => setCloseHover(false)}
          onClick={toggleSidebar}
          aria-label="Close"
          role="button"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              toggleSidebar();
            }
          }}
          tabIndex={0}
        >
          {closeHover && (
            <CloseIcon className="mx-auto h-2.5 w-2.5 items-center p-[0.1em]" />
          )}
        </div>
        <div
          className="h-2.5 w-2.5 rounded-full bg-traffic-minimizeYellow shadow-lg shadow-traffic-minimizeYellow transition-all duration-200 hover:bg-traffic-minimizeYellowActive active:bg-traffic-minimizeYellowActive"
          onMouseEnter={() => setMinimizeHover(true)}
          onMouseLeave={() => setMinimizeHover(false)}
          onClick={toggleSidebar}
          role="button"
          aria-label="Minimize"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              toggleSidebar();
            }
          }}
          tabIndex={0}
        >
          {minimizeHover && (
            <MinIcon className="mx-auto h-2.5 w-2.5 items-center p-[0.1em]" />
          )}
        </div>
        <div
          className="h-2.5 w-2.5 rounded-full bg-traffic-maximizeGreen shadow-lg shadow-traffic-maximizeGreen transition-all duration-200 hover:bg-traffic-maximizeGreenActive active:bg-traffic-maximizeGreenActive"
          onMouseEnter={() => setMaximizeHover(true)}
          onMouseLeave={() => setMaximizeHover(false)}
          onClick={toggleSidebar}
          aria-label="Maximize"
          role="button"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              toggleSidebar();
            }
          }}
          tabIndex={0}
        >
          {maximizeHover && (
            <MaxIcon className="mx-auto h-2.5 w-2.5 items-center" />
          )}
        </div>
      </div>
    </div>
  );
};

TrafficLightToggle.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default TrafficLightToggle;
