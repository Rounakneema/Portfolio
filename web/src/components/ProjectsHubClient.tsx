'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Github, FileCode, LayoutDashboard, ExternalLink } from 'lucide-react';
import { projects, type Project } from '@/lib/projects';

const iconMap: Record<string, React.ElementType> = { Github, FileCode, LayoutDashboard };

const statusConfig: Record<string, { label: string; class: string; dot: string }> = {
    active:   { label: 'ACTIVE',       class: 'bg-green-50 text-green-700 border-green-200',   dot: 'bg-green-500' },
    wip:      { label: 'IN PROGRESS',  class: 'bg-yellow-50 text-yellow-700 border-yellow-200', dot: 'bg-yellow-500' },
    archived: { label: 'ARCHIVED',     class: 'bg-gray-100 text-gray-500 border-gray-200',      dot: 'bg-gray-400' },
    concept:  { label: 'CONCEPT',      class: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-500' },
};

const tagColors: Record<string, string> = {
    blue:    'bg-blue-50 text-blue-700 border-blue-200',
    green:   'bg-green-50 text-green-700 border-green-200',
    purple:  'bg-purple-50 text-purple-700 border-purple-200',
    red:     'bg-red-50 text-red-700 border-red-200',
    yellow:  'bg-yellow-50 text-yellow-700 border-yellow-200',
    default: 'bg-gray-100 text-gray-600 border-gray-200',
};

const sectionConfig = {
    active:   { title: 'ACTIVE',      desc: 'Currently maintained & deployed', border: 'border-green-200',  bg: 'bg-green-500' },
    wip:      { title: 'IN PROGRESS', desc: 'Under active development',         border: 'border-yellow-200', bg: 'bg-yellow-500' },
    concept:  { title: 'CONCEPTS',    desc: 'Designed, exploring feasibility',  border: 'border-purple-200', bg: 'bg-purple-500' },
    archived: { title: 'ARCHIVED',    desc: 'Completed & reference projects',   border: 'border-gray-200',   bg: 'bg-gray-400' },
};

// ── Hero card (active featured) ──────────────────────────────────────
function HeroCard({ project }: { project: Project }) {
    return (
        <Link href={`/projects/${project.slug}`} className="group block col-span-2">
            <div className="h-full border-2 border-black rounded-xl p-8 bg-black text-white hover:bg-zinc-900 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" /></span>
                            <span className="text-[10px] font-mono text-green-400 tracking-widest uppercase">Featured · Active</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black leading-none mb-2 group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-zinc-400 font-mono text-xs mb-5">{project.subtitle}</p>
                        <p className="text-zinc-300 text-sm leading-relaxed mb-5 line-clamp-3">{project.fullDescription}</p>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                            {project.tags.map(t => (
                                <span key={t.text} className="text-[9px] font-bold font-mono px-2 py-0.5 rounded border border-zinc-600 text-zinc-400 tracking-wider">{t.text}</span>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-blue-400 group-hover:gap-4 transition-all">
                            VIEW PROJECT <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                    </div>
                    {project.terminal && (
                        <div className="bg-zinc-950 rounded-lg p-5 font-mono text-xs border border-zinc-800">
                            <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-zinc-800">
                                <div className="flex gap-1"><div className="w-2.5 h-2.5 rounded-full bg-red-500" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500" /><div className="w-2.5 h-2.5 rounded-full bg-green-500" /></div>
                                <span className="text-zinc-500 text-[9px] ml-1">bash</span>
                            </div>
                            <div className="flex gap-1.5 text-white mb-2">
                                <span className="text-blue-500">➜</span><span className="text-zinc-500">~</span>
                                <span className="break-all">{project.terminal.command}</span>
                            </div>
                            <div className="space-y-1 pl-2 border-l border-zinc-700/50">
                                {project.terminal.output.map((line, i) => (
                                    <div key={i} className={`${line.color} text-[10px]`}>{line.text}</div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}

// ── Standard card ────────────────────────────────────────────────────
function ProjectCard({ project, index, size = 'md' }: { project: Project; index: number; size?: 'sm' | 'md' | 'lg' }) {
    const status = statusConfig[project.status];
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="h-full"
        >
            <Link href={`/projects/${project.slug}`} className="group block h-full">
                <div className={`h-full border border-gray-200 rounded-xl bg-white hover:border-black hover:shadow-lg transition-all duration-300 flex flex-col ${size === 'lg' ? 'p-7' : 'p-5'}`}>
                    {/* Title row */}
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0">
                            <h3 className={`font-black text-black group-hover:text-blue-600 transition-colors leading-tight ${size === 'lg' ? 'text-2xl' : 'text-xl'}`}>
                                {project.title}
                            </h3>
                            <p className="text-xs text-gray-400 font-mono mt-0.5 line-clamp-1">{project.subtitle}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map(tag => (
                            <span key={tag.text} className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded border tracking-wider ${tagColors[tag.type]}`}>
                                {tag.text}
                            </span>
                        ))}
                    </div>

                    {/* Challenge (short) */}
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-grow mb-4">
                        {project.challenge}
                    </p>

                    {/* Metrics row */}
                    {project.metrics && (
                        <div className={`grid gap-2 pt-3 border-t border-gray-100 mb-3 ${project.metrics.length >= 4 ? 'grid-cols-4' : 'grid-cols-2'}`}>
                            {project.metrics.slice(0, 4).map(m => (
                                <div key={m.label}>
                                    <div className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">{m.label}</div>
                                    <div className="text-xs font-black text-black font-mono">{m.value}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Subdomain footer */}
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-gray-300 group-hover:text-blue-400 transition-colors mt-auto pt-3 border-t border-gray-100">
                        <ExternalLink className="w-2.5 h-2.5" />
                        {project.subdomain}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

// ── Section label ────────────────────────────────────────────────────
function SectionLabel({ status, count }: { status: string; count: number }) {
    const cfg = sectionConfig[status as keyof typeof sectionConfig];
    return (
        <div className="flex items-center gap-3 mb-4">
            <div className={`w-2 h-2 rounded-full ${cfg.bg}`} />
            <span className="text-xs font-black font-mono text-black tracking-widest">{cfg.title}</span>
            <span className="text-[10px] font-mono text-gray-400">{cfg.desc}</span>
            <span className="ml-auto text-[10px] font-mono text-gray-300">{count} project{count !== 1 ? 's' : ''}</span>
        </div>
    );
}

// ── Concept card (muted style) ───────────────────────────────────────
function ConceptCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.07 }}
        >
            <Link href={`/projects/${project.slug}`} className="group block h-full">
                <div className="h-full border border-dashed border-purple-200 rounded-xl p-5 bg-purple-50/30 hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h3 className="text-xl font-black text-gray-700 group-hover:text-purple-700 transition-colors leading-tight">{project.title}</h3>
                            <p className="text-xs text-gray-400 font-mono mt-0.5">{project.subtitle}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-purple-200 group-hover:text-purple-500 transition-all shrink-0 ml-2" />
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map(tag => (
                            <span key={tag.text} className="text-[9px] font-bold font-mono px-2 py-0.5 rounded border border-purple-200 text-purple-500 bg-purple-50 tracking-wider">
                                {tag.text}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-grow mb-4">{project.challenge}</p>
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-purple-300 group-hover:text-purple-500 transition-colors mt-auto pt-3 border-t border-purple-100">
                        <ExternalLink className="w-2.5 h-2.5" />{project.subdomain}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

// ── Archived horizontal strip ────────────────────────────────────────
function ArchivedCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
        >
            <Link href={`/projects/${project.slug}`} className="group block">
                <div className="border border-gray-100 rounded-lg px-6 py-4 bg-gray-50/50 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 flex items-center gap-6">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-base font-black text-gray-600 group-hover:text-black transition-colors">{project.title}</h3>
                            <span className="text-[9px] font-mono text-gray-400 hidden sm:block">{project.subtitle}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{project.challenge}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 shrink-0 hidden md:flex">
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag.text} className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded border tracking-wider ${tagColors[tag.type]}`}>{tag.text}</span>
                        ))}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-black shrink-0 transition-all" />
                </div>
            </Link>
        </motion.div>
    );
}

// ── Main export ──────────────────────────────────────────────────────
export function ProjectsHubClient() {
    const active   = projects.filter(p => p.status === 'active');
    const wip      = projects.filter(p => p.status === 'wip');
    const concepts = projects.filter(p => p.status === 'concept');
    const archived = projects.filter(p => p.status === 'archived');

    return (
        <div className="space-y-14">

            {/* ── Stats bar ─────────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="flex flex-wrap gap-8 pb-6 border-b border-gray-100"
            >
                {[
                    { label: 'Total',       value: projects.length, color: 'text-black' },
                    { label: 'Active',      value: active.length,   color: 'text-green-600' },
                    { label: 'In Progress', value: wip.length,      color: 'text-yellow-600' },
                    { label: 'Concepts',    value: concepts.length, color: 'text-purple-600' },
                    { label: 'Archived',    value: archived.length, color: 'text-gray-400' },
                ].map(s => (
                    <div key={s.label} className="font-mono">
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider">{s.label}</div>
                        <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                    </div>
                ))}
            </motion.div>

            {/* ── ACTIVE ────────────────────────────────────────────────── */}
            {active.length > 0 && (
                <section>
                    <SectionLabel status="active" count={active.length} />
                    {/* Hero (first active) + 2 side cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <HeroCard project={active[0]} />
                        <div className="flex flex-col gap-4">
                            {active.slice(1).map((p, i) => (
                                <ProjectCard key={p.slug} project={p} index={i} size="md" />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── IN PROGRESS ───────────────────────────────────────────── */}
            {wip.length > 0 && (
                <section>
                    <SectionLabel status="wip" count={wip.length} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {wip.map((p, i) => (
                            <ProjectCard key={p.slug} project={p} index={i} size="lg" />
                        ))}
                    </div>
                </section>
            )}

            {/* ── CONCEPTS ──────────────────────────────────────────────── */}
            {concepts.length > 0 && (
                <section>
                    <SectionLabel status="concept" count={concepts.length} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {concepts.map((p, i) => (
                            <ConceptCard key={p.slug} project={p} index={i} />
                        ))}
                    </div>
                </section>
            )}

            {/* ── ARCHIVED ──────────────────────────────────────────────── */}
            {archived.length > 0 && (
                <section>
                    <SectionLabel status="archived" count={archived.length} />
                    <div className="flex flex-col gap-2">
                        {archived.map((p, i) => (
                            <ArchivedCard key={p.slug} project={p} index={i} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
