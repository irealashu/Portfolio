export interface ExecutiveMetric {
  value: string;
  label: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName: 'shield' | 'check' | 'lock' | 'database' | 'users' | 'server';
}

export interface CompetencyGroup {
  id: string;
  category: string;
  focus: string;
  deliverables: string[];
}

export interface EducationAccordionItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  leftColumn: string;
  rightColumn: string;
}

export interface CareerMilestone {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export type SystemCategory =
  | 'All'
  | 'Enterprise & Governance'
  | 'Chromatography & Titration'
  | 'Spectroscopy & Thermal';

export interface ValidatedSystemItem {
  id: string;
  name: string;
  category: Exclude<SystemCategory, 'All'>;
  gampCategory: string;
  description: string;
  complianceStandards: string[];
  controlHighlights: string[];
  validationScopeNotes: string;
}

export const EXECUTIVE_METRICS: ExecutiveMetric[] = [
  {
    value: '5+',
    label: 'Years Experience (Since Jan 2021)',
  },
  {
    value: '15+',
    label: 'Enterprise Systems Validated',
  },
  {
    value: '0',
    label: 'Critical Audit Findings',
  },
  {
    value: 'ALCOA++',
    label: 'Data Integrity Standard',
  },
];

export const ABOUT_PILLARS = [
  { title: 'Cyber & IT Risk (ITGC)', icon: 'shield' as const },
  { title: 'GAMP 5 CSV Lifecycle', icon: 'check' as const },
  { title: '21 CFR Part 11 & Annex 11', icon: 'lock' as const },
  { title: 'ALCOA++ Data Integrity', icon: 'database' as const },
];

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: 'cyber-risk',
    title: 'Cyber & Digital Risk Advisory',
    description:
      'Reviewing enterprise IT risks, testing IT General Controls (ITGC), and checking user access and change management against ISO/IEC 27001.',
    iconName: 'shield',
  },
  {
    id: 'csv-gamp5',
    title: 'Computerized System Validation',
    description:
      'Writing and executing GAMP 5 (2nd Ed.) validation deliverables including URS, Functional Risk Assessments, IQ/OQ/PQ protocols, and Traceability Matrices.',
    iconName: 'check',
  },
  {
    id: 'part11-annex11',
    title: '21 CFR Part 11 & EU Annex 11',
    description:
      'Running gap assessments for electronic signatures, password rules, session timeouts, and record protection on regulated systems.',
    iconName: 'lock',
  },
  {
    id: 'alcoa-data',
    title: 'ALCOA++ Data Integrity',
    description:
      'Checking computer-generated audit trails, time synchronization, and periodic data integrity review logs across laboratory systems.',
    iconName: 'database',
  },
  {
    id: 'rbac-access',
    title: 'Access Control & Segregation of Duties',
    description:
      'Defining Role-Based Access Control (RBAC) matrices, separating IT Admin and QA/QC roles, and locking local Windows data folders.',
    iconName: 'users',
  },
  {
    id: 'audit-backup',
    title: 'Audit Support & Backup Verification',
    description:
      'Supporting regulatory audits with clean documentation and testing database backup, restore, and recovery procedures.',
    iconName: 'server',
  },
];

export const COMPETENCY_GROUPS: CompetencyGroup[] = [
  {
    id: 'csv-deliverables',
    category: 'Validation Lifecycle Deliverables',
    focus: 'GAMP 5 (Second Edition) V-Model Qualification',
    deliverables: [
      'Validation Plan (VP) & User Requirements Specification (URS)',
      'Functional Specification (FS) & Functional Risk Assessment (FRA)',
      'Installation, Operational & Performance Qualification (IQ / OQ / PQ)',
      'Requirements Traceability Matrix (RTM) & Validation Summary Report (VSR)',
    ],
  },
  {
    id: 'regulatory-frameworks',
    category: 'Regulatory & Compliance Standards',
    focus: 'Electronic Records, Signatures & Quality Guidelines',
    deliverables: [
      'US FDA 21 CFR Part 11 (Electronic Records & Electronic Signatures)',
      'EU GMP Annex 11 (Computerised Systems)',
      'ALCOA+ / ALCOA++ Data Integrity & Audit Trail Review',
      'ISO/IEC 27001 Information Security & ICH Q1A (R2) Stability Guidelines',
    ],
  },
  {
    id: 'itgc-security',
    category: 'IT General Controls (ITGC) & Access Security',
    focus: 'System Hardening & Segregation of Duties',
    deliverables: [
      'Role-Based Access Control (RBAC) Matrix Design & Periodic Access Review',
      'Segregation of Duties (SoD) between IT Administrators and QA/QC Users',
      'Windows Group Policy (GPO) & NTFS Local Directory Locks',
      'Change Management, Incident Logging & Patch Impact Evaluation',
    ],
  },
  {
    id: 'backup-continuity',
    category: 'Backup, Archival & Audit Readiness',
    focus: 'Database Resilience & Inspection Support',
    deliverables: [
      'Automated SQL & Flat-File Backup Scheduling Qualification',
      'Periodic Backup Restoration Drills & Checksum Verification',
      'Store-and-Forward Buffer Recovery & NTP Clock Synchronization',
      'Periodic System Evaluation & External Regulatory Audit Support',
    ],
  },
];

export const EDUCATION_ITEMS: EducationAccordionItem[] = [
  {
    id: 'msc-chem',
    degree: 'Master of Science (M.Sc.) in Chemistry — 8.07 CGPA',
    institution: 'Veer Bahadur Singh Purvanchal University (VBSPU), Jaunpur',
    period: '2022 – 2024',
    leftColumn:
      'Completed M.Sc. in Chemistry from VBSPU, Jaunpur with First Division (8.07 CGPA), focusing on analytical instrumentation, spectroscopic and chromatographic methods, and quality assurance.',
    rightColumn:
      'Connected laboratory instrument operations with computerized data acquisition, electronic record controls, and validation practices.',
  },
  {
    id: 'bsc-chem',
    degree: 'Bachelor of Science (B.Sc.) in Chemistry',
    institution: 'Veer Bahadur Singh Purvanchal University (VBSPU), Jaunpur',
    period: '2017 – 2020',
    leftColumn:
      'Completed B.Sc. in Chemistry from VBSPU, Jaunpur with coursework in quantitative chemical analysis, laboratory safety, and experimental documentation.',
    rightColumn:
      'Built the analytical foundation for subsequent roles in pharmaceutical Quality Control (QC), stability testing, and GxP compliance.',
  },
  {
    id: 'certifications',
    degree: 'Professional Training & Regulatory Frameworks',
    institution: 'GAMP 5 · 21 CFR Part 11 · ISO/IEC 27001 · Six Sigma',
    period: 'Continuous Professional Development',
    leftColumn:
      'Focused training in Computerized System Validation (GAMP 5 Second Edition), FDA 21 CFR Part 11, EU Annex 11, and ALCOA++ data integrity.',
    rightColumn:
      'Trained in Six Sigma quality methodologies and enterprise IT General Controls (ITGC) risk assessment practices.',
  },
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    role: 'Associate — Cyber & Digital Risk Advisory',
    organization: 'PwC India',
    period: 'Mar 2026 – Present',
    location: 'Gurugram, Haryana',
    summary:
      'Working with enterprise clients on IT risk governance, IT General Controls (ITGC), and computerized system validation.',
    highlights: [
      'Test IT general controls (ITGC), user access provisioning, and change management processes against ISO/IEC 27001 and regulatory standards.',
      'Apply GAMP 5 validation practices to enterprise applications and regulated cloud systems.',
      'Document control gaps and work with client teams on practical remediation plans.',
    ],
  },
  {
    role: 'Executive — Computerized System Validation & Quality',
    organization: 'Jubilant Pharmova Limited',
    period: 'Mar 2024 – Nov 2025',
    location: 'Roorkee, Uttarakhand',
    summary:
      'Handled qualification, validation, and data integrity controls for analytical laboratory software and plant systems.',
    highlights: [
      'Prepared and executed URS, Risk Assessment, IQ, OQ, and PQ protocols for Metrohm Tiamo 2.5, PerkinElmer Spectrum IR, Eurotherm Data Reviewer, and eLogbook.',
      'Set up role-based access control (RBAC) matrices, Windows folder restrictions, and scheduled database backup/restore checks.',
      'Presented computerized system validation records during external regulatory inspections with zero critical findings.',
    ],
  },
  {
    role: 'Junior Officer — Analytical & Stability Operations',
    organization: 'Macleods Pharmaceuticals Ltd.',
    period: 'Feb 2023 – Jan 2024',
    location: 'Baddi, Himachal Pradesh',
    summary:
      'Performed analytical testing and stability studies for commercial pharmaceutical products under cGMP guidelines.',
    highlights: [
      'Ran calibrated instrument analysis and maintained electronic and paper batch records.',
      'Checked audit trails and followed Good Laboratory Practice (GLP) controls across stability chambers and chromatography systems.',
    ],
  },
  {
    role: 'Senior Officer & Apprentice — Quality Control',
    organization: 'Alkem Laboratories Ltd.',
    period: '18 Jan 2021 – Jan 2023',
    location: 'Baddi, Himachal Pradesh',
    summary:
      'Started career on 18 Jan 2021 in pharmaceutical quality control, handling routine instrument analysis, GxP documentation, and lab compliance.',
    highlights: [
      'Performed pharmacopeial assay testing, dissolution profiling, and instrument calibrations for commercial batches.',
      'Reviewed raw analytical logs and stability data packages before Quality Assurance release.',
    ],
  },
];

export const VALIDATED_SYSTEMS: ValidatedSystemItem[] = [
  {
    id: 'metrohm-tiamo',
    name: 'Metrohm Tiamo 2.5',
    category: 'Chromatography & Titration',
    gampCategory: 'GAMP 5 Cat 4 · Client/Server',
    description:
      'Completed full-lifecycle qualification (URS, FRA, IQ, OQ, PQ) and 21 CFR Part 11 configuration checks for centralized titration data acquisition and SQL database storage.',
    complianceStandards: ['21 CFR Part 11', 'GAMP 5 Cat 4', 'ALCOA++', 'Client/Server SQL'],
    controlHighlights: [
      'Set up user group permissions separating System Admin, Method Developer, and QC Analyst roles',
      'Verified audit trail capture across method changes, manual re-integrations, and result sign-offs',
      'Tested automated database backup schedules and verified full record restoration',
    ],
    validationScopeNotes:
      'Covered centralized database server installation qualification, instrument RS-232/USB connectivity checks, custom calculation formula verification, and electronic signature workflows.',
  },
  {
    id: 'perkinelmer-spectrum',
    name: 'PerkinElmer Spectrum IR (ES)',
    category: 'Spectroscopy & Thermal',
    gampCategory: 'GAMP 5 Cat 4 · Enhanced Security',
    description:
      'Completed validation and data integrity setup for FT-IR spectral acquisition, library matching, and electronic signatures.',
    complianceStandards: ['21 CFR Part 11 ES', 'EU Annex 11', 'GAMP 5 Cat 4', 'USP <854>'],
    controlHighlights: [
      'Configured mandatory reason-for-change prompts for baseline and ATR correction actions',
      'Restricted Windows OS local folders to prevent deletion or renaming of .sp spectral files',
      'Checked checksum protection and version control across reference spectral libraries',
    ],
    validationScopeNotes:
      'Verified Enhanced Security (ES) domain login, polystyrene reference wavelength/transmittance checks, and locked PDF report generation with signature history.',
  },
  {
    id: 'eurotherm-reviewer',
    name: 'Eurotherm Data Reviewer & iTools',
    category: 'Enterprise & Governance',
    gampCategory: 'GAMP 5 Cat 4 · Telemetry & EMS',
    description:
      'Qualified continuous temperature and relative humidity (RH) monitoring for stability chambers with alarm logging.',
    complianceStandards: ['ICH Q1A (R2)', '21 CFR Part 11', 'EU Annex 11', 'NTP Time Sync'],
    controlHighlights: [
      'Tested store-and-forward buffer recovery so no data is lost during brief network drops',
      'Verified high/low alarm limits, acknowledgment audit trails, and electronic review sign-offs',
      'Synced recorder clocks with central NTP time servers for accurate timestamps',
    ],
    validationScopeNotes:
      'Covered paperless graphic recorders, encrypted .uhh file transfer checks, and Eurotherm Data Reviewer SQL database qualification.',
  },
  {
    id: 'enterprise-elogbook',
    name: 'Enterprise eLogbook Platform',
    category: 'Enterprise & Governance',
    gampCategory: 'GAMP 5 Cat 4/5 · Web Enterprise',
    description:
      'Prepared requirements, functional risk assessments, and PQ test scripts to move paper lab and cleanroom logbooks to a validated digital system.',
    complianceStandards: ['GAMP 5 Cat 4/5', '21 CFR Part 11', 'ALCOA++', 'Active Directory'],
    controlHighlights: [
      'Set up workflow checks that block analytical runs on instruments with overdue calibration',
      'Tested dual-signature (Performed By / Verified By) steps and automatic timestamping',
      'Ran negative boundary tests for concurrent sessions, required fields, and audit trail filters',
    ],
    validationScopeNotes:
      'Included Active Directory login testing, browser session timeout checks, form template qualification, and archive retrieval verification.',
  },
  {
    id: 'toc-analytical-suite',
    name: 'TOC Analyzer & QC Instrument Suite',
    category: 'Chromatography & Titration',
    gampCategory: 'GAMP 5 Cat 3/4 · Analytical QC',
    description:
      'Prepared validation protocols, periodic review checklists, and data integrity controls across Total Organic Carbon (TOC), Karl Fischer, and pH/Conductivity instruments.',
    complianceStandards: ['USP <643>', 'GAMP 5 Cat 3/4', 'GLP / cGMP', 'Data Integrity'],
    controlHighlights: [
      'Set up hybrid controls and secure print/PDF archival workflows for Category 3 instruments',
      'Checked calibration curve linearity, system suitability lockouts, and user role access',
      'Completed periodic validation reviews and closed audit trail and password policy gaps',
    ],
    validationScopeNotes:
      'Checked firmware version records, memory retention during power loss, and secure data transfer procedures.',
  },
  {
    id: 'windows-itgc-infra',
    name: 'Windows OS Hardening & RBAC Infrastructure',
    category: 'Enterprise & Governance',
    gampCategory: 'ITGC & GxP Infrastructure',
    description:
      'Set up and reviewed IT General Controls (ITGC) for laboratory workstations, removing shared local admin rights and locking raw data folders.',
    complianceStandards: ['ISO/IEC 27001', 'ITGC', '21 CFR Part 11', 'Disaster Recovery'],
    controlHighlights: [
      'Applied Windows Group Policy (GPO) rules blocking USB drives, clock changes, and local file deletion',
      'Separated IT System Administrator and Quality Assurance reviewer permissions (Segregation of Duties)',
      'Ran scheduled backup restoration tests and checked file integrity of archived GxP databases',
    ],
    validationScopeNotes:
      'Covered workstation IQ baselines, NTFS folder permission checks, SQL Server backup monitoring, and change control documentation.',
  },
];
