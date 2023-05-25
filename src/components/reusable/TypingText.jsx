import { motion as m } from "framer-motion";

const sentence = {
  hidden: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
src/components/reusable    },
  },
};
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const TypingText = () => {
  const line1 = "Hi, I'm a Full Stack Developer";
  const line2 = "I'm a Full Stack Developer";

  return (
    <m.div
      variates={sentence}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center"
    >
      {line1.split("").map((char, index) => {
        return (
          <m.span
            key={char + "-" + index}
            variants={letter}
            className="inline-block"
          >
            {char}
          </m.span>
        );
      })}
      <br />
      {line2.split("").map((char, index) => {
        return (
          <m.span
            key={char + "-" + index}
            variants={letter}
            className="inline-block"
          >
            {char}
          </m.span>
        );
      })}
    </m.div>
  );
};

export default TypingText;
