import { useState, useRef, useEffect } from "react";
import "./style.css";
const faqData = [
  {
    question: "How secure is patient medical data on this platform?",
    answer:
      "Security is paramount. The system utilizes military-grade AES-256 encryption for data at rest and TLS 1.3 for data in transit. We are fully compliant with global data protection architectures (HIPAA/GDPR) ensuring your hospital stays completely liability-free.",
  },
  {
    question:
      "Can the platform integrate with our existing laboratory hardware and imaging machines?",
    answer:
      "Yes. Our HIS features an advanced API layer that seamlessly connects with standard medical imaging equipment, HL7-compliant laboratory analyzers, and DICOM formats for radiology.",
  },
  {
    question:
      "Is there a limit to the number of doctors, staff, or patients the system can handle?",
    answer:
      "No. The underlying architecture is built to auto-scale on secure servers, comfortably supporting massive traffic influxes, hundreds of concurrent medical personnel, and millions of patient medical profiles.",
  },
  {
    question:
      "How long does a complete data migration from our legacy software take?",
    answer:
      "Depending on your legacy system's structural complexity, our dedicated implementation team safely migrates your history records, registry entries, and financial ledgers within 2 to 4 weeks with zero active operational downtime.",
  },
  {
    question:
      "Does the platform support localized billing, tax structures, and country-specific insurance networks?",
    answer:
      "Absolutely. The system houses an incredibly diversified financial module allowing you to configure multi-currency invoicing, localized country tax structures, and automated insurance billing flows tailored precisely to your region.",
  },
];
function AccordionItem({ item, index, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);
  return (
    <div
      className={`faq__item ${isOpen ? "faq__item--active" : ""}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button
        className="faq__question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="faq__question-content">
          <span className="faq__question-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="faq__question-text">{item.question}</span>
        </div>
        <div className={`faq__icon ${isOpen ? "faq__icon--open" : ""}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="10"
              y1="4"
              x2="10"
              y2="16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="faq__icon-vline"
            />
            <line
              x1="4"
              y1="10"
              x2="16"
              y2="10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>
      <div
        className="faq__answer-wrapper"
        style={{ height: `${height}px` }}
      >
        <div className="faq__answer" ref={contentRef}>
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="faq" className="faq" data-nav-theme="dark">
      {/* Decorative background elements */}
      <div className="faq__bg-glow faq__bg-glow--1" />
      <div className="faq__bg-glow faq__bg-glow--2" />
      <div className="faq__bg-grid" />
      <div className="faq__inner">
        {/* Header */}
        <div className="faq__header">
          <span className="faq__badge">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Frequently Asked Questions
          </span>
          <h2 className="faq__title">
            Everything you need to know about{" "}
            <span className="faq__title-highlight">MediCore</span>
          </h2>
          <p className="faq__subtitle">
            Have questions? We've got answers. If you can't find what you're
            looking for, feel free to reach out to our support team.
          </p>
        </div>
        {/* FAQ Content Layout */}
        <div className="faq__content">
          {/* Left: Info Card */}
          <div className="faq__info-card">
            <div className="faq__info-card-inner">
              <div className="faq__info-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="faq__info-title">Still have questions?</h3>
              <p className="faq__info-text">
                Can't find the answer you're looking for? Our friendly support
                team is here to help.
              </p>
              <a href="#demo" className="faq__info-cta">
                <span>Get in touch</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              {/* Decorative dots */}
              <div className="faq__info-dots">
                <span /><span /><span /><span /><span /><span /><span /><span /><span />
              </div>
            </div>
          </div>
          {/* Right: Accordion */}
          <div className="faq__accordion">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}