import React, { useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const payload = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
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
          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
