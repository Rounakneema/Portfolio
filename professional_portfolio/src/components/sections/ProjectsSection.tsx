import { motion, AnimatePresence } from 'framer-motion';
import { Github, FileCode, LayoutDashboard, Terminal, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const projects = [
        {
            title: 'Revealr',
            tags: [{ text: 'GO', type: 'blue' }, { text: 'PYTHON', type: 'default' }, { text: 'SQLITE', type: 'default' }],
            challenge: 'Network scanning on local networks required high throughput and stateful tracking of changes.',
            solution: 'High-concurrency adaptive network scanner achieving 50k ports/min.',
            fullDescription: "Revealr is a high-performance network scanner built in Go. It uses raw sockets for custom packet generation and achieves throughput (50k ports/min). It features a stateful engine using SQLite to resume scans and perform historical diffing to detect new services.",
            bullets: [
                { label: 'Key Feature', text: 'Achieves 50,000 ports/minute scan throughput on local networks.' },
                { label: 'Architecture', text: 'Stateful engine with SQLite for resuming scans and historical diffing.' },
                { label: 'Extensibility', text: 'Python plugin system for custom service fingerprinting and vuln checks.' },
                { label: 'Outcome', text: 'Reduced recon time significantly and provided actionable difference reports.' }
            ],
            links: [
                { label: 'VIEW SOURCE', icon: Github, primary: true, url: 'https://github.com/rounakneema/Revealr' },
                { label: 'BENCHMARKS', icon: FileCode, primary: false, url: '#' }
            ],
            terminal: {
                command: './revealr -target 10.10.11.0/24 --rate 50000',
                output: [
                    { text: '[+] Target: 10.10.11.15 (Linux/Ubuntu)', color: 'text-green-400' },
                    { text: '    ├── 22/tcp  OPEN  (ssh)', color: 'text-gray-300' },
                    { text: '    ├── 80/tcp  OPEN  (http) -> nginx/1.18.0', color: 'text-gray-300' },
                    { text: '    └── 8080/tcp OPEN (http) -> Node.js Express', color: 'text-yellow-400' },
                    { text: '[*] Scan complete in 0.8s (50k pps)', color: 'text-blue-400' }
                ]
            }
        },
        {
            title: 'OSA',
            tags: [{ text: 'GO', type: 'blue' }, { text: 'OFFLINE-SEC', type: 'green' }, { text: 'NO-DEPS', type: 'default' }],
            challenge: 'Security analytics in air-gapped environments is difficult without heavy dependencies like ELK/Splunk.',
            solution: 'Single-binary offline security auditor with statistical detection engines.',
            fullDescription: "OSA (Offline Security Auditor) is an air-gapped security analytics engine compiled as a single Go binary. It performs log ingestion and statistical detection without any runtime dependencies, making it ideal for isolated secure zones.",
            bullets: [
                { label: 'Core Innovation', text: 'Zero-dependency single binary architecture for air-gapped deployment.' },
                { label: 'Detection', text: 'Statistical analysis using Z-Score, Probability Matrices, and Markov Chains.' },
                { label: 'Pipeline', text: 'Log ingestion pipeline supporting historical backfill and real-time monitoring.' },
                { label: 'Target', text: 'High-security isolated environments where cloud SIEMs are not accessible.' }
            ],
            links: [],
            terminal: {
                command: './osa --analyze --mode offline',
                output: [
                    { text: '[*] Loading log patterns...', color: 'text-blue-400' },
                    { text: '[!] Anomaly Detected (Z-Score: 4.2): Auth Spike', color: 'text-red-500' },
                    { text: '    └── Source: 192.168.1.105 (User: admin)', color: 'text-gray-400' },
                    { text: '[+] Markov Chain: Deviation from standard transition matrix', color: 'text-yellow-400' },
                    { text: '[*] Report generated: analysis_report.json', color: 'text-green-400' }
                ]
            }
        },
        {
            title: 'MetroMind',
            tags: [{ text: 'MICROSERVICES', type: 'purple' }, { text: 'DOCKER', type: 'default' }, { text: 'AI/OCR', type: 'default' }],
            challenge: 'Managing and searching large volumes of transit documents efficiently.',
            solution: 'AI-powered document intelligence platform with microservices architecture.',
            fullDescription: "MetroMind is a microservices-based document intelligence platform built for the Smart India Hackathon (Kochi Metro problem statement). It orchestrates 12+ Dockerized services to provide OCR, vector search, and RBAC-controlled document management.",
            bullets: [
                { label: 'Architecture', text: '12+ containerized microservices managed via Docker Compose.' },
                { label: 'Features', text: 'API Gateway, RBAC, Audit Logging, and OCR/Vector Search pipelines.' },
                { label: 'Stack', text: 'Go/Python Backend, Docker, Vector DB, RabbitMQ.' },
                { label: 'Achievement', text: 'Deployed full stack solution solving real-world transit document retrieval issues.' }
            ],
            links: [
                { label: 'VIEW SOURCE', icon: Github, primary: true, url: 'https://github.com/rounakneema/MetroMind' },
                { label: 'ARCHAGRAM', icon: LayoutDashboard, primary: false, url: '#' }
            ],
            screenshot: true
        }
    ];

    return (
        <section className="mb-48">
            <span className="section-label text-base md:text-lg mb-12">// FEATURED ENGINEERING</span>

            <div className="grid grid-cols-1 gap-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        onClick={() => setSelectedProject(project)}
                        className="glass-panel p-12 md:p-16 flex flex-col md:flex-row gap-16 items-start group cursor-pointer hover:border-accent/50 transition-all"
                    >
                        <div className="w-full md:w-2/3">
                            <div className="flex flex-wrap items-center gap-6 mb-8">
                                <h3 className="text-5xl md:text-6xl font-bold group-hover:text-accent transition-colors leading-tight">
                                    {project.title}
                                </h3>
                                {project.tags.map(tag => (
                                    <span
                                        key={tag.text}
                                        className={`mono-tag text-sm px-4 py-2 ${tag.type === 'blue' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                                            tag.type === 'green' ? 'bg-green-50 text-green-600 border-green-200' : ''}`}
                                    >
                                        {tag.text}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                                <div>
                                    <div className="text-sm font-bold font-mono text-gray-400 uppercase mb-3">The Challenge</div>
                                    <p className="text-lg md:text-xl text-secondary leading-relaxed line-clamp-3">
                                        {project.challenge}
                                    </p>
                                </div>
                                <div>
                                    <div className="text-sm font-bold font-mono text-gray-400 uppercase mb-3">The Solution</div>
                                    <p className="text-lg md:text-xl text-secondary leading-relaxed line-clamp-3">
                                        {project.solution}
                                    </p>
                                </div>
                            </div>
                            <div className="text-accent font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                VIEW DETAILS <ExternalLink className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 pt-2 pointer-events-none">
                            {project.terminal ? (
                                <div className="bg-black rounded p-6 font-mono text-xs text-gray-400 overflow-hidden border border-gray-800 shadow-inner">
                                    <div className="text-green-500 mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                                        <Terminal className="w-4 h-4" />
                                        {project.terminal.command}
                                    </div>
                                    <div className="pl-2 border-l border-gray-700 space-y-2">
                                        {project.terminal.output.map((line, i) => (
                                            <div key={i} className={line.color}>{line.text}</div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-gray-50 rounded border border-border flex items-center justify-center min-h-[200px] border-accent/40 transition-colors">
                                    <div className="text-center">
                                        <LayoutDashboard className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                        <span className="text-xs text-gray-400 font-mono">System Architecture</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl flex flex-col relative"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-12 md:p-16 border-b border-gray-100">
                                <div className="flex flex-wrap items-center gap-6 mb-8">
                                    <h2 className="text-5xl md:text-7xl font-bold text-black leading-tight">
                                        {selectedProject.title}
                                    </h2>
                                    {selectedProject.tags.map((tag: any) => (
                                        <span
                                            key={tag.text}
                                            className={`mono-tag text-base px-4 py-2 ${tag.type === 'blue' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                                                tag.type === 'green' ? 'bg-green-50 text-green-600 border-green-200' : ''}`}
                                        >
                                            {tag.text}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-4xl">
                                    {selectedProject.fullDescription || selectedProject.solution}
                                </p>
                            </div>

                            <div className="p-12 md:p-16 bg-gray-50 flex-grow">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                    <div className="space-y-8">
                                        <div className="space-y-6">
                                            {selectedProject.bullets && selectedProject.bullets.map((bullet: any) => (
                                                <div key={bullet.label}>
                                                    <h3 className="text-xs font-bold font-mono text-gray-400 uppercase mb-2 tracking-wider">
                                                        // {bullet.label}
                                                    </h3>
                                                    <p className="text-lg text-secondary leading-relaxed">
                                                        {bullet.text}
                                                    </p>
                                                </div>
                                            ))}
                                            {!selectedProject.bullets && (
                                                <>
                                                    <div>
                                                        <h3 className="section-label text-sm mb-6 text-black">// PROBLEM STATEMENT</h3>
                                                        <p className="text-lg text-secondary leading-relaxed">
                                                            {selectedProject.challenge}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h3 className="section-label text-sm mb-6 text-black">// TECHNICAL SOLUTION</h3>
                                                        <p className="text-lg text-secondary leading-relaxed">
                                                            {selectedProject.solution}
                                                        </p>
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-6 pt-8 border-t border-gray-200">
                                            {selectedProject.links.map((link: any) => (
                                                <a
                                                    key={link.label}
                                                    href={link.url || '#'}
                                                    target={link.url ? "_blank" : "_self"}
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-3 text-sm font-bold border-2 px-6 py-3 transition-colors ${link.primary
                                                        ? 'border-black bg-black text-white hover:bg-gray-800'
                                                        : 'border-border bg-white hover:bg-gray-100 text-black'
                                                        }`}
                                                >
                                                    <link.icon className="w-4 h-4" /> {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        {selectedProject.terminal ? (
                                            <div className="bg-black rounded-lg p-8 font-mono text-sm text-gray-400 overflow-hidden border border-gray-800 shadow-2xl">
                                                <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-4">
                                                    <div className="flex gap-2">
                                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                    </div>
                                                    <div className="ml-4 text-xs text-gray-500">bash — 80x24</div>
                                                </div>
                                                <div className="text-green-500 mb-4 flex items-center gap-2">
                                                    <span className="text-blue-500">➜</span>
                                                    <span className="text-gray-300">~</span>
                                                    {selectedProject.terminal.command}
                                                </div>
                                                <div className="pl-2 space-y-2 font-medium">
                                                    {selectedProject.terminal.output.map((line: any, i: number) => (
                                                        <div key={i} className={line.color}>{line.text}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm flex items-center justify-center min-h-[300px]">
                                                <div className="text-center">
                                                    <LayoutDashboard className="w-16 h-16 text-gray-200 mx-auto mb-6" />
                                                    <span className="text-sm text-gray-400 font-mono">System Architecture</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
