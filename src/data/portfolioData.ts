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
    detail: 'Pharma & Cyber Risk',
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
    detail: '21 CFR Part 11 & GAMP 5',
  },
];

export const PILLARS: Pillar[] = [
  {
    id: 'cyber-risk',
    title: 'Cyber & Digital Risk Advisory',
    badge: 'PwC India',
    iconName: 'shield',
    description:
      'I help organizations understand and manage cybersecurity and technology risks. My work focuses on evaluating IT controls, finding vulnerabilities before they become problems, and making sure security measures fit daily operations.',
    points: [
      'Assessing IT systems and cybersecurity posture for enterprise clients',
      'Securing connected lab instruments and production network environments',
      'Helping leadership understand technical risks in plain business terms',
    ],
  },
  {
    id: 'csv-lifecycle',
    title: 'Computerized System Validation (CSV)',
    badge: 'GAMP 5 & V-Model',
    iconName: 'check-circle',
    description:
      'Years of hands-on experience qualifying software and computerized equipment in regulated pharma environments. I handle the whole validation process from user requirements (URS) to IQ, OQ, and PQ testing.',
    points: [
      'Writing and executing clear, thorough IQ, OQ, and PQ validation protocols',
      'Performing risk assessments following GAMP 5 software categories',
      'Defending validation packages during regulatory audits and periodic reviews',
    ],
  },
  {
    id: 'data-integrity',
    title: 'Data Integrity & ALCOA++ Standards',
    badge: '21 CFR Part 11',
    iconName: 'file-text',
    description:
      'Ensuring electronic records, audit trails, and electronic signatures are accurate, secure, and compliant. I help teams set up systems so data cannot be accidentally lost or intentionally altered.',
    points: [
      'Verifying audit trail capture, time-stamping, and tamper-proof storage',
      'Setting up user access levels, roles, and segregation of duties',
      'Configuring compliant electronic signatures and long-term record archiving',
    ],
  },
  {
    id: 'it-grc',
    title: 'IT Governance & Risk Management',
    badge: 'ISO Frameworks',
    iconName: 'lock',
    description:
      'Applying standard IT governance frameworks to help teams stay compliant and resilient. This includes evaluating vendor risks, reviewing change controls, and testing backup and disaster recovery plans.',
    points: [
      'Running practical technical risk assessments aligned with ISO standards',
      'Testing disaster recovery and system backup procedures',
      'Reviewing IT vendors and managing software change controls',
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
      'Working with clients in regulated industries to assess cybersecurity risks, review IT controls, and build dependable digital systems.',
    bullets: [
      'Applying GAMP 5 and validation principles to cyber risk engagements so client systems stay compliant and secure.',
      'Performing IT risk assessments and evaluating controls against ISO standards.',
      'Helping clients protect sensitive data and maintain trustworthy electronic records.',
    ],
    tags: ['Cyber Risk', 'IT Controls', 'ISO 27001', 'GAMP 5', 'Risk Assessments'],
  },
  {
    role: 'Executive',
    company: 'Jubilant Pharmova Limited',
    dates: 'Mar 2024 - Nov 2025',
    location: 'Roorkee, UK (On-site)',
    summary:
      'Led the qualification and validation of laboratory software and analytical instruments, keeping systems compliant and audit-ready.',
    bullets: [
      'Wrote and executed IQ/OQ/PQ validation protocols for key lab systems including Tiamo, Spectrum IR, and ICDAS.',
      'Implemented data integrity checks, audit trail reviews, and user permission matrices for laboratory staff.',
      'Represented and defended validation documentation directly during internal and external audits.',
    ],
    tags: ['CSV Lifecycle', 'Lab Systems', 'IQ/OQ/PQ Protocols', 'Audit Defense', '21 CFR Part 11'],
  },
  {
    role: 'Junior Officer',
    company: 'MACLEODS PHARMACEUTICALS LTD.',
    dates: 'Feb 2023 - Jan 2024',
    location: 'Baddi, HP (On-site)',
    summary:
      'Worked in analytical testing and stability operations, following strict regulatory standards for FDA submissions.',
    bullets: [
      'Conducted routine analytical testing and maintained thorough documentation for laboratory batches.',
      'Managed stability samples and followed strict quality control guidelines.',
    ],
    tags: ['FDA Guidelines', 'Stability Testing', 'Analytical Work', 'Documentation'],
  },
  {
    role: 'Senior Officer',
    company: 'Alkem Laboratories Ltd.',
    dates: 'Jan 2022 - Jan 2023',
    location: 'Baddi, HP (On-site)',
    summary:
      'Handled analytical testing and quality documentation for pharmaceutical stability programs.',
    bullets: [
      'Carried out testing and data reporting according to standard operating procedures and international GxP rules.',
      'Maintained sample logs and verified stability data before final review.',
    ],
    tags: ['Quality Assurance', 'GxP Testing', 'Documentation', 'Stability Studies'],
  },
  {
    role: 'Apprentice',
    company: 'Alkem Laboratories Ltd.',
    dates: 'Jan 2021 - Jan 2022',
    location: 'Baddi, HP (On-site)',
    summary:
      'Started career learning pharmaceutical quality control, laboratory safety, and standard testing procedures.',
    bullets: [
      'Assisted senior analysts with sample preparation, basic testing, and record keeping.',
      'Built a solid understanding of everyday laboratory workflows and data documentation.',
    ],
    tags: ['Lab Basics', 'Quality Control', 'SOPs'],
  },
];

export const VALIDATED_SYSTEMS: ValidatedSystem[] = [
  {
    id: 'eurotherm-reviewer',
    name: 'Eurotherm Data Reviewer 5.3.0',
    category: 'process',
    badges: ['GAMP 5 Cat 4', '21 CFR Part 11'],
    description:
      'Validated and configured Eurotherm Data Reviewer to manage continuous temperature and batch records across manufacturing areas.',
    bullets: [
      'Tested the audit trail to make sure every user action and parameter change is recorded properly.',
      'Configured role-based user permissions to keep operators and supervisors in appropriate access levels.',
      'Verified automated daily backups and tested data restoration procedures.',
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
    badges: ['GAMP 5 Cat 4', 'Data Integrity'],
    description:
      'Validated Eurotherm Bridge to ensure continuous, uninterrupted data transfer between plant instruments and central servers.',
    bullets: [
      'Verified that communication events and data transfers are captured accurately in the audit logs.',
      'Tested network disconnect scenarios to confirm no data is dropped or corrupted during outages.',
      'Set up secure communication channels and restricted system access.',
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
    badges: ['GAMP 5 Cat 4', 'e-Signatures'],
    description:
      'Validated an electronic logbook system to replace physical paper logs for equipment cleaning, calibration, and room usage.',
    bullets: [
      'Tested electronic signatures to ensure they meet 21 CFR Part 11 rules for non-repudiation.',
      'Checked audit trail logging for all record additions, edits, and supervisor sign-offs.',
      'Configured user access levels based on departmental roles.',
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
      'Qualified Metrohm Tiamo 2.5 software used for automated titrations, pH testing, and conductivity measurements in the QC lab.',
    bullets: [
      'Authored and executed complete IQ and OQ protocols for lab workstations and connected instruments.',
      'Verified calculation formulas against reference standards to ensure accurate analytical results.',
      'Tested user privilege management and practiced database backup and recovery.',
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
      'Focused validation for PerkinElmer FTIR software, ensuring raw spectrum files are protected from accidental overwrites.',
    bullets: [
      'Configured folder and file permissions in Windows to prevent modifying or deleting raw scan data.',
      'Verified audit trails and tested system security against 21 CFR Part 11 requirements.',
      'Completed IQ installation checks and trained lab staff on compliant audit trail reviews.',
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
    badges: ['GAMP 5 Cat 3/5', 'QC Calculations'],
    description:
      'Validated calculation spreadsheets used by QC analysts for drug assay formulas, dissolution rates, and standard calibrations.',
    bullets: [
      'Protected and locked formula cells to prevent accidental edits or formula tampering.',
      'Tested boundary conditions and edge cases to ensure math calculations remain accurate.',
      'Put in place master template version control and change management procedures.',
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
