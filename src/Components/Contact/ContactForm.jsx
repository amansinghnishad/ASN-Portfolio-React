import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Invalid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        "service_yp5h54a", // EmailJS service ID
        "template_cev1yqe", // EmailJS template ID
        formData,
        "WKmdmOFg-zNgRPR4G" // EmailJS public key
      )
      .then((response) => {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccessMessage(""), 3000);
      })
      .catch((error) => {
        setErrorMessage("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Me</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default ContactForm;
