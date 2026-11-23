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
  logoUrl: string;
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
  controlHighlights: string[];
}

export const EXECUTIVE_METRICS: ExecutiveMetric[] = [
  {
    value: '5+',
    label: 'Years of Experience',
  },
  {
    value: '15+',
    label: 'Systems Validated',
  },
  {
    value: '0',
    label: 'Critical Audit Findings',
  },
  {
    value: 'ALCOA++',
    label: 'Data Integrity Focus',
  },
];

export const ABOUT_PILLARS = [
  { title: 'IT Risk & ITGC', icon: 'shield' as const },
  { title: 'GAMP 5 Validation', icon: 'check' as const },
  { title: '21 CFR Part 11 & Annex 11', icon: 'lock' as const },
  { title: 'ALCOA++ Data Integrity', icon: 'database' as const },
];

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: 'cyber-risk',
    title: 'Cyber & IT Risk Advisory',
    description:
      'Testing IT General Controls (ITGC), user access, and change management for enterprise clients against ISO/IEC 27001 and regulatory requirements.',
    iconName: 'shield',
  },
  {
    id: 'csv-gamp5',
    title: 'Computerized System Validation',
    description:
      'Writing and running GAMP 5 (2nd Ed.) validation packages—URS, risk assessments, IQ/OQ/PQ test scripts, traceability matrices, and summary reports.',
    iconName: 'check',
  },
  {
    id: 'part11-annex11',
    title: '21 CFR Part 11 & EU Annex 11',
    description:
      'Checking electronic signatures, password rules, session lockouts, and record security on regulated lab and plant applications.',
    iconName: 'lock',
  },
  {
    id: 'alcoa-data',
    title: 'ALCOA++ Data Integrity',
    description:
      'Reviewing audit trails, system clock sync, and periodic data integrity checks so electronic records hold up during inspections.',
    iconName: 'database',
  },
  {
    id: 'rbac-access',
    title: 'Access Controls & SoD',
    description:
      'Setting up role-based access matrices, separating IT Admin and QA/QC permissions, and locking down local Windows data folders.',
    iconName: 'users',
  },
  {
    id: 'audit-backup',
    title: 'Audit Support & Backups',
    description:
      'Walking auditors through validation documentation during inspections and running regular database backup and restore tests.',
    iconName: 'server',
  },
];

export const COMPETENCY_GROUPS: CompetencyGroup[] = [
  {
    id: 'csv-deliverables',
    category: 'Validation Documentation',
    focus: 'GAMP 5 (2nd Ed.) V-Model',
    deliverables: [
      'Validation Plan (VP) and User Requirements Specification (URS)',
      'Functional Specification (FS) and Functional Risk Assessment (FRA)',
      'IQ, OQ, and PQ protocol authoring and execution',
      'Requirements Traceability Matrix (RTM) and Validation Summary Report (VSR)',
    ],
  },
  {
    id: 'regulatory-frameworks',
    category: 'Regulatory Standards',
    focus: 'GxP & Information Security',
    deliverables: [
      'US FDA 21 CFR Part 11 (Electronic Records and Signatures)',
      'EU GMP Annex 11 (Computerised Systems)',
      'ALCOA+ / ALCOA++ Data Integrity and audit trail review',
      'ISO/IEC 27001 controls and ICH Q1A (R2) stability guidelines',
    ],
  },
  {
    id: 'itgc-security',
    category: 'IT General Controls & Access',
    focus: 'Hardening & Segregation of Duties',
    deliverables: [
      'Role-Based Access Control (RBAC) design and periodic access reviews',
      'Segregation of Duties (SoD) between IT Admins and QA/QC users',
      'Windows Group Policy (GPO) and NTFS local folder restrictions',
      'Change control, incident tracking, and patch impact reviews',
    ],
  },
  {
    id: 'backup-continuity',
    category: 'Backups & Audit Readiness',
    focus: 'Data Resilience & Inspections',
    deliverables: [
      'Automated SQL and flat-file backup schedule qualification',
      'Routine backup restore tests and file integrity checks',
      'Store-and-forward buffer recovery and NTP clock synchronization',
      'Periodic system reviews and external regulatory audit support',
    ],
  },
];

export const EDUCATION_ITEMS: EducationAccordionItem[] = [
  {
    id: 'msc-chem',
    degree: 'Master of Science (M.Sc.) in Chemistry',
    institution: 'Veer Bahadur Singh Purvanchal University (VBSPU), Jaunpur',
    period: '2018 – 2020',
    leftColumn:
      'Postgraduate degree in Chemistry with a focus on analytical instrumentation, spectroscopy, chromatography, and laboratory quality practices.',
    rightColumn:
      'This lab background later helped bridge instrument operation with computerized data acquisition, electronic record controls, and CSV work.',
  },
  {
    id: 'bsc-chem',
    degree: 'Bachelor of Science (B.Sc.) in Chemistry',
    institution: 'Veer Bahadur Singh Purvanchal University (VBSPU), Jaunpur',
    period: '2015 – 2018',
    leftColumn:
      'Undergraduate coursework in quantitative analysis, chemical testing, lab safety, and experimental record-keeping.',
    rightColumn:
      'Built the technical base for my early roles in pharmaceutical Quality Control, stability testing, and GxP compliance.',
  },
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    role: 'Associate — Cyber & Digital Risk Advisory',
    organization: 'PwC India',
    logoUrl: './logos/pwc.svg',
    period: 'Mar 2026 – Present',
    location: 'Gurugram, Haryana',
    summary:
      'Part of the Cyber & Digital Risk Advisory team working on IT risk governance, IT General Controls (ITGC), and computerized system validation.',
    highlights: [
      'Test IT general controls, user access management, and change processes against ISO/IEC 27001 and regulatory requirements.',
      'Apply GAMP 5 validation reviews to enterprise applications and regulated cloud systems.',
      'Document control gaps clearly and work with client IT and quality teams to close them.',
    ],
  },
  {
    role: 'Executive — Computerized System Validation & Quality',
    organization: 'Jubilant Generics Limited',
    logoUrl: './logos/jubilant.svg',
    period: 'Mar 2024 – Nov 2025',
    location: 'Roorkee, Uttarakhand',
    summary:
      'Managed validation, qualification, and data integrity controls for analytical laboratory software and plant systems.',
    highlights: [
      'Authored and executed URS, Risk Assessment, IQ, OQ, and PQ packages for Metrohm Tiamo 2.5, PerkinElmer Spectrum IR, Eurotherm Data Reviewer, and eLogbook.',
      'Set up RBAC matrices, Windows folder locks, and scheduled database backup and restore verification.',
      'Walked external regulatory auditors through CSV documentation with zero critical findings.',
    ],
  },
  {
    role: 'Junior Officer — Analytical & Stability Operations',
    organization: 'Macleods Pharmaceuticals Ltd.',
    logoUrl: './logos/macleods.svg',
    period: 'Feb 2023 – Jan 2024',
    location: 'Baddi, Himachal Pradesh',
    summary:
      'Handled routine analytical testing and stability studies for commercial pharmaceutical products under cGMP.',
    highlights: [
      'Ran calibrated instrument analysis and maintained electronic and paper batch records.',
      'Reviewed audit trails and followed GLP controls across stability chambers and chromatography systems.',
    ],
  },
  {
    role: 'Senior Officer & Apprentice — Quality Control',
    organization: 'Alkem Laboratories Ltd.',
    logoUrl: './logos/alkem.svg',
    period: 'Jan 2021 – Jan 2023',
    location: 'Baddi, Himachal Pradesh',
    summary:
      'Worked in pharmaceutical Quality Control covering routine instrument analysis, GxP documentation, and lab compliance.',
    highlights: [
      'Performed assay testing, dissolution profiling, and instrument calibrations for commercial batches.',
      'Checked raw analytical logs and stability data packages prior to Quality Assurance release.',
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
      'Qualified the client/server titration setup (URS, FRA, IQ, OQ, PQ) and checked 21 CFR Part 11 settings for centralized SQL data storage.',
    controlHighlights: [
      'Separated System Admin, Method Developer, and QC Analyst roles in user groups',
      'Verified audit trail capture for method edits, manual re-integrations, and result sign-offs',
      'Tested automated SQL backups and full record restoration',
    ],
  },
  {
    id: 'perkinelmer-spectrum',
    name: 'PerkinElmer Spectrum IR (ES)',
    category: 'Spectroscopy & Thermal',
    gampCategory: 'GAMP 5 Cat 4 · Enhanced Security',
    description:
      'Validated Enhanced Security settings for FT-IR spectral acquisition, library matching, and electronic signatures.',
    controlHighlights: [
      'Configured mandatory reason-for-change prompts on baseline and ATR corrections',
      'Locked local Windows folders so .sp spectral files cannot be renamed or deleted',
      'Checked version control and checksum protection on reference spectral libraries',
    ],
  },
  {
    id: 'eurotherm-reviewer',
    name: 'Eurotherm Data Reviewer',
    category: 'Enterprise & Governance',
    gampCategory: 'GAMP 5 Cat 4 · Telemetry & EMS',
    description:
      'Qualified continuous temperature and humidity monitoring for stability chambers along with alarm logging.',
    controlHighlights: [
      'Tested store-and-forward buffer recovery to confirm no data loss during short network drops',
      'Checked high/low alarm limits, acknowledgment audit trails, and electronic review sign-offs',
      'Synced recorder clocks with central NTP time servers for consistent timestamps',
    ],
  },
  {
    id: 'enterprise-elogbook',
    name: 'Enterprise eLogbook Platform',
    category: 'Enterprise & Governance',
    gampCategory: 'GAMP 5 Cat 4/5 · Web Enterprise',
    description:
      'Wrote URS, risk assessments, and PQ test scripts to replace paper lab and cleanroom logbooks with a validated digital workflow.',
    controlHighlights: [
      'Added checks that block runs on instruments with overdue calibration',
      'Tested dual-signature (Performed By / Verified By) steps and automatic timestamps',
      'Ran negative tests for concurrent sessions, mandatory fields, and audit trail filters',
    ],
  },
  {
    id: 'toc-analytical-suite',
    name: 'TOC Analyzer & QC Instrument Suite',
    category: 'Chromatography & Titration',
    gampCategory: 'GAMP 5 Cat 3/4 · Analytical QC',
    description:
      'Prepared validation protocols, periodic reviews, and data integrity controls for TOC, Karl Fischer, and pH/Conductivity instruments.',
    controlHighlights: [
      'Set up hybrid controls and locked print/PDF archival steps for Category 3 instruments',
      'Verified calibration linearity, system suitability lockouts, and user role access',
      'Closed periodic review gaps across audit trails and password policies',
    ],
  },
  {
    id: 'windows-itgc-infra',
    name: 'Windows OS Hardening & RBAC Setup',
    category: 'Enterprise & Governance',
    gampCategory: 'ITGC & GxP Infrastructure',
    description:
      'Configured and reviewed workstation IT General Controls across labs, removing shared local admin access and protecting raw data directories.',
    controlHighlights: [
      'Applied Windows GPO rules to block USB storage, clock changes, and local file deletion',
      'Separated IT Administrator and Quality Assurance reviewer access (Segregation of Duties)',
      'Ran scheduled backup restore drills and verified archived GxP database integrity',
    ],
  },
];
