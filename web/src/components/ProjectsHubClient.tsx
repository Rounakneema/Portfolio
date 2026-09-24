'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Github, FileCode, LayoutDashboard, ExternalLink } from 'lucide-react';
import { projects, type Project } from '@/lib/projects';

const iconMap: Record<string, React.ElementType> = {
    Github,
    FileCode,
    LayoutDashboard,
};

const statusConfig = {
    active: { label: 'ACTIVE', class: 'bg-green-50 text-green-700 border-green-200' },
    wip: { label: 'IN PROGRESS', class: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
    archived: { label: 'ARCHIVED', class: 'bg-gray-100 text-gray-500 border-gray-200' },
};

const tagColors: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    green: 'bg-green-50 text-green-700 border-green-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200',
    red: 'bg-red-50 text-red-700 border-red-200',
    yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    default: 'bg-gray-100 text-gray-600 border-gray-200',
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const status = statusConfig[project.status];
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/projects/${project.slug}`} className="group block h-full">
                <div className="h-full border border-gray-200 rounded-xl p-8 bg-white hover:border-black hover:shadow-2xl transition-all duration-300 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <span className={`inline-block text-[10px] font-bold font-mono tracking-widest border px-3 py-1 rounded-full mb-3 ${status.class}`}>
                                {status.label}
                            </span>
                            <h3 className="text-3xl font-black text-black group-hover:text-blue-600 transition-colors leading-tight">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-500 font-mono mt-1">{project.subtitle}</p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                            <span key={tag.text} className={`text-[10px] font-bold font-mono px-3 py-1 rounded border tracking-wider ${tagColors[tag.type]}`}>
                                {tag.text}
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                        {project.fullDescription}
                    </p>

                    {/* Metrics */}
                    {project.metrics && (
                        <div className="grid grid-cols-2 gap-3 mb-6 pt-6 border-t border-gray-100">
                            {project.metrics.map(m => (
                                <div key={m.label}>
                                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{m.label}</div>
                                    <div className="text-sm font-black text-black font-mono">{m.value}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Subdomain */}
                    <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400 group-hover:text-blue-500 transition-colors mt-auto pt-4 border-t border-gray-100">
                        <ExternalLink className="w-3 h-3" />
                        {project.subdomain}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export function ProjectsHubClient() {
    return (
        <div>
            {/* Stats Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-8 mb-20 text-sm font-mono"
            >
                <div>
                    <span className="text-gray-400 uppercase tracking-wider text-[11px]">Total Projects</span>
                    <div className="text-3xl font-black text-black">{projects.length}</div>
                </div>
                <div>
                    <span className="text-gray-400 uppercase tracking-wider text-[11px]">Active</span>
                    <div className="text-3xl font-black text-green-600">{projects.filter(p => p.status === 'active').length}</div>
                </div>
                <div>
                    <span className="text-gray-400 uppercase tracking-wider text-[11px]">In Progress</span>
                    <div className="text-3xl font-black text-yellow-600">{projects.filter(p => p.status === 'wip').length}</div>
                </div>
                <div>
                    <span className="text-gray-400 uppercase tracking-wider text-[11px]">Archived</span>
                    <div className="text-3xl font-black text-gray-400">{projects.filter(p => p.status === 'archived').length}</div>
                </div>
            </motion.div>

            {/* Featured (First Project - Full Width) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <Link href={`/projects/${projects[0].slug}`} className="group block">
                    <div className="border-2 border-black rounded-xl p-10 md:p-14 bg-black text-white hover:bg-zinc-900 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-[10px] font-bold font-mono tracking-widest border border-green-500/50 bg-green-500/10 text-green-400 px-3 py-1 rounded-full">
                                        FEATURED
                                    </span>
                                    <span className={`text-[10px] font-bold font-mono tracking-widest border px-3 py-1 rounded-full ${statusConfig[projects[0].status].class}`}>
                                        {statusConfig[projects[0].status].label}
                                    </span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-black mb-4 leading-none group-hover:text-blue-400 transition-colors">
                                    {projects[0].title}
                                </h2>
                                <p className="text-zinc-400 font-mono text-sm mb-6">{projects[0].subtitle}</p>
                                <p className="text-zinc-300 leading-relaxed mb-8 max-w-lg">
                                    {projects[0].fullDescription}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {projects[0].tags.map(tag => (
                                        <span key={tag.text} className="text-[10px] font-bold font-mono px-3 py-1 rounded border border-zinc-600 text-zinc-400 tracking-wider">
                                            {tag.text}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 font-bold text-blue-400 group-hover:gap-5 transition-all">
                                    VIEW PROJECT <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Terminal */}
                            {projects[0].terminal && (
                                <div className="bg-zinc-950 rounded-lg p-6 font-mono text-xs border border-zinc-800 shadow-2xl">
                                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        <span className="text-zinc-500 text-[10px] ml-2">bash — 80x24</span>
                                    </div>
                                    <div className="text-green-400 mb-3 flex items-start gap-2">
                                        <span className="text-blue-500">➜</span>
                                        <span className="text-zinc-500">~</span>
                                        <span className="text-white">{projects[0].terminal.command}</span>
                                    </div>
                                    <div className="space-y-1.5 pl-2">
                                        {projects[0].terminal.output.map((line, i) => (
                                            <div key={i} className={`${line.color} leading-relaxed`}>{line.text}</div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Link>
            </motion.div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.slice(1).map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}
