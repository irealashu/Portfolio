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
      'I check IT General Controls, user access and change management for enterprise clients. Everything gets measured against ISO/IEC 27001 and the regulations they need to meet.',
    iconName: 'shield',
  },
  {
    id: 'csv-gamp5',
    title: 'Computerized System Validation',
    description:
      'I write and run GAMP 5 (2nd Ed.) validation packages from start to finish. That covers URS, risk assessments, IQ/OQ/PQ test scripts, traceability matrices and summary reports.',
    iconName: 'check',
  },
  {
    id: 'part11-annex11',
    title: '21 CFR Part 11 & EU Annex 11',
    description:
      'Regulated lab and plant software needs tight guardrails. I test electronic signatures, password rules, session timeouts and record security so nothing slips through.',
    iconName: 'lock',
  },
  {
    id: 'alcoa-data',
    title: 'ALCOA++ Data Integrity',
    description:
      'Good data has to stand up to tough questions during an inspection. I review audit trails, verify system clock sync and run periodic checks so electronic records stay solid.',
    iconName: 'database',
  },
  {
    id: 'rbac-access',
    title: 'Access Controls & SoD',
    description:
      'Too many teams still share logins or hand out admin rights too freely. I build role-based access matrices, separate IT Admin and QA/QC permissions and lock down local Windows data folders.',
    iconName: 'users',
  },
  {
    id: 'audit-backup',
    title: 'Audit Support & Backups',
    description:
      'When regulators walk in, I take them straight through the validation files. Behind the scenes, I also run routine database backup and restore drills to prove the data comes back cleanly.',
    iconName: 'server',
  },
];

export const COMPETENCY_GROUPS: CompetencyGroup[] = [
  {
    id: 'csv-deliverables',
    category: 'Validation Documentation',
    focus: 'GAMP 5 (2nd Ed.) V-Model',
    deliverables: [
      'Validation Plans (VP) and User Requirements Specifications (URS)',
      'Functional Specifications (FS) and Functional Risk Assessments (FRA)',
      'Writing and running IQ, OQ and PQ test protocols',
      'Requirements Traceability Matrices (RTM) and Validation Summary Reports (VSR)',
    ],
  },
  {
    id: 'regulatory-frameworks',
    category: 'Regulatory Standards',
    focus: 'GxP & Information Security',
    deliverables: [
      'US FDA 21 CFR Part 11 for electronic records and signatures',
      'EU GMP Annex 11 for computerised systems',
      'ALCOA+ / ALCOA++ data integrity checks and audit trail reviews',
      'ISO/IEC 27001 controls and ICH Q1A (R2) stability rules',
    ],
  },
  {
    id: 'itgc-security',
    category: 'IT General Controls & Access',
    focus: 'Hardening & Segregation of Duties',
    deliverables: [
      'Role-Based Access Control (RBAC) matrices and regular access reviews',
      'Keeping IT Admin and QA/QC permissions strictly separate (SoD)',
      'Windows Group Policy (GPO) rules and NTFS folder locks',
      'Change control, incident tracking and patch impact checks',
    ],
  },
  {
    id: 'backup-continuity',
    category: 'Backups & Audit Readiness',
    focus: 'Data Resilience & Inspections',
    deliverables: [
      'Automated SQL and flat-file backup schedules',
      'Routine backup restore drills and file integrity checks',
      'Store-and-forward buffer recovery and NTP clock sync',
      'Periodic system reviews and hands-on regulatory audit support',
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
      'My postgraduate work centered on analytical instruments, spectroscopy, chromatography and everyday lab quality practices.',
    rightColumn:
      'Knowing how instruments behave on the bench made it much easier later to connect lab operations with computerized data capture, electronic record rules and CSV.',
  },
  {
    id: 'bsc-chem',
    degree: 'Bachelor of Science (B.Sc.) in Physics, Chemistry and Mathematics',
    institution: 'Veer Bahadur Singh Purvanchal University (VBSPU), Jaunpur',
    period: '2015 – 2018',
    leftColumn:
      'Studied Physics, Chemistry and Mathematics with a strong focus on quantitative analysis, lab safety and keeping accurate experimental records.',
    rightColumn:
      'Built the analytical and technical footing I leaned on during my early years in pharma Quality Control, stability testing and GxP compliance.',
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
      'I work with the Cyber & Digital Risk Advisory team on IT risk governance, IT General Controls (ITGC) and computerized system validation.',
    highlights: [
      'Test IT general controls, user access and change workflows against ISO/IEC 27001 and regulatory rules.',
      'Run GAMP 5 validation reviews across enterprise apps and regulated cloud platforms.',
      'Write up control gaps in plain terms and work with client IT and quality teams to get them fixed.',
    ],
  },
  {
    role: 'Executive — Computerized System Validation & Quality',
    organization: 'Jubilant Generics Limited',
    logoUrl: './logos/jubilant.svg',
    period: 'Mar 2024 – Nov 2025',
    location: 'Roorkee, Uttarakhand',
    summary:
      'Ran validation, qualification and data integrity controls for analytical lab software and plant systems.',
    highlights: [
      'Wrote and ran URS, Risk Assessment, IQ, OQ and PQ packages for Metrohm Tiamo 2.5, PerkinElmer Spectrum IR, Eurotherm Data Reviewer and eLogbook.',
      'Built RBAC matrices, locked down Windows data folders and verified scheduled database backup and restore runs.',
      'Walked external regulatory auditors through our CSV records and closed inspections with zero critical findings.',
    ],
  },
  {
    role: 'Junior Officer — Analytical & Stability Operations',
    organization: 'Macleods Pharmaceuticals Ltd.',
    logoUrl: './logos/macleods.svg',
    period: 'Feb 2023 – Jan 2024',
    location: 'Baddi, Himachal Pradesh',
    summary:
      'Ran day-to-day analytical testing and stability studies for commercial pharma products under cGMP.',
    highlights: [
      'Operated calibrated lab instruments and kept both electronic and paper batch records accurate.',
      'Reviewed audit trails and followed GLP rules across stability chambers and chromatography setups.',
    ],
  },
  {
    role: 'Senior Officer & Apprentice — Quality Control',
    organization: 'Alkem Laboratories Ltd.',
    logoUrl: './logos/alkem.svg',
    period: 'Jan 2021 – Jan 2023',
    location: 'Baddi, Himachal Pradesh',
    summary:
      'Started out in pharma Quality Control, handling routine instrument analysis, GxP paperwork and lab compliance.',
    highlights: [
      'Ran assay testing, dissolution profiles and routine calibrations for commercial batches.',
      'Checked raw analytical logs and stability data packages before they went to Quality Assurance for release.',
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
      'Qualified the client/server titration setup (URS, FRA, IQ, OQ and PQ) and checked 21 CFR Part 11 controls for its central SQL database.',
    controlHighlights: [
      'Split System Admin, Method Developer and QC Analyst permissions into clean user groups',
      'Checked that audit trails logged every method edit, manual re-integration and result sign-off',
      'Tested automated SQL backups and restored full records from scratch',
    ],
  },
  {
    id: 'perkinelmer-spectrum',
    name: 'PerkinElmer Spectrum IR (ES)',
    category: 'Spectroscopy & Thermal',
    gampCategory: 'GAMP 5 Cat 4 · Enhanced Security',
    description:
      'Validated Enhanced Security controls for FT-IR spectral runs, library matching and electronic signatures.',
    controlHighlights: [
      'Turned on mandatory reason-for-change prompts for baseline and ATR adjustments',
      'Locked local Windows folders so nobody can rename or delete .sp spectral files',
      'Verified version control and checksum protection on reference spectral libraries',
    ],
  },
  {
    id: 'eurotherm-reviewer',
    name: 'Eurotherm Data Reviewer',
    category: 'Enterprise & Governance',
    gampCategory: 'GAMP 5 Cat 4 · Telemetry & EMS',
    description:
      'Qualified continuous temperature and humidity tracking for stability chambers, including full alarm logging.',
    controlHighlights: [
      'Tested store-and-forward buffer recovery to prove short network drops don\'t lose data',
      'Checked high/low alarm limits, acknowledgment trails and electronic review sign-offs',
      'Synced recorder clocks to central NTP servers so timestamps stay consistent',
    ],
  },
  {
    id: 'enterprise-elogbook',
    name: 'Enterprise eLogbook Platform',
    category: 'Enterprise & Governance',
    gampCategory: 'GAMP 5 Cat 4/5 · Web Enterprise',
    description:
      'Wrote URS, risk assessments and PQ test scripts to move paper lab and cleanroom logbooks onto a validated digital workflow.',
    controlHighlights: [
      'Added interlock checks that stop runs on instruments with overdue calibration',
      'Tested dual-signature (Performed By / Verified By) sign-offs and automatic timestamps',
      'Ran negative tests for concurrent logins, required fields and audit trail filters',
    ],
  },
  {
    id: 'toc-analytical-suite',
    name: 'TOC Analyzer & QC Instrument Suite',
    category: 'Chromatography & Titration',
    gampCategory: 'GAMP 5 Cat 3/4 · Analytical QC',
    description:
      'Built validation protocols, periodic reviews and data integrity controls for TOC, Karl Fischer and pH/Conductivity instruments.',
    controlHighlights: [
      'Set up hybrid controls and locked print/PDF archival workflows for Category 3 instruments',
      'Verified calibration linearity, system suitability lockouts and user role permissions',
      'Closed periodic review gaps across audit trails and password rules',
    ],
  },
  {
    id: 'windows-itgc-infra',
    name: 'Windows OS Hardening & RBAC Setup',
    category: 'Enterprise & Governance',
    gampCategory: 'ITGC & GxP Infrastructure',
    description:
      'Hardened lab workstations across IT General Controls, stripping out shared local admin logins and locking down raw data folders.',
    controlHighlights: [
      'Used Windows GPO rules to block USB drives, clock changes and local file deletion',
      'Separated IT Admin access from Quality Assurance reviewers so nobody checks their own work',
      'Ran routine backup restore drills and verified archived GxP database integrity',
    ],
  },
];
