'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, FileCode, LayoutDashboard } from 'lucide-react';
import { type Project } from '@/lib/projects';

const iconMap: Record<string, React.ElementType> = {
    Github,
    FileCode,
    LayoutDashboard,
};

const statusConfig: Record<string, { label: string, class: string }> = {
    active: { label: 'ACTIVE', class: 'bg-green-50 text-green-700 border-green-200' },
    wip: { label: 'IN PROGRESS', class: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
    archived: { label: 'ARCHIVED', class: 'bg-gray-100 text-gray-500 border-gray-200' },
    concept: { label: 'CONCEPT', class: 'bg-purple-50 text-purple-700 border-purple-200' },
};

const tagColors: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    green: 'bg-green-50 text-green-700 border-green-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200',
    red: 'bg-red-50 text-red-700 border-red-200',
    yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    default: 'bg-gray-100 text-gray-600 border-gray-200',
};

export function ProjectDetailClient({ project }: { project: Project }) {
    const status = statusConfig[project.status];

    return (
        <div>
            {/* Back Navigation */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-16">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-bold font-mono text-gray-500 hover:text-black transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> BACK TO PROJECTS HUB
                </Link>
            </motion.div>

            {/* Hero */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20"
            >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className={`text-[10px] font-bold font-mono tracking-widest border px-3 py-1 rounded-full ${status.class}`}>
                        {status.label}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 border border-gray-200 px-3 py-1 rounded-full">
                        {project.category}
                    </span>
                </div>

                <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-black leading-none mb-4">
                    {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 font-medium mb-8">{project.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                        <span key={tag.text} className={`text-xs font-bold font-mono px-4 py-1.5 rounded border tracking-wider ${tagColors[tag.type]}`}>
                            {tag.text}
                        </span>
                    ))}
                </div>

                {/* Subdomain Link */}
                <a
                    href={`https://${project.subdomain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-sm text-blue-500 hover:text-blue-700 transition-colors border-b border-blue-200 pb-0.5"
                >
                    <ExternalLink className="w-4 h-4" />
                    {project.subdomain}
                </a>
            </motion.header>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">

                {/* Left: Description + Breakdown */}
                <div className="lg:col-span-2 space-y-16">

                    {/* Full Description */}
                    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">// Overview</div>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                            {project.fullDescription}
                        </p>
                    </motion.section>

                    {/* Challenge / Solution */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="border border-gray-200 rounded-xl p-8">
                            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">// The Challenge</div>
                            <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                        </div>
                        <div className="border-2 border-black rounded-xl p-8 bg-black text-white">
                            <div className="text-xs font-mono text-green-400 uppercase tracking-widest mb-4">// The Solution</div>
                            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                        </div>
                    </motion.section>

                    {/* Key Points */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-8">// Technical Breakdown</div>
                        <div className="space-y-6">
                            {project.bullets.map((bullet, i) => (
                                <div key={bullet.label} className="flex gap-6 items-start group">
                                    <div className="text-2xl font-black text-gray-100 font-mono shrink-0 w-8 select-none">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <div className="border-l-2 border-gray-200 group-hover:border-black transition-colors pl-6 flex-grow">
                                        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                                            {bullet.label}
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{bullet.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Links */}
                    {project.links.length > 0 && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">// Resources</div>
                            <div className="flex flex-wrap gap-4">
                                {project.links.map(link => {
                                    const Icon = iconMap[link.icon] || FileCode;
                                    return (
                                        <a
                                            key={link.label}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-3 px-6 py-3 text-sm font-bold border-2 transition-all rounded-sm ${
                                                link.primary
                                                    ? 'border-black bg-black text-white hover:bg-gray-800'
                                                    : 'border-gray-300 text-black hover:border-black'
                                            }`}
                                        >
                                            <Icon className="w-4 h-4" /> {link.label}
                                            <ArrowUpRight className="w-4 h-4 opacity-50" />
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.section>
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="space-y-8">

                    {/* Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="border border-gray-200 rounded-xl p-6"
                    >
                        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">// Tech Stack</div>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="text-xs font-mono bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Metrics */}
                    {project.metrics && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="border border-gray-200 rounded-xl p-6"
                        >
                            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">// At a Glance</div>
                            <div className="grid grid-cols-2 gap-4">
                                {project.metrics.map(m => (
                                    <div key={m.label} className="bg-gray-50 rounded-lg p-4">
                                        <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">{m.label}</div>
                                        <div className="text-lg font-black text-black font-mono">{m.value}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Terminal */}
                    {project.terminal && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-zinc-950 rounded-xl p-6 font-mono text-xs border border-zinc-800 shadow-2xl"
                        >
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-zinc-500 text-[10px] ml-1">bash</span>
                            </div>
                            <div className="flex items-start gap-2 text-white mb-3">
                                <span className="text-blue-500">➜</span>
                                <span className="text-zinc-400">~</span>
                                <span className="break-all">{project.terminal.command}</span>
                            </div>
                            <div className="space-y-1.5 pl-2 border-l border-zinc-700">
                                {project.terminal.output.map((line, i) => (
                                    <div key={i} className={line.color}>{line.text}</div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
