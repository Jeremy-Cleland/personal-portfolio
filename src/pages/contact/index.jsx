import { motion as m } from "framer-motion";
import ContactForm from "./ContactForm.jsx";
import ContactHeader from "./ContactHeader.jsx";

const Contact = () => {
  return (
    <m.div className="container mx-auto">
      <ContactHeader />
      <ContactForm />
    </m.div>
  );
};

export default Contact;
