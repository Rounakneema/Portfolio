const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, TabStopType
} = require('docx');
const fs = require('fs');

const NAVY = '1B2A4A';
const DARK = '111827';
const MID  = '374151';
const FONT = 'Calibri';
const pt   = n => n * 2;

const hr = () => new Paragraph({ spacing:{before:12,after:12}, border:{bottom:{style:BorderStyle.SINGLE,size:5,color:NAVY}} });
const sh = (t) => new Paragraph({ children:[new TextRun({text:t,bold:true,color:NAVY,size:pt(8.8),font:FONT,allCaps:true})], spacing:{before:46,after:18}, border:{bottom:{style:BorderStyle.SINGLE,size:6,color:NAVY}} });
const ph = (title,meta) => new Paragraph({ children:[new TextRun({text:title,bold:true,color:DARK,size:pt(8.8),font:FONT}),new TextRun({text:'  |  '+meta,italics:true,color:MID,size:pt(8.0),font:FONT})], spacing:{before:44,after:7} });
const b  = (t) => new Paragraph({ children:[new TextRun({text:t,color:DARK,size:pt(8.2),font:FONT})], bullet:{level:0}, spacing:{before:5,after:5}, indent:{left:280,hanging:160} });
const sk = (l,v) => new Paragraph({ children:[new TextRun({text:l+': ',bold:true,color:NAVY,size:pt(8.2),font:FONT}),new TextRun({text:v,color:DARK,size:pt(8.2),font:FONT})], spacing:{before:10,after:10} });
const cb = (m,s) => { const r=[new TextRun({text:m,color:DARK,size:pt(8.2),font:FONT})]; if(s) r.push(new TextRun({text:'  —  '+s,color:MID,size:pt(7.9),font:FONT})); return new Paragraph({children:r,bullet:{level:0},spacing:{before:5,after:5},indent:{left:280,hanging:160}}); };
const tc = (l,r) => new Paragraph({ children:[new TextRun({text:l,bold:true,color:DARK,size:pt(8.8),font:FONT}),new TextRun({text:'\t',font:FONT}),new TextRun({text:r,italics:true,color:MID,size:pt(8.2),font:FONT})], tabStops:[{type:TabStopType.RIGHT,position:9360}], spacing:{before:32,after:4} });
const sl = (t) => new Paragraph({ children:[new TextRun({text:t,color:MID,size:pt(8.2),font:FONT})], spacing:{before:0,after:0} });
const sp = (a) => new Paragraph({ spacing:{before:a,after:0} });

const doc = new Document({
  sections:[{
    properties:{ page:{ size:{width:12240,height:15840}, margin:{top:420,bottom:380,left:700,right:700} } },
    children:[

      // ── HEADER
      new Paragraph({ children:[new TextRun({text:'ROUNAK NEEMA',bold:true,color:NAVY,size:pt(19),font:FONT})], alignment:AlignmentType.CENTER, spacing:{before:0,after:16} }),
      new Paragraph({ children:[new TextRun({text:'Site Reliability Engineer  ·  Platform Engineering  ·  Distributed Systems',color:MID,size:pt(8.4),font:FONT})], alignment:AlignmentType.CENTER, spacing:{before:0,after:10} }),
      new Paragraph({ children:[new TextRun({text:'rounakneema@gmail.com  ·  linkedin.com/in/Rnks23  ·  github.com/rounakneema  ·  rounakneema.in',color:NAVY,size:pt(7.9),font:FONT})], alignment:AlignmentType.CENTER, spacing:{before:0,after:8} }),
      // Micro summary under contacts
      new Paragraph({ children:[new TextRun({text:'B.Tech CS (2027) · Real-time log ingestion & anomaly detection in Go · Containerized microservices · Cloud observability (Prometheus/Grafana/Terraform/AWS) · Open source contributor (SPQR) · Grounded in SRE principles: measure everything, eliminate toil, engineer resilience proactively.',color:MID,size:pt(8.0),font:FONT,italics:true})], alignment:AlignmentType.CENTER, spacing:{before:0,after:18} }),
      hr(),

      // ── SKILLS
      sh('Technical Skills'),
      sp(8),
      sk('Languages','Go (Primary)  ·  Python  ·  Java  ·  Bash  ·  SQL'),
      sk('Observability & Reliability','Prometheus  ·  Grafana  ·  Log Ingestion Pipelines  ·  SLI/SLO Tracking  ·  Real-time Anomaly Detection  ·  Distributed Tracing Concepts  ·  Alert Routing & Runbooks'),
      sk('Infrastructure & Cloud','AWS (EC2, S3, IAM, CloudWatch, Lambda)  ·  Terraform  ·  Docker  ·  Kubernetes (Minikube, kubectl)  ·  Helm  ·  GitHub Actions  ·  Jenkins  ·  CI/CD Pipelines'),
      sk('Systems & Reliability Concepts','Distributed Systems  ·  Microservices  ·  High-Availability Design  ·  Concurrency & Worker Pools  ·  Resilience Patterns  ·  RCA  ·  Golden Signals  ·  On-Call Patterns'),
      sk('Databases','PostgreSQL  ·  SQLite  ·  Distributed Sharding  ·  SPQR Router'),

      // ── PROJECTS
      sh('Projects'),

      ph('ObservaStack – Cloud Observability & Alerting Platform','Go, Prometheus, Grafana, Terraform, AWS  |  2026 · In Progress'),
      b('Building a custom Go Prometheus exporter collecting golden signals (latency, traffic, error rate, saturation) across 3 simulated microservices with sub-10ms scrape intervals; provisioning AWS EC2 infrastructure via Terraform with auto-configured CloudWatch alarms (CPU > 80%, disk > 90%) for proactive incident detection before user-facing impact.'),
      b('Designing Grafana SLI/SLO dashboards with P1/P2/P3 severity-tiered alert routing and documenting structured runbooks for 5+ failure scenarios — implementing the 360° reliability posture and MTTR-reduction practices essential for high-availability platform services.'),

      ph('OSA – Log Intelligence & Anomaly Detection Platform','Go  |  2026 · In Progress'),
      b('Architecting a high-performance log ingestion engine processing events from 5+ heterogeneous system sources (Linux, Windows, network appliances) with end-to-end detection latency under 200ms; dual-mode pipeline supports real-time streaming for live incident detection and batch processing for post-incident forensics and RCA.'),
      b('Implementing dual-layer anomaly detection — Z-score analysis for threshold-based outliers combined with Markov chain behavioral modeling — reducing false-positive alert volume by ~40% versus single-method baselines and directly lowering on-call alert fatigue.'),

      ph('MetroMind – Enterprise Microservices Platform','Go, Docker, REST APIs  |  2025 · Smart India Hackathon'),
      b('Designed and orchestrated 5 containerized microservices via Docker Compose handling high-concurrency enterprise workloads with service-level isolation; implemented RBAC with a 3-tier permission model (admin / operator / viewer) enforcing least privilege across a secure multi-tenant architecture.'),
      b('Built tamper-evident JSON audit logging capturing 100% of privileged operations for full incident reconstruction and compliance traceability; engineered JWT authentication across all 5 services with single key rotation maintaining sub-5ms overhead per request.'),

      ph('PipelineForge – GitOps CI/CD Deployment Automation','GitHub Actions, Docker, Kubernetes, Helm  |  2026 · In Progress'),
      b('Building a GitOps pipeline using GitHub Actions automating Docker image builds, Trivy security scans, and staged Kubernetes deployments across dev/staging namespaces with rolling updates, readiness/liveness probes, and automated rollback on failure — targeting zero-downtime release cycles.'),
      b('Configuring Kubernetes HPA for CPU-based auto-scaling (1 to 8 replicas), resource quotas, and network policies; reducing Docker image sizes by ~60% via multi-stage builds — improving cold-start latency and limiting the blast radius of individual service failures.'),

      // ── CERTIFICATIONS
      sh('Certifications & Community'),
      sp(8),
      cb('Introduction to Critical Infrastructure Protection (ICIP)','OPSWAT Academy, July 2026  ·  Cert ID: Yy1eqHvn-A'),
      cb('Open Source: Contributed RPS tracking & observability metrics to SPQR (production-grade distributed PostgreSQL sharding router, Go)'),
      cb('AWS AI for Bharat 2026 — Round 2 Qualifier  ·  Smart India Hackathon Participant  ·  Google CTF Participant  ·  1st Place – College CTF (Techfest)'),
      cb('Cybersecurity Lead, NMIMS Coding Club  ·  8+ National Hackathons  ·  Conducted systems & cloud workshops for 100+ students'),

      // ── EDUCATION
      sh('Education'),
      sp(8),
      tc('MPSTME, NMIMS University – Shirpur','2023 – 2027'),
      sl('B.Tech in Computer Science  ·  CGPA: 3.16 / 4.0'),

    ]
  }]
});

Packer.toBuffer(doc).then(buf=>{
  fs.writeFileSync('d:/Protfolio/rounak_neema_sre_flipkart.docx',buf);
  console.log('Done');
});
