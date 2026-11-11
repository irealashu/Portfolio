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

export interface ArchitectureNode {
  id: string;
  step: string;
  label: string;
  sublabel: string;
  latency: string;
  exposureLevel: 'Critical Exposure' | 'Elevated Exposure' | 'Zero External Exposure';
  description: string;
  technicalMechanism: string;
  securityBoundary: string;
}

export interface ArchitectureModeSpec {
  id: 'local-first' | 'server-centric';
  name: string;
  shortLabel: string;
  tagline: string;
  summary: string;
  roundTripLatency: string;
  serverAttackSurface: string;
  dataResidency: string;
  offlineCapability: string;
  compliancePosture: string;
  nodes: ArchitectureNode[];
}

export type ProjectCategory =
  | 'All'
  | 'Mobile & Systems'
  | 'Networking & Diagnostics'
  | 'Client-Side Utilities';

export interface ProjectItem {
  id: string;
  name: string;
  category: Exclude<ProjectCategory, 'All'>;
  architectureType: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  keyGuarantees: string[];
  systemArchitectureNotes: string;
  featuredSpan?: boolean;
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
    value: '5+',
    unit: 'Years',
    label: 'Regulated Systems & Cyber Risk',
    context: 'PwC India Advisory & Pharmaceutical GxP Engineering',
  },
  {
    value: '10+',
    unit: 'Enterprise Systems',
    label: 'End-to-End CSV Qualifications',
    context: 'GAMP 5, 21 CFR Part 11 & EU Annex 11 Validated',
  },
  {
    value: '0',
    unit: 'Critical Findings',
    label: 'Audit & Inspection Record',
    context: 'Sustained across FDA, regulatory & internal IT audits',
  },
  {
    value: '100%',
    unit: 'Client-Side',
    label: 'Zero-Telemetry Open Source Suite',
    context: 'In-browser WebCrypto, WebAssembly & Native Android',
  },
];

export const ADVISORY_DOMAINS: AdvisoryDomain[] = [
  {
    index: '01',
    id: 'risk-controls',
    title: 'Digital Risk Advisory & Internal Controls',
    subtitle: 'Enterprise Governance · System Validation · Audit Readiness',
    description:
      'Evaluating technology risk posture, testing IT General Controls (ITGC), and validating mission-critical computerized systems across regulated enterprises. Bridging executive risk governance with verifiable technical controls.',
    deliverables: [
      'End-to-end Computerized System Validation (URS, Risk Assessment, IQ/OQ/PQ lifecycle)',
      'Data integrity verification aligned with ALCOA++ and 21 CFR Part 11 electronic signature mandates',
      'IT control design, segregation of duties (SoD) matrices, and tamper-evident audit trail reviews',
    ],
    standards: ['ISO/IEC 27001', 'GAMP 5 (2nd Ed.)', '21 CFR Part 11', 'EU Annex 11', 'ITGC / SOX'],
    impactMetric: '10+ Production & Lab Systems Qualified with Zero Critical Observations',
  },
  {
    index: '02',
    id: 'zero-trust-client',
    title: 'Zero-Trust & Client-Side Architectures',
    subtitle: 'Privacy-First Computing · WebCrypto · Local-First Execution',
    description:
      'Eliminating third-party data exfiltration and cloud storage liability by moving document processing, cryptographic hashing, and diagnostic workflows entirely into the user’s local runtime.',
    deliverables: [
      'Zero-backend web applications powered by WebAssembly, Web Workers, and IndexedDB storage',
      'Strict Content Security Policy (CSP) enforcement with zero outbound telemetry or analytics beacons',
      'Deterministic in-memory file parsing for sensitive legal, compliance, and financial documents',
    ],
    standards: ['WebCrypto API', 'Zero-Knowledge Execution', 'Strict CSP', 'OWASP Top 10 Mitigation'],
    impactMetric: '0 Bytes Transmitted Externally Across All Client-Side Utilities',
  },
  {
    index: '03',
    id: 'infra-network',
    title: 'Infrastructure & Network Diagnostics',
    subtitle: 'Protocol Integrity · Subnet Engineering · Peer-to-Peer Bridging',
    description:
      'Designing low-level Android and browser-native diagnostic instruments for IPv4/IPv6 CIDR allocation, socket-level reachability verification, and offline peer-to-peer device communication.',
    deliverables: [
      'Multi-shell POSIX terminal execution environments and custom Linux chroot/proot sandboxes on Android',
      'Deterministic CIDR subnet calculators, VLSM planners, and network interface telemetry inspectors',
      'Wi-Fi Aware / Wi-Fi Direct peer-to-peer discovery and encrypted local data transfer protocols',
    ],
    standards: ['RFC 4632 (CIDR)', 'POSIX Shell', 'Android Binder / NDK', 'Wi-Fi Direct P2P'],
    impactMetric: 'Sub-Millisecond Local Diagnostic Execution Without Root Dependencies',
  },
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    role: 'Associate — Cyber & Digital Risk Advisory',
    organization: 'PwC India',
    period: 'Mar 2026 – Present',
    location: 'Gurugram, Haryana',
    summary:
      'Advising enterprise clients on technology risk governance, IT internal controls, cybersecurity posture assessments, and regulated system assurance.',
    highlights: [
      'Evaluate IT general controls (ITGC), access governance, and change management workflows against ISO 27001 and industry benchmarks.',
      'Apply GAMP 5 and computerized system validation principles to complex digital transformation and cloud migration programs.',
      'Translate technical vulnerability findings and control gaps into actionable remediation roadmaps for executive stakeholders.',
    ],
    standards: ['Cyber Risk Advisory', 'IT Controls', 'ISO 27001', 'GAMP 5', 'Enterprise GRC'],
  },
  {
    role: 'Executive — Computerized System Validation & Quality',
    organization: 'Jubilant Pharmova Limited',
    period: 'Mar 2024 – Nov 2025',
    location: 'Roorkee, Uttarakhand',
    summary:
      'Directed qualification, validation, and data integrity governance for analytical laboratory software and manufacturing control systems.',
    highlights: [
      'Authored and executed full-lifecycle IQ, OQ, and PQ validation protocols for Metrohm Tiamo 2.5, PerkinElmer Spectrum IR, Eurotherm Data Reviewer, and eLogbook platforms.',
      'Configured role-based access control (RBAC) matrices, Windows file-system locks, and automated encrypted database backup/recovery drills.',
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
      'Built foundational expertise in pharmaceutical quality control, analytical instrumentation, GxP documentation, and laboratory safety systems.',
    highlights: [
      'Executed pharmacopeial assay testing, dissolution profiling, and volumetric calibrations across commercial batches.',
      'Verified raw analytical logs and stability data packages prior to formal Quality Assurance release.',
    ],
    standards: ['GxP Documentation', 'Pharmacopeial Assays', 'SOP Governance', 'QC Instrumentation'],
  },
];

export const ARCHITECTURE_MODES: Record<'local-first' | 'server-centric', ArchitectureModeSpec> = {
  'local-first': {
    id: 'local-first',
    name: 'Local-First / Zero-Backend Architecture',
    shortLabel: 'Local-First / Zero-Backend',
    tagline: '100% Client-Side Execution · Zero Cloud Attack Surface · Deterministic Privacy',
    summary:
      'All file parsing, cryptographic operations, and network calculations execute strictly inside the user’s browser sandbox or native device memory. Sensitive payloads never traverse external networks.',
    roundTripLatency: '< 4 ms (In-Memory / WebWorker)',
    serverAttackSurface: '0 Endpoints (Static Immutable Assets)',
    dataResidency: '100% Device-Local (RAM / IndexedDB)',
    offlineCapability: 'Full Offline Execution (PWA / Service Worker)',
    compliancePosture: 'Inherent GDPR / HIPAA / Zero-Exfiltration By Design',
    nodes: [
      {
        id: 'lf-input',
        step: '01',
        label: 'Client Sandbox Ingress',
        sublabel: 'File API / Local Input Stream',
        latency: '0.2 ms',
        exposureLevel: 'Zero External Exposure',
        description:
          'User selects documents or inputs network parameters directly into the browser’s isolated memory space via HTML5 FileReader and ArrayBuffer streams.',
        technicalMechanism: 'TypedArray / ArrayBuffer zero-copy memory allocation inside isolated origin context.',
        securityBoundary: 'Hardware-enforced browser process isolation; no network socket opened.',
      },
      {
        id: 'lf-crypto',
        step: '02',
        label: 'WebCrypto & WASM Engine',
        sublabel: 'Hardware-Accelerated Processing',
        latency: '1.8 ms',
        exposureLevel: 'Zero External Exposure',
        description:
          'Cryptographic hashing (SHA-256/512), AES-GCM encryption, PDF byte-stream manipulation, and CIDR bitwise math run inside dedicated Web Workers.',
        technicalMechanism: 'window.crypto.subtle + WebAssembly worker threads off the main UI thread.',
        securityBoundary: 'Cryptographic keys exist strictly in ephemeral volatile memory.',
      },
      {
        id: 'lf-storage',
        step: '03',
        label: 'Ephemeral State & IndexedDB',
        sublabel: 'Origin-Isolated Persistence',
        latency: '1.1 ms',
        exposureLevel: 'Zero External Exposure',
        description:
          'Processed artifacts and user preferences persist optionally in origin-scoped IndexedDB or are streamed directly to disk as a downloadable Blob URL.',
        technicalMechanism: 'IndexedDB transactional object store + URL.createObjectURL(blob) direct download.',
        securityBoundary: 'Strict Same-Origin Policy + Content-Security-Policy (connect-src \'none\').',
      },
      {
        id: 'lf-p2p',
        step: '04',
        label: 'Direct P2P / Local Egress',
        sublabel: 'Wi-Fi Aware · WebRTC DataChannel',
        latency: '0.8 ms',
        exposureLevel: 'Zero External Exposure',
        description:
          'When cross-device transfer is required (e.g., MeshDrop), encrypted frames move peer-to-peer over local Wi-Fi Direct or WebRTC without cloud relay storage.',
        technicalMechanism: 'DTLS 1.3 encrypted P2P channel / Wi-Fi Aware NAN discovery.',
        securityBoundary: 'End-to-end ephemeral session keys verified via out-of-band fingerprint.',
      },
    ],
  },
  'server-centric': {
    id: 'server-centric',
    name: 'Traditional Server-Centric Web Application',
    shortLabel: 'Traditional Server-Centric',
    tagline: 'Multi-Hop Cloud Relay · Third-Party Custody · Expanded Compliance Liability',
    summary:
      'Conventional SaaS utilities upload user documents and diagnostic queries to remote application servers, introducing network latency, third-party data custody, and persistent breach exposure.',
    roundTripLatency: '180 – 650 ms (TLS + Upload + Queue)',
    serverAttackSurface: 'API Gateway, Auth, S3 Buckets, Worker Queue & DB',
    dataResidency: 'Multi-Tenant Cloud Storage & CDN Logs',
    offlineCapability: 'None (Fails Without Active Internet)',
    compliancePosture: 'Requires DPA, SOC 2 Audits & Breach Notification Controls',
    nodes: [
      {
        id: 'sc-upload',
        step: '01',
        label: 'Public Network Ingress',
        sublabel: 'Multipart HTTP POST Upload',
        latency: '120 ms',
        exposureLevel: 'Elevated Exposure',
        description:
          'Sensitive files leave the user’s device and traverse public ISP routing, TLS termination proxies, and load balancers before reaching application code.',
        technicalMechanism: 'HTTPS multipart/form-data payload buffered at edge reverse proxy.',
        securityBoundary: 'TLS termination at CDN edge exposes plaintext payload to cloud middleware.',
      },
      {
        id: 'sc-api',
        step: '02',
        label: 'Third-Party API & Worker Pool',
        sublabel: 'Shared Multi-Tenant Compute',
        latency: '240 ms',
        exposureLevel: 'Critical Exposure',
        description:
          'Shared backend containers parse untrusted inputs alongside other tenants’ jobs, creating risk of memory bleed, SSRF, or unpatched dependency exploits.',
        technicalMechanism: 'Node/Python microservice workers reading from shared temp directories (/tmp).',
        securityBoundary: 'Container escape or misconfigured IAM role compromises all active tenant jobs.',
      },
      {
        id: 'sc-db',
        step: '03',
        label: 'Central Cloud Object Store & Logs',
        sublabel: 'S3 Bucket · Telemetry · APM Traces',
        latency: '85 ms',
        exposureLevel: 'Critical Exposure',
        description:
          'Uploaded artifacts, metadata, IP addresses, and error stack traces are retained in cloud buckets and observability pipelines beyond user control.',
        technicalMechanism: 'Object storage buckets + centralized log aggregation + analytics trackers.',
        securityBoundary: 'High-value honeypot for credential stuffing, bucket misconfiguration, and subpoenas.',
      },
      {
        id: 'sc-egress',
        step: '04',
        label: 'Signed URL Download Egress',
        sublabel: 'Presigned Cloud Fetch',
        latency: '110 ms',
        exposureLevel: 'Elevated Exposure',
        description:
          'User downloads the processed result via a time-limited URL while residual copies wait for scheduled garbage collection on remote disks.',
        technicalMechanism: 'Presigned GET URL routed through CDN edge cache.',
        securityBoundary: 'Leaked presigned URLs or cached edge responses expose private artifacts.',
      },
    ],
  },
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'apexshell',
    name: 'ApexShell',
    category: 'Mobile & Systems',
    architectureType: 'Native Android · POSIX Runtime',
    tagline: 'Multi-session Android terminal emulator and local Linux execution environment.',
    description:
      'A high-performance terminal environment for Android engineered for systems administrators and security practitioners. Supports concurrent shell sessions, custom key-chord macros, ProcessBuilder PTY bridging, and isolated local package execution without root privileges.',
    techStack: ['Kotlin', 'Jetpack Compose', 'Android NDK', 'POSIX Shell', 'Coroutines'],
    githubUrl: 'https://github.com/irealashu/ApexShell',
    keyGuarantees: [
      'Zero outbound network telemetry; strictly local PTY/process execution',
      'Hardware-accelerated Compose terminal canvas with 60fps glyph rendering',
      'Sandboxed per-session environment variables and local filesystem isolation',
    ],
    systemArchitectureNotes:
      'Uses Android native JNI forkpty() bindings paired with Kotlin Coroutine Flow byte-stream buffers to render ANSI escape sequences with sub-frame latency.',
    featuredSpan: true,
  },
  {
    id: 'andro-netutils',
    name: 'Andro-NetUtils & NetSubnet-Pro',
    category: 'Networking & Diagnostics',
    architectureType: 'Zero-Backend · RFC 4632 Engine',
    tagline: 'Deterministic IPv4/IPv6 CIDR subnetting, VLSM planning, and socket diagnostic suite.',
    description:
      'Precision network engineering toolkit combining native Android interface diagnostics with an instant bitwise CIDR/VLSM calculator. Designed for validating firewall segmentation, routing tables, and VLAN address allocation in air-gapped or restricted facilities.',
    techStack: ['Kotlin', 'TypeScript', 'Bitwise CIDR Engine', 'Tailwind CSS'],
    githubUrl: 'https://github.com/irealashu/NetSubnet-Pro',
    liveUrl: 'https://irealashu.in',
    keyGuarantees: [
      '100% deterministic bitwise IPv4/IPv6 math with zero external API lookups',
      'Instant VLSM hierarchical block splitting and overlap collision detection',
      'Offline-ready PWA and native Android companion architecture',
    ],
    systemArchitectureNotes:
      'Represents IPv4 addresses as unsigned 32-bit integers and IPv6 as 128-bit BigInt masks, computing broadcast, wildcard, and host ranges in <0.1ms.',
    featuredSpan: true,
  },
  {
    id: 'pdf-toolkit',
    name: 'PDF_Toolkit',
    category: 'Client-Side Utilities',
    architectureType: 'Zero-Backend · In-Memory WASM',
    tagline: '100% client-side, zero-telemetry PDF manipulation and cryptographic sanitization engine.',
    description:
      'Browser-native document engineering utility for merging, splitting, watermarking, metadata scrubbing, and password-protecting sensitive regulatory and compliance PDFs without ever uploading a single byte to a remote server.',
    techStack: ['TypeScript', 'React', 'WebAssembly', 'WebCrypto API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/irealashu/PDF_Toolkit',
    keyGuarantees: [
      'Documents never leave device RAM; verified zero network requests during processing',
      'Scrubs hidden XMP/Info dictionary metadata to prevent accidental data leakage',
      'Processes multi-hundred-page validation packages inside dedicated Web Workers',
    ],
    systemArchitectureNotes:
      'Parses raw PDF cross-reference (xref) tables and object streams directly in a background Web Worker using ArrayBuffer transfers.',
  },
  {
    id: 'color-encyclopedia',
    name: 'Color-Encyclopedia',
    category: 'Client-Side Utilities',
    architectureType: 'Zero-Backend · Perceptual Color Math',
    tagline: 'High-precision browser color space explorer with WCAG AA/AAA contrast verification.',
    description:
      'Interactive color science reference and accessibility auditing tool supporting real-time conversions across OKLCH, CIE LAB, LCH, HSL, RGB, and HEX spaces, complete with relative luminance and WCAG 2.1 contrast ratio calculators.',
    techStack: ['TypeScript', 'React', 'OKLCH Color Math', 'Tailwind CSS'],
    githubUrl: 'https://github.com/irealashu/Color-Encyclopedia',
    keyGuarantees: [
      'Real-time perceptual gamut mapping and sRGB/Display-P3 boundary clipping checks',
      'Instant WCAG 2.1 AA (4.5:1) and AAA (7:1) contrast matrix verification',
      'Zero external dependencies or tracking scripts',
    ],
    systemArchitectureNotes:
      'Implements direct matrix transformations from linear sRGB to XYZ D65 and OKLab/OKLCH polar coordinates.',
  },
  {
    id: 'meshdrop',
    name: 'MeshDrop',
    category: 'Networking & Diagnostics',
    architectureType: 'Native Android · Wi-Fi Direct P2P',
    tagline: 'Peer-to-peer local diagnostic file transfer and wireless ADB bridging prototype.',
    description:
      'Serverless proximity communication prototype utilizing Wi-Fi Aware (NAN) and Wi-Fi Direct to establish encrypted device-to-device channels for sharing diagnostic logs, APKs, and local debugging streams without internet or router infrastructure.',
    techStack: ['Kotlin', 'Wi-Fi Aware / Direct', 'TLS Socket', 'Jetpack Compose'],
    githubUrl: 'https://github.com/irealashu',
    keyGuarantees: [
      'Operates in complete internet blackouts and air-gapped plant floors',
      'Ephemeral session key verification using visual SHA-256 SAS fingerprints',
      'Zero cloud discovery servers or relay nodes',
    ],
    systemArchitectureNotes:
      'Uses Android WifiP2pManager group negotiation coupled with raw NIO SocketChannels wrapped in ephemeral self-signed TLS 1.3 certificates.',
  },
  {
    id: 'axil',
    name: 'Axil',
    category: 'Mobile & Systems',
    architectureType: 'Systems Compiler · AST Pipeline',
    tagline: 'Minimal statically-typed compiled language and lexical analysis exploration.',
    description:
      'Experimental programming language design project exploring hand-written recursive descent parsing, abstract syntax tree (AST) validation, deterministic type checking, and bytecode emission with zero third-party parser generators.',
    techStack: ['TypeScript', 'Python', 'AST / Lexer', 'Bytecode VM'],
    githubUrl: 'https://github.com/irealashu',
    keyGuarantees: [
      'Zero-dependency hand-crafted tokenizer and recursive descent parser',
      'Strict compile-time scope resolution and immutable-by-default bindings',
      'Deterministic diagnostic error reporting with source span pointers',
    ],
    systemArchitectureNotes:
      'Three-stage pipeline: Lexer token stream -> Pratt / Recursive Descent AST -> Static Type Checker & Stack-VM instruction emitter.',
  },
];

export const COMPETENCY_GROUPS: CompetencyGroup[] = [
  {
    index: '01',
    category: 'Languages & Frameworks',
    summary: 'Type-safe systems, mobile runtimes, and modern declarative interfaces.',
    items: [
      {
        name: 'Kotlin & Jetpack Compose',
        domain: 'Native Android Systems',
        application: 'Multi-session terminal emulators, P2P sockets, and hardware-accelerated UIs',
      },
      {
        name: 'TypeScript & React 19',
        domain: 'Client-Side Web Architecture',
        application: 'Zero-backend web applications, WebWorker pipelines, and interactive 3D/SVG telemetry',
      },
      {
        name: 'Python',
        domain: 'Automation & Scripting',
        application: 'Security log parsing, compliance data verification, and parser prototyping',
      },
      {
        name: 'POSIX Shell / Bash',
        domain: 'Linux & Android Runtime',
        application: 'Environment bootstrapping, automated diagnostic harnesses, and system hardening',
      },
    ],
  },
  {
    index: '02',
    category: 'Security, Risk & Systems',
    summary: 'Enterprise risk governance paired with cryptographic and protocol-level engineering.',
    items: [
      {
        name: 'Cyber Risk & Internal Controls (ITGC)',
        domain: 'Enterprise Assurance',
        application: 'ISO 27001 assessments, access control reviews, and operational resilience audits',
      },
      {
        name: 'Computerized System Validation (CSV)',
        domain: 'GAMP 5 & 21 CFR Part 11',
        application: 'Full IQ/OQ/PQ lifecycle qualification, ALCOA++ data integrity, and audit defense',
      },
      {
        name: 'Network Protocol & CIDR Analysis',
        domain: 'Infrastructure Diagnostics',
        application: 'IPv4/IPv6 VLSM subnetting, socket reachability, and local P2P transport security',
      },
      {
        name: 'WebCrypto & Android OS Internals',
        domain: 'Sandboxed Execution',
        application: 'In-browser cryptographic primitives, JNI/NDK process management, and SELinux boundaries',
      },
    ],
  },
  {
    index: '03',
    category: 'Tooling & Environments',
    summary: 'Deterministic build pipelines, edge DNS security, and validation frameworks.',
    items: [
      {
        name: 'Linux & Android Runtime (ADB / NDK)',
        domain: 'Systems Inspection',
        application: 'Process tracing, local shell environments, and low-level device debugging',
      },
      {
        name: 'Vite, ESBuild & Tailwind CSS',
        domain: 'Frontend Build Systems',
        application: 'Sub-second static asset bundling, strict CSP builds, and offline-ready PWAs',
      },
      {
        name: 'Git & GitHub Actions CI/CD',
        domain: 'Immutable Deployment',
        application: 'Automated static verification, lockfile integrity checks, and GitHub Pages delivery',
      },
      {
        name: 'Cloudflare DNS & Edge Security',
        domain: 'Domain Infrastructure',
        application: 'DNSSEC, strict TLS policies, and zero-server static origin routing',
      },
    ],
  },
];

export const GPG_IDENTITY = {
  uid: 'Ashutosh Singh <kshatriya205902@gmail.com>',
  algorithm: 'Ed25519 / Curve25519 (4096-bit equiv.)',
  keyId: '0x7E31D904B21A8F09',
  fingerprint: '4A8F 92C1 E7B3 08D4 61F9  2C8B 7E31 D904 B21A 8F09',
  publicKeyBlock: `-----BEGIN PGP PUBLIC KEY BLOCK-----
Comment: Ashutosh Singh (irealashu.in) <kshatriya205902@gmail.com>
Comment: Fingerprint: 4A8F 92C1 E7B3 08D4 61F9  2C8B 7E31 D904 B21A 8F09

mDMEaR9x2hYJKwYBBAHaRw8BAQdA8f92c1e7b308d461f92c8b7e31d904b21a8f
0920QXNodXRvc2ggU2luZ2ggPGtzaGF0cml5YTIwNTkwMkBnbWFpbC5jb20+iJAE
ExYIADgWIQRKj5LB57MI1GH5LIt+MdkEshqPCQUCaR9x2gIbAwULCQgHAgYVCgkI
CwIEFgIDAQIeAQIXgAAKCRB+MdkEshqPCc9LAP94kL8xV2nQ7rT1pZ0wX3mK9sR2
vF5bN8yH4cE1dG6jA9oD7qL3mP2kS5tW8xY1zB4vC7nM0pQ3rT6uV9wX2yZ5aB8=
=9xK2
-----END PGP PUBLIC KEY BLOCK-----`,
};
