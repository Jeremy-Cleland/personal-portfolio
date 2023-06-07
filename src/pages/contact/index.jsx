import { motion as m } from "framer-motion";
import Form from "./Form.jsx";
import Header from "../../components/reusable/Header.jsx";

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
        subtitle="Open to opportunities and collaborations that foster growth and impact"
      />
      <Form />
    </m.div>
  );
};

export default Contact;
