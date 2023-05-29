import { motion as m } from "framer-motion";

const ContactHeader = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 0.3,
        delay: 0.3,
      }}
      className="container mx-auto"
    >
      <div className="mb-24 mt-10">
        <div className="my-5 max-w-2xl border-b-4 border-violet-400 py-5 text-center font-SourceCodePro font-black text-dark-900 dark:text-gray-200 md:my-10">
          <h2 className="text-2xl font-black uppercase md:text-3xl">
            Connect with Jeremy: Let's Code the Future Together
          </h2>
          <p className="pt-3 font-SourceCodePro tracking-tight">
            Open to opportunities and collaborations that foster growth and
            impact
          </p>
        </div>
      </div>
    </m.div>
  );
};
export default ContactHeader;
