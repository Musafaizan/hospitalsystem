import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";
import { testimonials, testimonialCopy } from '../../../data/data';

const AUTOPLAY_MS = 6000;

function renderQuote(quote, boldPart) {
  if (!boldPart || !quote.includes(boldPart)) {
    return <>{quote}</>;
  }
  const [before, after] = quote.split(boldPart);
  return (
    <>
      {before}
      <span className="mc-quote-bold">{boldPart}</span>
      {after}
    </>
  );
}

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.96,
  }),
};

export default function CureVerxTestimonials() {
  const [[index, direction], setIndexState] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const total = testimonials.length;

  const goNext = useCallback(() => {
    setIndexState(([prev]) => [(prev + 1) % total, 1]);
  }, [total]);

  const goPrev = useCallback(() => {
    setIndexState(([prev]) => [(prev - 1 + total) % total, -1]);
  }, [total]);

  const goTo = useCallback(
    (i) => {
      setIndexState(([prev]) => [i, i > prev ? 1 : -1]);
    },
    []
  );

  useEffect(() => {
    if (isPaused) return undefined;
    timerRef.current = setInterval(goNext, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [isPaused, goNext, index]);

  const current = testimonials[index];

  return (
    <section
      className="mc-testimonials"
      id="testimonials"
      data-nav-theme="dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mc-glow mc-glow-a" aria-hidden="true" />
      <div className="mc-glow mc-glow-b" aria-hidden="true" />
      <div className="mc-grid-overlay" aria-hidden="true" />

      <motion.p
        className="mc-eyebrow"
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {testimonialCopy.eyebrow}
      </motion.p>

      <motion.h2
        className="mc-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        {testimonialCopy.heading} <span className="mc-heading-accent">{testimonialCopy.headingAccent}</span>
      </motion.h2>

      <div className="mc-carousel">
        <button
          type="button"
          className="mc-nav-btn mc-nav-prev"
          onClick={goPrev}
          aria-label="Previous testimonial"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="mc-card-stage">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              className="mc-card"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 32 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.25 },
              }}
            >
              <svg
                className="mc-quote-mark"
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 32V19.2C0 8.6 6.4 1.7 16.4 0L18 4.4C11.6 6.2 8.4 10 8 15.6H16V32H0ZM22 32V19.2C22 8.6 28.4 1.7 38.4 0L40 4.4C33.6 6.2 30.4 10 30 15.6H38V32H22Z"
                  fill="var(--accent-teal)"
                />
              </svg>

              <p className="mc-quote">
                {renderQuote(current.quote, current.boldPart)}
              </p>

              <div className="mc-divider" />

              <div className="mc-author">
                <div className="mc-avatar-ring">
                  <div className="mc-avatar">{current.initials}</div>
                </div>
                <div className="mc-author-info">
                  <p className="mc-author-name">{current.name}</p>
                  <p className="mc-author-title">{current.title}</p>
                  <p className="mc-author-company">{current.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mc-progress-track" aria-hidden="true">
            <motion.div
              key={`progress-${index}-${isPaused}`}
              className="mc-progress-fill"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isPaused ? 0 : 1 }}
              transition={{
                duration: isPaused ? 0 : AUTOPLAY_MS / 1000,
                ease: "linear",
              }}
            />
          </div>
        </div>

        <button
          type="button"
          className="mc-nav-btn mc-nav-next"
          onClick={goNext}
          aria-label="Next testimonial"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="mc-dots">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            type="button"
            className={`mc-dot ${i === index ? "mc-dot-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}