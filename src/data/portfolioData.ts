export interface ExecutiveMetric {
  value: string;
  unit: string;
  label: string;
  context: string;
}

export interface AdvisoryDomain {
  index: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  standards: string[];
  impactMetric: string;
}

export interface CareerMilestone {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  standards: string[];
}

export interface ControlStageNode {
  id: string;
  step: string;
  label: string;
  sublabel: string;
  phaseCode: string;
  assuranceStatus: 'Mandatory Control' | 'Lifecycle Gate' | 'Continuous Assurance';
  description: string;
  deliverablesAndEvidence: string;
  regulatoryStandard: string;
}

export interface ControlFrameworkSpec {
  id: 'gamp5-csv' | 'itgc-part11';
  name: string;
  shortLabel: string;
  tagline: string;
  summary: string;
  methodology: string;
  regulatoryScope: string;
  evidenceStandard: string;
  reviewCadence: string;
  auditOutcome: string;
  nodes: ControlStageNode[];
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
  tagline: string;
  description: string;
  complianceStandards: string[];
  controlHighlights: string[];
  validationScopeNotes: string;
}

export interface CompetencyGroup {
  index: string;
  category: string;
  summary: string;
  items: {
    name: string;
    domain: string;
    application: string;
  }[];
}

export const EXECUTIVE_METRICS: ExecutiveMetric[] = [
  {
    value: '6',
    unit: 'Years',
    label: 'Cyber Risk & Regulated GxP',
    context: 'PwC India Advisory & Pharmaceutical CSV / Quality Operations',
  },
  {
    value: '15+',
    unit: 'Enterprise Systems',
    label: 'End-to-End CSV Qualifications',
    context: 'GAMP 5 (2nd Ed.), 21 CFR Part 11 & EU Annex 11 Validated',
  },
  {
    value: '0',
    unit: 'Critical Findings',
    label: 'Audit & Inspection Record',
    context: 'Sustained across FDA, regulatory & internal ITGC inspections',
  },
  {
    value: '100%',
    unit: 'ALCOA++',
    label: 'Data Integrity & Control Assurance',
    context: 'Electronic signatures, RBAC matrices & audit trail governance',
  },
];

export const ADVISORY_DOMAINS: AdvisoryDomain[] = [
  {
    index: '01',
    id: 'risk-controls',
    title: 'Cyber & Digital Risk Advisory (ITGC)',
    subtitle: 'Enterprise Governance · Access Controls · Risk Posture',
    description:
      'Evaluating technology risk posture, testing IT General Controls (ITGC), and strengthening access and change management governance across regulated enterprise environments.',
    deliverables: [
      'IT General Controls (ITGC) design & operating effectiveness evaluations aligned with ISO/IEC 27001',
      'Role-Based Access Control (RBAC), Segregation of Duties (SoD) matrices, and privileged access reviews',
      'Technology risk assessments, control gap remediation roadmaps, and executive audit readiness reporting',
    ],
    standards: ['ISO/IEC 27001', 'ITGC / SOX', 'Enterprise GRC', 'NIST CSF', 'Access Governance'],
    impactMetric: 'Enterprise-Wide IT Control Assurance & Risk Remediation',
  },
  {
    index: '02',
    id: 'csv-gamp5',
    title: 'Computerized System Validation (CSV)',
    subtitle: 'GAMP 5 V-Model · IQ/OQ/PQ Lifecycle · Traceability',
    description:
      'Leading end-to-end risk-based qualification and validation of GxP laboratory, manufacturing, and enterprise software applications under GAMP 5 (Second Edition) guidelines.',
    deliverables: [
      'Authoring & reviewing Validation Plans (VP), User Requirements (URS), and Functional Risk Assessments (FRA)',
      'Executing Installation (IQ), Operational (OQ), and Performance Qualification (PQ) test protocols',
      'Maintaining bidirectional Requirements Traceability Matrices (RTM) and Validation Summary Reports (VSR)',
    ],
    standards: ['GAMP 5 (2nd Ed.)', 'V-Model Lifecycle', 'Cat 3 / 4 / 5 Systems', 'IQ / OQ / PQ'],
    impactMetric: '15+ Mission-Critical Systems Qualified End-to-End',
  },
  {
    index: '03',
    id: 'data-integrity',
    title: 'Data Integrity & 21 CFR Part 11 Assurance',
    subtitle: 'ALCOA++ · Electronic Signatures · Audit Trail Governance',
    description:
      'Enforcing technical and procedural controls for electronic records and electronic signatures, ensuring complete, consistent, and enduring data across system lifecycles.',
    deliverables: [
      '21 CFR Part 11 & EU Annex 11 gap assessments covering e-signatures, password policies, and session timeouts',
      'Tamper-evident computer-generated audit trail verification and periodic security review workflows',
      'Windows OS hardening, database encryption, backup/restore verification, and disaster recovery testing',
    ],
    standards: ['21 CFR Part 11', 'EU Annex 11', 'ALCOA++', 'WHO TRS 996', 'MHRA Data Integrity'],
    impactMetric: 'Zero Critical Data Integrity Observations Across Audits',
  },
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    role: 'Associate — Cyber & Digital Risk Advisory',
    organization: 'PwC India',
    period: 'Mar 2026 – Present',
    location: 'Gurugram, Haryana',
    summary:
      'Advising enterprise clients on technology risk governance, IT internal controls (ITGC), cybersecurity posture assessments, and regulated computerized system assurance.',
    highlights: [
      'Evaluate IT general controls (ITGC), user access provisioning, and change management workflows against ISO/IEC 27001 and regulatory benchmarks.',
      'Apply GAMP 5 and computerized system validation methodologies to enterprise digital transformation and regulated cloud initiatives.',
      'Translate technical control gaps and risk observations into structured remediation roadmaps for executive leadership.',
    ],
    standards: ['Cyber Risk Advisory', 'ITGC Assurance', 'ISO/IEC 27001', 'GAMP 5', 'Enterprise GRC'],
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
    standards: ['21 CFR Part 11', 'GAMP 5 Cat 3/4/5', 'ALCOA++', 'IQ/OQ/PQ', 'Audit Defense'],
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
    standards: ['FDA cGMP', 'GLP Compliance', 'Stability Protocols', 'Analytical Systems'],
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
    standards: ['GxP Documentation', 'Pharmacopeial Assays', 'SOP Governance', 'QC Instrumentation'],
  },
];

export const CONTROL_FRAMEWORKS: Record<'gamp5-csv' | 'itgc-part11', ControlFrameworkSpec> = {
  'gamp5-csv': {
    id: 'gamp5-csv',
    name: 'GAMP 5 (2nd Ed.) Risk-Based CSV V-Model Lifecycle',
    shortLabel: 'GAMP 5 CSV V-Model',
    tagline: 'Requirements Traceability · Functional Risk Assessment · IQ/OQ/PQ Qualification',
    summary:
      'Structured V-Model validation methodology ensuring every user requirement and patient-safety risk is verified through documented installation, operational, and performance testing prior to production release.',
    methodology: 'GAMP 5 (2nd Ed.) Critical Thinking & V-Model',
    regulatoryScope: 'FDA 21 CFR Part 11 · EU GMP Annex 11 · ICH Q9',
    evidenceStandard: 'Contemporaneous Scripted & Unscripted Test Protocols',
    reviewCadence: 'Change-Control Triggered & Annual Periodic Review',
    auditOutcome: '100% Bidirectional RTM Coverage',
    nodes: [
      {
        id: 'csv-stage-1',
        step: '01',
        label: 'Planning, URS & Risk Assessment',
        sublabel: 'Validation Plan · GxP Impact · FMEA',
        phaseCode: 'PHASE I · DEFINITION',
        assuranceStatus: 'Lifecycle Gate',
        description:
          'Define system boundaries, determine GxP impact and GAMP software category (Cat 3, 4, or 5), author User Requirements Specifications (URS), and perform Functional Risk Assessments (FRA) to scale testing rigor.',
        deliverablesAndEvidence:
          'Validation Plan (VP), GxP Assessment, User Requirements Specification (URS), Functional Risk Assessment (FMEA / ICH Q9).',
        regulatoryStandard: 'GAMP 5 Appendix M3 · EU Annex 11 Clause 1 (Risk Management) & Clause 4',
      },
      {
        id: 'csv-stage-2',
        step: '02',
        label: 'Specification & Security Configuration',
        sublabel: 'FDS · CS · RBAC & Audit Trail Design',
        phaseCode: 'PHASE II · SPECIFICATION',
        assuranceStatus: 'Mandatory Control',
        description:
          'Translate user requirements into Functional & Configuration Specifications (FDS/CS). Define role-based access matrices, password complexity, session lockouts, and electronic signature workflows.',
        deliverablesAndEvidence:
          'Functional Specification (FS), Configuration Specification (CS), Security & RBAC Matrix, Vendor Audit / Assessment Report.',
        regulatoryStandard: '21 CFR Part 11 (§11.10(d), §11.300) · EU Annex 11 Clause 12 (Security)',
      },
      {
        id: 'csv-stage-3',
        step: '03',
        label: 'IQ / OQ / PQ Qualification Execution',
        sublabel: 'Hardware/OS · Functional Negative Testing · User Acceptance',
        phaseCode: 'PHASE III · VERIFICATION',
        assuranceStatus: 'Lifecycle Gate',
        description:
          'Execute Installation Qualification (hardware, database, OS environment), Operational Qualification (positive/negative security tests, audit trail immutability, alarms), and Performance Qualification under production load.',
        deliverablesAndEvidence:
          'Executed IQ Protocol, OQ Protocol (with negative security & audit trail tests), PQ Protocol, Deviation & Incident Logs.',
        regulatoryStandard: '21 CFR Part 11 (§11.10(a)) · GAMP 5 Appendix D5 (Testing of GxP Systems)',
      },
      {
        id: 'csv-stage-4',
        step: '04',
        label: 'Traceability, Release & Periodic Review',
        sublabel: 'RTM · VSR · Change Control & Decommissioning',
        phaseCode: 'PHASE IV · GOVERNANCE',
        assuranceStatus: 'Continuous Assurance',
        description:
          'Verify 100% mapping between URS, Risk Controls, and IQ/OQ/PQ test scripts in the Requirements Traceability Matrix (RTM). Issue formal system release and maintain validated state via SOPs and periodic reviews.',
        deliverablesAndEvidence:
          'Requirements Traceability Matrix (RTM), Validation Summary Report (VSR), System Go-Live Release, Operational & Backup SOPs.',
        regulatoryStandard: 'EU Annex 11 Clause 11 (Periodic Evaluation) · 21 CFR Part 11 (§11.10(e), (k))',
      },
    ],
  },
  'itgc-part11': {
    id: 'itgc-part11',
    name: 'IT General Controls (ITGC) & ALCOA++ Technical Architecture',
    shortLabel: 'ITGC & 21 CFR Part 11 Controls',
    tagline: 'Access Governance · Tamper-Evident Audit Trails · Backup & Disaster Recovery',
    summary:
      'Defense-in-depth technical control framework governing identity lifecycle, segregation of duties, electronic record immutability, and cryptographic backup resilience across enterprise systems.',
    methodology: 'ISO/IEC 27001 · COBIT · ALCOA++ Data Integrity',
    regulatoryScope: '21 CFR Part 11 · SOX ITGC · WHO TRS 996',
    evidenceStandard: 'System Configuration Screenshots & Log Extracts',
    reviewCadence: 'Quarterly Access & Audit Trail Reviews',
    auditOutcome: 'Zero Unresolved Segregation of Duties Conflicts',
    nodes: [
      {
        id: 'itgc-stage-1',
        step: '01',
        label: 'Identity, RBAC & Segregation of Duties',
        sublabel: 'Least Privilege · Admin Separation · Provisioning',
        phaseCode: 'CONTROL DOMAIN 01',
        assuranceStatus: 'Mandatory Control',
        description:
          'Enforce strict separation between System Administrators (IT/Infrastructure) and GxP Operational Users (QA/QC). Eliminate shared accounts and enforce unique user IDs with automated inactivity lockouts.',
        deliverablesAndEvidence:
          'Role-Based Access Control (RBAC) Matrix, User Access Request/Revocation Logs, Quarterly Privileged Access Recertification.',
        regulatoryStandard: '21 CFR Part 11 (§11.10(d), §11.10(g)) · ISO/IEC 27001 Annex A.9',
      },
      {
        id: 'itgc-stage-2',
        step: '02',
        label: 'Tamper-Evident Audit Trail Governance',
        sublabel: 'UTC NTP Sync · Old/New Value Capture · Reason Prompts',
        phaseCode: 'CONTROL DOMAIN 02',
        assuranceStatus: 'Mandatory Control',
        description:
          'Ensure computer-generated, time-stamped audit trails independently record the operator ID, date/time (synced to locked NTP server), original and modified values, and mandatory electronic reason for change.',
        deliverablesAndEvidence:
          'Audit Trail Verification Test Scripts, Windows Time/NTP Lock Policy, Periodic Audit Trail Review Checklists.',
        regulatoryStandard: '21 CFR Part 11 (§11.10(e)) · EU Annex 11 Clause 9 · ALCOA++ (Contemporaneous)',
      },
      {
        id: 'itgc-stage-3',
        step: '03',
        label: 'Electronic Signatures & File-System Hardening',
        sublabel: 'Signature Manifestation · OS Registry & Folder Locks',
        phaseCode: 'CONTROL DOMAIN 03',
        assuranceStatus: 'Lifecycle Gate',
        description:
          'Bind electronic signatures permanently to their respective electronic records with printed name, timestamp, and signature meaning (Review/Approval), while restricting OS-level raw data folder deletion or manipulation.',
        deliverablesAndEvidence:
          'E-Signature Linking Verification, Windows Group Policy (GPO) Hardening Baseline, Raw Data Directory ACL Configuration.',
        regulatoryStandard: '21 CFR Part 11 (§11.50, §11.70, §11.200) · MHRA GxP Data Integrity Guidance',
      },
      {
        id: 'itgc-stage-4',
        step: '04',
        label: 'Encrypted Backup, Restore & Archival Assurance',
        sublabel: 'Automated SQL/File Backup · Restoration Drills · DRP',
        phaseCode: 'CONTROL DOMAIN 04',
        assuranceStatus: 'Continuous Assurance',
        description:
          'Protect long-term record availability and readability through scheduled encrypted backups, off-site replication, and periodic trial restoration testing to verify zero data corruption or metadata loss.',
        deliverablesAndEvidence:
          'Backup & Restoration Qualification Report,Checksum Integrity Logs, Disaster Recovery Plan (DRP) & Business Continuity Drill.',
        regulatoryStandard: '21 CFR Part 11 (§11.10(c)) · EU Annex 11 Clause 7 (Data Storage) & Clause 17',
      },
    ],
  },
};

export const VALIDATED_SYSTEMS: ValidatedSystemItem[] = [
  {
    id: 'metrohm-tiamo',
    name: 'Metrohm Tiamo 2.5',
    category: 'Chromatography & Titration',
    gampCategory: 'GAMP 5 Category 4 · Client/Server',
    tagline: 'Enterprise automated titration and multi-instrument laboratory data management platform.',
    description:
      'Led full-lifecycle qualification (URS, FRA, IQ, OQ, PQ) and 21 CFR Part 11 technical control hardening for centralized titration data acquisition, database security, and automated assay calculations.',
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
    gampCategory: 'GAMP 5 Category 4 · Enhanced Security',
    tagline: 'FT-IR spectroscopy platform with 21 CFR Part 11 Enhanced Security (ES) module.',
    description:
      'Executed comprehensive validation and data integrity lockdown for Fourier-Transform Infrared (FT-IR) raw spectral acquisition, library matching, and electronic signature manifestation.',
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
    gampCategory: 'GAMP 5 Category 4 · Telemetry & EMS',
    tagline: 'Tamper-evident environmental monitoring and stability chamber telemetry review system.',
    description:
      'Qualified continuous temperature and relative humidity (RH) recording infrastructure for FDA/ICH stability chambers, ensuring contemporaneous alarm logging and zero gaps in environmental telemetry.',
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
    name: 'Enterprise eLogbook & Digital Batch Logs',
    category: 'Enterprise & Governance',
    gampCategory: 'GAMP 5 Category 4/5 · Web Enterprise',
    tagline: 'Paperless equipment usage, calibration, and cleanroom operational logbook platform.',
    description:
      'Guided requirements definition, functional risk assessment, and user acceptance testing (PQ) for transitioning physical laboratory and manufacturing logbooks to a validated electronic workflow.',
    complianceStandards: ['GAMP 5 Cat 4/5', '21 CFR Part 11', 'ALCOA++', 'RBAC / Active Directory'],
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
    name: 'TOC Analyzer & Analytical Instrument Suite',
    category: 'Chromatography & Titration',
    gampCategory: 'GAMP 5 Category 3/4 · Analytical QC',
    tagline: 'Total Organic Carbon (TOC), pH/Conductivity, and Karl Fischer computerized instruments.',
    description:
      'Standardized validation protocols, periodic review checklists, and data integrity controls across standalone and networked quality control instruments in regulated pharmaceutical laboratories.',
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
    name: 'Windows OS Hardening, RBAC & Backup Infrastructure',
    category: 'Enterprise & Governance',
    gampCategory: 'ITGC & GxP Infrastructure Qualification',
    tagline: 'Operating system security baselines, Active Directory access controls, and disaster recovery.',
    description:
      'Designed and audited foundational IT General Controls (ITGC) supporting computerized laboratory systems, eliminating local admin privileges and securing raw analytical data repositories.',
    complianceStandards: ['ISO/IEC 27001', 'ITGC', '21 CFR Part 11', 'Disaster Recovery'],
    controlHighlights: [
      'Implemented Windows Group Policy (GPO) locks disabling USB mass storage, system clock edits, and local file deletion',
      'Established formal Segregation of Duties (SoD) between IT System Administrators and Quality Assurance reviewers',
      'Executed periodic backup restoration drills and verified SHA-256/checksum parity of archived GxP databases',
    ],
    validationScopeNotes:
      'Encompassed workstation IQ baselines, NTFS access control list (ACL) audits, SQL Server backup job monitoring, and incident/change management governance.',
  },
];

export const COMPETENCY_GROUPS: CompetencyGroup[] = [
  {
    index: '01',
    category: 'Cyber Risk & Regulatory Frameworks',
    summary: 'Global standards governing enterprise cyber resilience, IT controls, and GxP compliance.',
    items: [
      {
        name: '21 CFR Part 11 & EU GMP Annex 11',
        domain: 'Electronic Records & Signatures',
        application: 'End-to-end technical control mapping, e-signature validation, and regulatory inspection defense',
      },
      {
        name: 'GAMP 5 (Second Edition)',
        domain: 'Risk-Based CSV Lifecycle',
        application: 'V-Model software categorization (Cat 3/4/5), critical thinking risk assessments, and RTM governance',
      },
      {
        name: 'ISO/IEC 27001 & IT General Controls (ITGC)',
        domain: 'Cyber & Digital Risk Advisory',
        application: 'Access control reviews, change management testing, IT risk assessments, and control remediation',
      },
      {
        name: 'ALCOA++ & Global Data Integrity',
        domain: 'WHO / MHRA / FDA Guidance',
        application: 'Data lifecycle mapping, audit trail review governance, and hybrid system risk mitigation',
      },
    ],
  },
  {
    index: '02',
    category: 'Validation & Assurance Deliverables',
    summary: 'Complete documentation and testing artifacts across the computerized system lifecycle.',
    items: [
      {
        name: 'Validation Plans (VP) & URS',
        domain: 'Lifecycle Definition',
        application: 'Defining clear, testable user requirements, GxP impact boundaries, and validation strategies',
      },
      {
        name: 'Functional Risk Assessment (FRA / FMEA)',
        domain: 'ICH Q9 Quality Risk Management',
        application: 'Evaluating severity, occurrence, and detectability to focus testing on critical patient/data risks',
      },
      {
        name: 'IQ, OQ & PQ Protocol Execution',
        domain: 'Scripted & Negative Testing',
        application: 'Verifying installation baselines, security/boundary controls, and real-world operational performance',
      },
      {
        name: 'RTM, VSR & Periodic Reviews',
        domain: 'Continuous Validated State',
        application: 'Bidirectional traceability matrices, summary reports, change control impact analysis, and retirement',
      },
    ],
  },
  {
    index: '03',
    category: 'Enterprise Systems & Technical Controls',
    summary: 'Hands-on technical administration, laboratory software qualification, and security tooling.',
    items: [
      {
        name: 'Laboratory & GxP Software Platforms',
        domain: 'Analytical & Telemetry Systems',
        application: 'Metrohm Tiamo 2.5, PerkinElmer Spectrum IR, Eurotherm Data Reviewer, eLogbooks, and TOC systems',
      },
      {
        name: 'RBAC, Active Directory & OS Hardening',
        domain: 'Access & Endpoint Security',
        application: 'Segregation of duties matrices, Windows GPO locks, NTFS permissions, and privileged access audits',
      },
      {
        name: 'Audit Trail & Database Integrity',
        domain: 'Technical Verification',
        application: 'SQL backup/restore qualification, NTP time-sync locks, and tamper-evident log verification',
      },
      {
        name: 'CAPA, Deviation & Change Governance',
        domain: 'Quality Management Systems',
        application: 'Root-cause investigation for validation discrepancies, software patches, and infrastructure upgrades',
      },
    ],
  },
];
