import { motion as m } from "framer-motion";
import ContactForm from "./ContactForm.jsx";

import Header from "../../components/reusable/Header.jsx";

// import FormikForm from "./FormikForm.jsx";

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
      <Header
        title=" Contact Me"
        subtitle="Open to opportunities and collaborations that foster growth and
            impact"
      />
      <ContactForm />
      {/* <FormikForm /> */}
    </m.div>
  );
};

export default Contact;
