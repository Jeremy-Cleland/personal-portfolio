import { clsx } from "clsx";

export const Container = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-4 md:max-w-4xl lg:max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};
