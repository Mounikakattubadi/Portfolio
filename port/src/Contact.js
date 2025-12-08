import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Set timestamp field
    const dateField = formRef.current.querySelector("input[name='date']");
    dateField.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_1um0dlb",          // ⭐ your service ID
        "template_e0r61ih",         // ⭐ your template ID
        formRef.current,
        "eXVRyFCCK7fCPfk_C"         // ⭐ your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
          setLoading(false);
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
          
          {/* Hidden time field */}
          <input type="hidden" name="date" />

          {/* Name + Email */}
          <div className="form-row">
            <input type="text" name="from_name" placeholder="Name" required />
            <input type="email" name="from_email" placeholder="Email" required />
          </div>

          {/* Phone */}
          <div className="form-row full-width">
            <input type="tel" name="phone" placeholder="Phone (optional)" />
          </div>

          {/* Message */}
          <div className="form-row full-width">
            <textarea name="message" placeholder="Message" rows="5" required></textarea>
          </div>

          {/* Send button */}
          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
