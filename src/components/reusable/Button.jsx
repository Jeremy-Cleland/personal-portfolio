import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({ children, className, href, ...props }) => {
  const buttonClasses = clsx(
    "text-sm relative inline-flex items-center justify-center px-8 py-3 dark:text-dark-100 text-dark-900 transition-all duration-200 dark:bg-violet-500/60 bg-dark-100 font-ChillaxSemiBold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-400",
    className
  );

  return (
    <div className="group relative inline-flex">
      <div className="absolute -inset-px animate-tilt rounded-lg bg-gradient-to-b from-violet-400 to-violet-500 opacity-40 blur-md transition-all duration-200 group-hover:opacity-60 group-hover:duration-200 dark:opacity-10 dark:group-hover:opacity-30" />
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export default Button;
