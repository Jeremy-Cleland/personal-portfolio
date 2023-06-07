const Form = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      onSubmit="submit"
      data-netlify-honeypot="bot-field"
      className="mx-auto my-10"
    >
      <p className="mb-8 font-Fira text-2xl text-dark-600 dark:text-dark-100">
        Contact Form
      </p>
      <div className="hidden">
        <input name="bot-field" />
      </div>

      <input type="hidden" name="contact" value="contact" />
      <div>
        <label
          htmlFor="name"
          className="mb-2 block w-full text-sm text-dark-900 dark:text-dark-100"
        >
          Full Name
        </label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block w-full text-sm text-dark-900 dark:text-dark-100"
        >
          Email
        </label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block w-full text-sm text-dark-900 dark:text-dark-100"
        >
          Message
        </label>
        <textarea name="message" id="message" cols="14" rows="6" />
      </div>
      <div className="mt-6">
        <button
          className="inline-block w-48 rounded-full bg-gradient-to-r from-violet-900 to-violet-400 p-[1px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
          type="submit"
          aria-label="Send Message"
        >
          <span className="block rounded-full bg-dark-100 px-8 py-3 text-sm font-medium hover:bg-transparent dark:bg-dark-400 dark:hover:bg-transparent">
            Send Message
          </span>
        </button>
      </div>
    </form>
  );
};
export default Form;
