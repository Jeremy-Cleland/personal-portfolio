export default function Form() {
  return (
    <form name="contact" method="post">
      {/* Needs a input with type hidden and name="form-name" */}
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" name="name" required />
      </p>

      <p>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" name="email" required />
      </p>

      <p>
        <label htmlFor="message">Message</label>
        <br />
        <textarea id="message" name="message" required></textarea>
      </p>

      <p>
        <input type="submit" value="Submit message" />
      </p>
    </form>
  );
}
