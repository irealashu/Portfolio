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

export interface SkillBarItem {
  name: string;
  percentage: number;
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
    value: '6',
    label: 'Years of Experience',
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
    value: '100%',
    label: 'ALCOA++ Compliance',
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
      'Evaluating enterprise technology risk posture, testing IT General Controls (ITGC), and aligning access and change governance with ISO/IEC 27001.',
    iconName: 'shield',
  },
  {
    id: 'csv-gamp5',
    title: 'Computerized System Validation',
    description:
      'Leading end-to-end GAMP 5 (2nd Ed.) V-Model qualification across URS, Functional Risk Assessments, IQ/OQ/PQ execution, and Traceability Matrices.',
    iconName: 'check',
  },
  {
    id: 'part11-annex11',
    title: '21 CFR Part 11 & EU Annex 11',
    description:
      'Performing technical compliance assessments covering electronic signature bindings, password policies, session lockouts, and record immutability.',
    iconName: 'lock',
  },
  {
    id: 'alcoa-data',
    title: 'ALCOA++ Data Integrity',
    description:
      'Enforcing tamper-evident computer-generated audit trails, contemporaneous record capture, and periodic data integrity review governance.',
    iconName: 'database',
  },
  {
    id: 'rbac-access',
    title: 'RBAC & Access Governance',
    description:
      'Designing Role-Based Access Control matrices, Segregation of Duties (SoD) between IT Admins and QA/QC users, and Windows OS folder locks.',
    iconName: 'users',
  },
  {
    id: 'audit-backup',
    title: 'Audit Defense & Backup Assurance',
    description:
      'Fronting regulatory inspections with zero critical observations and qualifying encrypted database backup, restore, and disaster recovery drills.',
    iconName: 'server',
  },
];

export const SKILL_BARS: SkillBarItem[] = [
  { name: 'Computerized System Validation (GAMP 5)', percentage: 95 },
  { name: '21 CFR Part 11 & EU GMP Annex 11', percentage: 95 },
  { name: 'ALCOA++ Data Integrity & Audit Trails', percentage: 92 },
  { name: 'IT General Controls (ITGC) & Access Governance', percentage: 90 },
  { name: 'IQ / OQ / PQ Protocol Execution & RTM', percentage: 95 },
  { name: 'Enterprise & Laboratory GxP Systems', percentage: 90 },
];

export const EDUCATION_ITEMS: EducationAccordionItem[] = [
  {
    id: 'msc-chem',
    degree: 'Master of Science (M.Sc.) in Chemistry — 8.07 CGPA',
    institution: 'Postgraduate Analytical & Instrumental Chemistry',
    period: '2022 – 2024',
    leftColumn:
      'Graduated with First Division (8.07 CGPA), focusing on advanced analytical instrumentation, spectroscopic and chromatographic methods, and quality assurance principles.',
    rightColumn:
      'Bridged scientific instrumentation workflows directly with computerized data acquisition systems, electronic record governance, and regulatory validation methodologies.',
  },
  {
    id: 'bsc-chem',
    degree: 'Bachelor of Science (B.Sc. Hons.) in Chemistry',
    institution: 'Undergraduate Honours Program',
    period: '2017 – 2020',
    leftColumn:
      'Completed B.Sc. (Hons.) in Chemistry with strong foundations in quantitative chemical analysis, laboratory safety systems, and experimental documentation.',
    rightColumn:
      'Established core analytical discipline supporting subsequent roles in pharmaceutical Quality Control (QC), stability operations, and GxP compliance.',
  },
  {
    id: 'certifications',
    degree: 'Professional Certifications & Regulatory Frameworks',
    institution: 'GAMP 5 · 21 CFR Part 11 · ISO/IEC 27001 · Six Sigma',
    period: 'Continuous Professional Development',
    leftColumn:
      'Specialized professional training in Computerized System Validation (GAMP 5 Second Edition), FDA 21 CFR Part 11, EU Annex 11, and ALCOA++ Data Integrity governance.',
    rightColumn:
      'Certified in Six Sigma process quality methodologies and enterprise IT General Controls (ITGC) risk assessment practices.',
  },
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    role: 'Associate — Cyber & Digital Risk Advisory',
    organization: 'PwC India',
    period: 'Mar 2026 – Present',
    location: 'Gurugram, Haryana',
    summary:
      'Advising enterprise clients on technology risk governance, IT General Controls (ITGC), cybersecurity posture assessments, and regulated computerized system assurance.',
    highlights: [
      'Evaluate IT general controls (ITGC), user access provisioning, and change management workflows against ISO/IEC 27001 and regulatory benchmarks.',
      'Apply GAMP 5 and computerized system validation methodologies to enterprise digital transformation and regulated cloud initiatives.',
      'Translate technical control gaps and risk observations into structured remediation roadmaps for executive leadership.',
    ],
  },
  {
    role: 'Executive — Computerized System Validation & Quality',
    organization: 'Jubilant Pharmova Limited',
    period: 'Mar 2024 – Nov 2025',
    location: 'Roorkee, Uttarakhand',
    summary:
      'Directed end-to-end qualification, validation, and data integrity governance for analytical laboratory software and manufacturing control systems.',
    highlights: [
      'Authored and executed full-lifecycle URS, Risk Assessment, IQ, OQ, and PQ validation protocols for Metrohm Tiamo 2.5, PerkinElmer Spectrum IR, Eurotherm Data Reviewer, and eLogbook platforms.',
      'Configured role-based access control (RBAC) matrices, Windows OS file-system locks, and automated encrypted database backup/recovery drills.',
      'Fronted technical audit defense for computerized systems during external regulatory inspections with zero critical findings.',
    ],
  },
  {
    role: 'Junior Officer — Analytical & Stability Operations',
    organization: 'Macleods Pharmaceuticals Ltd.',
    period: 'Feb 2023 – Jan 2024',
    location: 'Baddi, Himachal Pradesh',
    summary:
      'Executed analytical testing and regulatory stability studies for commercial pharmaceutical formulations under FDA and global GxP mandates.',
    highlights: [
      'Performed calibrated instrumental analysis and maintained contemporaneous electronic and physical batch records.',
      'Enforced strict Good Laboratory Practice (GLP) controls and audit trail verification across stability chambers and chromatography data systems.',
    ],
  },
  {
    role: 'Senior Officer & Apprentice — Quality Control',
    organization: 'Alkem Laboratories Ltd.',
    period: 'Jan 2021 – Jan 2023',
    location: 'Baddi, Himachal Pradesh',
    summary:
      'Built foundational expertise in pharmaceutical quality control, analytical instrumentation, GxP documentation, and laboratory compliance systems.',
    highlights: [
      'Executed pharmacopeial assay testing, dissolution profiling, and volumetric calibrations across commercial batches.',
      'Verified raw analytical logs and stability data packages prior to formal Quality Assurance release.',
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
      'Led full-lifecycle qualification (URS, FRA, IQ, OQ, PQ) and 21 CFR Part 11 technical control hardening for centralized titration data acquisition and SQL database security.',
    complianceStandards: ['21 CFR Part 11', 'GAMP 5 Cat 4', 'ALCOA++', 'Client/Server SQL'],
    controlHighlights: [
      'Configured granular user group privileges separating System Admin, Method Developer, and QC Analyst roles',
      'Validated immutable audit trail capture across method modifications, manual re-integrations, and result approvals',
      'Qualified automated database backup scheduling and verified full record restoration integrity',
    ],
    validationScopeNotes:
      'Scope encompassed centralized database server installation qualification, instrument RS-232/USB interface verification, custom calculation formula validation, and multi-tier electronic signature workflows.',
  },
  {
    id: 'perkinelmer-spectrum',
    name: 'PerkinElmer Spectrum IR (ES)',
    category: 'Spectroscopy & Thermal',
    gampCategory: 'GAMP 5 Cat 4 · Enhanced Security',
    description:
      'Executed comprehensive validation and data integrity lockdown for FT-IR raw spectral acquisition, library matching, and electronic signature manifestation.',
    complianceStandards: ['21 CFR Part 11 ES', 'EU Annex 11', 'GAMP 5 Cat 4', 'USP <854>'],
    controlHighlights: [
      'Enforced mandatory electronic reason-for-change prompts on spectral baseline and ATR correction operations',
      'Locked Windows OS local directories to prevent unauthorized deletion or renaming of .sp spectral files',
      'Verified cryptographic checksum protection and version control across reference spectral libraries',
    ],
    validationScopeNotes:
      'Verified Enhanced Security (ES) domain authentication, polystyrene reference wavelength/transmittance qualification, and immutable PDF report generation with embedded signature history.',
  },
  {
    id: 'eurotherm-reviewer',
    name: 'Eurotherm Data Reviewer & iTools',
    category: 'Enterprise & Governance',
    gampCategory: 'GAMP 5 Cat 4 · Telemetry & EMS',
    description:
      'Qualified continuous temperature and relative humidity (RH) recording infrastructure for FDA/ICH stability chambers with contemporaneous alarm logging.',
    complianceStandards: ['ICH Q1A (R2)', '21 CFR Part 11', 'EU Annex 11', 'NTP Time Sync'],
    controlHighlights: [
      'Validated store-and-forward buffer recovery to guarantee zero telemetry loss during network interruptions',
      'Qualified high/low excursion alarm thresholds, acknowledgment audit trails, and electronic review sign-offs',
      'Synchronized recorder clocks with centralized enterprise NTP time servers to ensure contemporaneous timestamps',
    ],
    validationScopeNotes:
      'Covered multi-channel paperless graphic recorders, encrypted .uhh binary file transfer verification, and Eurotherm Data Reviewer SQL database qualification.',
  },
  {
    id: 'enterprise-elogbook',
    name: 'Enterprise eLogbook Platform',
    category: 'Enterprise & Governance',
    gampCategory: 'GAMP 5 Cat 4/5 · Web Enterprise',
    description:
      'Guided requirements definition, functional risk assessment, and PQ testing for transitioning physical laboratory and cleanroom logbooks to a validated digital workflow.',
    complianceStandards: ['GAMP 5 Cat 4/5', '21 CFR Part 11', 'ALCOA++', 'Active Directory'],
    controlHighlights: [
      'Designed conditional workflow gates preventing analytical runs on instruments with overdue calibration status',
      'Verified dual-signature (Performed By / Verified By) controls and contemporaneous timestamp enforcement',
      'Executed negative boundary testing for concurrent session handling, field validation, and audit trail filtering',
    ],
    validationScopeNotes:
      'Included Active Directory LDAP integration testing, browser session timeout validation, dynamic form template qualification, and long-term archival retrieval verification.',
  },
  {
    id: 'toc-analytical-suite',
    name: 'TOC Analyzer & QC Instrument Suite',
    category: 'Chromatography & Titration',
    gampCategory: 'GAMP 5 Cat 3/4 · Analytical QC',
    description:
      'Standardized validation protocols, periodic review checklists, and data integrity controls across Total Organic Carbon (TOC), Karl Fischer, and pH/Conductivity systems.',
    complianceStandards: ['USP <643>', 'GAMP 5 Cat 3/4', 'GLP / cGMP', 'Data Integrity'],
    controlHighlights: [
      'Established hybrid system controls and secure print/PDF archival workflows for Category 3 firmware instruments',
      'Qualified calibration curve linearity, system suitability lockouts, and user privilege hierarchies',
      'Conducted periodic validation reviews and closed legacy audit trail and password policy gaps',
    ],
    validationScopeNotes:
      'Assessed firmware version integrity, non-volatile memory retention during power cycling, and secure data transfer protocols.',
  },
  {
    id: 'windows-itgc-infra',
    name: 'Windows OS Hardening & RBAC Infrastructure',
    category: 'Enterprise & Governance',
    gampCategory: 'ITGC & GxP Infrastructure',
    description:
      'Designed and audited foundational IT General Controls (ITGC) supporting computerized laboratory systems, eliminating local admin privileges and securing raw data repositories.',
    complianceStandards: ['ISO/IEC 27001', 'ITGC', '21 CFR Part 11', 'Disaster Recovery'],
    controlHighlights: [
      'Implemented Windows Group Policy (GPO) locks disabling USB mass storage, system clock edits, and local file deletion',
      'Established formal Segregation of Duties (SoD) between IT System Administrators and Quality Assurance reviewers',
      'Executed periodic backup restoration drills and verified checksum parity of archived GxP databases',
    ],
    validationScopeNotes:
      'Encompassed workstation IQ baselines, NTFS access control list (ACL) audits, SQL Server backup job monitoring, and incident/change management governance.',
  },
];
