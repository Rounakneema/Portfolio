export type Tag = {
    text: string;
    type: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'default';
};

export type TerminalLine = {
    text: string;
    color: string;
};

export type ProjectLink = {
    label: string;
    icon: string; // icon name key: 'Github' | 'FileCode' | 'LayoutDashboard'
    primary: boolean;
    url: string;
};

export type Project = {
    slug: string;
    title: string;
    subtitle: string;
    status: 'active' | 'wip' | 'archived' | 'concept';
    category: string;
    tags: Tag[];
    challenge: string;
    solution: string;
    fullDescription: string;
    bullets: { label: string; text: string }[];
    links: ProjectLink[];
    subdomain: string;
    terminal?: {
        command: string;
        output: TerminalLine[];
    };
    metrics?: { label: string; value: string }[];
    tech: string[];
};

export const projects: Project[] = [
    {
        slug: 'revealr',
        title: 'Revealr',
        subtitle: 'Adaptive Network Scanner with Vulnerability Mapping',
        status: 'active',
        category: 'Cybersecurity',
        subdomain: 'revealr.rounakneema.in',
        tags: [
            { text: 'GO', type: 'blue' },
            { text: 'PYTHON', type: 'default' },
            { text: 'SQLITE', type: 'default' },
        ],
        tech: ['Go', 'Python', 'SQLite', 'Raw Sockets', 'Concurrency'],
        challenge:
            'Traditional scanners give port status and generic vulnerability results, but lack stateful tracking and extensibility to detect network drift or map vulnerabilities offline.',
        solution:
            'A hybrid adaptive network scanner achieving 50k ports/min with a stateful SQLite-backed engine and modular Python vulnerability mapping.',
        fullDescription:
            'Revealr is a high-performance network scanner built in Go. It uses raw sockets for custom packet generation and achieves throughput of 50k ports/minute. It features a stateful engine using SQLite to resume scans and perform historical diffing to detect new services. A Python plugin system allows custom service fingerprinting and offline vulnerability checks without recompiling the core. Scanning profiles (Paranoid, Stealthy, Polite) control timing behavior based on engagement requirements.',
        bullets: [
            { label: 'Throughput', text: 'Achieves 50,000 ports/minute scan throughput on local networks using raw sockets.' },
            { label: 'Architecture', text: 'Stateful engine with SQLite for resuming interrupted scans and historical service diffing (Network Drift).' },
            { label: 'Extensibility', text: 'Python plugin system for custom service fingerprinting and offline vulnerability mapping.' },
            { label: 'Outcome', text: 'Reduced recon time significantly and provided actionable difference reports between scans.' },
        ],
        links: [
            { label: 'VIEW SOURCE', icon: 'Github', primary: true, url: 'https://github.com/rounakneema/Revealr' },
            { label: 'READ WRITEUP', icon: 'FileCode', primary: false, url: '/posts/go-raw-packet-scanner' },
        ],
        metrics: [
            { label: 'Throughput', value: '50k pps' },
            { label: 'Language', value: 'Go' },
            { label: 'Persistence', value: 'SQLite' },
            { label: 'Plugins', value: 'Python' },
        ],
        terminal: {
            command: './revealr -target 10.10.11.0/24 --rate 50000',
            output: [
                { text: '[+] Target: 10.10.11.15 (Linux/Ubuntu)', color: 'text-green-400' },
                { text: '    ├── 22/tcp  OPEN  (ssh)', color: 'text-gray-300' },
                { text: '    ├── 80/tcp  OPEN  (http) → nginx/1.18.0', color: 'text-gray-300' },
                { text: '    └── 8080/tcp OPEN (http) → Node.js Express', color: 'text-yellow-400' },
                { text: '[DIFF] New service detected since last scan: 8080/tcp', color: 'text-red-400' },
                { text: '[*] Scan complete in 0.8s (50k pps)', color: 'text-blue-400' },
            ],
        },
    },
    {
        slug: 'metromind',
        title: 'MetroMind',
        subtitle: 'Enterprise AI Document Intelligence',
        status: 'archived',
        category: 'Microservices / AI',
        subdomain: 'metromind.rounakneema.in',
        tags: [
            { text: 'MICROSERVICES', type: 'purple' },
            { text: 'DOCKER', type: 'default' },
            { text: 'AI/OCR', type: 'default' },
        ],
        tech: ['Go', 'Python', 'Docker', 'RabbitMQ', 'Vector DB', 'OCR', 'RBAC'],
        challenge:
            'Managing and semantically searching large volumes of transit documents across departments is inefficient without intelligent tooling and strict role-based access.',
        solution:
            'AI-powered document intelligence platform with 12+ containerized microservices, OCR pipelines, vector search, and 100% audit logging.',
        fullDescription:
            'MetroMind is a microservices-based document intelligence platform built for the Smart India Hackathon (Kochi Metro problem statement). It orchestrates 12+ Dockerized services to provide OCR, vector search, and RBAC-controlled document management. The system includes an API Gateway, strict Multi-Tenancy isolation, and 100% Audit Logging for privileged operations, ensuring enterprise-level security for transit document retrieval.',
        bullets: [
            { label: 'Scale', text: '12+ containerized microservices fully managed via Docker Compose.' },
            { label: 'Security', text: 'API Gateway, Role-Based Access Control (RBAC), and 100% Audit Logging for privileged operations.' },
            { label: 'Stack', text: 'Go & Python backends, Docker, Vector DB, RabbitMQ for async messaging.' },
            { label: 'Achievement', text: 'Built and deployed a full-stack multi-tenant solution for the Smart India Hackathon.' },
        ],
        links: [
            { label: 'VIEW SOURCE', icon: 'Github', primary: true, url: 'https://github.com/rounakneema/MetroMind' },
            { label: 'ARCHITECTURE', icon: 'LayoutDashboard', primary: false, url: '#' },
        ],
        metrics: [
            { label: 'Services', value: '12+' },
            { label: 'Search', value: 'Vector' },
            { label: 'Queue', value: 'RabbitMQ' },
            { label: 'Auth', value: 'RBAC' },
        ],
    },
    {
        slug: 'osa',
        title: 'OSA',
        subtitle: 'Offline Security Auditor',
        status: 'wip',
        category: 'Security Analytics',
        subdomain: 'osa.rounakneema.in',
        tags: [
            { text: 'GO', type: 'blue' },
            { text: 'OFFLINE-SEC', type: 'green' },
            { text: 'ZERO-DEPS', type: 'default' },
        ],
        tech: ['Go', 'Z-Score', 'Markov Chains', 'Probability Matrices', 'Log Ingestion'],
        challenge:
            'Security analytics in air-gapped environments is extremely difficult without heavy runtime dependencies like ELK or Splunk.',
        solution:
            'Single-binary offline security auditor with built-in statistical detection engines (Z-Score & Markov Chains) — no runtime dependencies required.',
        fullDescription:
            'OSA (Offline Security Auditor) is an air-gapped security analytics engine compiled as a single Go binary. It performs log ingestion and statistical anomaly detection without any runtime dependencies, making it ideal for isolated secure zones. It supports real-time streaming and historical batch analysis. Detection engines include Z-Score analysis for statistical outliers and Markov Chain models for behavioral sequential deviations. It reduced false positives by 38% in tests compared to baseline methods.',
        bullets: [
            { label: 'Core Innovation', text: 'Zero-dependency single binary architecture — runs anywhere Go compiles to (<200ms latency).' },
            { label: 'Detection Engines', text: 'Statistical anomaly detection using Z-Score, Probability Matrices, and Markov Chains.' },
            { label: 'Log Pipeline', text: 'Dual-mode log ingestion pipeline supporting historical backfill and real-time monitoring across 5 sources.' },
            { label: 'Target Use Case', text: 'High-security isolated air-gapped environments where cloud SIEMs are inaccessible.' },
        ],
        links: [],
        metrics: [
            { label: 'Binary Deps', value: '0' },
            { label: 'Latency', value: '<200ms' },
            { label: 'Detection', value: '3 Engines' },
            { label: 'Deploy', value: 'Air-Gapped' },
        ],
        terminal: {
            command: './osa --analyze --mode offline --log /var/log/auth.log',
            output: [
                { text: '[*] Loading log patterns...', color: 'text-blue-400' },
                { text: '[*] Initializing Markov chain transition matrix...', color: 'text-blue-400' },
                { text: '[!] ANOMALY Detected (Z-Score: 4.2): Auth Spike', color: 'text-red-500' },
                { text: '    └── Source: 192.168.1.105 (User: admin)', color: 'text-gray-400' },
                { text: '[+] Markov Chain: Deviation from standard transition matrix', color: 'text-yellow-400' },
                { text: '[*] Report generated → analysis_report.json', color: 'text-green-400' },
            ],
        },
    },
    {
        slug: 'sortmail',
        title: 'SortMail',
        subtitle: 'AI Operating Layer for Professional Email',
        status: 'wip',
        category: 'AI SaaS',
        subdomain: 'sortmail.rounakneema.in',
        tags: [
            { text: 'PYTHON', type: 'blue' },
            { text: 'AI', type: 'purple' },
            { text: 'SAAS', type: 'yellow' },
        ],
        tech: ['Python', 'SQLAlchemy', 'OAuth', 'Docker', 'Stripe', 'Claude/LLMs'],
        challenge:
            'Professionals receiving 40+ emails daily struggle with prioritization, actionable task extraction, and secure attachment analysis without giving up data privacy.',
        solution:
            'An AI operating layer that ingests email via OAuth, performs BLUF summarization, extracts tasks & deadlines, and handles secure attachment analysis.',
        fullDescription:
            'SortMail is an AI operating layer over professional email (Gmail/Outlook). It features an Executive Briefing Engine for BLUF-style summaries, an Attachment Intelligence engine with strict security controls (virus scanning, size limits), a Smart Reply generator, and a Deadline Extractor that syncs with calendars. Built with enterprise SaaS security in mind, utilizing JWT auth, Stripe billing, GDPR compliance mechanisms, and extensive rate limiting.',
        bullets: [
            { label: 'AI Engines', text: 'Executive Briefing, Task & Priority, Smart Reply, and Deadline Extraction engines.' },
            { label: 'Security', text: 'Strict OAuth handling, MIME/size validation, virus scanning, and SQL injection protection.' },
            { label: 'SaaS Architecture', text: 'Built with Stripe webhooks, GDPR deletion processes, and comprehensive API rate limiting.' },
            { label: 'Observability', text: 'Production monitoring using Sentry, Better Stack, and AWS CloudWatch.' },
        ],
        links: [],
        metrics: [
            { label: 'Engines', value: '4 AI Models' },
            { label: 'Integration', value: 'Gmail/Outlook' },
            { label: 'Security', value: 'GDPR/PCI' },
            { label: 'Status', value: 'SaaS WIP' },
        ],
    },
    {
        slug: 'pipelineforge',
        title: 'PipelineForge',
        subtitle: 'DevSecOps GitOps Pipeline Automation',
        status: 'wip',
        category: 'DevSecOps',
        subdomain: 'pipelineforge.rounakneema.in',
        tags: [
            { text: 'DEVOPS', type: 'yellow' },
            { text: 'KUBERNETES', type: 'blue' },
            { text: 'SECURITY', type: 'red' },
        ],
        tech: ['GitHub Actions', 'Docker', 'Kubernetes', 'Helm', 'Trivy', 'k6'],
        challenge:
            'Manual deployments suffer from poor auditability, lack automated vulnerability scanning, missing rollbacks, and unrestricted network access.',
        solution:
            'A comprehensive DevSecOps pipeline orchestrating Docker builds, Trivy security gates, and Kubernetes GitOps deployments with 99.3% image size optimization.',
        fullDescription:
            'PipelineForge represents a full DevSecOps GitOps pipeline. It automates container builds, integrates Trivy for security vulnerability scanning, and manages deployments to Kubernetes. Key achievements include optimizing container images from 1.1GB to 8MB (99.3% reduction) using distroless multi-stage builds. The Kubernetes setup features HPA, NetworkPolicies, zero-downtime rolling updates, and was load-tested with k6 for 500 virtual users.',
        bullets: [
            { label: 'Optimization', text: 'Reduced container size by 99.3% (1.1GB to 8MB) using multi-stage distroless builds.' },
            { label: 'Security Gates', text: 'Integrated Trivy vulnerability scanning into the CI/CD deployment flow.' },
            { label: 'Kubernetes', text: 'Implemented NetworkPolicies, resource quotas, HPA, and readiness/liveness probes.' },
            { label: 'Validation', text: 'Validated zero-downtime rolling updates using k6 load testing with 500 virtual users.' },
        ],
        links: [],
        metrics: [
            { label: 'Size Reduction', value: '99.3%' },
            { label: 'Load Test', value: '500 VUs' },
            { label: 'Orchestration', value: 'K8s' },
            { label: 'Status', value: 'Implemented' },
        ],
    },
    {
        slug: 'devcontext',
        title: 'Klarity.ai / DevContext.AI',
        subtitle: 'AI Repository Intelligence for Recruiters',
        status: 'active',
        category: 'AI Tooling',
        subdomain: 'devcontext.rounakneema.in',
        tags: [
            { text: 'TYPESCRIPT', type: 'blue' },
            { text: 'AWS', type: 'yellow' },
            { text: 'LLMs', type: 'purple' },
        ],
        tech: ['React', 'TypeScript', 'AWS SAM', 'Amazon Bedrock', 'Claude 3.5 Sonnet', 'DynamoDB'],
        challenge:
            'Recruiters and interviewers struggle to understand architectural decisions, code complexity, and individual contributions just by looking at a GitHub repository.',
        solution:
            'A 3-stage AI intelligence pipeline that transforms GitHub repos into recruiter-ready reports and simulated interview sessions.',
        fullDescription:
            'DevContext.AI is an intelligence platform that analyzes GitHub repositories to generate employability scores, code-quality metrics, and mock interviews. The system uses a grounded AI approach, referencing specific files and line numbers to avoid hallucination, and distinguishes between developer code and boilerplate framework code. It utilizes a multi-model strategy via Amazon Bedrock (Claude Haiku for fast reviews, Sonnet for deep architecture analysis).',
        bullets: [
            { label: 'Pipeline', text: '3-stage pipeline: Project Review (~30s), Intelligence Report, and Interview Simulation.' },
            { label: 'Grounding', text: 'AI claims are grounded in actual repository evidence (file paths and line numbers) to prevent hallucination.' },
            { label: 'Scale Targets', text: 'Designed for 10+ concurrent analyses, 50MB repositories, and >50K tokens.' },
            { label: 'Architecture', text: 'React frontend, AWS SAM serverless backend, DynamoDB, and WebSocket protocols.' },
        ],
        links: [],
        metrics: [
            { label: 'Speed', value: '~30s initial' },
            { label: 'Models', value: 'Claude Family' },
            { label: 'Backend', value: 'AWS Serverless' },
            { label: 'Context', value: '>50k tokens' },
        ],
    },
    {
        slug: 'axiom-os',
        title: 'AXIOM OS',
        subtitle: 'Zero-Cloud Local Personal Operating System',
        status: 'concept',
        category: 'Local AI / OS',
        subdomain: 'axiom-os.rounakneema.in',
        tags: [
            { text: 'GO', type: 'blue' },
            { text: 'LOCAL AI', type: 'purple' },
            { text: 'SYSTEMS', type: 'green' },
        ],
        tech: ['Go', 'SQLite', 'Ollama', 'Qwen 2.5', 'Telemetry'],
        challenge:
            'Current productivity assistants rely on cloud LLMs (privacy concerns) and act generically rather than enforcing personal accountability based on actual system behavior.',
        solution:
            'A local-first, zero-cloud personal operating system that observes telemetry, understands structured goals, and intervenes contextually using local AI.',
        fullDescription:
            'AXIOM OS is an architectural design for a personal OS layer. It features a Go telemetry daemon (Specter) to collect local signals, a SQLite memory layer, and an AI brain powered by Ollama (Qwen 2.5). The core principle separates deterministic system state (measurement, policy) from AI interpretation, ensuring interventions are based on factual data, not LLM hallucinations. It includes a confrontational personality layer for strict goal alignment.',
        bullets: [
            { label: 'Local-First', text: 'Zero-cloud architecture ensuring all behavioral telemetry stays on the local machine.' },
            { label: 'Telemetry', text: 'Go-based Specter daemon collecting file, shell, and browser activity.' },
            { label: 'Determinism', text: 'Strict separation of deterministic measurement/policy from AI reasoning and conversation.' },
            { label: 'Intervention', text: 'Policy-controlled accountability system capable of contextual roasts and Focus Scoring.' },
        ],
        links: [],
        metrics: [
            { label: 'Cloud Deps', value: '0' },
            { label: 'Telemetry', value: 'Specter (Go)' },
            { label: 'Memory', value: 'SQLite' },
            { label: 'AI Layer', value: 'Ollama' },
        ],
    },
    {
        slug: 'dizzy',
        title: 'Dizzy',
        subtitle: 'Voice-to-Native-Figma UI Creation Concept',
        status: 'concept',
        category: 'Design Engineering',
        subdomain: 'dizzy.rounakneema.in',
        tags: [
            { text: 'GENERATIVE UI', type: 'purple' },
            { text: 'VOICE', type: 'red' },
            { text: 'FIGMA', type: 'blue' },
        ],
        tech: ['Voice/JEV', 'Figma MCP', 'Semantic Buffer', 'Agents'],
        challenge:
            'Traditional generative UI tools output flattened PNGs or uneditable code. Designers need voice-driven generation that produces native, editable Figma objects.',
        solution:
            'An agentic architecture translating streaming speech into a semantic command buffer, generating structured design operations via Figma MCP.',
        fullDescription:
            'Dizzy is a product architecture concept for voice-driven UI design. Instead of generating images, it streams voice input to an agent that builds a semantic command buffer. This buffer translates intent into structured operations for the Figma MCP, allowing the system to progressively modify native Figma designs. Later commands can intelligently update earlier decisions rather than creating entirely new assets.',
        bullets: [
            { label: 'Native Output', text: 'Manipulates native Figma objects via Figma MCP instead of generating images.' },
            { label: 'Semantic Buffer', text: 'Maintains structured design state to allow progressive and contextual modifications.' },
            { label: 'Workflow', text: 'JEV/Streaming Voice → Agent Intent → Design Operations → Figma MCP.' },
            { label: 'Vision', text: 'Expanding into an agentic product design loop integrating visual comparison and code generation.' },
        ],
        links: [],
        metrics: [
            { label: 'Input', value: 'Streaming Voice' },
            { label: 'Output', value: 'Figma Native' },
            { label: 'Integration', value: 'Figma MCP' },
            { label: 'State', value: 'Semantic Buffer' },
        ],
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
