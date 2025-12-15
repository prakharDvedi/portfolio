"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiSend,
} from "react-icons/fi";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:prakhar.dwivedi.3782@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Get In Touch</h1>

      <div className={styles.content}>
        {/* Contact Info Section */}
        <div className={styles.infoSection}>
          <h2 className={styles.subtitle}>Let's Chat!</h2>
          <p className={styles.text}>
            Whether you have a question, a project idea, or just want to say hi,
            I'll try my best to get back to you!
          </p>

          <div className={styles.contactLinks}>
            <Link
              href="mailto:prakhar.dwivedi.3782@gmail.com"
              className={styles.linkItem}
            >
              <FiMail className={styles.icon} />
              <span>prakhar.dwivedi.3782@gmail.com</span>
            </Link>
            <Link
              href="https://linkedin.com/in/prakhar-dwivedi"
              target="_blank"
              className={styles.linkItem}
            >
              <FiLinkedin className={styles.icon} />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/prakharDvedi"
              target="_blank"
              className={styles.linkItem}
            >
              <FiGithub className={styles.icon} />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://twitter.com/PrakharDwi64417"
              target="_blank"
              className={styles.linkItem}
            >
              <FiTwitter className={styles.icon} />
              <span>Twitter</span>
            </Link>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className={styles.formSection}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={styles.input}
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.input}
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className={styles.textarea}
                placeholder="What's on your mind?"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
