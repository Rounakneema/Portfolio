export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const projectFaqs: Record<string, FaqItem[]> = {
  devcontext: [
    {
      question: "What is DevContext and what problem does it solve for software engineers?",
      answer: "DevContext is an evidence-grounded code intelligence engine that transforms GitHub repositories into clear architectural explanations, interactive node topologies, and targeted interview questions. It solves code amnesia and recruiter communication gaps by inspecting source code directly rather than relying on abstract high-level summaries.",
      category: "About the Project"
    },
    {
      question: "How is DevContext different from generic AI code assistants like ChatGPT or Copilot?",
      answer: "Generic LLMs frequently hallucinate dependencies, misquote line numbers, and guess architecture from top-level file names. DevContext enforces strict AST grounding using Tree-sitter parsers. Every architectural claim, component relationship, and interview question is verified against concrete import paths and function signatures in your repository. If a claim cannot point to verified lines of code, the system strips it.",
      category: "Benefits & Differentiation"
    },
    {
      question: "What can developers and technical teams accomplish with DevContext?",
      answer: "Developers use DevContext to prepare for system design and technical portfolio interviews, generate accurate architecture diagrams for pull requests, and audit unfamiliar codebases. Engineering managers and recruiters use it to verify whether candidate repositories contain authentic engineering depth or copy-pasted boilerplate templates.",
      category: "Features & Use Cases"
    },
    {
      question: "How does DevContext analyze codebases behind the scenes?",
      answer: "When you submit a GitHub URL, an asynchronous ingestion worker clones the repository and builds an AST Context Map using language-agnostic Tree-sitter grammars. Specialized Lambda workers analyze architecture, concurrency locks, and database query paths in parallel. A reducer agent verifies all citations against the AST map before streaming results to the browser in under 30 seconds.",
      category: "How It Works"
    },
    {
      question: "Which programming languages and repository structures does DevContext support?",
      answer: "DevContext natively parses Go, TypeScript, JavaScript, Python, Rust, and Java. It isolates user-written logic from vendor dependencies (such as node_modules, /dist, and standard framework scaffolding) across mono-repos and multi-tier architectures.",
      category: "How It Works"
    },
    {
      question: "Does DevContext upload or train foundation models on private source code?",
      answer: "No. Repository cloning, AST parsing, and context generation run in isolated stateless environments. For public repositories, analysis occurs with zero data retention. For private enterprise environments, DevContext supports local-first inference using Ollama or private VPC endpoints, ensuring zero external model training.",
      category: "Trust & Security"
    },
    {
      question: "What are the known technical limitations of DevContext?",
      answer: "DevContext analyzes static syntax trees, configuration manifests, and dependency graphs. It does not execute dynamic binaries or conduct live runtime profiling. Repositories exceeding 500,000 lines of code are chunked across top-level modules to remain within token and memory quotas.",
      category: "Trust & Security"
    },
    {
      question: "Is DevContext a commercial SaaS product or an engineering showcase?",
      answer: "DevContext is an engineering showcase created by Rounak Neema to demonstrate AST-grounded repository intelligence, multi-model Bedrock routing, and serverless agent pipelines. It is not a turnkey consumer SaaS with paid monthly subscriptions.",
      category: "Access & Showcase Status"
    },
    {
      question: "Can teams commission custom code analysis engines or technical recruiting tools?",
      answer: "Yes. Rounak Neema consults for organizations needing custom code intelligence pipelines, technical recruiting evaluation tooling, and hallucination-free AST verification engines. You can submit your email below or reach out via rounakneema414@gmail.com.",
      category: "Access & Showcase Status"
    },
    {
      question: "Who benefits most from using DevContext?",
      answer: "Software engineers preparing for technical interviews, engineering leaders evaluating candidate codebases, and consulting teams conducting rapid architectural due diligence on client repositories.",
      category: "Target Audience"
    }
  ],

  revealr: [
    {
      question: "What is Revealr and what makes it faster than conventional port scanners?",
      answer: "Revealr is a high-speed network reconnaissance and attack surface detection engine written in Go. It utilizes non-blocking raw socket probes and bounded goroutine worker pools to scan networks at over 50,000 ports per minute, completing full 65,535-port scans in approximately 0.8 seconds under optimal LAN conditions.",
      category: "About the Project"
    },
    {
      question: "How does Revealr solve scanner amnesia compared to standard CLI scanners?",
      answer: "Traditional scanners discard historical state after each run, forcing security engineers to manually compare text outputs to spot changes. Revealr persists every scan snapshot in an embedded SQLite database. Subsequent scans automatically compute state diffs, instantly flagging unauthorized port openings, decommissioned services, and altered banners.",
      category: "Benefits & Differentiation"
    },
    {
      question: "What attack surface metrics and anomalies does Revealr detect?",
      answer: "Revealr identifies open TCP and UDP ports, fingerprints service daemon versions, flags unauthenticated administrative panels, detects TLS certificate expiry, and pinpoints unauthorized configuration drift between recurring audit cycles.",
      category: "Features & Use Cases"
    },
    {
      question: "How do raw sockets and the token-bucket rate limiter operate in Revealr?",
      answer: "Revealr bypasses the standard operating system TCP stack by generating raw SYN packets directly in Go. A dual token-bucket rate limiter regulates probe throughput and injects pseudorandom micro-delays between packets, preventing firewalls and intrusion detection systems (IDS) from triggering automated IP blocks.",
      category: "How It Works"
    },
    {
      question: "Can security teams write custom vulnerability plugins for Revealr?",
      answer: "Yes. Revealr features a modular Python plugin bridge over standard IPC. Security teams can write custom vulnerability checks, CVE signature probes, and service banner analyzers that execute against detected open ports without recompiling the core Go binary.",
      category: "How It Works"
    },
    {
      question: "Does Revealr require internet access or phone home to cloud servers?",
      answer: "No. Revealr compiles into a self-contained static binary with zero external dependencies. It operates entirely offline in air-gapped security environments, transmitting zero telemetry or reconnaissance data outside your local perimeter.",
      category: "Trust & Security"
    },
    {
      question: "How does Revealr handle packet drop and false positive detection on congested networks?",
      answer: "Revealr uses an adaptive round-trip time (RTT) estimator with bounded retransmission queues. When packet loss exceeds 2%, the engine dynamically throttles probe concurrency and re-verifies ambiguous port states with secondary TCP handshakes.",
      category: "Trust & Security"
    },
    {
      question: "Is Revealr a commercial network scanner or an engineering showcase?",
      answer: "Revealr is an engineering showcase designed by Rounak Neema to demonstrate high-concurrency Go networking, kernel-level socket manipulation, and stateful drift detection. It is not a commercial SaaS scanner sold via monthly subscription tiers.",
      category: "Access & Showcase Status"
    },
    {
      question: "Can we hire Rounak Neema to build custom network security tooling or attack surface engines?",
      answer: "Yes. Rounak Neema designs bespoke network reconnaissance tools, air-gapped security audit engines, and high-concurrency Go systems for enterprise clients. Submit your email below or contact rounakneema414@gmail.com.",
      category: "Access & Showcase Status"
    },
    {
      question: "Which organizations and security roles should use Revealr?",
      answer: "DevSecOps teams monitoring cloud infrastructure drift, red teamers conducting authorized attack surface assessments, and security compliance auditors working in air-gapped data centers.",
      category: "Target Audience"
    }
  ],

  metromind: [
    {
      question: "What is MetroMind and how does it process municipal and enterprise documents?",
      answer: "MetroMind is an enterprise document intelligence and semantic search platform. It ingests complex municipal documents, scanned transit agreements, architectural PDFs, and engineering diagrams, parsing raw images into structured text, tabular data, and vector embeddings for instant semantic lookup.",
      category: "About the Project"
    },
    {
      question: "How is MetroMind different from standard desktop PDF search tools?",
      answer: "Standard search tools rely on basic keyword matching that fails on scanned physical paperwork, skewed images, or multi-column layouts. MetroMind combines Tesseract OCR, layout bounding-box segmentation, and dense vector embeddings, allowing users to find concepts and clauses even when search queries use different vocabulary from the source text.",
      category: "Benefits & Differentiation"
    },
    {
      question: "What document formats and data structures can MetroMind extract?",
      answer: "MetroMind processes multi-page PDFs, high-resolution TIFF scans, JPEG/PNG images, Word documents (.docx), and Excel spreadsheets (.xlsx). It reconstructs nested tables, extracts key-value form pairs, and maps bounding box coordinates to each text chunk.",
      category: "Features & Use Cases"
    },
    {
      question: "How does the asynchronous RabbitMQ OCR ingestion pipeline prevent bottlenecks?",
      answer: "Incoming files are assigned a unique cryptographic document ID and published to a RabbitMQ message bus. A distributed fleet of Python workers pulls jobs asynchronously to perform layout analysis, OCR extraction, chunking, and embedding. This architecture insulates the Go API gateway from memory spikes during massive batch uploads.",
      category: "How It Works"
    },
    {
      question: "What vector databases does MetroMind integrate with for semantic retrieval?",
      answer: "MetroMind natively connects to Milvus, ChromaDB, and pgvector. High-dimensional vector indices support sub-80ms semantic similarity queries across millions of indexed document chunks with role-based pre-filtering.",
      category: "How It Works"
    },
    {
      question: "How does MetroMind prevent hallucinations in compliance and legal search?",
      answer: "MetroMind enforces strict citation guardrails. Every answer generated by the platform must include verifiable source document IDs, exact page numbers, and bounding-box coordinate highlights. If an answer cannot be grounded in source text, the engine rejects the response with an audit flag.",
      category: "Trust & Security"
    },
    {
      question: "Can MetroMind be deployed in air-gapped or on-premises municipal environments?",
      answer: "Yes. MetroMind is architected as containerized microservices (Docker and Kubernetes Helm charts) that run completely offline without external cloud dependencies, satisfying municipal data sovereignty and air-gapped compliance mandates.",
      category: "Trust & Security"
    },
    {
      question: "Is MetroMind a commercial SaaS product or an engineering showcase?",
      answer: "MetroMind is an engineering showcase created by Rounak Neema to demonstrate high-volume OCR ingestion pipelines, distributed message queuing, and citation-grounded vector search. It is not a retail commercial product.",
      category: "Access & Showcase Status"
    },
    {
      question: "Can we commission Rounak Neema to build custom document intelligence or enterprise search platforms?",
      answer: "Yes. Rounak Neema consults for organizations needing custom OCR pipelines, grounded RAG search engines, and enterprise document workflows. Submit your email below or reach out directly at rounakneema414@gmail.com.",
      category: "Access & Showcase Status"
    },
    {
      question: "Which industries and teams benefit most from MetroMind?",
      answer: "Municipal transit authorities, legal compliance departments, insurance underwriters, and enterprise organizations managing decades of scanned physical paperwork.",
      category: "Target Audience"
    }
  ],

  sortmail: [
    {
      question: "What is SortMail and how does it resolve email overload?",
      answer: "SortMail is an email intelligence engine that converts overflowing inboxes into prioritized, actionable briefings. It runs background synchronization, strips conversational noise and signature clutter, extracts verified commitments and deadlines, indexes attached documents, and prepares contextual draft replies.",
      category: "About the Project"
    },
    {
      question: "How does SortMail load inboxes in under 50 milliseconds compared to traditional webmail clients?",
      answer: "Traditional webmail clients make synchronous, blocking HTTP calls to mail servers when you open an inbox. SortMail employs a Database-First architecture. Metadata, pre-computed urgency rankings, and summaries are cached locally in PostgreSQL. A lightweight daemon uses Gmail historyId delta cursors to fetch only new events in the background.",
      category: "Benefits & Differentiation"
    },
    {
      question: "How does SortMail extract actionable deadlines and tasks from email threads?",
      answer: "SortMail uses structured JSON extraction prompts with Gemini 2.0 Flash to detect explicit and implicit commitments ('send draft by 3 PM Thursday', 'review attached contract'). It normalizes relative dates into validated ISO-8601 UTC timestamps and prioritizes tasks by business urgency.",
      category: "Features & Use Cases"
    },
    {
      question: "Why does SortMail use a single-pass prompt architecture instead of multi-agent recursive loops?",
      answer: "Multi-agent recursive loops introduce unpredictably high latency (often 8 to 20 seconds) and compounding token billing costs. SortMail processes entire thread contexts in a single structured prompt, achieving sub-850ms response times for approximately ₹0.25 per email while extracting summary, deadlines, sentiment, and threat scores together.",
      category: "How It Works"
    },
    {
      question: "How does SortMail search through attached PDFs, spreadsheets, and contracts?",
      answer: "Inbound attachments are parsed in the background into 500-token chunks with 50-token overlap, embedded, and stored in ChromaDB. Users can ask natural language questions about contract clauses or invoice amounts directly from the inbox view without downloading files.",
      category: "How It Works"
    },
    {
      question: "How does the Attachment Guard protect users from deceptive malware payloads?",
      answer: "Before any attachment icon or preview is rendered, SortMail inspects the binary magic bytes (%PDF-, PK, MZ) and validates them against declared MIME headers. Executable binaries disguised with fraudulent extensions (like invoice.pdf.exe) are quarantined immediately.",
      category: "Trust & Security"
    },
    {
      question: "Does SortMail store, monetize, or train models on private email conversations?",
      answer: "No. SortMail stores data strictly in your isolated local or self-hosted database instance. Your email content is never sold, shared with third parties, or used to train public foundation models. All drafts require explicit human review before sending.",
      category: "Trust & Security"
    },
    {
      question: "Is SortMail a commercial SaaS product or an engineering showcase?",
      answer: "SortMail is an engineering showcase designed by Rounak Neema to demonstrate high-throughput database-first mail synchronization, single-pass LLM extraction, and secure document ingestion. It is not a retail commercial subscription product.",
      category: "Access & Showcase Status"
    },
    {
      question: "Can we commission Rounak Neema to build custom email automation or LLM workflow engines?",
      answer: "Yes. Rounak Neema builds bespoke email intelligence pipelines, FastAPI LLM backends, and automated workflow integrations for consulting clients. Submit your email below or reach out via rounakneema414@gmail.com.",
      category: "Access & Showcase Status"
    },
    {
      question: "Who benefits most from SortMail?",
      answer: "Founders, engineering leaders, and operations executives who manage 200+ emails daily and require high-speed prioritization without sacrificing privacy.",
      category: "Target Audience"
    }
  ],

  pipelineforge: [
    {
      question: "What is PipelineForge and what DevOps challenges does it solve?",
      answer: "PipelineForge is an automated GitOps DevSecOps pipeline that eliminates container bloat, automates security vulnerability gates, and enables zero-downtime rolling updates to Kubernetes clusters using GitHub Actions, Distroless Docker images, Trivy, and Helm 3.",
      category: "About the Project"
    },
    {
      question: "How does PipelineForge reduce container image sizes from 1.1GB to 8.4MB?",
      answer: "PipelineForge employs a multi-stage Docker build. A heavy golang:1.21-alpine container compiles a statically linked Go binary with stripped debug symbols (-ldflags='-w -s'). The compiled binary is copied into gcr.io/distroless/static-debian11, leaving behind compilers, package managers, and shells for a 99.3% reduction in image size.",
      category: "Benefits & Differentiation"
    },
    {
      question: "What is a Distroless container image and why does it drastically improve security?",
      answer: "Distroless images contain only the compiled application binary and minimal runtime data (like CA certificates and timezone definitions). They contain no package managers (apt, apk), no shells (/bin/sh, /bin/bash), and run under non-root UID 65532, preventing attackers from launching reverse shells or downloading malware even if an application vulnerability exists.",
      category: "Features & Use Cases"
    },
    {
      question: "How does the automated Trivy security gate prevent vulnerable images from deploying?",
      answer: "Immediately following container packaging, Trivy scans image layers for OS and dependency CVEs. If any High or Critical vulnerabilities are detected, the workflow exits with status code 1, automatically halting the deployment pipeline and exporting a SARIF report directly to GitHub Security.",
      category: "How It Works"
    },
    {
      question: "How does PipelineForge achieve zero-downtime rolling updates on Kubernetes?",
      answer: "Deployments use Helm templates configured with maxSurge: 25% and maxUnavailable: 0. Dual liveness (/healthz) and readiness (/ready) probes verify new pods are fully functional before Kubernetes terminates older replicas or shifts live customer traffic.",
      category: "How It Works"
    },
    {
      question: "What load testing was conducted with k6 and what were the performance metrics?",
      answer: "Automated k6 load tests simulated 500 concurrent virtual users against the cluster ingress. The pipeline enforced assertions requiring P95 latency under 5 milliseconds and an error rate under 0.01%. Under load, Kubernetes HorizontalPodAutoscalers dynamically scaled replicas from 2 to 8.",
      category: "Trust & Security"
    },
    {
      question: "How does GitOps automate deployments using Helm and GitHub Actions?",
      answer: "Every infrastructure modification follows Git-driven automation. Pushes to main trigger semantic version tagging, container publishing to GitHub Container Registry (ghcr.io), and Helm release packaging with environment-specific values files (values-staging.yaml, values-prod.yaml).",
      category: "Trust & Security"
    },
    {
      question: "Is PipelineForge a commercial software product or an engineering showcase?",
      answer: "PipelineForge is an engineering showcase designed by Rounak Neema to demonstrate production-grade DevSecOps automation, container attack surface reduction, and high-concurrency resilience. It is not a retail commercial product for sale.",
      category: "Access & Showcase Status"
    },
    {
      question: "Can we hire Rounak Neema to build custom DevSecOps pipelines or container minimization?",
      answer: "Yes. Rounak Neema consults for organizations needing to harden container security, implement automated CVE gates, and streamline Kubernetes GitOps delivery. Contact via the email intake below or email rounakneema414@gmail.com.",
      category: "Access & Showcase Status"
    },
    {
      question: "Who benefits most from PipelineForge?",
      answer: "Cloud platform engineers, SREs, and security teams looking to shrink container attack surfaces, enforce automated vulnerability gates, and automate Kubernetes releases.",
      category: "Target Audience"
    }
  ],

  osa: [
    {
      question: "What is OSA and how does it audit security logs in air-gapped environments?",
      answer: "OSA (Offline Security Auditor) is a zero-dependency security tool that inspects system logs, container events, and authentication traces entirely offline. It identifies credential leaks, anomalous access patterns, and compliance violations without sending a single byte to cloud servers.",
      category: "About the Project"
    },
    {
      question: "How does OSA detect behavioral anomalies without an active network connection or cloud SIEM?",
      answer: "OSA calculates statistical Z-scores and utilizes Markov sequence modeling locally across rolling time windows. It establishes a dynamic behavioral baseline from historic log records and flags statistically improbable authentication bursts or privilege escalations in under 200 milliseconds.",
      category: "Benefits & Differentiation"
    },
    {
      question: "What log formats and data sources does OSA ingest?",
      answer: "OSA natively ingests Linux auth.log, syslog, Nginx/Apache access logs, Docker container logs, Kubernetes audit streams, and Windows Event Logs with zero third-party agent dependencies.",
      category: "Features & Use Cases"
    },
    {
      question: "How does OSA identify hardcoded secrets and credentials in log streams?",
      answer: "OSA scans log streams using high-entropy regex patterns and Shannon entropy scoring to flag leaked API keys, JWT tokens, private SSH keys, and database passwords before log archives are stored or transmitted.",
      category: "How It Works"
    },
    {
      question: "What algorithms does OSA use to baseline normal user activity?",
      answer: "OSA builds first-order Markov transition matrices across system call sequences and login event graphs. When a process transitions from a standard web daemon into a privilege escalation shell, the transition probability drops below threshold, triggering an immediate anomaly alert.",
      category: "How It Works"
    },
    {
      question: "Does OSA require internet access, telemetry keys, or external licenses?",
      answer: "No. OSA is completely air-gapped by design. It requires zero network connectivity, no cloud API tokens, and makes zero outbound HTTP requests, ensuring complete confidentiality for classified or sensitive audit data.",
      category: "Trust & Security"
    },
    {
      question: "What are the system requirements and memory footprint of OSA?",
      answer: "OSA is compiled into a lightweight, self-contained binary that executes with under 45MB of RAM and processes over 100,000 log lines per second on standard commodity hardware.",
      category: "Trust & Security"
    },
    {
      question: "Is OSA a commercial software product or an engineering showcase?",
      answer: "OSA is an engineering showcase project created by Rounak Neema to demonstrate local-first statistical anomaly detection and high-speed forensic log analysis. It is not a retail commercial software product.",
      category: "Access & Showcase Status"
    },
    {
      question: "Can we hire Rounak Neema for custom security auditing or forensic tooling?",
      answer: "Yes. Rounak Neema builds bespoke security audit tools, air-gapped forensic analyzers, and compliance automation software. Inquire via the email intake below or email rounakneema414@gmail.com.",
      category: "Access & Showcase Status"
    },
    {
      question: "Who benefits most from using OSA?",
      answer: "Defense contractors, banking infrastructure auditors, compliance officers, and security teams managing isolated, air-gapped server environments.",
      category: "Target Audience"
    }
  ],

  axiomos: [
    {
      question: "What is AXIOM OS and what does a local-first personal AI operating system do?",
      answer: "AXIOM OS is an offline personal AI operating system designed to monitor desktop activity, evaluate goal alignment, and enforce focus policies entirely on the local machine without cloud telemetry.",
      category: "About the Project"
    },
    {
      question: "How is AXIOM OS different from cloud-based productivity assistants and trackers?",
      answer: "Cloud productivity tools upload window titles, activity logs, and keystroke metadata to external servers, creating privacy risks. AXIOM OS runs 100% locally. The background Specter daemon and Ollama inference models execute on your local CPU and GPU, ensuring that personal activity never leaves your hardware.",
      category: "Benefits & Differentiation"
    },
    {
      question: "How does AXIOM OS track focus and evaluate goal alignment?",
      answer: "A lightweight background daemon (Specter) measures active application windows, terminal commands, and document focus locally. It compares active windows against declared user goals using an in-memory policy engine, alerting you when activity drifts into distraction loops.",
      category: "Features & Use Cases"
    },
    {
      question: "How does the local Ollama inference engine operate on standard hardware?",
      answer: "All natural language classification and task alignment reasoning execute via local Ollama models in quantized 4-bit mode. The daemon consumes under 25MB of RAM and less than 1% CPU, allowing smooth background operation on standard laptops with 8GB or more of RAM.",
      category: "How It Works"
    },
    {
      question: "What is the Specter daemon and how does it interface with OS window managers?",
      answer: "Specter is a native Go background service that queries the operating system window manager using low-overhead platform APIs. It aggregates focus sessions into an embedded SQLite database, generating daily alignment scores and intervention triggers.",
      category: "How It Works"
    },
    {
      question: "Does AXIOM OS collect telemetry, audio, or send network packets?",
      answer: "Zero network packets are transmitted. AXIOM OS is built with a strict Zero-Cloud Invariant. Audio, text, window metadata, and inference results are stored exclusively in your local database with optional encryption at rest.",
      category: "Trust & Security"
    },
    {
      question: "What are the technical limitations of running AXIOM OS locally?",
      answer: "Because inference runs locally, response times depend on available hardware. On Apple Silicon or machines with dedicated GPUs, policy checks execute in under 400 milliseconds; on older dual-core CPUs, quantized evaluation may take up to 1.2 seconds.",
      category: "Trust & Security"
    },
    {
      question: "Is AXIOM OS a commercial software product or an engineering showcase?",
      answer: "AXIOM OS is an engineering showcase project created by Rounak Neema demonstrating local-first operating system agents and private ambient intelligence. It is not a turnkey consumer SaaS with paid subscriptions.",
      category: "Access & Showcase Status"
    },
    {
      question: "Can we hire Rounak Neema to build custom local-first AI applications or OS daemons?",
      answer: "Yes. Rounak Neema builds native background daemons, local-first inference workflows, and privacy-focused software systems. Submit your email below or contact directly at rounakneema414@gmail.com.",
      category: "Access & Showcase Status"
    },
    {
      question: "Who benefits most from AXIOM OS?",
      answer: "Deep-work professionals, software engineers, writers, and privacy-conscious users who want automated daily focus tracking without transmitting personal activity to cloud servers.",
      category: "Target Audience"
    }
  ],

  dizzy: [
    {
      question: "What is Dizzy and how does it turn voice into UI designs?",
      answer: "Dizzy is an interface design agent that translates natural speech into native, editable Figma Auto-Layout components. Instead of clicking through menus or drawing frames manually, you speak your layout requirements. The AST parser compiles your phrases into structured node trees and applies them directly to your active Figma canvas.",
      category: "About the Project"
    },
    {
      question: "How is Dizzy different from screenshot-to-code tools and static image generators?",
      answer: "Screenshot-to-code tools generate flat code from images, while image generators produce non-editable bitmaps. Dizzy works bidirectionally inside Figma. It manipulates native Auto-Layout frames, binds published design system tokens, and preserves component variant hierarchies without detaching instances.",
      category: "Benefits & Differentiation"
    },
    {
      question: "What design systems and tokens does Dizzy support?",
      answer: "Dizzy inspects your active document's Figma Variables, Styles, and published team libraries. When generating or editing UI elements, it binds colors, typography scales, border radii, and spacing tokens from your existing design system, preventing rogue hex codes.",
      category: "Features & Use Cases"
    },
    {
      question: "How does Dizzy connect to Figma with sub-180ms latency?",
      answer: "Dizzy connects to Figma via a local WebSocket bridge using the Figma Plugin API. Voice activity detection processes the speech stream locally, the semantic command buffer generates numeric JSON diffs, and the WebSocket server pushes the mutation to the Figma canvas in real time.",
      category: "How It Works"
    },
    {
      question: "How does Dizzy maintain context memory across iterative voice prompts?",
      answer: "Dizzy maintains an in-memory document state buffer that tracks previously edited frames, brand colors, component aliases, and active design decisions. You can say 'make the secondary button larger' or 'revert the navbar padding' and Dizzy correctly resolves the contextual reference.",
      category: "How It Works"
    },
    {
      question: "Does Dizzy send private Figma canvas data to external cloud servers?",
      answer: "No. Dizzy runs its document synchronization bridge locally over localhost WebSockets. Your proprietary design files, layer trees, and brand tokens remain inside your local environment and active Figma session.",
      category: "Trust & Security"
    },
    {
      question: "What are the technical requirements for running Dizzy with Figma?",
      answer: "Dizzy requires the desktop version of Figma with the local Dizzy plugin manifest installed, alongside the lightweight local Python speech daemon running on macOS or Windows with microphone permissions enabled.",
      category: "Trust & Security"
    },
    {
      question: "Is Dizzy a commercial SaaS product or an engineering showcase?",
      answer: "Dizzy is an engineering showcase project created by Rounak Neema to demonstrate advanced voice-to-canvas AST compilation and real-time Figma MCP tooling. It is not a commercial SaaS product looking for retail subscribers.",
      category: "Access & Showcase Status"
    },
    {
      question: "Can we hire Rounak Neema to build custom Figma plugins, voice interfaces, or MCP tools?",
      answer: "Yes. Rounak Neema partners with engineering and design systems teams to build custom Figma plugins, generative design tooling, and Model Context Protocol (MCP) integrations. Submit your email below or reach out at rounakneema414@gmail.com.",
      category: "Access & Showcase Status"
    },
    {
      question: "Who benefits most from Dizzy?",
      answer: "Product designers, design systems engineers, and frontend developers who want to eliminate repetitive Auto-Layout clicking and prototype complex interface layouts at the speed of speech.",
      category: "Target Audience"
    }
  ]
};
