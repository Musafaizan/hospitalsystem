import React, { useState } from "react";
import "./style.css";
import doctorform from "../../../assets/doctor1-from.png";

const REQUIREMENTS = [
  "Hospital Management",
  "Clinical Management",
  "EHR / EMR",
];

export default function RequestDemoSection() {
  const [form, setForm] = useState({
    fullName: "",
    setupName: "",
    email: "",
    requirement: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/iammusa182@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          setupName: form.setupName,
          email: form.email,
          phone: form.phone,
          requirement: form.requirement,
          _subject: `Demo request from ${form.fullName || "a new lead"}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({
          fullName: "",
          setupName: "",
          email: "",
          requirement: "",
          phone: "",
        });
      }
    } catch (error) {
      console.error("Form submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo" className="demo-section">
      <div className="demo-container">
        <div className="demo-image">
          <img src={doctorform} alt="Healthcare professional" />
        </div>

        <div className="demo-form-wrap">
          <span className="demo-eyebrow">Get Started</span>
          <h2 className="demo-heading">
            Request A <span>Demo</span>
          </h2>
          <p className="demo-subtext">
            Tell us a bit about your facility and we'll set up a personalized
            walkthrough of the platform for your team.
          </p>

          <form className="demo-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="demo-success" role="status">
                Thank you! Your request has been submitted. Our team will contact you shortly.
              </div>
            )}
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="fullName">
                  Full Name<span className="req">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="e.g. Muhammad Ali"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="setupName">
                  Setup Name<span className="req">*</span>
                </label>
                <input
                  id="setupName"
                  name="setupName"
                  type="text"
                  placeholder="e.g. Healthwire"
                  value={form.setupName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">
                  Email<span className="req">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. ali@hospital.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="phone">
                  Phone Number<span className="req">*</span>
                </label>
                <div className="phone-input">
                  <span className="phone-code">+92</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="3XXXXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field form-field--full">
                <label htmlFor="requirement">
                  Primary Requirement<span className="req">*</span>
                </label>
                <select
                  id="requirement"
                  name="requirement"
                  value={form.requirement}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select your requirement
                  </option>
                  {REQUIREMENTS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="demo-submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}