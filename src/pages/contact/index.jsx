import { motion as m } from "framer-motion";
import ContactForm from "./ContactForm.jsx";
import ContactHeader from "./ContactHeader.jsx";

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
      <ContactHeader />
      <ContactForm />
    </m.div>
  );
};

export default Contact;
