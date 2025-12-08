import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lgce68j",      // service ID
        "template_204xfaj",     // template ID
        formRef.current,
        "hm0fvLW0FDsMlkx8I"     // public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="text-center">
          <span className="badge">CONTACT ME</span>
          <h2 className="contact-heading">Send Me a Message</h2>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          
          {/* Name + Email */}
          <div className="form-row">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-row full-width">
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
            />
          </div>

          {/* Message */}
          <div className="form-row full-width">
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Send button */}
          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
