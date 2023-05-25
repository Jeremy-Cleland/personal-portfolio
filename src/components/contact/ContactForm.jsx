import { useState } from "react";
import { motion as m } from "framer-motion";

import FormInput from "./FormInput.jsx";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input change and update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form data processing here
    console.log("Form Data:", formData);

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  // Validate form data before submission
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate name field
    if (!formData.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    // Validate email field
    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    // Validate subject field
    if (!formData.subject) {
      errors.subject = "Subject is required";
      isValid = false;
    }

    // Validate message field
    if (!formData.message) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 1,
        delay: 0.3,
      }}
      className="mx-auto"
    >
      <div className="group relative mx-auto flex items-center justify-center">
        <div className="absolute -inset-[.05px] mx-auto w-[80vw] animate-tilt rounded-2xl bg-gradient-to-r from-violet-300 to-violet-900 opacity-40 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200 dark:opacity-20 md:w-[50vw] lg:w-[40vw]  "></div>
        <div className="relative flex h-full w-[80vw] items-center rounded-2xl bg-dark-100 dark:bg-dark-900 md:w-[50vw] lg:w-[40vw]">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="m-10">
            <p className="mb-8 text-2xl text-dark-900 dark:text-dark-100">
              Contact Form
            </p>
            {/* Form input fields */}
            <FormInput
              inputLabel="Full Name"
              htmlFor="name"
              inputType="text"
              inputId="name"
              inputName="name"
              placeholderText="Your Name"
              ariaLabel="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              error={errors.name}
            />
            <FormInput
              inputLabel="Email"
              htmlFor="email"
              inputType="email"
              inputId="email"
              inputName="email"
              placeholderText="Your email"
              ariaLabel="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              error={errors.email}
            />
            <FormInput
              inputLabel="Subject"
              htmlFor="subject"
              inputType="text"
              inputId="subject"
              inputName="subject"
              placeholderText="Subject"
              ariaLabel="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              error={errors.subject}
            />

            <div className="mt-6">
              <label
                className="mb-2 block text-lg text-dark-900 dark:text-dark-900"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="text-md w-full rounded-2xl border border-gray-300 border-opacity-50 bg-dark-100 px-5 py-2 text-dark-900 shadow-sm dark:border-violet-400 dark:bg-dark-900 dark:text-dark-100"
                id="message"
                name="message"
                cols="14"
                rows="6"
                aria-label="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="mt-6 rounded-lg bg-dark-100 px-4 py-2.5 text-center tracking-wider text-dark-900 duration-500 hover:bg-dark-50 focus:ring-1 focus:ring-violet-400">
              {/* Submit button */}
              <button
                type="submit"
                aria-label="Send Message"
                onClick={validateForm}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </m.div>
  );
};
export default ContactForm;
