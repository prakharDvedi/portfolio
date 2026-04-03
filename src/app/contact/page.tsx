"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiCopy,
  FiMessageCircle,
} from "react-icons/fi";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) {
      return error.message;
    }

    return "Failed to send message";
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("prakhar.dwivedi.3782@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error: unknown) {
      setStatus("error");
      setErrorMessage(getErrorMessage(error));
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`page-shell-wide ${styles.container}`}>
      <h1 className={`page-title page-title-centered ${styles.header}`}>
        Get In Touch
      </h1>

      <div className={styles.content}>
        <div className={styles.infoSection}>
          <h2 className={styles.subtitle}>Let&apos;s Chat!</h2>
          <p className={styles.text}>
            If you are interested in collaborating, discussing an idea, or just
            having a thoughtful conversation, feel free to reach out.
          </p>

          <div className={styles.contactLinks}>
            <div className={styles.emailWrapper}>
              <Link
                href="mailto:prakhar.dwivedi.3782@gmail.com"
                className={styles.linkItem}
              >
                <FiMail className={styles.icon} />
                <span>prakhar.dwivedi.3782@gmail.com</span>
              </Link>
              <button
                onClick={handleCopy}
                className={styles.copyBtn}
                aria-label="Copy email"
              >
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
            </div>

            <Link
              href="https://wa.me/919354894089"
              target="_blank"
              className={`${styles.linkItem} ${styles.linkItemCompact}`}
            >
              <FiMessageCircle className={styles.icon} />
              <span>WhatsApp (+91 9354894089)</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/prakhar-dwivedi-a05611292/"
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
                placeholder="Narendra Modi"
                value={formData.name}
                onChange={handleChange}
                disabled={status === "loading"}
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
                placeholder="xyz@gmail.com"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "loading"}
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
                placeholder="What&apos;s on your mind?"
                value={formData.message}
                onChange={handleChange}
                disabled={status === "loading"}
              />
            </div>

            <button
              type="submit"
              className={`${styles.submitBtn} ${
                status === "loading" ? styles.submitBtnLoading : ""
              }`}
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? (
                "Sending..."
              ) : status === "success" ? (
                <>
                  Sent <FiCheck />
                </>
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </button>
            {status === "error" && (
              <p className={`${styles.statusMessage} ${styles.statusError}`}>
                <FiAlertCircle /> {errorMessage}
              </p>
            )}
            {status === "success" && (
              <p className={`${styles.statusMessage} ${styles.statusSuccess}`}>
                <FiCheck /> Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
