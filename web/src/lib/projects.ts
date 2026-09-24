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
    status: 'active' | 'wip' | 'archived';
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
        subtitle: 'High-Performance Network Scanner',
        status: 'active',
        category: 'Security Tooling',
        subdomain: 'revealr.rounakneema.in',
        tags: [
            { text: 'GO', type: 'blue' },
            { text: 'PYTHON', type: 'default' },
            { text: 'SQLITE', type: 'default' },
        ],
        tech: ['Go', 'Python', 'SQLite', 'Raw Sockets', 'Concurrency'],
        challenge:
            'Network scanning on local networks required high throughput and stateful tracking of changes across time.',
        solution:
            'High-concurrency adaptive network scanner using raw sockets, achieving 50k ports/min with a stateful SQLite-backed engine.',
        fullDescription:
            'Revealr is a high-performance network scanner built in Go. It uses raw sockets for custom packet generation and achieves throughput of 50k ports/minute. It features a stateful engine using SQLite to resume scans and perform historical diffing to detect new services. A Python plugin system allows custom service fingerprinting and vulnerability checks without recompiling the core.',
        bullets: [
            { label: 'Throughput', text: 'Achieves 50,000 ports/minute scan throughput on local networks using raw sockets.' },
            { label: 'Architecture', text: 'Stateful engine with SQLite for resuming interrupted scans and historical service diffing.' },
            { label: 'Extensibility', text: 'Python plugin system for custom service fingerprinting and vulnerability checks.' },
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
        slug: 'osa',
        title: 'OSA',
        subtitle: 'Offline Security Auditor',
        status: 'active',
        category: 'Security / Analytics',
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
            'Single-binary offline security auditor with built-in statistical detection engines — no runtime dependencies required.',
        fullDescription:
            'OSA (Offline Security Auditor) is an air-gapped security analytics engine compiled as a single Go binary. It performs log ingestion and statistical anomaly detection without any runtime dependencies, making it ideal for isolated secure zones. Detection engines include Z-Score analysis, Probability Matrices, and Markov Chain transition models.',
        bullets: [
            { label: 'Core Innovation', text: 'Zero-dependency single binary architecture — runs anywhere Go compiles to.' },
            { label: 'Detection Engines', text: 'Statistical anomaly detection using Z-Score, Probability Matrices, and Markov Chains.' },
            { label: 'Log Pipeline', text: 'Log ingestion pipeline supporting historical backfill and real-time monitoring.' },
            { label: 'Target Use Case', text: 'High-security isolated environments where cloud SIEMs are inaccessible.' },
        ],
        links: [],
        metrics: [
            { label: 'Binary Deps', value: '0' },
            { label: 'Language', value: 'Go' },
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
        slug: 'metromind',
        title: 'MetroMind',
        subtitle: 'AI-Powered Document Intelligence Platform',
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
            'Managing and semantically searching large volumes of transit documents across departments is inefficient without intelligent tooling.',
        solution:
            'AI-powered document intelligence platform with 12+ containerized microservices, OCR pipelines, and vector search.',
        fullDescription:
            'MetroMind is a microservices-based document intelligence platform built for the Smart India Hackathon (Kochi Metro problem statement). It orchestrates 12+ Dockerized services to provide OCR, vector search, and RBAC-controlled document management. The system includes an API Gateway, Audit Logging, and real-time document ingestion pipelines — deployed as a full stack solution for real-world transit document retrieval.',
        bullets: [
            { label: 'Scale', text: '12+ containerized microservices fully managed via Docker Compose.' },
            { label: 'Features', text: 'API Gateway, RBAC, Audit Logging, OCR, and Vector Search pipelines.' },
            { label: 'Stack', text: 'Go & Python backends, Docker, Vector DB, RabbitMQ for async messaging.' },
            { label: 'Achievement', text: 'Built and deployed a full-stack solution for the Smart India Hackathon problem statement.' },
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
        slug: 'pipelineforge',
        title: 'PipelineForge',
        subtitle: 'CI/CD Orchestration Engine',
        status: 'wip',
        category: 'DevOps / Platform Engineering',
        subdomain: 'pipelineforge.rounakneema.in',
        tags: [
            { text: 'GO', type: 'blue' },
            { text: 'DEVOPS', type: 'yellow' },
            { text: 'YAML-DSL', type: 'default' },
        ],
        tech: ['Go', 'YAML DSL', 'Docker', 'gRPC', 'Webhooks'],
        challenge:
            'Existing CI/CD platforms are either too opinionated (GitHub Actions) or too complex to self-host (Jenkins). There was a need for a lightweight, extensible alternative.',
        solution:
            'A lightweight self-hostable CI/CD orchestration engine with a custom YAML DSL, webhook-triggered pipeline execution, and a gRPC runner protocol.',
        fullDescription:
            'PipelineForge is a self-hostable CI/CD orchestration engine built in Go. It defines a custom YAML-based DSL for pipeline configuration, triggers runs via webhooks from any VCS, and communicates with distributed runner agents over gRPC. Designed to be minimal, auditable, and fully self-contained.',
        bullets: [
            { label: 'DSL', text: 'Custom YAML pipeline DSL for defining stages, jobs, and conditional flows.' },
            { label: 'Triggers', text: 'Webhook-triggered execution supporting GitHub, Gitea, and generic HTTP hooks.' },
            { label: 'Runners', text: 'Distributed runner agents communicating with the orchestrator over gRPC.' },
            { label: 'Philosophy', text: 'Minimal, auditable, and self-contained — no external databases required at base config.' },
        ],
        links: [],
        metrics: [
            { label: 'Language', value: 'Go' },
            { label: 'Protocol', value: 'gRPC' },
            { label: 'Config', value: 'YAML DSL' },
            { label: 'Status', value: 'WIP' },
        ],
        terminal: {
            command: './pipelineforge run --pipeline .forge/build.yaml',
            output: [
                { text: '[FORGE] Pipeline: build-and-test', color: 'text-blue-400' },
                { text: '[STAGE 1] → checkout', color: 'text-gray-300' },
                { text: '[STAGE 2] → go build ./...         ✓', color: 'text-green-400' },
                { text: '[STAGE 3] → go test ./...          ✓', color: 'text-green-400' },
                { text: '[STAGE 4] → docker build -t app .  ✓', color: 'text-green-400' },
                { text: '[FORGE] Pipeline complete in 14.2s', color: 'text-blue-400' },
            ],
        },
    },
    {
        slug: 'spqr',
        title: 'SPQR',
        subtitle: 'Smart Packet Query & Routing Engine',
        status: 'wip',
        category: 'Networking / Security',
        subdomain: 'spqr.rounakneema.in',
        tags: [
            { text: 'GO', type: 'blue' },
            { text: 'NETWORKING', type: 'green' },
            { text: 'eBPF', type: 'red' },
        ],
        tech: ['Go', 'eBPF', 'XDP', 'libpcap', 'BPF Maps'],
        challenge:
            'Deep packet inspection and dynamic traffic routing based on application-layer content is expensive at high bandwidth on traditional userspace tools.',
        solution:
            'An eBPF/XDP-accelerated packet processing engine with a rule-based query language for real-time traffic classification and routing decisions.',
        fullDescription:
            'SPQR (Smart Packet Query & Routing) is a high-performance packet processing engine leveraging eBPF/XDP for kernel-space packet interception. It exposes a query language that allows users to define real-time routing rules based on packet headers and payload patterns. BPF Maps are used for kernel-userspace state sharing without expensive context switches.',
        bullets: [
            { label: 'Kernel-Space', text: 'eBPF/XDP programs for packet interception at NIC level — before kernel TCP stack.' },
            { label: 'Query Engine', text: 'Custom rule language for classifying and routing packets based on L3/L4 attributes.' },
            { label: 'State Sharing', text: 'BPF Maps for efficient lock-free kernel-to-userspace state synchronization.' },
            { label: 'Performance', text: 'Achieves line-rate processing on commodity hardware for common rule patterns.' },
        ],
        links: [],
        metrics: [
            { label: 'Language', value: 'Go + eBPF' },
            { label: 'Layer', value: 'XDP / L2' },
            { label: 'IPC', value: 'BPF Maps' },
            { label: 'Status', value: 'WIP' },
        ],
        terminal: {
            command: 'sudo ./spqr attach eth0 --rules rules.spqr',
            output: [
                { text: '[SPQR] Loading eBPF program → eth0', color: 'text-blue-400' },
                { text: '[XDP]  Program attached successfully', color: 'text-green-400' },
                { text: '[RULE] DROP src=10.0.0.5/32 dport=22', color: 'text-red-400' },
                { text: '[RULE] REDIRECT src=0.0.0.0/0 dport=80 → 10.0.0.10:8080', color: 'text-yellow-400' },
                { text: '[SPQR] Processing @ line rate. Rules active: 2', color: 'text-blue-400' },
            ],
        },
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
