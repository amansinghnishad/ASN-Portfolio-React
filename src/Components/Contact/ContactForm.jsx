import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import FormInput from "./FormInput";

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
        "service_80q7xcv",
        "template_cev1yqe",
        formData,
        "WKmdmOFg-zNgRPR4G"
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
        <FormInput
          label="Name"
          placeholder="Your Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email"
          placeholder="Your Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Message"
          placeholder="Your Message"
          type="textarea"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

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
