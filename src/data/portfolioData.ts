export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface Pillar {
  id: string;
  title: string;
  badge: string;
  iconName: 'shield' | 'check-circle' | 'file-text' | 'lock';
  description: string;
  points: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  location: string;
  isRemote?: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
}

export interface ValidatedSystem {
  id: string;
  name: string;
  category: 'process' | 'lab' | 'records' | 'spreadsheets';
  badges: string[];
  description: string;
  bullets: string[];
  specBadge: string;
  modalOverview: string;
  modalValidationScope: string[];
}

export const METRICS: Metric[] = [
  {
    value: '5+',
    label: 'Years of Experience',
    detail: 'Pharma & Risk Consulting',
  },
  {
    value: '10+',
    label: 'Systems Validated',
    detail: 'From Planning to Release',
  },
  {
    value: 'Zero',
    label: 'Critical Audit Findings',
    detail: 'During Regulatory Inspections',
  },
  {
    value: '100%',
    label: 'Data Integrity Focus',
    detail: 'GAMP 5, 21 CFR Part 11 & EU Annex 11',
  },
];

export const PILLARS: Pillar[] = [
  {
    id: 'cyber-risk',
    title: 'Cyber & Technology Risk Advisory',
    badge: 'PwC India',
    iconName: 'shield',
    description:
      'I help teams identify and manage technology and cybersecurity risks before they cause real problems. My focus is on reviewing IT controls, spot-checking vulnerabilities, and making sure security measures fit smoothly into everyday work.',
    points: [
      'Evaluating IT controls and cybersecurity posture across client systems',
      'Securing connected laboratory instruments and production plant networks',
      'Explaining complex technical risks to leadership in clear, practical terms',
    ],
  },
  {
    id: 'csv-lifecycle',
    title: 'Computerized System Validation (CSV)',
    badge: 'GAMP 5 & V-Model',
    iconName: 'check-circle',
    description:
      'Years of hands-on experience qualifying software and computerized equipment in regulated pharmaceutical facilities. I guide systems through the complete testing cycle—from defining user requirements to executing IQ, OQ, and PQ protocols.',
    points: [
      'Writing and executing practical IQ, OQ, and PQ validation protocols',
      'Conducting risk assessments guided by GAMP 5 software categories',
      'Organizing validation packages and answering auditor questions during inspections',
    ],
  },
  {
    id: 'data-integrity',
    title: 'Data Integrity & ALCOA++ Standards',
    badge: '21 CFR Part 11',
    iconName: 'file-text',
    description:
      'Making sure digital records, audit trails, and electronic signatures remain accurate, traceable, and protected. I help configure systems so data cannot be accidentally deleted, overwritten, or modified without a trace.',
    points: [
      'Testing audit trails, automated timestamps, and secure log archives',
      'Setting up user access levels, role boundaries, and segregation of duties',
      'Configuring compliant electronic signatures and reliable record backups',
    ],
  },
  {
    id: 'it-grc',
    title: 'IT Governance & Risk Management',
    badge: 'ISO Frameworks',
    iconName: 'lock',
    description:
      'Applying proven IT governance frameworks to keep systems stable and compliant. I help organizations evaluate third-party vendor risks, manage software change requests, and verify backup and disaster recovery plans.',
    points: [
      'Conducting practical risk assessments aligned with ISO 27001 standards',
      'Testing system backups and running hands-on recovery drills',
      'Reviewing software vendors and evaluating change control requests',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Associate - Cyber & Digital Risk Advisory',
    company: 'PwC India',
    dates: 'Mar 2026 - Present',
    location: 'Gurugram, Haryana (Remote)',
    isRemote: true,
    summary:
      'Helping clients across regulated industries identify cyber risks, review IT controls, and keep their systems secure and dependable.',
    bullets: [
      'Applying system validation and GAMP 5 principles to cybersecurity reviews so client systems stay safe, compliant, and dependable.',
      'Evaluating client IT controls, access policies, and operational risks against ISO 27001 standards.',
      'Helping teams safeguard critical data and maintain untampered audit trails.',
    ],
    tags: ['Cyber Risk', 'IT Controls', 'ISO 27001', 'GAMP 5', 'Risk Assessments'],
  },
  {
    role: 'Executive',
    company: 'Jubilant Pharmova Limited',
    dates: 'Mar 2024 - Nov 2025',
    location: 'Roorkee, UK (On-site)',
    summary:
      'Managed the qualification and validation of laboratory software and analytical instruments, keeping systems compliant and audit-ready.',
    bullets: [
      'Authored and executed IQ/OQ/PQ protocols for laboratory systems including Tiamo, Spectrum IR, and ICDAS.',
      'Set up data integrity checks, routine audit trail reviews, and user permission matrices for laboratory staff.',
      'Directly explained and defended validation documentation during customer and regulatory audits.',
    ],
    tags: ['CSV Lifecycle', 'Lab Systems', 'IQ/OQ/PQ Protocols', 'Audit Defense', '21 CFR Part 11'],
  },
  {
    role: 'Junior Officer',
    company: 'MACLEODS PHARMACEUTICALS LTD.',
    dates: 'Feb 2023 - Jan 2024',
    location: 'Baddi, HP (On-site)',
    summary:
      'Conducted analytical testing and stability monitoring for commercial pharmaceutical batches following standard operating procedures.',
    bullets: [
      'Performed routine quality control testing and documented laboratory results with high precision.',
      'Monitored stability samples according to established quality control guidelines and GLP rules.',
    ],
    tags: ['FDA Guidelines', 'Stability Testing', 'Analytical Work', 'Documentation'],
  },
  {
    role: 'Senior Officer',
    company: 'Alkem Laboratories Ltd.',
    dates: 'Jan 2022 - Jan 2023',
    location: 'Baddi, HP (On-site)',
    summary:
      'Handled analytical quality testing and stability data verification for pharmaceutical products.',
    bullets: [
      'Executed testing protocols and logged analytical data following strict GxP requirements.',
      'Verified raw data logs and stability test results prior to formal quality assurance review.',
    ],
    tags: ['Quality Assurance', 'GxP Testing', 'Documentation', 'Stability Studies'],
  },
  {
    role: 'Apprentice',
    company: 'Alkem Laboratories Ltd.',
    dates: 'Jan 2021 - Jan 2022',
    location: 'Baddi, HP (On-site)',
    summary:
      'Started in pharmaceutical quality control, building strong foundational laboratory and documentation skills.',
    bullets: [
      'Assisted senior chemists with sample preparation, volumetric analysis, and reagent calibration.',
      'Learned standard operating procedures (SOPs), safety protocols, and good documentation practices firsthand.',
    ],
    tags: ['Lab Basics', 'Quality Control', 'SOPs'],
  },
];

export const VALIDATED_SYSTEMS: ValidatedSystem[] = [
  {
    id: 'eurotherm-reviewer',
    name: 'Eurotherm Data Reviewer 5.3.0',
    category: 'process',
    badges: ['GAMP 5 Cat 3', '21 CFR Part 11'],
    description:
      'Qualified and configured Eurotherm Data Reviewer to securely collect and record temperature and humidity trends in production cleanrooms.',
    bullets: [
      'Confirmed that user logins, parameter changes, and batch events are permanently logged in audit trails.',
      'Configured role-based access so only authorized personnel can change setpoints or export files.',
      'Verified automated daily backups and rehearsed restoring test databases from archives.',
    ],
    specBadge: 'Audit Trail & Backups',
    modalOverview:
      'End-to-end qualification and setup of Eurotherm Data Reviewer 5.3.0 for monitoring continuous environmental and process records in production units.',
    modalValidationScope: [
      'Audit Trail Testing: Confirmed tamper-proof tracking of logins, setpoint adjustments, and report generation.',
      'User Access Roles: Set up clear permission boundaries between Operators, Supervisors, and Admins.',
      'Backup & Recovery: Verified automatic daily encrypted backups and practiced restoring test data.',
    ],
  },
  {
    id: 'eurotherm-bridge',
    name: 'Eurotherm Bridge 5.7',
    category: 'process',
    badges: ['GAMP 5 Cat 3', 'Data Integrity'],
    description:
      'Validated Eurotherm Bridge to ensure continuous, error-free communication between manufacturing floor devices and central servers.',
    bullets: [
      'Verified that all device communication events and data transfers get recorded in system logs.',
      'Simulated network disconnections to confirm the system safely caches data and recovers without loss.',
      'Restricted open communication ports and verified firewall rules to protect plant telemetry.',
    ],
    specBadge: 'Data Transfer',
    modalOverview:
      'Validation and secure rollout of Eurotherm Bridge v5.7, ensuring real-time data sync between plant floor instruments and central databases.',
    modalValidationScope: [
      'Network Disconnect Tests: Confirmed automatic data caching and packet resending during network interruptions.',
      'Security Setup: Validated firewall settings and closed unnecessary communication ports.',
    ],
  },
  {
    id: 'elogbook',
    name: 'eLogbook System',
    category: 'records',
    badges: ['GAMP 5 Cat 5', 'e-Signatures'],
    description:
      'Validated an electronic logbook system that replaced paper binders for equipment cleaning, daily calibration, and room access.',
    bullets: [
      'Tested secure electronic signatures to meet 21 CFR Part 11 requirements for individual accountability.',
      'Verified audit logging across every logbook entry, correction, and manager sign-off.',
      'Set up user permission groups matched to each shift and department.',
    ],
    specBadge: 'Electronic Logs',
    modalOverview:
      'Transitioned physical paper logs to a compliant digital logbook for tracking equipment maintenance, cleaning cycles, and room usage.',
    modalValidationScope: [
      'Electronic Signatures: Tested password-prompted signing steps and time-stamp verification.',
      'Audit Logging: Verified complete tracking for edits, comments, and approvals.',
    ],
  },
  {
    id: 'tiamo',
    name: 'Tiamo 2.5 Systems (Metrohm)',
    category: 'lab',
    badges: ['GAMP 5 Cat 4', 'Lab Systems'],
    description:
      'Qualified Metrohm Tiamo 2.5 software used for automated titrations, pH measurement, and conductivity tests in the quality control laboratory.',
    bullets: [
      'Wrote and executed installation and operational qualification (IQ/OQ) protocols for lab workstations.',
      'Validated calculation formulas against pharmacopeia standards to guarantee accurate titration results.',
      'Trained lab analysts on user permissions and verified automated database backups.',
    ],
    specBadge: 'QC Titration',
    modalOverview:
      'Full validation of Metrohm Tiamo 2.5 controlling automated titrators, pH meters, and conductivity meters in the quality control laboratory.',
    modalValidationScope: [
      'Formula Checks: Validated calculation endpoints against certified pharmacopeia standards.',
      'Backup & Recovery: Successfully conducted and documented database recovery drills.',
    ],
  },
  {
    id: 'spectrum-ir',
    name: 'Spectrum IR ES 10.7.2 (FTIR)',
    category: 'lab',
    badges: ['GAMP 5 Cat 4', 'FTIR Spectroscopy'],
    description:
      'Completed data integrity qualification for PerkinElmer FTIR software, making sure raw spectra cannot be overwritten or altered.',
    bullets: [
      'Configured Windows file and folder security so analysts cannot modify, rename, or delete raw spectral data.',
      'Tested audit trail features and verified electronic signatures against 21 CFR Part 11 rules.',
      'Created step-by-step procedures for periodic audit trail reviews by the quality team.',
    ],
    specBadge: 'FTIR Spectroscopy',
    modalOverview:
      'Data integrity validation of PerkinElmer Spectrum IR ES software controlling infrared spectrometers in the analytical laboratory.',
    modalValidationScope: [
      'File Protection: Locked file permissions so raw spectral data cannot be renamed or overwritten.',
      'Audit Trail Review: Created clear guidelines for routine quality reviews of system audit logs.',
    ],
  },
  {
    id: 'spreadsheets',
    name: 'GxP Validated Spreadsheets',
    category: 'spreadsheets',
    badges: ['GAMP 5 Cat 3/4/5', 'QC Calculations'],
    description:
      'Validated analytical calculation spreadsheets used by QC chemists for drug assays, dissolution testing, and standard calibrations.',
    bullets: [
      'Locked and password-protected formula cells to prevent accidental changes or calculation errors.',
      'Tested boundary values, negative numbers, and edge cases to ensure formulas always compute correctly.',
      'Established controlled master templates with version numbers and clear change approval steps.',
    ],
    specBadge: 'QC Calculations',
    modalOverview:
      'Validation of Excel calculation templates used for testing drug potency, dissolution curves, and routine analytical assays.',
    modalValidationScope: [
      'Cell Protection: Confirmed password-locked formula cells and tested extreme decimal inputs.',
      'Version Control: Set up a controlled master template system so only approved versions are used.',
    ],
  },
];
