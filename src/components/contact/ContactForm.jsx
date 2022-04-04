import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [isActive, setIsActive] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ai6ql26",
        "template_jkt2k9c",
        e.target,
        "user_8XX2XoAZbUrHIgxqEUopG"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setMessage("");
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 4000);
  };
  return (
    <>
      <div className="contact-container container" id="contact">
        <h1>Contact me</h1>
        <form onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="user-email">Email</label>
          <input
            type="email"
            id="email"
            name="user-email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <input type="submit" value="Send" className="btn" />
        </form>
        {isActive && (
          <div className="emailSended">
            <p>Message sent</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
