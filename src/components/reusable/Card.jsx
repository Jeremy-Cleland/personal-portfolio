import { motion as m } from "framer-motion";
import PropTypes from "prop-types";

import { cardVariants } from "../../utils/variants.js";
const Card = ({ children, shadow }) => {
  const shadowClass = shadow
    ? "group hover:shadow-lg hover:shadow-orange-200/40"
    : "";
  return (
    <m.div
      className={`group mx-auto my-10 p-2 max-w-7xl rounded-3xl border border-orange-400/10 bg-white px-2 dark:border-orange-600/20 dark:bg-dark-600 md:p-10 ${shadowClass}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {children}
    </m.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  shadow: PropTypes.bool,
};

export default Card;
