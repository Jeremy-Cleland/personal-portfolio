import { motion as m } from "framer-motion";
import PropTypes from "prop-types";

const Header = ({ title, subtitle }) => {
  return (
    <div className="mx-2 my-5 mt-10 border-b-4 border-violet-400 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-20 md:my-10 xl:mt-36 2xl:mt-48">
      <m.h1
        animate={{ y: 0 }}
        initial={{ y: "3vh" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-right font-ChillaxBold text-2xl font-bold tracking-wide md:text-4xl"
      >
        {title}
      </m.h1>
      {subtitle && (
        <m.h2
          animate={{ y: 0 }}
          initial={{ y: "3vh" }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="pt-3 text-right font-SourceCodePro text-xs tracking-wide lg:text-sm"
        >
          {subtitle}
        </m.h2>
      )}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Header;
