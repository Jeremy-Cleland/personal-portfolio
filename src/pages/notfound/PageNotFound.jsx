import { motion as m } from "framer-motion";
import TypewriterText from "../../components/reusable/TypewriterText.jsx";
import Button from "../../components/reusable/Button.jsx";
import Header from "../../components/reusable/Header.jsx";
import { slideInVariant } from "../../utils/variants.js";

const PageNotFound = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="font-ChillaxBold"
    >
      <Header title="Oops" subtitle="Somethign went way wrong" />
      <div className="mx-auto my-10 max-w-xl text-4xl text-dark-900 dark:text-dark-50">
        <TypewriterText
          text="Lets try something here.."
          tag="h2"
          delay={500}
          speed={35}
        />
        <br />
        <TypewriterText
          text="Button... render!"
          tag="h2"
          delay={2000}
          speed={35}
        />
      </div>
      <m.div
        className="text-center"
        variants={slideInVariant("right", "tween", 3, 0.7)}
        initial="hidden"
        animate="show"
      >
        <Button href="/">Go Home</Button>
      </m.div>
    </m.div>
  );
};
export default PageNotFound;
