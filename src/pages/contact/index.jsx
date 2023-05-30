import { motion as m } from "framer-motion";
import ContactForm from "./ContactForm.jsx";

const Contact = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="container mx-auto"
    >
      <div className="my-5 mt-10 border-b-4 border-violet-400 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-20 md:my-10 xl:mt-36 2xl:mt-48">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "10vh" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center font-SourceCodePro text-4xl font-bold tracking-wide md:text-right"
        >
          Connect with Jeremy
        </m.h1>
        <m.h2
          animate={{ y: 0 }}
          initial={{ y: "10vh" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-3 text-right font-Fira tracking-tight"
        >
          Open to opportunities and collaborations that foster growth and impact
        </m.h2>
      </div>
      <ContactForm />
    </m.div>
  );
};

export default Contact;
