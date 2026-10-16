import React from 'react';
import { projects } from '@/lib/projects';
import { ProjectEmailIntake } from '@/components/ProjectEmailIntake';

const servicePillarMap: Record<string, {
    title: string;
    description: string;
    url: string;
}> = {
    revealr: {
        title: 'Need High-Throughput Go Systems or Security Tooling?',
        description: 'We build custom concurrent Go network engines, raw socket packet analyzers, and automated vulnerability mapping tools tailored for your infrastructure.',
        url: 'https://rounakneema.in/freelance/software-development',
    },
    metromind: {
        title: 'Need Enterprise OCR & Vector Search Pipelines?',
        description: 'We engineer asynchronous document ingestion pipelines, Milvus vector search architectures, and semantic retrieval systems so your teams find answers in seconds.',
        url: 'https://rounakneema.in/freelance/ai-development',
    },
    osa: {
        title: 'Need Air-Gapped Security Audits & Threat Baselines?',
        description: 'We deliver authorized security assessments, offline log anomaly baselining, and zero-telemetry audit tools designed for high-compliance, air-gapped perimeters.',
        url: 'https://rounakneema.in/freelance/cybersecurity',
    },
    sortmail: {
        title: 'Need Semantic Email Intelligence & Workflow Automation?',
        description: 'We automate your high-volume inboxes with instant deadline extraction, AI document classification, and zero-trust threat blocking.',
        url: 'https://rounakneema.in/freelance/ai-development',
    },
    pipelineforge: {
        title: 'Need Distroless Docker Migrations & CI/CD Security Gates?',
        description: 'We shrink your container attack surface by 99%+, eliminate CVEs with Distroless packaging, and automate Trivy security gates before code reaches production.',
        url: 'https://rounakneema.in/freelance/devsecops',
    },
    devcontext: {
        title: 'Need AST Codebase Grounding & Code Intelligence?',
        description: 'We build hallucination-free AI codebase inspection tools backed by abstract syntax tree verification for your engineering and technical hiring teams.',
        url: 'https://rounakneema.in/freelance/ai-development',
    },
    axiomos: {
        title: 'Need Local-First Private AI & Go Daemons?',
        description: 'We integrate private on-premise LLMs with Ollama and lightweight Go background daemons so your sensitive data never leaves your infrastructure.',
        url: 'https://rounakneema.in/freelance/ai-development',
    },
    'axiom-os': {
        title: 'Need Local-First Private AI & Go Daemons?',
        description: 'We integrate private on-premise LLMs with Ollama and lightweight Go background daemons so your sensitive data never leaves your infrastructure.',
        url: 'https://rounakneema.in/freelance/ai-development',
    },
    dizzy: {
        title: 'Need Voice-to-Canvas or Custom Figma Tooling?',
        description: 'We build custom Figma plugins, voice-driven canvas prototypes, and MCP integrations for product design and engineering teams.',
        url: 'https://rounakneema.in/freelance/ai-development',
    },
};

const defaultService = {
    title: 'Available for Freelance Software & Security Consulting',
    description: 'We partner with startups and engineering teams to deliver high-reliability Go backends, authorized cybersecurity assessments, and GitOps DevSecOps pipelines.',
    url: 'https://rounakneema.in/freelance',
};

interface ProjectThemeConfig {
    isLight: boolean;
    bgClass: string;
    textClass: string;
    borderClass: string;
    mutedClass: string;
    hoverClass: string;
    decorationClass: string;
    bannerBg: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pulseColor: string;
    badgeText: string;
    intakeContainer: string;
    intakeInput: string;
    intakeButton: string;
    intakeMuted: string;
    fontFamily?: string;
}

const projectThemeMap: Record<string, ProjectThemeConfig> = {
    revealr: {
        isLight: false,
        bgClass: 'bg-[#080b0a]',
        textClass: 'text-zinc-200',
        borderClass: 'border-emerald-950/60',
        mutedClass: 'text-zinc-500',
        hoverClass: 'hover:text-emerald-400',
        decorationClass: 'decoration-emerald-500/30 hover:decoration-emerald-400',
        bannerBg: 'bg-[#0d1410] border-emerald-900/40 shadow-xl shadow-black/40',
        ctaPrimary: 'bg-emerald-500 text-black hover:bg-emerald-400 font-bold',
        ctaSecondary: 'border-emerald-500/30 text-emerald-300 hover:border-emerald-400 hover:text-white',
        pulseColor: 'bg-emerald-400',
        badgeText: 'text-emerald-400',
        intakeContainer: 'bg-[#0d1410] border-emerald-900/40 text-zinc-200',
        intakeInput: 'bg-[#060807] border-emerald-900/60 text-emerald-100 placeholder-zinc-600 focus:border-emerald-400',
        intakeButton: 'bg-emerald-500 hover:bg-emerald-400 text-black font-bold',
        intakeMuted: 'text-zinc-500',
        fontFamily: 'font-mono',
    },
    metromind: {
        isLight: true,
        bgClass: 'bg-[#faf8f5]',
        textClass: 'text-slate-900',
        borderClass: 'border-slate-200/90',
        mutedClass: 'text-slate-500',
        hoverClass: 'hover:text-teal-800',
        decorationClass: 'decoration-slate-300 hover:decoration-teal-700',
        bannerBg: 'bg-white border-slate-200/90 shadow-xs',
        ctaPrimary: 'bg-[#0f172a] text-white hover:bg-slate-800 font-semibold shadow-xs',
        ctaSecondary: 'border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-950',
        pulseColor: 'bg-teal-500',
        badgeText: 'text-teal-700',
        intakeContainer: 'bg-white border-slate-200/90 text-slate-900',
        intakeInput: 'bg-[#faf8f5] border-slate-300 text-slate-900 placeholder-slate-400 focus:border-teal-600',
        intakeButton: 'bg-teal-700 hover:bg-teal-800 text-white font-semibold',
        intakeMuted: 'text-slate-500',
        fontFamily: 'font-sans',
    },
    osa: {
        isLight: false,
        bgClass: 'bg-[#0a0a0a]',
        textClass: 'text-[#e0e0e0]',
        borderClass: 'border-amber-500/20',
        mutedClass: 'text-zinc-500',
        hoverClass: 'hover:text-[#ffb800]',
        decorationClass: 'decoration-amber-500/30 hover:decoration-[#ffb800]',
        bannerBg: 'bg-[#111111] border-amber-500/25 shadow-xl',
        ctaPrimary: 'bg-[#ffb800] text-black hover:bg-amber-300 font-bold',
        ctaSecondary: 'border-amber-500/30 text-amber-300 hover:border-amber-400 hover:text-white',
        pulseColor: 'bg-amber-400',
        badgeText: 'text-[#ffb800]',
        intakeContainer: 'bg-[#111111] border-amber-500/25 text-[#e0e0e0]',
        intakeInput: 'bg-black border-zinc-800 text-amber-200 placeholder-zinc-600 focus:border-[#ffb800]',
        intakeButton: 'bg-[#ffb800] hover:bg-amber-300 text-black font-bold',
        intakeMuted: 'text-zinc-500',
        fontFamily: 'font-mono',
    },
    sortmail: {
        isLight: true,
        bgClass: 'bg-[#faf9f6]',
        textClass: 'text-neutral-900',
        borderClass: 'border-neutral-200/90',
        mutedClass: 'text-neutral-500',
        hoverClass: 'hover:text-blue-600',
        decorationClass: 'decoration-neutral-300 hover:decoration-blue-600',
        bannerBg: 'bg-white border-neutral-200/90 shadow-sm',
        ctaPrimary: 'bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow-sm',
        ctaSecondary: 'border-neutral-300 text-neutral-700 hover:border-neutral-900 hover:text-neutral-950',
        pulseColor: 'bg-blue-500',
        badgeText: 'text-blue-600',
        intakeContainer: 'bg-white border-neutral-200/90 text-neutral-900',
        intakeInput: 'bg-[#faf9f6] border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-blue-600',
        intakeButton: 'bg-blue-600 hover:bg-blue-700 text-white font-semibold',
        intakeMuted: 'text-neutral-500',
        fontFamily: 'font-sans',
    },
    pipelineforge: {
        isLight: true,
        bgClass: 'bg-[#fafafa]',
        textClass: 'text-neutral-900',
        borderClass: 'border-neutral-200',
        mutedClass: 'text-neutral-500',
        hoverClass: 'hover:text-[#f97316]',
        decorationClass: 'decoration-neutral-300 hover:decoration-[#f97316]',
        bannerBg: 'bg-white border-neutral-200 shadow-sm',
        ctaPrimary: 'bg-[#f97316] text-white hover:bg-orange-600 font-semibold shadow-sm',
        ctaSecondary: 'border-neutral-300 text-neutral-700 hover:border-neutral-900 hover:text-neutral-950',
        pulseColor: 'bg-[#f97316]',
        badgeText: 'text-[#f97316]',
        intakeContainer: 'bg-white border-neutral-200 text-neutral-900',
        intakeInput: 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-[#f97316]',
        intakeButton: 'bg-[#f97316] hover:bg-orange-600 text-white font-semibold',
        intakeMuted: 'text-neutral-500',
        fontFamily: 'font-sans',
    },
    devcontext: {
        isLight: false,
        bgClass: 'bg-[#0a0a0a]',
        textClass: 'text-[#e0e0e0]',
        borderClass: 'border-[#1f6feb]/30',
        mutedClass: 'text-zinc-500',
        hoverClass: 'hover:text-[#58a6ff]',
        decorationClass: 'decoration-[#1f6feb]/40 hover:decoration-[#58a6ff]',
        bannerBg: 'bg-[#0e1217] border-[#1f6feb]/30 shadow-xl',
        ctaPrimary: 'bg-[#1f6feb] text-white hover:bg-blue-600 font-semibold shadow-sm',
        ctaSecondary: 'border-[#1f6feb]/40 text-[#58a6ff] hover:border-[#58a6ff] hover:text-white',
        pulseColor: 'bg-[#1f6feb]',
        badgeText: 'text-[#58a6ff]',
        intakeContainer: 'bg-[#0e1217] border-[#1f6feb]/30 text-[#e0e0e0]',
        intakeInput: 'bg-black border-zinc-800 text-blue-100 placeholder-zinc-600 focus:border-[#1f6feb]',
        intakeButton: 'bg-[#1f6feb] hover:bg-blue-600 text-white font-semibold',
        intakeMuted: 'text-zinc-500',
        fontFamily: 'font-mono',
    },
    axiomos: {
        isLight: true,
        bgClass: 'bg-[#faf7ee]',
        textClass: 'text-[#1c1917]',
        borderClass: 'border-[#e5ded2]',
        mutedClass: 'text-[#57534e]',
        hoverClass: 'hover:text-[#2d5a3f]',
        decorationClass: 'decoration-[#d6caba] hover:decoration-[#2d5a3f]',
        bannerBg: 'bg-[#f4efe4] border-[#e5ded2] shadow-xs',
        ctaPrimary: 'bg-[#2d5a3f] text-[#faf7ee] hover:bg-[#234731] font-medium shadow-xs',
        ctaSecondary: 'border-[#d6caba] text-[#2b2723] hover:border-[#2d5a3f] hover:text-[#1c1917]',
        pulseColor: 'bg-[#2d5a3f]',
        badgeText: 'text-[#2d5a3f]',
        intakeContainer: 'bg-[#f4efe4] border-[#e5ded2] text-[#1c1917]',
        intakeInput: 'bg-[#faf7ee] border-[#d6caba] text-[#1c1917] placeholder-[#a89f91] focus:border-[#2d5a3f]',
        intakeButton: 'bg-[#2d5a3f] hover:bg-[#234731] text-[#faf7ee] font-medium',
        intakeMuted: 'text-[#78716c]',
        fontFamily: 'font-sans',
    },
    'axiom-os': {
        isLight: true,
        bgClass: 'bg-[#faf7ee]',
        textClass: 'text-[#1c1917]',
        borderClass: 'border-[#e5ded2]',
        mutedClass: 'text-[#57534e]',
        hoverClass: 'hover:text-[#2d5a3f]',
        decorationClass: 'decoration-[#d6caba] hover:decoration-[#2d5a3f]',
        bannerBg: 'bg-[#f4efe4] border-[#e5ded2] shadow-xs',
        ctaPrimary: 'bg-[#2d5a3f] text-[#faf7ee] hover:bg-[#234731] font-medium shadow-xs',
        ctaSecondary: 'border-[#d6caba] text-[#2b2723] hover:border-[#2d5a3f] hover:text-[#1c1917]',
        pulseColor: 'bg-[#2d5a3f]',
        badgeText: 'text-[#2d5a3f]',
        intakeContainer: 'bg-[#f4efe4] border-[#e5ded2] text-[#1c1917]',
        intakeInput: 'bg-[#faf7ee] border-[#d6caba] text-[#1c1917] placeholder-[#a89f91] focus:border-[#2d5a3f]',
        intakeButton: 'bg-[#2d5a3f] hover:bg-[#234731] text-[#faf7ee] font-medium',
        intakeMuted: 'text-[#78716c]',
        fontFamily: 'font-sans',
    },
    dizzy: {
        isLight: true,
        bgClass: 'bg-white',
        textClass: 'text-neutral-900',
        borderClass: 'border-neutral-200',
        mutedClass: 'text-neutral-500',
        hoverClass: 'hover:text-[#ff3366]',
        decorationClass: 'decoration-neutral-300 hover:decoration-[#ff3366]',
        bannerBg: 'bg-neutral-50/70 border-neutral-200/90 shadow-sm',
        ctaPrimary: 'bg-[#ff3366] text-white hover:bg-[#e02958] font-semibold shadow-sm',
        ctaSecondary: 'border-neutral-300 text-neutral-700 hover:border-neutral-900 hover:text-neutral-950',
        pulseColor: 'bg-[#ff3366]',
        badgeText: 'text-[#ff3366]',
        intakeContainer: 'bg-neutral-50/70 border-neutral-200/90 text-neutral-900',
        intakeInput: 'bg-white border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-[#ff3366]',
        intakeButton: 'bg-[#ff3366] hover:bg-[#e02958] text-white font-semibold',
        intakeMuted: 'text-neutral-500',
        fontFamily: 'font-sans',
    },
};

const defaultTheme: ProjectThemeConfig = {
    isLight: false,
    bgClass: 'bg-[#050505]',
    textClass: 'text-white',
    borderClass: 'border-white/10',
    mutedClass: 'text-zinc-500',
    hoverClass: 'hover:text-white',
    decorationClass: 'decoration-white/20 hover:decoration-white',
    bannerBg: 'bg-white/[0.03] border-white/10',
    ctaPrimary: 'bg-white text-black hover:bg-zinc-200',
    ctaSecondary: 'border-white/20 text-white hover:border-white',
    pulseColor: 'bg-emerald-400',
    badgeText: 'text-emerald-500',
    intakeContainer: 'bg-white/[0.02] border-white/10 text-white',
    intakeInput: 'bg-black/60 border-white/15 text-white placeholder-zinc-500 focus:border-white',
    intakeButton: 'bg-white hover:bg-neutral-200 text-black',
    intakeMuted: 'text-zinc-400',
    fontFamily: 'font-sans',
};

export function ProjectFooter({ slug }: { slug: string }) {
    const project = projects.find(p => p.slug === slug);
    if (!project) return null;

    const theme = projectThemeMap[slug] || defaultTheme;
    const serviceInfo = servicePillarMap[slug] || defaultService;

    return (
        <footer className={`w-full ${theme.bgClass} ${theme.textClass} ${theme.fontFamily || ''}`}>
            <div className={`mt-12 pt-8 border-t ${theme.borderClass} w-full max-w-7xl mx-auto px-6 pb-12 opacity-95`}>
                
                {/* Commercial Engineering Service Funnel Banner */}
                <div className={`mb-12 p-6 md:p-8 rounded-2xl border ${theme.bannerBg} flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all`}>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${theme.pulseColor} animate-pulse`}></span>
                            <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${theme.badgeText}`}>
                                Available for Freelance &amp; Consulting
                            </span>
                        </div>
                        <h4 className="text-lg md:text-xl font-bold tracking-tight">
                            {serviceInfo.title}
                        </h4>
                        <p className={`text-xs md:text-sm ${theme.mutedClass} max-w-2xl leading-relaxed`}>
                            {serviceInfo.description}
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
                        <a
                            href={serviceInfo.url}
                            className={`px-5 py-3 ${theme.ctaPrimary} text-xs font-bold font-mono uppercase tracking-wider rounded-lg transition-all text-center flex-1 sm:flex-none shadow-sm`}
                        >
                            Explore Service &rarr;
                        </a>
                        <a
                            href="https://rounakneema.in/contact"
                            className={`px-5 py-3 border ${theme.ctaSecondary} text-xs font-bold font-mono uppercase tracking-wider rounded-lg transition-all text-center flex-1 sm:flex-none`}
                        >
                            Start Inquiry
                        </a>
                    </div>
                </div>

                {/* Direct Interest Email Intake */}
                <div className="mb-12">
                    <ProjectEmailIntake
                        slug={slug}
                        projectName={project.title}
                        isLight={theme.isLight}
                        customClasses={{
                            container: theme.intakeContainer,
                            input: theme.intakeInput,
                            button: theme.intakeButton,
                            muted: theme.intakeMuted,
                        }}
                    />
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-12 text-xs font-mono">
                    {/* Metadata */}
                    <div className="flex flex-wrap gap-x-12 gap-y-6">
                        <div className="flex flex-col gap-1.5">
                            <span className={`${theme.mutedClass} uppercase tracking-widest font-bold`}>Author</span>
                            <a href="https://rounakneema.in" className={`font-bold ${theme.hoverClass} underline underline-offset-4 transition-colors`}>Rounak Neema</a>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <span className={`${theme.mutedClass} uppercase tracking-widest font-bold`}>Category</span>
                            <span className="font-bold">{project.category}</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <span className={`${theme.mutedClass} uppercase tracking-widest font-bold`}>Status</span>
                            <span className="font-bold">{project.status}</span>
                        </div>
                        {project.github && (
                            <div className="flex flex-col gap-1.5">
                                <span className={`${theme.mutedClass} uppercase tracking-widest font-bold`}>Source</span>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className={`font-bold ${theme.hoverClass} underline underline-offset-4 transition-colors`}>
                                    GitHub &#8599;
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Related Projects */}
                    <div className="flex flex-col gap-2 min-w-[250px]">
                        <span className={`${theme.mutedClass} uppercase tracking-widest font-bold mb-2`}>Also by Rounak Neema</span>
                        <div className="flex flex-col gap-2.5">
                            {projects.filter(p => p.slug !== slug).slice(0, 3).map(p => (
                                <a key={p.slug} href={`https://${p.subdomain}`} className={`${theme.mutedClass} ${theme.hoverClass} transition-colors underline underline-offset-4 ${theme.decorationClass}`}>
                                    &#8599; {p.title} // {p.category}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`mt-12 pt-6 border-t ${theme.borderClass} flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono ${theme.mutedClass}`}>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://rounakneema.in" className={`${theme.hoverClass} transition-colors underline underline-offset-4 ${theme.decorationClass}`}>&larr; Root</a>
                        <a href="https://rounakneema.in/freelance" className={`${theme.hoverClass} font-bold text-emerald-500 transition-colors underline underline-offset-4 ${theme.decorationClass}`}>Freelance Services</a>
                        <a href="https://rounakneema.in/projects" className={`${theme.hoverClass} transition-colors underline underline-offset-4 ${theme.decorationClass}`}>Projects Hub</a>
                        <a href="https://rounakneema.in/portfolio" className={`${theme.hoverClass} transition-colors underline underline-offset-4 ${theme.decorationClass}`}>Portfolio</a>
                        <a href="https://rounakneema.in/contact" className={`${theme.hoverClass} transition-colors underline underline-offset-4 ${theme.decorationClass}`}>Contact</a>
                    </div>
                    <span className="uppercase tracking-widest">
                        {project.title}_SYSTEM // {new Date().getFullYear()}
                    </span>
                </div>
            </div>
        </footer>
    );
}
