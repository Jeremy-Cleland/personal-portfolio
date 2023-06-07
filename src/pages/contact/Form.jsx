import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { slideInVariant } from "../../utils/variants.js";
import SocialMedia from "../about/SocialMedia.jsx";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change and update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const inputStyles =
    "mx-auto w-[80vw] sm:w-[60vw] md:w-[50vw] max-w-xl appearance-none justify-center rounded-lg border border-violet-400 bg-dark-100 px-3 py-2 sm:text-base text-dark-900 shadow-inner placeholder:text-dark-400 focus:border-violet-900 focus:outline-none focus:ring-1 focus:ring-violet-400 dark:border-violet-400 dark:bg-dark-300 dark:text-dark-100 dark:placeholder:text-dark-100/60 lg:w-[40vw] max-w-lg font-ChillaxLight";

  return (
    <m.div
      className="group container mx-auto my-5 max-w-xl rounded-lg bg-white px-2 py-10 font-Fira text-dark-900 dark:bg-dark-900 dark:text-dark-100 md:p-6 lg:p-20 xl:max-w-2xl"
      variants={slideInVariant("right", "tween", 0.3, 0.7)}
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto flex items-center justify-center font-Fira text-dark-900 dark:text-dark-100">
        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />

          <div className="mt-6">
            <label
              htmlFor="name"
              className="mb-2 block w-full font-ChillaxSemiBold text-sm"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className={inputStyles}
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="mb-2 block w-full font-ChillaxSemiBold text-sm"
            >
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className={inputStyles}
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="message"
              className="mb-2 block w-full font-ChillaxSemiBold text-sm"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              cols="14"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 border-opacity-50 bg-dark-100 px-2 py-2 font-ChillaxLight text-dark-900 shadow-sm dark:border-violet-400 dark:bg-dark-400 dark:text-dark-100 dark:placeholder:text-dark-100/60"
            ></textarea>
          </div>

          <div className="mx-auto my-6 text-center">
            <button
              className="inline-block w-48 rounded-lg bg-gradient-to-r from-violet-900 to-violet-400 p-[1px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              type="submit"
              aria-label="Send Message"
            >
              <span className="block rounded-lg bg-dark-100 px-8 py-3 text-sm font-medium hover:bg-transparent dark:bg-dark-400 dark:hover:bg-transparent">
                Send Message
              </span>
            </button>
          </div>
          <SocialMedia />
        </form>
      </div>
    </m.div>
  );
};
export default Form;
