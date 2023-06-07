import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="container">
      <form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default Form;
