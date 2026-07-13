import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import './style.css';

import img1 from '../../../assets/patient.png';
import img2 from '../../../assets/appoinment.png';
import img3 from '../../../assets/clinicalnotes.png';
import img5 from '../../../assets/laborder.png';
import img6 from '../../../assets/pescription.png';
import img7 from '../../../assets/vital.png';


const featuresData = [
  {
    id: 1,
    title: 'Centralized EHR/EMR & Patient Registry',
    headline: 'One Record, Every Visit',
    icon: 'FileText',
    image: img1,
    description: 'Digital onboarding from day one. Maintain a single, immutable timeline of patient histories, demographics, and vitals.',
    capabilities: [
      'Digital Onboarding: Paperless registration from day one',
      'Unified Timeline: Immutable history of demographics and vitals',
      'Instant Retrieval: Single record accessible across every department'
    ]
  },
  {
    id: 2,
    title: 'Secure Patient Portal',
    headline: 'Care, Accessible Anytime',
    icon: 'Globe',
    image: img2,
    description: 'Empower patients to view laboratory reports, download prescriptions, check active diagnoses, and manage appointments securely online.',
    capabilities: [
      'Lab Reports: View results online, no waiting on phone calls',
      'Prescriptions: Download and manage prescriptions anytime',
      'Appointments: Book, reschedule, and track visits securely'
    ]
  },
  {
    id: 3,
    title: 'Lab Order, Prescriptions & Medicine Inventory',
    headline: 'Prescribe, Fulfill, Track',
    icon: 'Pill',
    image: img6,
    description: 'Electronic prescribing (e-Rx) connects doctors directly to the in-house pharmacy and laboratory networks for rapid fulfillment.',
    capabilities: [
      'e-Prescribing: Direct link from doctor to in-house pharmacy',
      'Lab Integration: Orders routed straight to diagnostic networks',
      'Rapid Fulfillment: Real-time inventory and dispensing sync'
    ]
  },
  {
    id: 4,
    title: 'Advanced Surgery & Ward Management',
    headline: 'Every Bed, Every Theater',
    icon: 'Scissors',
    image: img7,
    description: 'Comprehensive scheduling and logging for operating theaters, pre-op, and post-op tracking without paper trail delays.',
    capabilities: [
      'OT Scheduling: Conflict-free booking for operating theaters',
      'Pre-Op Tracking: Structured checklists before every procedure',
      'Post-Op Logging: Paperless recovery and ward monitoring'
    ]
  },
  {
    id: 5,
    title: 'Full-Scale Healthcare Accounting & Insurance',
    headline: 'Billing Without Blind Spots',
    icon: 'Receipt',
    image: img3,
    description: 'Automated corporate invoicing, co-pay tracking, automated rebates, and deep financial auditing tailored for complex hospital setups.',
    capabilities: [
      'Corporate Invoicing: Automated billing for institutional clients',
      'Co-Pay Tracking: Real-time deductible and rebate calculation',
      'Financial Auditing: Deep reporting built for complex hospital setups'
    ]
  }
];

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
            <h2>End-to-End Clinical & <span>Administrative Control</span></h2>
          <p className="section-descriptions">
            Comprehensive hospital management tools in one unified platform
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
                              <strong>{label}</strong>
                              {value && <span> : {value}</span>}
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