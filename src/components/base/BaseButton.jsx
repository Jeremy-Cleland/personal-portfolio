import React from "react";
import clsx from "clsx";

const BaseButton = ({
  children,
  className,
  onClick,
  type = "button",
  ...props
}) => {
  const baseClasses = clsx(
    "transition duration-200 ease-in-out",
    "rounded-xl",
    "p-2",
    "cursor-pointer",
    className
  );

  return (
    <button type={type} className={baseClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default BaseButton;
