import images from '../assets/images';

// Nav Section Data
export const navLinks = [
  { name: 'Trust', href: '#trust' },
  { name: 'AI model', href: '#aimodel' },
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Competitors', href: '#competitors' },
  { name: 'FAQ', href: '#faq' },
];

export const ctaLabel = 'Request a Demo';
export const brandName = 'Cure';
export const brandAccent = 'Verx';

// Hero Section Data
export const heroChips = [
  { label: 'Patient Records', sub: 'Updated live', pos: 'chip-one' },
  { label: 'Lab Reports', sub: 'Auto-verified', pos: 'chip-three' },
];

export const heroParticles = [
  { top: '12%', left: '6%', size: 6, delay: '0s', dur: '9s' },
  { top: '22%', left: '92%', size: 4, delay: '-2s', dur: '11s' },
  { top: '68%', left: '3%', size: 5, delay: '-4s', dur: '10s' },
  { top: '80%', left: '88%', size: 7, delay: '-1s', dur: '12s' },
  { top: '45%', left: '50%', size: 4, delay: '-5s', dur: '8s' },
  { top: '8%', left: '45%', size: 5, delay: '-3s', dur: '10.5s' },
];

export const heroContent = {
  eyebrow: 'Hospital Information System',
  headline: 'The Unified Enterprise Hospital Information System (HIS) for',
  highlight: 'Modern Healthcare',
  subtext:
    'Streamline clinical workflows, automate billing, and elevate patient care with an AI-powered EHR/EMR platform. Built for hospitals that demand efficiency.',
  trustLine: 'Trusted for hospitals, clinics, and diagnostic centers.',
  buttons: {
    demoLabel: 'Book a Live Demo',
    modulesLabel: 'View System Architecture',
  },
  monitorCaption: 'All departments connected',
};

// Trust Section Data
export const complianceBadges = [
  {
    icon: 'Share2',
    label: 'HL7/FHIR Compliance',
    description: 'For seamless health data exchange',
  },
  {
    icon: 'Lock',
    label: 'HIPAA & GDPR Certified',
    description: 'Absolute patient data encryption',
  },
  {
    icon: 'Landmark',
    label: 'Health Regulations',
    description: 'Local healthcare board clearance',
  },
  {
    icon: 'ShieldCheck',
    label: 'ISO 27001 Certified',
    description: 'Information security management',
  },
];

export const trustLogos = [
  images.logo1,
  images.logo2,
  images.logo3,
  images.logo4,
  images.logo5,
];

export const trustStats = [
  {
    number: 99.9,
    suffix: '%',
    decimals: 1,
    label: 'PLATFORM UPTIME',
    description: 'Reliable infrastructure with 99.9% server uptime',
  },
  {
    number: 45,
    suffix: '%',
    label: 'FASTER CHECK-INS',
    description: 'Reduction in patient check-in and waiting times',
  },
  {
    number: 150,
    suffix: '+',
    label: 'CONNECTED MODULES',
    description: 'Medical modules & lab integrations included',
  },
  {
    isText: true,
    text: '0',
    suffix: '',
    label: 'REVENUE LEAKAGE',
    description: 'Automated invoicing that closes every billing gap',
  },
];

export const trustHeading = {
  title: 'Trusted',
  accent: 'Worldwide',
  description: 'Powering healthcare providers globally with reliable and scalable solutions.',
};

export const logoMarqueeHeading = {
  title: 'Compliant & Certifiedby',
  accent: 'Healthcare Authorities',
  description:
    'Our HIS aligns with global digital health frameworks and local department regulations to ensure seamless data interoperability and security.',
};

// Client Section Data
export const clientLogos = [
  images.hp1,
  images.hp2,
  images.hp3,
  images.hp4,
  images.hp5,
];

export const clientContent = {
  title: "Brands We've ",
  titleAccent: "Worked With",
  subheading: "A few of the companies we've partnered with to bring their ideas to life.",
};

// CTA1 Section Data
export const cta1Content = {
  badge: '✦ Get Started Today',
  title: 'Ready to see how it works',
  titleAccent: 'in a real clinical setting?',
  description:
    'Join 12,000+ healthcare providers who trust CureVerx to manage patients, streamline operations, and deliver exceptional care.',
  buttonLabel: 'Take a 10-Minute Virtual Tour',
  note: '✓ No credit card required · 14-day free trial · Cancel anytime',
  image: images.ctaSection,
  alt: 'CureVerx Dashboard',
};

// AIModel Section Data
export const aimodelFeatures = [
  {
    title: 'Predictive Diagnostics & Risk Scoring',
    copy:
      'Analyze patient history instantly to flag high-risk anomalies, medication contradictions, and early critical care indicators.',
  },
  {
    title: 'Automated Smart Medical Transcriptions',
    copy:
      "Doctors speak; our integrated AI documents. Convert voice to text directly into the patient's EMR/EHR file during consultations.",
  },
  {
    title: 'Dynamic Intelligent Bed & Resource Allocation',
    copy:
      'AI forecasts ER influxes and automatically optimizes ICU bed, surgery room, and staff schedules to prevent bottlenecks.',
  },
  {
    title: 'Insurance Claims Predictive Analytics',
    copy:
      'Reduce claim rejections. The built-in AI audits ICD-10 medical coding instantly before submission to ensure higher approval rates.',
  },
];

export const aimodelHeading = ['Smart Healthcare:AI-Driven', ' Clinical Intelligence'];
export const aimodelSubtext =
  'Built-in clinical AI analyzes patient records, documentations and claims in real time, delivering instant insight for faster, smarter care.';
export const aimodelVisualImage = images.aiSection1;
export const aimodelFloatingBadges = [
  { value: '98%', label: 'Reporting Accuracy' },
  { value: '24/7', label: 'Operations Monitoring' },
];

// Features Section Data
export const featuresData = [
  {
    id: 1,
    title: 'Centralized EHR/EMR & Patient Registry',
    headline: 'One Record, Every Visit',
    icon: 'FileText',
    image: images.patient,
    description: 'Digital onboarding from day one. Maintain a single, immutable timeline of patient histories, demographics, and vitals.',
    capabilities: [
      'Digital Onboarding: Paperless registration from day one.',
      'Unified Timeline: Immutable history of demographics and vitals.',
      'Instant Retrieval: Single record accessible across every department.',
    ],
  },
  {
    id: 2,
    title: 'Secure Patient Portal',
    headline: 'Care, Accessible Anytime',
    icon: 'Globe',
    image: images.appointment,
    description: 'Empower patients to view laboratory reports, download prescriptions, check active diagnoses, and manage appointments securely online.',
    capabilities: [
      'Lab Reports: View results online, no waiting on phone calls.',
      'Prescriptions: Download and manage prescriptions anytime.',
      'Appointments: Book, reschedule, and track visits securely.',
    ],
  },
  {
    id: 3,
    title: 'Lab Order, Prescriptions & Medicine Inventory',
    headline: 'Prescribe, Fulfill, Track',
    icon: 'Pill',
    image: images.prescription,
    description: 'Electronic prescribing (e-Rx) connects doctors directly to the in-house pharmacy and laboratory networks for rapid fulfillment.',
    capabilities: [
      'e-Prescribing: Direct link from doctor to in-house pharmacy.',
      'Lab Integration: Orders routed straight to diagnostic networks.',
      'Rapid Fulfillment: Real-time inventory and dispensing sync.',
    ],
  },
  {
    id: 4,
    title: 'Advanced Surgery & Ward Manage',
    headline: 'Every Bed, Every Theater',
    icon: 'Scissors',
    image: images.vital,
    description: 'Comprehensive scheduling and logging for operating theaters, pre-op, and post-op tracking without paper trail delays.',
    capabilities: [
      'OT Scheduling: Conflict-free booking for operating theaters.',
      'Pre-Op Tracking: Structured checklists before every procedure.',
      'Post-Op Logging: Paperless recovery and ward monitoring.',
    ],
  },
  {
    id: 5,
    title: 'Full-Scale Healthcare Accounting & Insurance',
    headline: 'Billing Without Blind Spots',
    icon: 'Receipt',
    image: images.clinicalNotes,
    description: 'Automated corporate invoicing, co-pay tracking, automated rebates, and deep financial auditing tailored for complex hospital setups.',
    capabilities: [
      'Corporate Invoicing: Automated billing for institutional clients.',
      'Co-Pay Tracking: Real-time deductible and rebate calculation.',
      'Financial Auditing: Deep reporting built for complex hospital setups.',
    ],
  },
];

export const featuresSectionHeading = {
  title: 'End-to-End Clinical &',
  accent: 'Administrative Control',
  description: 'Comprehensive hospital management tools in one unified platform.',
};

// Testimonials Section Data
export const testimonials = [
  {
    id: 1,
    quote:
      'Transitioning our entire clinical workflow seemed daunting, but this system completely unified our departments. Our doctors spend less time clicking and more time treating patients.',
    boldPart: 'Our doctors spend less time clicking and more time treating patients',
    name: 'Dr. Omar Siddiqui',
    title: 'Chief Medical Officer',
    company: 'Liaquat National Hospital, Karachi',
    initials: 'OS',
  },
  {
    id: 2,
    quote:
      'The automated billing and insurance claim validation cut our overhead instantly. Revenue leakage dropped to near zero within the first quarter of deployment.',
    boldPart: 'Revenue leakage dropped to near zero within the first quarter of deployment',
    name: 'Farhan Qureshi',
    title: 'Hospital Director & CFO',
    company: 'Doctors Hospital, Lahore',
    initials: 'FQ',
  },
  {
    id: 3,
    quote:
      'Our billing errors dropped almost overnight. CureVerx keeps insurance claims, invoices, and pharmacy charges in one place, so nothing falls through the cracks.',
    boldPart: 'keeps insurance claims, invoices, and pharmacy charges in one place',
    name: 'Sana Farooq',
    title: 'Finance Director',
    company: 'Al-Noor Medical Complex, Islamabad',
    initials: 'SF',
  },
  {
    id: 4,
    quote:
      "Doctors can now pull up a patient's full history, labs, and prescriptions from any department. It's made handovers between shifts genuinely safer.",
    boldPart: 'made handovers between shifts genuinely safer',
    name: 'Dr. Hassan Iqbal',
    title: 'Head of Emergency Medicine',
    company: 'Fatima Memorial Hospital, Lahore',
    initials: 'HI',
  },
  {
    id: 5,
    quote:
      'Rolling out CureVerx across five branches took weeks, not months. Our nursing staff picked it up almost instantly, and reporting to management is finally consistent.',
    boldPart: 'reporting to management is finally consistent',
    name: 'Nadia Sheikh',
    title: 'Director of Nursing Services',
    company: 'City Care Hospitals, Faisalabad',
    initials: 'NS',
  },
];

export const testimonialCopy = {
  eyebrow: 'Trusted across hospitals & clinics',
  heading: 'Our Clients Love',
  headingAccent: 'CureVerx',
};

// Competitors Section Data
export const competitorsFeatures = [
  'Unified AI Clinical Insights',
  'Integrated Patient Portal',
  'Full Accounting & Insurance',
  'Offline-to-Cloud Sync',
  'Multi-Branch Control',
];

export const competitorsList = [
  {
    name: 'Our HIS Solution',
    highlight: true,
    values: [
      'Yes (Built-in)',
      'Yes (Free Native)',
      'Yes (Odoo-Grade)',
      'Yes (Enterprise)',
      'Yes (Real-time)',
    ],
  },
  {
    name: 'Legacy HIS Systems',
    values: [
      'Add-on Only',
      'Expensive Add-on',
      'Basic Billing',
      'Heavy On-Prem Only',
      'Complex Setup',
    ],
  },
  {
    name: 'Standalone EMR Apps',
    values: ['No', 'Limited', 'No', 'Cloud Only', 'No'],
  },
  {
    name: 'Paper-Based / Manual',
    values: ['No', 'No', 'Manual', 'No', 'No'],
  },
];

export const competitorsSectionHeading = {
  eyebrow: 'Feature Comparison',
  title: 'Feature',
  accent: 'Matrix',
  description:
    'See how our HIS solution stacks up against legacy systems, standalone EMR apps, and paper-based workflows.',
};

// CTA2 Section Data
export const cta2Content = {
  badge: 'Now onboarding new practices',
  title: 'Let’s map an efficiency plan',
  titleAccent: "for your facility's bed count.",
  description:
    'Scheduling, records, billing, and care coordination in one place. Set up your workspace in under a day, no IT team required.',
  buttonLabel: 'Book a live demo',
};

// WhoWe Section Data
export const whoweProviders = [
  {
    segment: 'Clinic / Specialized Center',
    title: 'Growth Stack',
    subtitle: 'Perfect for single-facility centers needing unified clinical workflows.',
    features: [
      'Core EHR/EMR',
      'Patient Registry',
      'Prescriptions',
      'Lab Orders',
      'Basic Billing',
    ],
    cta: 'Start Small Today',
    featured: false,
  },
  {
    segment: 'Multispecialty Hospital',
    title: 'Enterprise Health',
    subtitle: 'Fully scalable architecture for large hospitals with high patient turnover.',
    features: [
      'Everything in Growth Stack',
      'Secure Patient Portal',
      'Full Accounting',
      'Insurance Claim Module',
      'Surgery Tracker',
      'Advanced Inventory',
    ],
    cta: 'Go Enterprise',
    featured: true,
  },
  {
    segment: 'Custom / Healthcare Network',
    title: 'Custom Ecosystem',
    subtitle: 'For multi-branch hospital networks requiring localized server hosting.',
    features: [
      'Dedicated Cloud/On-Premise',
      'Full AI Agent Integration',
      'Custom APIs for Hardware',
      '24/7 Dedicated SLA Support',
    ],
    cta: 'Contact Our Architect',
    featured: false,
  },
];

export const whoweSectionHeading = {
  title: 'Built for every',
  accent: 'kind of care',
  description: 'One system, indexed for how your team actually works — pick the tier that fits.',
};

// FAQ Section Data
export const faqData = [
  {
    question: 'How secure is patient medical data on this platform?',
    answer:
      'Security is paramount. The system utilizes military-grade AES-256 encryption for data at rest and TLS 1.3 for data in transit. We are fully compliant with global data protection architectures (HIPAA/GDPR) ensuring your hospital stays completely liability-free.',
  },
  {
    question:
      'Can the platform integrate with our existing laboratory hardware and imaging machines?',
    answer:
      'Yes. Our HIS features an advanced API layer that seamlessly connects with standard medical imaging equipment, HL7-compliant laboratory analyzers, and DICOM formats for radiology.',
  },
  {
    question:
      'Is there a limit to the number of doctors, staff, or patients the system can handle?',
    answer:
      'No. The underlying architecture is built to auto-scale on secure servers, comfortably supporting massive traffic influxes, hundreds of concurrent medical personnel, and millions of patient medical profiles.',
  },
  {
    question:
      'How long does a complete data migration from our legacy software take?',
    answer:
      "Depending on your legacy system's structural complexity, our dedicated implementation team safely migrates your history records, registry entries, and financial ledgers within 2 to 4 weeks with zero active operational downtime.",
  },
  {
    question:
      'Does the platform support localized billing, tax structures, and country-specific insurance networks?',
    answer:
      'Absolutely. The system houses an incredibly diversified financial module allowing you to configure multi-currency invoicing, localized country tax structures, and automated insurance billing flows tailored precisely to your region.',
  },
];

export const faqHeader = {
  title: 'Everything you need to know',
  titleHighlight: 'about CureVerx',
  subtitle:
    "Have questions? We've got answers. If you can't find what you're looking for, feel free to reach out to our support team.",
};

export const faqInfoCard = {
  title: 'Still have questions?',
  text: 'Need more help? Our support team is here to help.',
  cta: 'Get in touch',
};

// Form Section Data
export const volumeOptions = [
  'Under 20 beds / <500 patients per month',
  '20–75 beds / 500–3,000 patients per month',
  '75–200 beds / 3,000–10,000 patients per month',
  '200+ beds / 10,000+ patients per month',
];

export const demoContent = {
  image: images.doctor1From,
  alt: 'CureVerx platform preview',
  heading: 'Request a Personalized Demo &',
  headingAccent: 'System Breakdown',
  subtext:
    "Tell us about your facility and we'll tailor the walkthrough to the modules that matter for your size and patient volume.",
  successMessage:
    'Thanks — a solutions architect will reach out within one business day to schedule your live preview.',
};

// Footer Section Data
export const productLinks = [
  { label: 'Unified Solution', href: '/#solution' },
  { label: 'Who We Serve', href: '/#who-we-serve' },
  { label: 'Advantages', href: '/#advantages' },
  { label: 'Trust & Security', href: '/#trust' },
];

export const companyLinks = [
  { label: 'About', href: '/#who-we-serve' },
  { label: 'Careers', href: '/#demo' },
  { label: 'Blog', href: '/#faq' },
  { label: 'Contact', href: '/#demo' },
];

export const legalLinks = [
  { label: 'Privacy', href: '/#faq' },
  { label: 'Terms', href: '/#demo' },
  { label: 'Security', href: '/#trust' },
];

export const footerContent = {
  brandDescription: 'Engineering the future of business and clinical automation.',
  email: 'hello@cureverx.io',
  phone: '+1 (555) 010-1200',
  address: 'Global HQ · Available in 120+ countries',
};
