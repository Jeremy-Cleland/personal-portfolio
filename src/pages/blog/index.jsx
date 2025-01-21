import { motion as m } from "framer-motion";
import Header from "../../components/reusable/Header.jsx";

const Blog = () => {
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
      <Header title=" Blog" subtitle="Coming Soon" />
    </m.div>
  );
};

export default Blog;
