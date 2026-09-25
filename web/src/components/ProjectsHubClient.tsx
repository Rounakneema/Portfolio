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
                            <span className="flex h-2 w-2"><span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" /></span>
                            <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Featured · Active</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black leading-none mb-3 group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-zinc-400 font-mono text-sm mb-5">{project.subtitle}</p>
                        <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8 line-clamp-3">{project.fullDescription}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map(t => (
                                <span key={t.text} className="text-[10px] font-bold font-mono px-2.5 py-1 rounded border border-zinc-600 text-zinc-400 tracking-wider">{t.text}</span>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:gap-3 transition-all">
                                READ SPEC <ArrowUpRight className="w-4 h-4" />
                            </div>
                            {project.subdomain && (
                                <a 
                                    href={`https://${project.subdomain}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 flex items-center gap-1.5 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] active:translate-y-[2px] active:shadow-none"
                                    onClick={e => e.stopPropagation()}
                                >
                                    LAUNCH SITE <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            )}
                        </div>
                    </div>
                    {project.terminal && (
                        <div className="bg-zinc-950 rounded-lg p-5 font-mono text-xs border border-zinc-800">
                            <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-zinc-800">
                                <div className="flex gap-1"><div className="w-2.5 h-2.5 rounded-full bg-red-500" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500" /><div className="w-2.5 h-2.5 rounded-full bg-green-500" /></div>
                                <span className="text-zinc-500 text-[10px] ml-1">bash</span>
                            </div>
                            <div className="flex gap-1.5 text-white mb-2">
                                <span className="text-blue-500">➜</span><span className="text-zinc-500">~</span>
                                <span className="break-all text-sm">{project.terminal.command}</span>
                            </div>
                            <div className="space-y-1.5 pl-2 border-l border-zinc-700/50">
                                {project.terminal.output.map((line, i) => (
                                    <div key={i} className={`${line.color} text-xs`}>{line.text}</div>
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
                <div className={`h-full border border-gray-200 rounded-xl bg-white hover:border-black hover:shadow-lg transition-all duration-300 flex flex-col ${size === 'lg' ? 'p-7' : 'p-6'}`}>
                    {/* Title row */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 min-w-0">
                            <h3 className={`font-black text-black group-hover:text-blue-600 transition-colors leading-tight ${size === 'lg' ? 'text-2xl' : 'text-xl'}`}>
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-500 font-mono mt-1 line-clamp-1">{project.subtitle}</p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2 mt-1" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                            <span key={tag.text} className={`text-[10px] font-bold font-mono px-2.5 py-1 rounded border tracking-wider ${tagColors[tag.type]}`}>
                                {tag.text}
                            </span>
                        ))}
                    </div>

                    {/* Challenge (short) */}
                    <p className="text-gray-600 text-base leading-relaxed line-clamp-3 flex-grow mb-6">
                        {project.challenge}
                    </p>

                    {/* Launch Site Button */}
                    {project.subdomain && (
                        <div className="mb-6">
                            <a
                                href={`https://${project.subdomain}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-xs tracking-widest uppercase transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:translate-y-[1px] active:shadow-none"
                                onClick={e => e.stopPropagation()}
                            >
                                LAUNCH SITE <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    )}

                    {/* Metrics row */}
                    {project.metrics && (
                        <div className={`grid gap-3 pt-4 border-t border-gray-100 mb-4 ${project.metrics.length >= 4 ? 'grid-cols-4' : 'grid-cols-2'}`}>
                            {project.metrics.slice(0, 4).map(m => (
                                <div key={m.label}>
                                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-0.5">{m.label}</div>
                                    <div className="text-sm font-black text-black font-mono">{m.value}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Subdomain footer */}
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 group-hover:text-blue-500 transition-colors mt-auto pt-4 border-t border-gray-100">
                        <ExternalLink className="w-3.5 h-3.5" />
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
        <div className="flex items-center gap-3 mb-5">
            <div className={`w-2.5 h-2.5 rounded-full ${cfg.bg}`} />
            <span className="text-sm font-black font-mono text-black tracking-widest">{cfg.title}</span>
            <span className="text-xs font-mono text-gray-500">{cfg.desc}</span>
            <span className="ml-auto text-xs font-mono text-gray-400">{count} project{count !== 1 ? 's' : ''}</span>
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
                <div className="h-full border border-dashed border-purple-200 rounded-xl p-6 bg-purple-50/30 hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-black text-gray-700 group-hover:text-purple-700 transition-colors leading-tight">{project.title}</h3>
                            <p className="text-sm text-gray-500 font-mono mt-1">{project.subtitle}</p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-purple-300 group-hover:text-purple-600 transition-all shrink-0 ml-2 mt-1" />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                            <span key={tag.text} className="text-[10px] font-bold font-mono px-2.5 py-1 rounded border border-purple-200 text-purple-600 bg-purple-100 tracking-wider">
                                {tag.text}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed line-clamp-3 flex-grow mb-6">{project.challenge}</p>
                    
                    {/* Launch Site Button */}
                    {project.subdomain && (
                        <div className="mb-2">
                            <a
                                href={`https://${project.subdomain}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg text-xs tracking-widest uppercase transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] active:translate-y-[1px] active:shadow-none"
                                onClick={e => e.stopPropagation()}
                            >
                                LAUNCH SITE <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    )}
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
                <div className="border border-gray-100 rounded-lg px-6 py-5 bg-gray-50/50 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 flex items-center gap-6">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                            <h3 className="text-lg font-black text-gray-600 group-hover:text-black transition-colors">{project.title}</h3>
                            <span className="text-[10px] font-mono text-gray-400 hidden sm:block">{project.subtitle}</span>
                        </div>
                        <p className="text-base text-gray-500 line-clamp-2 md:line-clamp-1">{project.challenge}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 shrink-0 hidden md:flex">
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag.text} className={`text-[10px] font-bold font-mono px-2.5 py-1 rounded border tracking-wider ${tagColors[tag.type]}`}>{tag.text}</span>
                        ))}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black shrink-0 transition-all" />
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
        <div className="space-y-16">

            {/* ── Stats bar ─────────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="flex flex-wrap gap-10 pb-8 border-b border-gray-100"
            >
                {[
                    { label: 'Total',       value: projects.length, color: 'text-black' },
                    { label: 'Active',      value: active.length,   color: 'text-green-600' },
                    { label: 'In Progress', value: wip.length,      color: 'text-yellow-600' },
                    { label: 'Concepts',    value: concepts.length, color: 'text-purple-600' },
                    { label: 'Archived',    value: archived.length, color: 'text-gray-400' },
                ].map(s => (
                    <div key={s.label} className="font-mono">
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{s.label}</div>
                        <div className={`text-3xl font-black ${s.color}`}>{s.value}</div>
                    </div>
                ))}
            </motion.div>

            {/* ── ACTIVE ────────────────────────────────────────────────── */}
            {active.length > 0 && (
                <section>
                    <SectionLabel status="active" count={active.length} />
                    {/* Hero (first active) + 2 side cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <HeroCard project={active[0]} />
                        <div className="flex flex-col gap-6">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div className="flex flex-col gap-3">
                        {archived.map((p, i) => (
                            <ArchivedCard key={p.slug} project={p} index={i} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
