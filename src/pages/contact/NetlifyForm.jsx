import { useState } from "react";

const NetlifyForm = () => {
  const [submitterName, setSubmitterName] = useState("");

  return (
    <form
      className="mx-auto my-10"
      method="POST"
      name="contact-form"
      hidden
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input
        className="mx-auto w-[65vw] max-w-xl appearance-none justify-center rounded-lg border border-violet-400 bg-dark-100 px-5 py-2 text-sm text-dark-900 shadow-inner placeholder:text-dark-400 focus:border-violet-900 focus:outline-none focus:ring-1 focus:ring-violet-400 dark:border-violet-400 dark:bg-dark-300 dark:text-dark-100 dark:placeholder:text-dark-100 lg:w-[50vw]"
        type="hidden"
        name="subject"
        value={`You've got mail from ${submitterName}`}
      />
      <input
        type="hidden"
        name="form-name"
        value="contact-form"
        className="mx-auto w-[65vw] max-w-xl appearance-none justify-center rounded-lg border border-violet-400 bg-dark-100 px-5 py-2 text-sm text-dark-900 shadow-inner placeholder:text-dark-400 focus:border-violet-900 focus:outline-none focus:ring-1 focus:ring-violet-400 dark:border-violet-400 dark:bg-dark-300 dark:text-dark-100 dark:placeholder:text-dark-100 lg:w-[50vw]"
      />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <label
        htmlFor="name"
        className="mb-2 block text-lg text-dark-900 dark:text-dark-100"
      >
        Name *
      </label>
      <input
        id="name"
        name="name"
        required
        onChange={(e) => setSubmitterName(e.target.value)}
        type="text"
        className="mx-auto w-[65vw] max-w-xl appearance-none justify-center rounded-lg border border-violet-400 bg-dark-100 px-5 py-2 text-sm text-dark-900 shadow-inner placeholder:text-dark-400 focus:border-violet-900 focus:outline-none focus:ring-1 focus:ring-violet-400 dark:border-violet-400 dark:bg-dark-300 dark:text-dark-100 dark:placeholder:text-dark-100 lg:w-[50vw]"
      />
      <label
        htmlFor="company"
        className="mb-2 block text-lg text-dark-900 dark:text-dark-100"
      >
        Company *
      </label>
      <input
        id="company"
        name="company"
        required
        type="text"
        className="mx-auto w-[65vw] max-w-xl appearance-none justify-center rounded-lg border border-violet-400 bg-dark-100 px-5 py-2 text-sm text-dark-900 shadow-inner placeholder:text-dark-400 focus:border-violet-900 focus:outline-none focus:ring-1 focus:ring-violet-400 dark:border-violet-400 dark:bg-dark-300 dark:text-dark-100 dark:placeholder:text-dark-100 lg:w-[50vw]"
      />
      <label
        htmlFor="email"
        className="mb-2 block text-lg text-dark-900 dark:text-dark-100"
      >
        E-mail Address *
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="mx-auto w-[65vw] max-w-xl appearance-none justify-center rounded-lg border border-violet-400 bg-dark-100 px-5 py-2 text-sm text-dark-900 shadow-inner placeholder:text-dark-400 focus:border-violet-900 focus:outline-none focus:ring-1 focus:ring-violet-400 dark:border-violet-400 dark:bg-dark-300 dark:text-dark-100 dark:placeholder:text-dark-100 lg:w-[50vw]"
      />
      <label
        htmlFor="message"
        className="mb-2 block text-lg text-dark-900 dark:text-dark-100"
      >
        Message *
      </label>
      <textarea
        id="message"
        name="message"
        required
        className="w-full rounded-lg border border-gray-300 border-opacity-50 bg-dark-100 px-5 py-2 text-sm text-dark-900 shadow-sm dark:border-violet-400 dark:bg-dark-400 dark:text-dark-100"
      />
      <button
        type="submit"
        className="inline-block w-48 rounded-full bg-gradient-to-r from-violet-900 to-violet-400 p-[1px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
      >
        Submit
      </button>
    </form>
  );
};
export default NetlifyForm;
