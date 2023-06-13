import { motion as m, useSpring, useScroll } from "framer-motion";

const ScrollProgress = ({ position }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <m.div
      style={{ scaleX }}
      className={`position-fixed transform-origin-0 left-0 right-0 ${position} top-0  h-5 bg-violet-400`}
    />
  );
};

export default ScrollProgress;
