import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import logo1 from '../../../assets/logo1.png';
import logo2 from '../../../assets/logo2.png';
import logo3 from '../../../assets/logo3.png';
import logo4 from '../../../assets/logo4.png';
import logo5 from '../../../assets/logo5.png';
import logo6 from '../../../assets/logo6.png';


const Counter = ({ end, suffix = '+', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animatingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;

        if (isVisible && !animatingRef.current) {
          animatingRef.current = true;
          let startTime = null;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
              animatingRef.current = false;
            }
          };
          requestAnimationFrame(step);
        } else if (!isVisible) {
          // reset so it plays again next time it scrolls into view
          animatingRef.current = false;
          setCount(0);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  const formatNumber = (num) => {
    if (end >= 1000) {
      return (num / 1000).toFixed(num >= 1000 ? 0 : 1) + 'k';
    }
    return num;
  };

  return (
    <span ref={ref} className="counter-number">
      {formatNumber(count)}{suffix}
    </span>
  );
};

// Infinite right-to-left logo marquee. The logo list is duplicated once so the
// track can loop seamlessly at -50% translateX with no visible reset/jump.
const LogoMarquee = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const loopLogos = [...logos, ...logos];

  return (
    <section className="logo-marquee-section">
      <div className="logo-marquee-heading">
        <h2>Certified <span> From</span></h2>
      </div>
      <div className="logo-marquee-wrapper">
        <div className="logo-marquee-track">
          {loopLogos.map((logo, index) => (
            <div className="logo-marquee-item" key={index}>
              <img
                src={logo}
                alt={`Partner logo ${(index % logos.length) + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const stats = [
    {
      number: 120,
      suffix: '+',
      label: 'COUNTRIES',
      description: 'Trusted by top hospitals & clinics in more than 120 countries worldwide',
    },
    {
      number: 54000,
      suffix: '+',
      label: 'PATIENTS SERVED',
      description: 'Successfully managed over 54k patient records with our HMS',
    },
    {
      number: 1,
      suffix: '',
      label: 'HMS',
      description: 'Bestest hospital management system where solutions get easy',
      isHash: true,
    },
    {
      number: 70,
      suffix: '+',
      label: 'LANGUAGES',
      description: 'Our HMS speaks your language. Available in 70+ languages',
    },
  ];

  return (
    <>
      <LogoMarquee />

      <section className="trust-section" id="trust" data-nav-theme="dark">
        <div className="trust-container">
          <div className="trust-heading">
            <h2>Trusted <span>Worldwide</span></h2>
            <p>Powering healthcare providers globally with reliable and scalable solutions</p>
          </div>

          <div className="trust-grid">
            {stats.map((stat, index) => (
              <div className="trust-card" key={index}>
                <div className="trust-number">
                  {stat.isHash && <span className="hash-symbol">#</span>}
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <h3 className="trust-label">{stat.label}</h3>
                {stat.description && <p className="trust-description">{stat.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustSection;