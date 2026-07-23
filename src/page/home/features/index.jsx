import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import './style.css';
import { featuresData, featuresSectionHeading as sectionHeading } from '../../../data/data';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(featuresData[0]);

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? (
      <IconComponent size={24} strokeWidth={2.3} />
    ) : (
      <Icons.Settings size={24} />
    );
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55 } },
    exit: { opacity: 0, y: -16, filter: 'blur(8px)', transition: { duration: 0.32 } }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="features-section" id="features">
      <div className="features-container">
         <div className="feature-heading">
            <h2>{sectionHeading.title} <span>{sectionHeading.accent}</span></h2>
          <p className="section-descriptions">
            {sectionHeading.description}
          </p>
        </div>

        <div className="features-layout">
          {/* Sidebar */}
          <div className="features-sidebar">
            {featuresData.map((feature) => (
              <button
                key={feature.id}
                className={`feature-menu-item ${selectedFeature.id === feature.id ? 'active' : ''}`}
                onClick={() => setSelectedFeature(feature)}
                type="button"
              >
                <div className="feature-menu-icon-wrapper">
                  {getIcon(feature.icon)}
                </div>
                <span className="feature-menu-text">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Detail view */}
          <div className="features-detail-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature.id}
                className="feature-detail"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="feature-image-column">
                  <div className="feature-image-wrapper">
                    <img
                      src={selectedFeature.image}
                      alt={`${selectedFeature.headline} illustration`}
                      className="feature-image"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="feature-text-column">
                  <div className="feature-icon-large">
                    {getIcon(selectedFeature.icon)}
                  </div>

                  <h3 className="feature-headline">{selectedFeature.headline}</h3>

                  <p className="feature-description">{selectedFeature.description}</p>

                  <motion.div
                    className="feature-capabilities"
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h4 className="capabilities-title">Key Capabilities:</h4>
                    <ul className="capabilities-list">
                      {selectedFeature.capabilities.map((cap, idx) => {
                        const [label, value] = cap.split(':').map(s => s.trim());
                        return (
                          <motion.li key={idx} className="capability-item" variants={itemVariants}>
                            <Icons.CheckCircle2 size={18} className="capability-icon" />
                            <div>
                              <strong>{label}:</strong>
                              {value && <span className="capability-value">{value}</span>}
                            </div>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;