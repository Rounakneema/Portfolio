'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, FileCode, LayoutDashboard } from 'lucide-react';
import { type Project } from '@/lib/projects';

const iconMap: Record<string, React.ElementType> = { Github, FileCode, LayoutDashboard };

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
        <div>
            {/* Back link */}
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-xs font-bold font-mono text-gray-400 hover:text-black transition-colors"
                >
                    <ArrowLeft className="w-3 h-3" /> PROJECTS HUB
                </Link>
            </motion.div>

            {/* Hero — creative split layout */}
            <motion.header
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">
                    {/* Left: title block */}
                    <div>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className={`text-[9px] font-bold font-mono tracking-widest border px-2.5 py-0.5 rounded-full ${status.class}`}>
                                {status.label}
                            </span>
                            <span className="text-[9px] font-mono text-gray-400 border border-gray-200 px-2.5 py-0.5 rounded-full">
                                {project.category}
                            </span>
                            <a
                                href={`https://${project.subdomain}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[9px] font-mono text-blue-500 hover:text-blue-700 transition-colors"
                                onClick={e => e.stopPropagation()}
                            >
                                <ExternalLink className="w-2.5 h-2.5" />{project.subdomain}
                            </a>
                        </div>

                        {/* Giant title + small subtitle inline */}
                        <div className="flex flex-wrap items-baseline gap-4">
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-none">
                                {project.title}
                            </h1>
                            <span className="text-base md:text-lg text-gray-400 font-medium leading-tight max-w-xs">
                                {project.subtitle}
                            </span>
                        </div>
                    </div>

                    {/* Right: tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 lg:pt-10 lg:justify-end">
                        {project.tags.map(tag => (
                            <span key={tag.text} className={`text-[9px] font-bold font-mono px-2.5 py-1 rounded border tracking-wider ${tagColors[tag.type]}`}>
                                {tag.text}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.header>

            {/* Main content — 3-col grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

                {/* Main column (2/3 width) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Challenge / Solution side by side */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        <div className="border border-gray-200 rounded-lg p-5">
                            <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-2">// Problem</div>
                            <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
                        </div>
                        <div className="border-2 border-black rounded-lg p-5 bg-black text-white">
                            <div className="text-[9px] font-mono text-green-400 uppercase tracking-widest mb-2">// Solution</div>
                            <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                        </div>
                    </motion.div>

                    {/* Overview */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-2">// Overview</div>
                        <p className="text-gray-600 text-sm leading-relaxed">{project.fullDescription}</p>
                    </motion.div>

                    {/* Technical Breakdown */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-4">// Breakdown</div>
                        <div className="space-y-3">
                            {project.bullets.map((bullet, i) => (
                                <div key={bullet.label} className="flex gap-4 items-start group">
                                    <div className="text-sm font-black text-gray-100 font-mono shrink-0 w-6 select-none pt-0.5">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <div className="border-l-2 border-gray-100 group-hover:border-black transition-colors pl-4 flex-grow">
                                        <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-0.5">
                                            {bullet.label}
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{bullet.text}</p>
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
                            className="flex flex-wrap gap-3"
                        >
                            {project.links.map(link => {
                                const Icon = iconMap[link.icon] || FileCode;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold border-2 transition-all rounded ${
                                            link.primary
                                                ? 'border-black bg-black text-white hover:bg-gray-800'
                                                : 'border-gray-300 text-black hover:border-black'
                                        }`}
                                    >
                                        <Icon className="w-3.5 h-3.5" /> {link.label}
                                        <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                                    </a>
                                );
                            })}
                        </motion.div>
                    )}
                </div>

                {/* Sidebar (1/3 width) */}
                <div className="space-y-4">

                    {/* At a Glance metrics */}
                    {project.metrics && (
                        <motion.div
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 }}
                            className="border border-gray-200 rounded-lg p-5"
                        >
                            <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-3">// At a Glance</div>
                            <div className="grid grid-cols-2 gap-3">
                                {project.metrics.map(m => (
                                    <div key={m.label} className="bg-gray-50 rounded p-3">
                                        <div className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">{m.label}</div>
                                        <div className="text-sm font-black text-black font-mono mt-0.5">{m.value}</div>
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
                        className="border border-gray-200 rounded-lg p-5"
                    >
                        <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-3">// Tech Stack</div>
                        <div className="flex flex-wrap gap-1.5">
                            {project.tech.map(t => (
                                <span key={t} className="text-[10px] font-mono bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded">
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
                            className="bg-zinc-950 rounded-lg p-5 font-mono text-xs border border-zinc-800 shadow-xl"
                        >
                            <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-zinc-800">
                                <div className="flex gap-1">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                </div>
                                <span className="text-zinc-500 text-[9px] ml-1">bash</span>
                            </div>
                            <div className="flex items-start gap-1.5 text-white mb-2">
                                <span className="text-blue-500">➜</span>
                                <span className="text-zinc-400">~</span>
                                <span className="break-all">{project.terminal.command}</span>
                            </div>
                            <div className="space-y-1 pl-2 border-l border-zinc-700/50">
                                {project.terminal.output.map((line, i) => (
                                    <div key={i} className={`${line.color} text-[10px]`}>{line.text}</div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
