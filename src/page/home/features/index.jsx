import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import './style.css';

import img1 from '../../../assets/patient.png';
import img2 from '../../../assets/appoinment.png';
import img3 from '../../../assets/clinicalnotes.png';
// import img4 from '../../assets/encounter.png';
import img5 from '../../../assets/laborder.png';
import img6 from '../../../assets/pescription.png';  
import img7 from '../../../assets/vital.png';


const featuresData = [
  {
    id: 1,
    title: 'Patient Registration & History (The Entry Point)',
    headline: 'One Patient, One Record',
    icon: 'FileText',
    image: img1,
    description: 'Centralized patient data management with secure, CBAHI-compliant archiving.',
    capabilities: [
      'Centralized Data: Demographics, history, and documents in one view',
      'Universal Search: Find patient records instantly across any department',
      'Secure Archiving: CBAHI-compliant history tracking and storage'
    ]
  },
  {
    id: 2,
    title: 'Appointments & Encounters (The Interaction)',
    headline: 'Seamless Patient Flow',
    icon: 'Calendar',
    image: img2,
    description: 'Smart scheduling with real-time queue management and encounter tracking.',
    capabilities: [
      'Smart Scheduling: Drag-and-drop booking with conflict detection',
      'Queue Management: Real-time tracking of patient status (Waiting, In-Consult)',
      'Encounter History: Complete timeline of all previous visits'
    ]
  },
  {
    id: 3,
    title: 'Vital Signs & Triage (The Assessment)',
    headline: 'Rapid Clinical Assessment',
    icon: 'HeartPulse',
    image: img7,
    description: 'Quick capture of vitals with smart alerts and trending visualization.',
    capabilities: [
      'Auto-calculated scores: NEWS, MEWS, qSOFA',
      'Abnormal value highlighting & alerts',
      'Historical trending graphs'
    ]
  },
  {
    id: 4,
    title: 'Clinical Notes & Diagnosis (The Consultation)',
    headline: 'Intelligent Documentation',
    icon: 'FileSignature',
    image: img3,
    description: 'Structured, searchable clinical notes with smart templates.',
    capabilities: [
      'SOAP & Progress Notes with auto-fill',
      'ICD-10 / SNOMED CT diagnosis coding',
      'Attachment support (photos, PDFs, scans)'
    ]
  },
  {
    id: 5,
    title: 'Lab, Imaging & Diagnostic Orders (The Investigation)',
    headline: 'Integrated Order & Results',
    icon: 'TestTube',
    image: img5,
    description: 'Seamless ordering with automatic result integration and tracking.',
    capabilities: [
      'Order from consultation screen',
      'Auto-sync lab/imaging results',
      'Real-time status updates'
    ]
  },
  {
    id: 6,
    title: 'Prescriptions & Procedures (The Treatment)',
    headline: 'Safe & Digital Prescribing',
    icon: 'Pill',
    image: img6,
    description: 'Electronic prescriptions with drug interaction checking and templates.',
    capabilities: [
      'e-Prescribing to in-house/outside pharmacy',
      'Drug-allergy & interaction alerts',
      'Procedure templates & documentation'
    ]
  },
//   {
//     id: 7,
//     title: 'Billing & Payments (The Transaction)',
//     headline: 'Automated & Compliant Billing',
//     icon: 'Receipt',
//     image: img2,
//     description: 'ZATCA-compliant e-invoicing with unified multi-department billing.',
//     capabilities: [
//       'Automatic charge aggregation',
//       'ZATCA QR code generation',
//       'Multiple payment methods support'
//     ]
//   },
//   {
//     id: 8,
//     title: 'Doctor Commission & Revenue (The Incentive)',
//     headline: 'Transparent Earnings Tracking',
//     icon: 'DollarSign',
//     image: img1,
//     description: 'Automated commission calculation with real-time doctor dashboards.',
//     capabilities: [
//       'Rule-based commission structure',
//       'Instant commission on paid invoices',
//       'Doctor performance & earnings reports'
//     ]
//   },
//   {
//     id: 9,
//     title: 'Inventory & Pharmacy (The Fulfillment)',
//     headline: 'Smart Stock Management',
//     icon: 'Package',
//     image: img5,
//     description: 'Real-time inventory with expiry tracking and auto-reorder.',
//     capabilities: [
//       'Automatic stock deduction on dispense',
//       'Near-expiry & low-stock alerts',
//       'Purchase order generation'
//     ]
//   },
//   {
//     id: 10,
//     title: 'Insurance Policies & Claims (The Reimbursement)',
//     headline: 'NPHIES-Ready Insurance Handling',
//     icon: 'Shield',
//     image: img2,
//     description: 'Real-time eligibility checks and automated claims processing.',
//     capabilities: [
//       'Instant NPHIES eligibility verification',
//       'Automated claim scrubbing',
//       'Co-pay & deductible auto-application'
//     ]
//   },
//   {
//     id: 11,
//     title: 'Staff Management (Doctors, Nurses, Admin, Support Staff)',
//     headline: 'Unified Workforce Control',
//     icon: 'Users',
//     image: img4,
//     description: 'Role-based access, rostering, and performance tracking for all staff.',
//     capabilities: [
//       'Granular role-based permissions',
//       'Automated shift scheduling',
//       'Attendance & payroll integration'
//     ]
//   },
//   {
//     id: 12,
//     title: 'Audit Logs & Compliance (The Governance)',
//     headline: 'Accreditation-Ready Traceability',
//     icon: 'FileCheck',
//     image: img3,
//     description: 'Complete audit trail with strong encryption and access logging.',
//     capabilities: [
//       'Timestamped action logging',
//       'User activity monitoring',
//       'HIPAA / CBAHI compliant protocols'
//     ]
//   }
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
            <h2>core <span>Features</span></h2>
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