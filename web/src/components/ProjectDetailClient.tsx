'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ArrowRight, ExternalLink, Github, FileCode, LayoutDashboard } from 'lucide-react';
import { type Project } from '@/lib/projects';

const iconMap: Record<string, React.ElementType> = { Github, FileCode, LayoutDashboard };

const serviceMap: Record<string, {
    title: string;
    url: string;
    badge: string;
    description: string;
    cta: string;
}> = {
    revealr: {
        title: 'High-Throughput Go & Security Tooling',
        url: '/freelance/software-development',
        badge: 'ENGINEERING SERVICE',
        description: 'Need custom Go networking systems, raw socket concurrency, or specialized security tooling built for your team?',
        cta: 'Hire for Go & Systems',
    },
    metromind: {
        title: 'Enterprise OCR & Vector RAG Pipelines',
        url: '/freelance/ai-development',
        badge: 'AI ENGINEERING',
        description: 'Need asynchronous document OCR, semantic chunking pipelines, or Milvus vector search integrated into production?',
        cta: 'Hire for AI & Vector RAG',
    },
    osa: {
        title: 'Offline Security & Threat Anomaly Detection',
        url: '/freelance/cybersecurity',
        badge: 'CYBERSECURITY AUDIT',
        description: 'Need air-gapped security tools, offline log behavioral baselining, or authorized penetration testing?',
        cta: 'Hire for Security Engineering',
    },
    sortmail: {
        title: 'Semantic Document Intelligence & Automation',
        url: '/freelance/ai-development',
        badge: 'AI AUTOMATION',
        description: 'Need automated deadline extraction, semantic content classification, or inbound threat filtering pipelines?',
        cta: 'Hire for AI Automation',
    },
    pipelineforge: {
        title: 'Google Distroless Migrations & DevSecOps',
        url: '/freelance/devsecops',
        badge: 'DEVSECOPS SERVICE',
        description: 'Reduce container sizes by 90%+, eliminate CVEs with Distroless packaging, and automate Trivy CI/CD security gates.',
        cta: 'Hire for DevSecOps & Cloud',
    },
    devcontext: {
        title: 'AST Codebase Grounding & Code Intelligence',
        url: '/freelance/ai-development',
        badge: 'AI INTELLIGENCE',
        description: 'Build grounded LLM tools that inspect codebases with zero hallucination using abstract syntax tree verification.',
        cta: 'Hire for Code Intelligence',
    },
    axiomos: {
        title: 'Local-First Private LLM Architectures',
        url: '/freelance/ai-development',
        badge: 'PRIVATE AI',
        description: 'Deploy private LLM runtimes with Ollama, client-side telemetry, and offline-first autonomous agents.',
        cta: 'Hire for Private AI Systems',
    },
    'axiom-os': {
        title: 'Local-First Private LLM Architectures',
        url: '/freelance/ai-development',
        badge: 'PRIVATE AI',
        description: 'Deploy private LLM runtimes with Ollama, client-side telemetry, and offline-first autonomous agents.',
        cta: 'Hire for Private AI Systems',
    },
    dizzy: {
        title: 'Voice-to-Canvas & Multimodal AI Tools',
        url: '/freelance/ai-development',
        badge: 'MULTIMODAL AI',
        description: 'Engineer multimodal voice-to-state interfaces, generative canvas workflows, and Figma MCP tool connections.',
        cta: 'Hire for Multimodal AI',
    },
};

const defaultService = {
    title: 'Custom Software Development & Security',
    url: '/freelance',
    badge: 'FREELANCE SERVICE',
    description: 'Hire Rounak Neema for custom backend engineering, cybersecurity audits, and production AI pipelines.',
    cta: 'Explore Freelance Services',
};

const statusConfig: Record<string, { label: string; class: string }> = {
    active:   { label: 'ACTIVE',      class: 'bg-green-50 text-green-700 border-green-200' },
    wip:      { label: 'IN PROGRESS', class: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
    archived: { label: 'ARCHIVED',    class: 'bg-gray-100 text-gray-500 border-gray-200' },
    concept:  { label: 'CONCEPT',     class: 'bg-purple-50 text-purple-700 border-purple-200' },
};

const tagColors: Record<string, string> = {
    blue:    'bg-blue-50 text-blue-700 border-blue-200',
    green:   'bg-green-50 text-green-700 border-green-200',
    purple:  'bg-purple-50 text-purple-700 border-purple-200',
    red:     'bg-red-50 text-red-700 border-red-200',
    yellow:  'bg-yellow-50 text-yellow-700 border-yellow-200',
    default: 'bg-gray-100 text-gray-600 border-gray-200',
};

export function ProjectDetailClient({ project }: { project: Project }) {
    const status = statusConfig[project.status];

    return (
        <div className="max-w-7xl mx-auto">
            {/* Back link */}
            <div className="animate-fade-in opacity-0-init mb-12">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-bold font-mono text-gray-400 hover:text-black transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> PROJECTS HUB
                </Link>
            </div>

            {/* Hero â€” creative split layout */}
            <header className="animate-fade-in-up opacity-0-init delay-100 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
                    {/* Left: title block */}
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className={`text-[10px] font-bold font-mono tracking-widest border px-3 py-1 rounded-full ${status.class}`}>
                                {status.label}
                            </span>
                            <span className="text-[10px] font-mono text-gray-500 border border-gray-200 px-3 py-1 rounded-full">
                                {project.category}
                            </span>
                        </div>

                        {/* Giant title + subtitle inline */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-wrap items-baseline gap-5">
                                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-none hover:text-blue-600 transition-colors">
                                    <a href={`https://${project.subdomain}`} target="_blank" rel="noopener noreferrer">
                                        {project.title}
                                    </a>
                                </h1>
                                <span className="text-lg md:text-xl text-gray-500 font-medium leading-tight max-w-sm">
                                    {project.subtitle}
                                </span>
                            </div>
                            {project.subdomain && (
                                <a
                                    href={`https://${project.subdomain}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 text-sm md:text-base transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black w-fit uppercase tracking-widest hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[6px] active:shadow-none"
                                    onClick={e => e.stopPropagation()}
                                >
                                    Launch Project Site
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right: tags */}
                    <div className="flex flex-wrap gap-2 pt-2 lg:pt-12 lg:justify-end">
                        {project.tags.map(tag => (
                            <span key={tag.text} className={`text-[10px] font-bold font-mono px-3 py-1 rounded border tracking-wider ${tagColors[tag.type]}`}>
                                {tag.text}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            {/* Main content â€” 3-col grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">

                {/* Main column (2/3 width) */}
                <div className="lg:col-span-2 space-y-10">

                    {/* Challenge / Solution side by side */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <div className="border border-gray-200 rounded-xl p-8 bg-white/50 backdrop-blur-sm shadow-sm">
                            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">// Problem</div>
                            <p className="text-gray-700 text-base leading-loose">{project.challenge}</p>
                        </div>
                        <div className="border border-black rounded-xl p-8 bg-black text-white shadow-xl">
                            <div className="text-xs font-mono text-green-400 uppercase tracking-widest mb-4">// Solution</div>
                            <p className="text-gray-300 text-base leading-loose">{project.solution}</p>
                        </div>
                    </motion.div>

                    {/* Overview */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="py-4"
                    >
                        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">// Overview</div>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-prose">{project.fullDescription}</p>
                    </motion.div>

                    {/* Technical Breakdown */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-8">// Breakdown</div>
                        <div className="space-y-6">
                            {project.bullets.map((bullet, i) => (
                                <div key={bullet.label} className="flex gap-6 items-start group">
                                    <div className="text-lg font-black text-gray-200 font-mono shrink-0 w-8 select-none pt-0.5">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <div className="border-l-2 border-gray-200 group-hover:border-black transition-colors pl-6 flex-grow">
                                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5">
                                            {bullet.label}
                                        </div>
                                        <p className="text-gray-700 text-base leading-relaxed max-w-prose">{bullet.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links */}
                    {project.links.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-4 pt-6 border-t border-gray-100"
                        >
                            {project.links.map(link => {
                                const Icon = iconMap[link.icon] || FileCode;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold border-2 transition-all rounded-lg ${
                                            link.primary
                                                ? 'border-black bg-black text-white hover:bg-gray-800 hover:-translate-y-0.5'
                                                : 'border-gray-300 text-black hover:border-black hover:-translate-y-0.5'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" /> {link.label}
                                        <ArrowUpRight className="w-4 h-4 opacity-50" />
                                    </a>
                                );
                            })}
                        </motion.div>
                    )}

                    {/* Deep Dives (SEO Internal Links) */}
                    {project.slug && ['revealr', 'metromind', 'axiomos', 'axiom-os', 'devcontext', 'dizzy', 'osa', 'pipelineforge', 'sortmail'].includes(project.slug) && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4 pt-6 border-t border-gray-100"
                        >
                            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">// Deep Dives & Documentation</div>
                            <div className="flex flex-wrap gap-3">
                                {(() => {
                                    const projectPaths: Record<string, string[]> = {
                                        'revealr': ['architecture', 'benchmarks', 'changelog', 'docs', 'security'],
                                        'metromind': ['architecture'],
                                        'axiomos': ['architecture', 'decisions', 'docs'],
                                        'axiom-os': ['architecture', 'decisions', 'docs'],
                                        'devcontext': ['architecture', 'decisions', 'docs'],
                                        'dizzy': ['architecture', 'decisions', 'docs'],
                                        'osa': ['architecture', 'decisions', 'docs'],
                                        'pipelineforge': ['architecture', 'decisions', 'docs'],
                                        'sortmail': ['architecture', 'decisions', 'docs']
                                    };
                                    const validPaths = projectPaths[project.slug] || [];
                                    return validPaths.map(path => (
                                        <a
                                            key={path}
                                            href={`https://${project.subdomain}/${path}`}
                                            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold border border-gray-200 text-gray-600 transition-all rounded-md hover:border-black hover:text-black hover:bg-gray-50"
                                        >
                                            <FileCode className="w-3.5 h-3.5 opacity-70" />
                                            {path.charAt(0).toUpperCase() + path.slice(1)}
                                        </a>
                                    ));
                                })()}
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Sidebar (1/3 width) */}
                <div className="space-y-6">

                    {/* Related Freelance Service Card */}
                    {(() => {
                        const service = serviceMap[project.slug] || defaultService;
                        return (
                            <motion.div
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="border-2 border-black rounded-xl p-6 bg-black text-white shadow-xl"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 font-bold">
                                        {service.badge}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-xs text-zinc-300 leading-relaxed mb-5">
                                    {service.description}
                                </p>
                                <div className="space-y-2">
                                    <Link
                                        href={service.url}
                                        className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-white text-black text-xs font-bold font-mono uppercase tracking-wider rounded hover:bg-zinc-200 transition-colors"
                                    >
                                        <span>{service.cta}</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-between w-full px-4 py-2 bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-bold font-mono uppercase tracking-wider rounded hover:text-white hover:border-zinc-500 transition-colors"
                                    >
                                        <span>Direct Project Inquiry</span>
                                        <ArrowRight className="w-3 h-3 opacity-60" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })()}

                    {/* At a Glance metrics */}
                    {project.metrics && (
                        <motion.div
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 }}
                            className="border border-gray-200 rounded-xl p-6 bg-white"
                        >
                            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-5">// At a Glance</div>
                            <div className="grid grid-cols-2 gap-4">
                                {project.metrics.map(m => (
                                    <div key={m.label} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">{m.label}</div>
                                        <div className="text-base md:text-lg font-black text-black font-mono">{m.value}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="border border-gray-200 rounded-xl p-6 bg-white"
                    >
                        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-5">// Tech Stack</div>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="text-xs font-mono bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-md">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Terminal */}
                    {project.terminal && (
                        <motion.div
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 }}
                            className="bg-zinc-950 rounded-xl p-6 font-mono text-sm border border-zinc-800 shadow-xl"
                        >
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-zinc-500 text-xs ml-1.5">bash</span>
                            </div>
                            <div className="flex items-start gap-2 text-white mb-3">
                                <span className="text-blue-500 shrink-0">âžœ</span>
                                <span className="text-zinc-400 shrink-0">~</span>
                                <span className="break-all">{project.terminal.command}</span>
                            </div>
                            <div className="space-y-1.5 pl-3 border-l-2 border-zinc-700/50">
                                {project.terminal.output.map((line, i) => (
                                    <div key={i} className={`${line.color} text-xs leading-relaxed`}>{line.text}</div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}

