// src/components/ContactForm/ContactForm.jsx
import { useState } from "react";
import Button from "../Button/Button";
import { contact } from "../../data/content";
import "./ContactForm.css";

const initialState = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!values.message.trim()) errors.message = "Please write a message.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // No Formspree endpoint configured yet — fall back to opening the
    // user's email client with the message pre-filled.
    if (!contact.formEndpoint) {
      const subject = encodeURIComponent(
        `Portfolio contact from ${values.name}`,
      );
      const body = encodeURIComponent(
        `${values.message}\n\n— ${values.name} (${values.email})`,
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus("success");
        setValues(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3>Get In Touch</h3>

      <div className="contact-form__field">
        <label htmlFor="name" className="visually-hidden">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <span className="contact-form__error">{errors.name}</span>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="email" className="visually-hidden">
          Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <span className="contact-form__error">{errors.email}</span>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="message" className="visually-hidden">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Write a Message"
          value={values.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <span className="contact-form__error">{errors.message}</span>
        )}
      </div>

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="contact-form__status contact-form__status--success">
          Thanks — your message is on its way.
        </p>
      )}
      {status === "error" && (
        <p className="contact-form__status contact-form__status--error">
          Something went wrong. Please try again or email {contact.email}{" "}
          directly.
        </p>
      )}
    </form>
  );
}
