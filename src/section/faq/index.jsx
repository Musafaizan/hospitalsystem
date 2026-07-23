import { useState, useRef, useEffect } from "react";
import "./style.css";
import { faqData, faqHeader, faqInfoCard } from '../../data/data';
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
        
        <div className="faq__header">
          
          <h2 className="faq__title">
            {faqHeader.title}{" "}
            <span className="faq__title-highlight"> {faqHeader.titleHighlight}</span>
          </h2>
          <p className="faq__subtitle">
            {faqHeader.subtitle}
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
              <h3 className="faq__info-title">{faqInfoCard.title}</h3>
              <p className="faq__info-text">
                {faqInfoCard.text}
              </p>
              <a href="#demo" className="faq__info-cta">
                <span>{faqInfoCard.cta}</span>
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
