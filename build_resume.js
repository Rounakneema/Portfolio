const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  HeadingLevel, BorderStyle, WidthType, TabStopType,
  NumberFormat, UnderlineType
} = require('docx');
const fs = require('fs');

const NAVY  = '1B2A4A';
const DARK  = '111827';
const MID   = '374151';
const LIGHT = '6B7280';
const FONT  = 'Calibri';
const pt    = n => n * 2;

function hRule(c = NAVY) {
  return new Paragraph({
    spacing: { before: 30, after: 30 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: c } }
  });
}

function sectionHeader(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, color: NAVY, size: pt(9), font: FONT, allCaps: true })],
    spacing: { before: 90, after: 30 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: NAVY } }
  });
}

function projHeader(title, tech, date) {
  return new Paragraph({
    children: [
      new TextRun({ text: title, bold: true, color: DARK, size: pt(9), font: FONT }),
      new TextRun({ text: '  |  ', color: MID, size: pt(8.5), font: FONT }),
      new TextRun({ text: tech, italics: true, color: MID, size: pt(8.5), font: FONT }),
      new TextRun({ text: '  |  ', color: MID, size: pt(8.5), font: FONT }),
      new TextRun({ text: date, italics: true, color: MID, size: pt(8.5), font: FONT }),
    ],
    spacing: { before: 80, after: 14 }
  });
}

function b(text) {
  return new Paragraph({
    children: [new TextRun({ text, color: DARK, size: pt(8.7), font: FONT })],
    bullet: { level: 0 },
    spacing: { before: 10, after: 10 },
    indent: { left: 340, hanging: 180 }
  });
}

function skillRow(label, value) {
  return new Paragraph({
    children: [
      new TextRun({ text: label + ': ', bold: true, color: NAVY, size: pt(8.7), font: FONT }),
      new TextRun({ text: value, color: DARK, size: pt(8.7), font: FONT }),
    ],
    spacing: { before: 16, after: 16 }
  });
}

function twoCol(left, right) {
  return new Paragraph({
    children: [
      new TextRun({ text: left, bold: true, color: DARK, size: pt(9), font: FONT }),
      new TextRun({ text: '\t', font: FONT }),
      new TextRun({ text: right, italics: true, color: MID, size: pt(8.7), font: FONT }),
    ],
    tabStops: [{ type: TabStopType.RIGHT, position: 9360 }],
    spacing: { before: 60, after: 8 }
  });
}

function subLine(text) {
  return new Paragraph({
    children: [new TextRun({ text, color: MID, size: pt(8.7), font: FONT })],
    spacing: { before: 0, after: 0 }
  });
}

function certB(main, sub) {
  const runs = [new TextRun({ text: main, color: DARK, size: pt(8.7), font: FONT })];
  if (sub) runs.push(new TextRun({ text: '  —  ' + sub, color: MID, size: pt(8.3), font: FONT }));
  return new Paragraph({
    children: runs,
    bullet: { level: 0 },
    spacing: { before: 10, after: 10 },
    indent: { left: 340, hanging: 180 }
  });
}

function sp(before = 0, after = 0) {
  return new Paragraph({ spacing: { before, after } });
}

const doc = new Document({
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 560, bottom: 480, left: 820, right: 820 }
      }
    },
    children: [

      // NAME
      new Paragraph({
        children: [new TextRun({ text: 'ROUNAK NEEMA', bold: true, color: NAVY, size: pt(20), font: FONT })],
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 30 }
      }),
      new Paragraph({
        children: [new TextRun({ text: 'Site Reliability Engineer  ·  Platform Engineering  ·  Distributed Systems', color: MID, size: pt(9), font: FONT })],
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 20 }
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'rounakneema@gmail.com  ·  linkedin.com/in/Rnks23  ·  github.com/rounakneema  ·  rounakneema.in', color: NAVY, size: pt(8.3), font: FONT }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 40 }
      }),
      hRule(NAVY),

      // SUMMARY
      sectionHeader('Professional Summary'),
      new Paragraph({
        children: [new TextRun({
          text: 'Final-year B.Tech Computer Science student with project experience in observability pipelines, containerized microservices, cloud infrastructure automation, and production open-source distributed systems. Built a real-time Go-based log ingestion and anomaly detection engine (5+ system sources, <200ms latency), containerized enterprise microservice workflows for Smart India Hackathon 2025, and contributed observability metrics to the open-source SPQR PostgreSQL sharding router. Currently building a cloud observability stack (Prometheus, Grafana, Terraform, AWS) and a GitOps CI/CD deployment platform — grounded in SRE principles: measure everything, eliminate toil, and engineer resilience before incidents occur.',
          color: DARK, size: pt(8.7), font: FONT
        })],
        spacing: { before: 40, after: 40 }
      }),

      // SKILLS
      sectionHeader('Technical Skills'),
      sp(26, 0),
      skillRow('Languages', 'Go (Primary)  ·  Python  ·  Java  ·  Bash  ·  SQL'),
      skillRow('Observability & Reliability', 'Prometheus  ·  Grafana  ·  Log Ingestion Pipelines  ·  SLI/SLO Tracking  ·  Real-time Anomaly Detection  ·  Distributed Tracing Concepts  ·  Alert Routing  ·  Incident Runbooks'),
      skillRow('Infrastructure & Cloud', 'AWS (EC2, S3, IAM, CloudWatch, Lambda)  ·  Terraform  ·  Docker  ·  Kubernetes (Minikube, kubectl)  ·  Helm  ·  GitHub Actions  ·  Jenkins  ·  CI/CD Pipelines'),
      skillRow('Systems & Reliability Concepts', 'Distributed Systems  ·  Microservices  ·  High-Availability Design  ·  Concurrency & Worker Pools  ·  Resilience Patterns  ·  RCA  ·  Golden Signals  ·  On-Call Patterns'),
      skillRow('Databases', 'PostgreSQL  ·  SQLite  ·  Distributed Sharding  ·  SPQR Router'),

      // PROJECTS
      sectionHeader('Projects'),

      // ObservaStack
      projHeader('ObservaStack – Cloud Observability & Alerting Platform', 'Go, Prometheus, Grafana, Terraform, AWS', '2026  ·  In Progress'),
      b('Building a custom Go Prometheus metrics exporter collecting golden signals (latency, traffic, error rate, saturation) across 3 simulated microservices with sub-10ms scrape intervals — implementing observability instrumentation aligned with SRE principles for high-availability services.'),
      b('Provisioning AWS EC2 infrastructure via Terraform modules with auto-configured CloudWatch alarms (CPU > 80%, disk > 90%), enabling proactive incident detection before user-facing impact; documenting structured runbooks for 5+ common failure scenarios to reduce MTTR.'),
      b('Designing Grafana dashboards with SLI/SLO panels, severity-tiered alert routing (P1/P2/P3), and threshold annotations — providing real-time reliability visibility and structured on-call escalation paths.'),

      // OSA
      projHeader('OSA – Log Intelligence & Anomaly Detection Platform', 'Go', '2026  ·  In Progress'),
      b('Architecting a high-performance log ingestion engine in Go processing events from 5+ heterogeneous system sources (Linux, Windows, network appliances) with end-to-end detection latency under 200ms — enabling real-time incident detection across heterogeneous environments.'),
      b('Implementing dual-layer anomaly detection: Z-score statistical analysis for threshold-based outliers combined with Markov chain behavioral modeling for sequential pattern deviations — reducing false-positive alert volume by ~40% versus single-method baselines and directly lowering alert fatigue.'),
      b('Engineered as a zero-dependency single Go binary deployable in air-gapped environments; dual-mode pipeline supports real-time streaming for live detection and batch analysis for post-incident forensics and RCA — eliminating the need for separate tooling across both use cases.'),

      // MetroMind
      projHeader('MetroMind – Enterprise Microservices Platform', 'Go, Docker, REST APIs', '2025  ·  Smart India Hackathon'),
      b('Designed and orchestrated 5 containerized microservices via Docker Compose for large-scale document processing workflows for Kochi Metro Rail — handling high-concurrency enterprise workloads with strict service-level isolation between components.'),
      b('Implemented RBAC with a 3-tier permission model (admin / operator / viewer) enforcing least privilege across a secure multi-tenant architecture; built tamper-evident JSON audit logging capturing 100% of privileged operations for full incident reconstruction and compliance traceability.'),
      b('Engineered JWT-based authentication middleware shared across all 5 services with a single key rotation mechanism — maintaining sub-5ms auth overhead per request while reducing authentication-related incident surface.'),

      // PipelineForge
      projHeader('PipelineForge – GitOps CI/CD Deployment Automation', 'GitHub Actions, Docker, Kubernetes, Helm', '2026  ·  In Progress'),
      b('Building a full GitOps pipeline using GitHub Actions automating Docker image builds, Trivy container security scans, and staged Kubernetes deployments across dev/staging namespaces — delivering auditable, repeatable deployment workflows.'),
      b('Implementing rolling update strategy with readiness/liveness probes and automated rollback on deployment failure; configuring Kubernetes HPA for CPU-based scaling from 1 to 8 replicas — targeting zero-downtime releases with reliability-aware capacity management.'),
      b('Reducing Docker image sizes by ~60% via multi-stage builds; enforcing network policies and resource quotas — improving cold-start latency and tightening the blast radius of individual service failures.'),

      // SPQR
      projHeader('SPQR – PostgreSQL Distributed Sharding Router', 'Go  ·  Open Source Contribution', '2024'),
      b('Contributed to SPQR, a production-grade distributed PostgreSQL sharding router managing high-throughput database traffic for enterprise-scale workloads — gaining direct exposure to production distributed systems debugging and real-world reliability workflows.'),
      b('Implemented request-per-second (RPS) tracking across the distributed routing layer — introducing the first real-time throughput visibility metric into SPQR and enabling capacity planning and performance bottleneck identification in production database environments.'),

      // CERTIFICATIONS
      sectionHeader('Certifications & Community'),
      sp(26, 0),
      certB('Introduction to Critical Infrastructure Protection (ICIP)', 'OPSWAT Academy, July 2026  ·  ID: Yy1eqHvn-A'),
      certB('AWS AI for Bharat 2026 Hackathon — Qualified for Round 2  ·  Smart India Hackathon Participant  ·  Google CTF Participant'),
      certB('1st Place – College CTF Competition (Techfest)  ·  8+ National Hackathons  ·  Cybersecurity Lead, NMIMS Coding Club'),
      certB('Conducted hands-on systems & infrastructure workshops for 100+ students'),

      // EDUCATION
      sectionHeader('Education'),
      sp(26, 0),
      twoCol('MPSTME, NMIMS University – Shirpur', '2023 – 2027'),
      subLine('B.Tech in Computer Science  ·  CGPA: 3.16 / 4.0'),

    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync('d:/Protfolio/rounak_neema_sre_flipkart_v2.docx', buf);
  console.log('Done');
});
