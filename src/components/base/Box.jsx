import { clsx } from "clsx";

const Box = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        "glass-light dark:glass-dark mb-6 rounded-xl px-8 py-6 drop-shadow-lg"
      )}
    >
      {children}
    </div>
  );
};

export default Box;
