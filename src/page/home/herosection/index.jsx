import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const Icon = {
  Pulse: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M2 12h4l2-7 4 14 3-9 2 5h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Shield: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Clock: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 7v5l3.5 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Bolt: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Arrow: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const STATS = [
  { icon: Icon.Clock, value: "24/7", label: "System access" },
  { icon: Icon.Shield, value: "100%", label: "Secure data" },
  { icon: Icon.Bolt, value: "40%", label: "Faster operations" },
];

const CHIPS = [
  { label: "Patient Records", sub: "Updated live", pos: "chip-one" },
  { label: "Pharmacy", sub: "Stock synced", pos: "chip-two" },
  { label: "Lab Reports", sub: "Auto-verified", pos: "chip-three" },
];

const PARTICLES = [
  { top: "12%", left: "6%", size: 6, delay: "0s", dur: "9s" },
  { top: "22%", left: "92%", size: 4, delay: "-2s", dur: "11s" },
  { top: "68%", left: "3%", size: 5, delay: "-4s", dur: "10s" },
  { top: "80%", left: "88%", size: 7, delay: "-1s", dur: "12s" },
  { top: "45%", left: "50%", size: 4, delay: "-5s", dur: "8s" },
  { top: "8%", left: "45%", size: 5, delay: "-3s", dur: "10.5s" },
];

export default function HospitalHero({
  demoHref = "#demo",
  modulesHref = "#modules",
}) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggling on both enter AND exit is what makes the reveal
        // replay every single time the section comes back into view.
        setInView(entry.isIntersecting);
      },
      { threshold: 0.22, rootMargin: "-8% 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={sectionRef}
      className={`hh-hero${inView ? " hh-hero--visible" : ""}`}
    >
      <div className="hh-bg" aria-hidden="true">
        <span className="hh-blob hh-blob-a" />
        <span className="hh-blob hh-blob-b" />
        <span className="hh-blob hh-blob-c" />
        <span className="hh-grid" />
        <span className="hh-ring" />
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="hh-particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.dur,
            }}
          />
        ))}
      </div>

      <div className="hh-container">
        <div className="hh-content">
          <p className="hh-eyebrow hh-reveal" style={{ "--d": "0ms" }}>
            <span className="hh-eyebrow-dot" />
            Hospital Information System
          </p>

          <h1 className="hh-headline hh-reveal" style={{ "--d": "120ms" }}>
            The Unified Enterprise Hospital Information System (HIS) for{" "}
            <span className="hh-highlight">
              Modern Healthcare
              <svg
                className="hh-underline"
                viewBox="0 0 320 14"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 9c60-9 200-9 316 0" />
              </svg>
            </span>
            .
          </h1>

          <p className="hh-subtext hh-reveal" style={{ "--d": "240ms" }}>
            Streamline clinical workflows, automate billing, and elevate
            patient care with a secure, AI-powered EHR/EMR platform. Built for
            hospitals that demand absolute efficiency.
          </p>

          <p className="hh-trust-line hh-reveal" style={{ "--d": "340ms" }}>
            <Icon.Shield className="hh-trust-icon" />
            Trusted for hospitals, clinics, and diagnostic centers.
          </p>

          <div className="hh-actions hh-reveal" style={{ "--d": "440ms" }}>
            <a className="hh-btn hh-btn-primary" href={demoHref}>
              <span>Book a Live Demo</span>
              <Icon.Arrow className="hh-btn-icon" />
            </a>
            <a className="hh-btn hh-btn-secondary" href={modulesHref}>
              View System Architecture
            </a>
          </div>

          {/* <ul className="hh-stats hh-reveal" style={{ "--d": "540ms" }}>
            {STATS.map(({ icon: StatIcon, value, label }) => (
              <li className="hh-stat" key={label}>
                <span className="hh-stat-icon-wrap">
                  <StatIcon className="hh-stat-icon" />
                </span>
                <span className="hh-stat-text">
                  <span className="hh-stat-value">{value}</span>
                  <span className="hh-stat-label">{label}</span>
                </span>
              </li>
            ))}
          </ul> */}
        </div>

        <div className="hh-visual hh-reveal-right" style={{ "--d": "160ms" }}>
          <span className="hh-visual-glow" aria-hidden="true" />

          <div className="hh-monitor-card">
            <div className="hh-monitor-head">
              <span className="hh-monitor-live">
                <span className="hh-live-dot" />
                Live
              </span>
              <Icon.Pulse className="hh-monitor-glyph" />
            </div>

            <div className="hh-monitor-screen">
              <svg
                className="hh-ecg-svg"
                viewBox="0 0 400 110"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="hh-ecg-path"
                  d="M0,60 L55,60 L70,60 L82,20 L96,95 L108,45 L120,60 L170,60 L184,60 L196,28 L208,88 L220,52 L232,60 L400,60"
                  fill="none"
                />
              </svg>
              <span className="hh-ecg-sweep" />
            </div>

            <p className="hh-monitor-caption">All departments connected</p>
          </div>

          {CHIPS.map((chip, i) => (
            <div
              className={`hh-chip-slide hh-reveal-right ${chip.pos}`}
              key={chip.label}
              style={{ "--d": `${420 + i * 170}ms` }}
            >
              <div className="hh-chip">
                <span className="hh-chip-dot" />
                <div>
                  <p className="hh-chip-label">{chip.label}</p>
                  <p className="hh-chip-sub">{chip.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}