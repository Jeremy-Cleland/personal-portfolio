import { motion as m } from "framer-motion";

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
      <div className="my-5 mt-10 border-b-4 border-violet-400 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-20 md:my-10 xl:mt-36 2xl:mt-48">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center font-SourceCodePro text-4xl font-black tracking-wide md:text-right"
        >
          Blog
        </m.h1>
        <m.h2
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-3 text-right font-SourceCodePro tracking-tight"
        >
          Keep up with the latest thoughts, tips, and tutorials from a developer
          with a unique perspective
        </m.h2>
      </div>
    </m.div>
  );
};

export default Blog;
