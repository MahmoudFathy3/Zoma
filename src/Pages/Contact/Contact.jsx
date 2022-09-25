import React, { useEffect } from "react";
import "./Contact.css";

const Contact = ({ HandlerFooter }) => {
  useEffect(() => {
    return HandlerFooter(true);
  }, [HandlerFooter]);

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form action="">
        <input type="text" placeholder="Name" required />
        <input type="Email" placeholder="You Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
