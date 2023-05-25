import { motion as m } from "framer-motion";
import ContactForm from "../components/contact/ContactForm.jsx";
import ContactHeader from "../components/contact/ContactHeader.jsx";

const Contact = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 md:mt-10"
    >
      <ContactHeader />
      <ContactForm />
    </m.div>
  );
};

export default Contact;
