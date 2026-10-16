export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const projectFaqs: Record<string, FaqItem[]> = {
  dizzy: [
    {
      question: "What is Dizzy and how does it turn voice into UI designs?",
      answer: "Dizzy is an interface design agent that translates natural speech into native, editable Figma Auto-Layout components. Instead of clicking through menus or drawing frames manually, you speak your layout requirements. The AST parser compiles your phrases into structured node trees and applies them directly to your active Figma canvas.",
      category: "Overview"
    },
    {
      question: "How does Dizzy connect to Figma without detaching component instances?",
      answer: "Dizzy connects to Figma via a local WebSocket bridge using the Figma Plugin API. It emits atomic JSON mutations targeting specific node IDs. By referencing published library variables and styles, it modifies layout properties, padding, and text while preserving component hierarchy and variant linkages.",
      category: "Integration"
    },
    {
      question: "What design systems and tokens does Dizzy support?",
      answer: "Dizzy inspects your active document's Figma Variables, Styles, and published team libraries. When generating or editing UI elements, it binds colors, typography scales, border radii, and spacing tokens from your existing design system, preventing rogue hex codes.",
      category: "Design System"
    },
    {
      question: "Can Dizzy generate responsive layouts across mobile and desktop viewports?",
      answer: "Yes. Dizzy generates fluid Auto-Layout structures configured with dynamic horizontal and vertical constraints. You can prompt Dizzy to generate synchronized mobile (390px) and desktop (1440px) artboards with matching component state and content.",
      category: "Capabilities"
    },
    {
      question: "What is the latency between speaking a command and seeing the Figma canvas update?",
      answer: "Spoken commands execute with an end-to-end pipeline latency under 180 milliseconds. Voice activity detection processes the speech stream locally, the semantic command buffer generates numeric JSON diffs, and the WebSocket server pushes the mutation to the Figma plugin in real time.",
      category: "Performance"
    },
    {
      question: "How does Dizzy remember project context across different design sessions?",
      answer: "Dizzy maintains an in-memory document state buffer that tracks previously edited frames, brand colors, component aliases, and active design decisions. You can say 'make the secondary button larger' or 'revert the navbar padding' and Dizzy correctly resolves the contextual reference.",
      category: "Context Memory"
    },
    {
      question: "Does Dizzy send private Figma canvas data to external cloud servers?",
      answer: "No. Dizzy runs its document synchronization bridge locally over localhost WebSockets. Your proprietary design files, layer trees, and brand tokens remain inside your local environment and active Figma session.",
      category: "Privacy"
    },
    {
      question: "Is Dizzy a commercial SaaS product or an engineering showcase?",
      answer: "Dizzy is an engineering showcase project created by Rounak Neema to demonstrate advanced voice-to-canvas AST compilation and real-time Figma MCP tooling. It is not a commercial SaaS product looking for retail subscribers.",
      category: "Project Status"
    },
    {
      question: "Can we hire you to build custom Figma plugins, voice interfaces, or MCP tools?",
      answer: "Yes. Rounak Neema partners with engineering and design systems teams to build custom Figma plugins, generative design tooling, and Model Context Protocol (MCP) integrations. You can submit your email below or reach out directly at rounakneema414@gmail.com.",
      category: "Consulting"
    }
  ],
  sortmail: [
    {
      question: "What is SortMail and how does it organize high-volume email inboxes?",
      answer: "SortMail is an email intelligence engine that converts overloaded inboxes into prioritized, actionable briefings. It ingests messages in the background, strips conversational noise and signature bloat, extracts verified deadlines, indexes attached documents, and prepares contextual draft replies.",
      category: "Overview"
    },
    {
      question: "How does SortMail extract actionable tasks and deadlines from email threads?",
      answer: "SortMail uses structured extractor prompts with Gemini 2.0 Flash to identify explicit and implicit commitments ('please review by Friday', 'will deploy before tomorrow noon'). It converts relative dates into validated ISO-8601 UTC timestamps and classifies tasks by urgency (P0, P1, P2).",
      category: "Intelligence"
    },
    {
      question: "How does SortMail load inboxes in under 50 milliseconds?",
      answer: "SortMail uses a Database-First architecture. Instead of making synchronous, blocking API calls to Gmail or Outlook when you open your inbox, it serves cached metadata and pre-computed summaries directly from PostgreSQL. A lightweight daemon uses Gmail historyId delta cursors to pull only new messages in the background.",
      category: "Architecture"
    },
    {
      question: "Why does SortMail use Gemini 2.0 Flash in a single-pass extraction pipeline?",
      answer: "Multi-agent recursive loops introduce unpredictably high latency and billing spikes. SortMail processes entire thread contexts in a single structured JSON invocation with Gemini 2.0 Flash, achieving sub-850ms response times for approximately ₹0.25 per email.",
      category: "Performance"
    },
    {
      question: "How does SortMail search through attached PDFs, spreadsheets, and contracts?",
      answer: "Attached files are passed to a background parser that chunks text into 500-token blocks with 50-token overlap. The chunks are embedded and indexed into ChromaDB, allowing you to ask natural language questions about contract clauses or figures directly from your inbox view without manual downloads.",
      category: "Attachments"
    },
    {
      question: "How does the Attachment Guard protect users from malicious payloads disguised as invoices?",
      answer: "Before any file preview or icon is rendered, SortMail inspects the binary magic bytes (%PDF-, PK, MZ) and validates them against the declared MIME type. Executables disguised with deceptive file extensions (like invoice.pdf.exe) are quarantined immediately.",
      category: "Security"
    },
    {
      question: "Can SortMail draft contextual replies while keeping the human in full control?",
      answer: "Yes. SortMail synthesizes the last 5 messages in a thread and adapts to your communication tone to prepare draft responses. Zero emails are ever sent automatically. You review, edit, and click send yourself.",
      category: "Workflow"
    },
    {
      question: "Does SortMail retain or monetize user email content?",
      answer: "No. SortMail stores data strictly in your isolated local or self-hosted database instance. Your email content is never sold, shared with third parties, or used to train public foundation models.",
      category: "Privacy"
    },
    {
      question: "Is SortMail a commercial SaaS product or an engineering showcase?",
      answer: "SortMail is an engineering showcase created by Rounak Neema to demonstrate high-throughput database-first mail synchronization, single-pass LLM extraction, and secure document ingestion. It is not a commercial retail software product for sale.",
      category: "Project Status"
    },
    {
      question: "Can we commission Rounak Neema to build custom email automation or LLM workflow engines?",
      answer: "Yes. Rounak Neema builds custom email intelligence pipelines, FastAPI LLM backends, and automated workflow integrations for consulting clients. Submit your email below or reach out via rounakneema414@gmail.com.",
      category: "Consulting"
    }
  ],
  pipelineforge: [
    {
      question: "What is PipelineForge and what DevSecOps challenges does it solve?",
      answer: "PipelineForge is an automated GitOps DevSecOps pipeline that eliminates container bloat, automates security vulnerability gates, and enables zero-downtime rolling updates to Kubernetes clusters using GitHub Actions, Distroless Docker images, Trivy, and Helm.",
      category: "Overview"
    },
    {
      question: "How does PipelineForge reduce container image sizes from 1.1GB to 8.4MB?",
      answer: "PipelineForge employs a multi-stage Docker build. A heavy golang:1.21-alpine container compiles a statically linked Go binary with stripped debug symbols (-ldflags='-w -s'). The binary is copied into gcr.io/distroless/static-debian11, leaving behind compilers, package managers, and shells for a 99.3% reduction.",
      category: "Optimization"
    },
    {
      question: "What is a Distroless container image and why does it improve security?",
      answer: "Distroless images contain only your application binary and minimal runtime dependencies (like CA certificates and timezone data). They contain no package managers (apt, apk), no shells (/bin/sh, /bin/bash), and run under non-root UID 65532, preventing attackers from launching reverse shells or downloading malware.",
      category: "Security"
    },
    {
      question: "How does the automated Trivy security gate prevent vulnerable images from deploying?",
      answer: "Immediately following container packaging, Trivy scans the image layers for OS and application vulnerabilities. If any High or Critical CVEs are detected, the workflow exits with status code 1, automatically halting the deployment pipeline and exporting a SARIF report.",
      category: "Security Gate"
    },
    {
      question: "How does PipelineForge achieve zero-downtime rolling updates on Kubernetes?",
      answer: "Deployments use Helm templates configured with maxSurge: 25% and maxUnavailable: 0. Dual liveness (/healthz) and readiness (/ready) probes verify new pods are fully functional before Kubernetes terminates older replicas or shifts customer traffic.",
      category: "Kubernetes"
    },
    {
      question: "What load testing was conducted with k6 and what were the performance metrics?",
      answer: "Automated k6 load tests simulated 500 concurrent virtual users against the cluster ingress. The pipeline enforced assertions requiring P95 latency under 5 milliseconds and an error rate under 0.01%. Under load, Kubernetes HorizontalPodAutoscalers dynamically scaled replicas from 2 to 8.",
      category: "Performance"
    },
    {
      question: "How does GitOps automate deployments using Helm and GitHub Actions?",
      answer: "Every code change follows Git-driven automation. Pushes to main trigger semantic version tagging, container publishing to GitHub Container Registry (ghcr.io), and Helm release packaging with environment-specific values files (values-staging.yaml, values-prod.yaml).",
      category: "GitOps"
    },
    {
      question: "Can PipelineForge be integrated into existing enterprise CI/CD infrastructure?",
      answer: "Yes. PipelineForge is modular and built on reusable GitHub Actions composite workflows, standard Dockerfiles, and Helm 3 charts that can be imported into existing AWS EKS, Google GKE, or bare-metal Kubernetes environments.",
      category: "Integration"
    },
    {
      question: "Is PipelineForge a commercial software product or an engineering showcase?",
      answer: "PipelineForge is an engineering showcase designed by Rounak Neema to demonstrate production-grade DevSecOps automation, container attack surface reduction, and high-concurrency resilience. It is not a retail commercial product for sale.",
      category: "Project Status"
    },
    {
      question: "Can we hire Rounak Neema to build custom DevSecOps pipelines or container minimization?",
      answer: "Yes. Rounak Neema consults for organizations needing to harden container security, implement automated CVE gates, and streamline Kubernetes GitOps delivery. Contact via the email intake below or email rounakneema414@gmail.com.",
      category: "Consulting"
    }
  ],
  revealr: [
    {
      question: "What is Revealr and why is it faster than conventional network scanners?",
      answer: "Revealr is a high-speed network reconnaissance engine written in Go. It uses bounded goroutine worker pools and non-blocking raw socket probes to scan targets at up to 50,000+ ports per minute, scanning all 65,535 ports in approximately 0.8 seconds under optimal LAN conditions.",
      category: "Performance"
    },
    {
      question: "How does Revealr detect network drift and unauthorized port openings?",
      answer: "Traditional scanners suffer from 'scanner amnesia' by discarding run data. Revealr records all scan results in an embedded SQLite database. Subsequent scans compute an automated diff against baseline history, instantly flagging newly opened ports, closed services, or changed service banners.",
      category: "Drift Detection"
    },
    {
      question: "How does the SQLite stateful memory layer work?",
      answer: "Every scan creates an immutable run snapshot in SQLite. High-speed indices allow sub-millisecond queries comparing target state across timestamps, producing clear diff summaries without requiring an external database server.",
      category: "Architecture"
    },
    {
      question: "Can I write custom vulnerability detection plugins for Revealr?",
      answer: "Yes. Revealr provides a Python plugin bridge. You can write custom fingerprinting scripts and vulnerability checks that execute against detected open ports without recompiling the core Go scanning engine.",
      category: "Extensibility"
    },
    {
      question: "What is the difference between active scanning and stealth scanning in Revealr?",
      answer: "Active scanning performs standard TCP connect handshakes. Stealth mode uses raw SYN packets, randomizes port sequence probes, and introduces configurable jitter delays to avoid tripping intrusion detection systems and rate limiters.",
      category: "Security"
    },
    {
      question: "Does Revealr run offline or in air-gapped security environments?",
      answer: "Yes. Revealr is compiled into a single static binary with zero external runtime dependencies. It runs completely offline without calling cloud APIs or telemetry servers.",
      category: "Deployment"
    },
    {
      question: "Is Revealr a commercial product or an engineering showcase?",
      answer: "Revealr is an engineering showcase created by Rounak Neema to demonstrate high-concurrency Go networking, stateful drift tracking, and modular plugin architectures. It is not a retail commercial scanner.",
      category: "Project Status"
    },
    {
      question: "Can we commission custom network security tooling or reconnaissance engines?",
      answer: "Yes. Rounak Neema builds custom network reconnaissance tools, security auditing pipelines, and high-concurrency Go systems. Submit your email below or contact rounakneema414@gmail.com.",
      category: "Consulting"
    }
  ],
  metromind: [
    {
      question: "What is MetroMind and how does it process enterprise documents?",
      answer: "MetroMind is an enterprise document intelligence platform that ingests, parses, embeds, and indexes unstructured documents (PDFs, TIFFs, scanned contracts). It combines Tesseract OCR, layout analysis, and vector retrieval to make documents instantly searchable.",
      category: "Overview"
    },
    {
      question: "How does the asynchronous RabbitMQ OCR ingestion pipeline operate?",
      answer: "Incoming files are assigned a unique document ID and queued in RabbitMQ. Distributed worker processes perform OCR extraction, token chunking, and vector embedding asynchronously, preventing ingestion bottlenecks on large document batches.",
      category: "Architecture"
    },
    {
      question: "What vector databases are supported for semantic document retrieval?",
      answer: "MetroMind natively integrates with Milvus, ChromaDB, and pgvector for scalable vector similarity search, enabling sub-100ms semantic lookups across millions of indexed text chunks.",
      category: "Vector Search"
    },
    {
      question: "How does MetroMind prevent hallucinations in contract and compliance search?",
      answer: "MetroMind uses strict retrieval-augmented generation (RAG) guardrails. Responses must cite exact document chunk IDs, page numbers, and bounding box coordinates, rejecting answers that cannot be verified in the source text.",
      category: "Accuracy"
    },
    {
      question: "What document formats can MetroMind parse and index?",
      answer: "MetroMind supports PDF, scanned images (TIFF, PNG, JPEG), Microsoft Word (.docx), Excel spreadsheets (.xlsx), and raw text files with automatic layout and table structure recognition.",
      category: "Capabilities"
    },
    {
      question: "Is MetroMind deployed on-premises or in cloud environments?",
      answer: "MetroMind is designed with containerized microservices (Docker/Kubernetes) that can be deployed on private cloud infrastructure or completely air-gapped on-premises servers for data compliance.",
      category: "Deployment"
    },
    {
      question: "Is MetroMind an engineering showcase by Rounak Neema?",
      answer: "Yes. MetroMind was created by Rounak Neema to showcase enterprise document processing pipelines, distributed OCR workers, and grounded vector retrieval architectures.",
      category: "Project Status"
    },
    {
      question: "Can we commission custom document intelligence pipelines or enterprise search?",
      answer: "Yes. Rounak Neema designs and builds custom OCR pipelines, semantic search engines, and document extraction systems for clients. Submit your email below or reach out directly.",
      category: "Consulting"
    }
  ],
  osa: [
    {
      question: "What is OSA and how does it audit security logs in air-gapped environments?",
      answer: "OSA (Offline Security Auditor) is a zero-dependency security tool that inspects system logs, container events, and authentication traces entirely offline. It identifies credential leaks, anomalous access patterns, and compliance violations without sending data to cloud servers.",
      category: "Overview"
    },
    {
      question: "How does OSA detect behavioral anomalies without an active network connection?",
      answer: "OSA calculates statistical Z-scores and uses Markov sequence modeling locally across time windows. It establishes a dynamic behavioral baseline from historic log records and flags statistically improbable authentication bursts in under 200 milliseconds.",
      category: "Detection Engine"
    },
    {
      question: "What log formats does OSA ingest?",
      answer: "OSA natively ingests Linux auth.log, syslog, Nginx/Apache access logs, Docker container logs, Kubernetes audit streams, and Windows Event Logs with zero third-party agent dependencies.",
      category: "Ingestion"
    },
    {
      question: "How does OSA identify hardcoded secrets and credentials in log streams?",
      answer: "OSA scans log streams using high-entropy regex patterns and Shannon entropy scoring to flag leaked API keys, JWT tokens, private SSH keys, and password parameters before logs are archived.",
      category: "Security"
    },
    {
      question: "Does OSA require internet access or cloud API keys?",
      answer: "No. OSA is completely air-gapped by design. It requires zero network connectivity, no cloud API tokens, and makes zero outbound HTTP requests.",
      category: "Air-Gapped"
    },
    {
      question: "Is OSA a commercial software product or an engineering showcase?",
      answer: "OSA is an engineering showcase project created by Rounak Neema to demonstrate local-first statistical anomaly detection and high-speed forensic log analysis.",
      category: "Project Status"
    },
    {
      question: "Can we hire Rounak Neema for custom security auditing or forensic tooling?",
      answer: "Yes. Rounak Neema builds bespoke security audit tools, air-gapped forensic analyzers, and compliance automation software. Inquire via the email intake below or email rounakneema414@gmail.com.",
      category: "Consulting"
    }
  ],
  devcontext: [
    {
      question: "What is DevContext (Klarity) and how does it analyze codebases?",
      answer: "DevContext (Klarity) is an AI code intelligence engine that parses source code repositories into Abstract Syntax Trees (ASTs). It verifies software architecture, test integrity, and complexity metrics with strict line-level evidence grounding.",
      category: "Overview"
    },
    {
      question: "How does the evidence-grounding engine eliminate hallucinations?",
      answer: "Every technical claim made by DevContext is verified against AST node references, function definitions, and commit diffs. If a claim cannot point to verified file lines (e.g. auth/hash.go lines 45-89), it is rejected.",
      category: "Grounding"
    },
    {
      question: "What metrics are computed during repository analysis?",
      answer: "DevContext analyzes cyclomatic complexity, test coverage ratios, dependency coupling, bounded concurrency patterns, and code authenticity markers.",
      category: "Metrics"
    },
    {
      question: "Which programming languages are supported for AST parsing?",
      answer: "DevContext parses Go, TypeScript, JavaScript, Python, Rust, and Java using tree-sitter grammars to generate language-agnostic code graphs.",
      category: "Languages"
    },
    {
      question: "Does DevContext upload private code to public foundation models?",
      answer: "No. Repository parsing and AST generation occur locally. Metadata extracts can be processed using local models (Ollama) or private API endpoints with zero data retention guarantees.",
      category: "Privacy"
    },
    {
      question: "Is DevContext a commercial SaaS product or an engineering showcase?",
      answer: "DevContext is an engineering showcase created by Rounak Neema demonstrating evidence-grounded code intelligence and repository verification for technical teams.",
      category: "Project Status"
    },
    {
      question: "Can we commission custom code analysis engines or technical recruiting tools?",
      answer: "Yes. Rounak Neema consults on automated code analysis, technical evaluation engines, and AST verification pipelines. Submit your email below or reach out directly.",
      category: "Consulting"
    }
  ],
  axiomos: [
    {
      question: "What is AXIOM OS and what does a local-first personal AI operating system do?",
      answer: "AXIOM OS is an offline personal AI operating system designed to monitor desktop activity, evaluate goal alignment, and enforce focus policies entirely on the local machine without cloud telemetry.",
      category: "Overview"
    },
    {
      question: "How does AXIOM OS track focus and goal alignment without cloud telemetry?",
      answer: "A lightweight background daemon (Specter) measures active application windows, terminal commands, and document focus locally. It compares active windows against declared user goals using an in-memory policy engine.",
      category: "Telemetry"
    },
    {
      question: "How does the local Ollama inference engine protect user privacy?",
      answer: "All natural language inference and task classification are executed locally using Ollama on the user's CPU/GPU. Zero audio, text, or keystroke data is ever transmitted over the network.",
      category: "Privacy"
    },
    {
      question: "What system resources does AXIOM OS require to run locally?",
      answer: "The Specter daemon consumes under 25MB of RAM and less than 1% CPU. The local LLM policy engine runs in quantized 4-bit mode on standard laptops with 8GB+ RAM.",
      category: "Performance"
    },
    {
      question: "Is AXIOM OS a commercial software product or an engineering showcase?",
      answer: "AXIOM OS is an engineering showcase project created by Rounak Neema demonstrating local-first operating system agents and private ambient intelligence.",
      category: "Project Status"
    },
    {
      question: "Can we hire Rounak Neema to build custom local-first AI applications or OS daemons?",
      answer: "Yes. Rounak Neema builds native background daemons, local-first inference workflows, and privacy-focused software systems. Submit your email below or contact directly.",
      category: "Consulting"
    }
  ]
};
