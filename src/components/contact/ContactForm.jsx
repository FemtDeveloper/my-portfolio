import React from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
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
  };
  return (
    <>
      <div className="contact-container container" id="contact">
        <h1>Contact me</h1>
        <form onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="form-control" />
          <label htmlFor="user-email">Email</label>
          <input
            type="email"
            id="email"
            name="user-email"
            className="form-control"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="form-control"
          />
          <button type="button" value="Send" className="btn btn-primary mt-3">
            Send{"     "}
            <i className="far fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
