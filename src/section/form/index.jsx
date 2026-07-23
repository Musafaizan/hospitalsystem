import React, { useState } from "react";
import "./style.css";
import { volumeOptions, demoContent } from '../../data/data';

const RECEIVER_EMAIL = "iammusa182@gmail.com";
const FORM_ENDPOINT = "https://formsubmit.co/ajax/iammusa182@gmail.com";

export default function RequestDemoSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    volume: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subject = `Demo Request from ${form.name || "New Lead"}`;
    const body = [
      `Full Name: ${form.name}`,
      `Official Work Email: ${form.email}`,
      `Hospital/Clinic Name: ${form.org}`,
      `Number of Beds/Monthly Patient Volume: ${form.volume}`,
      `Message/Core Challenges: ${form.message}`,
    ].join("\n");

    const payload = new URLSearchParams({
      name: form.name,
      email: form.email,
      org: form.org,
      volume: form.volume,
      message: form.message,
      _subject: subject,
      _replyto: form.email,
      _captcha: "false",
    });

    try {
      setIsSubmitting(true);
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setForm({
        name: "",
        email: "",
        org: "",
        volume: "",
        message: "",
      });
      setSubmitted(true);
    } catch (error) {
      const mailtoLink = `mailto:${RECEIVER_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="demo-section" id="demo">
      <div className="demo-container">
        <div className="demo-image">
          <img src={demoContent.image} alt={demoContent.alt} />
        </div>

        <div className="demo-form-wrap">
         

          <h2 className="demo-heading">
            {demoContent.heading}&amp;<span> {demoContent.headingAccent}</span>
          </h2>

          <p className="demo-subtext">
            {demoContent.subtext}
          </p>

          <form className="demo-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="demo-name">
                  Full Name<span className="req">*</span>
                </label>
                <div className="form-field">
                  <input
                    id="demo-name"
                    type="text"
                    required
                    placeholder="Dr. Sara Ahmed"
                    value={form.name}
                    onChange={handleChange("name")}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="demo-email">
                  Official Work Email<span className="req">*</span>
                </label>
                <div className="form-field">
                  <input
                    id="demo-email"
                    type="email"
                    required
                    placeholder="you@hospital.com"
                    value={form.email}
                    onChange={handleChange("email")}
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="demo-org">
                  Hospital / Clinic Name<span className="req">*</span>
                </label>
                <div className="form-field">
                  <input
                    id="demo-org"
                    type="text"
                    required
                    placeholder="City Care Hospital"
                    value={form.org}
                    onChange={handleChange("org")}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="demo-volume">
                  Number of Beds / Monthly Patient Volume<span className="req">*</span>
                </label>
                <div className="form-field">
                  <select
                    id="demo-volume"
                    required
                    value={form.volume}
                    onChange={handleChange("volume")}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {volumeOptions.map((opt) => (
                      <option value={opt} key={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group form-group--full">
                <label htmlFor="demo-message">Message / Core Challenges</label>
                <div className="form-field">
                  <textarea
                    id="demo-message"
                    rows={4}
                    placeholder="Tell us what's slowing your team down today..."
                    value={form.message}
                    onChange={handleChange("message")}
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="demo-submit" disabled={isSubmitting}>
              {isSubmitting
                ? "Sending your request..."
                : "Sumbit"}
            </button>

            {submitted && (
              <p className="demo-success">
                {demoContent.successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
