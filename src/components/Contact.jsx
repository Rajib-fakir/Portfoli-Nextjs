"use client";

import { useState } from "react";
import styles from "./css/Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message ❌");
      }
    } catch (err) {
      alert("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.subtitle}>Feel free to send me a message</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}

        <input
          className={styles.input}
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}

        <button
          className={styles.button}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className={styles.loader}></span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {/* SUCCESS MODAL */}
      {success && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>🎉 Message Sent!</h3>
            <p>Thank you for contacting me. I will reply soon.</p>
            <button onClick={() => setSuccess(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}