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

export function ProjectFooter({ slug }: { slug: string }) {
    const project = projects.find(p => p.slug === slug);
    if (!project) return null;

    const isLight = slug === 'sortmail' || slug === 'dizzy' || slug === 'pipelineforge';
    const bgClass = isLight ? 'bg-gray-50' : 'bg-[#050505]';
    const textClass = isLight ? 'text-black' : 'text-white';
    const borderClass = isLight ? 'border-black/10' : 'border-white/5';
    const mutedClass = isLight ? 'text-gray-500' : 'text-zinc-500';
    const hoverClass = isLight ? 'hover:text-black' : 'hover:text-white';
    const decorationClass = isLight ? 'decoration-black/20 hover:decoration-black' : 'decoration-white/20 hover:decoration-white';
    const bannerBg = isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-white/[0.03] border-white/10';
    const ctaPrimary = isLight ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-zinc-200';
    const ctaSecondary = isLight ? 'border-gray-300 text-black hover:border-black' : 'border-white/20 text-white hover:border-white';

    const serviceInfo = servicePillarMap[slug] || defaultService;

    return (
        <footer className={`w-full ${bgClass} ${textClass}`}>
            <div className={`mt-12 pt-8 border-t ${borderClass} w-full max-w-7xl mx-auto px-6 pb-12 opacity-95`}>
                
                {/* Commercial Engineering Service Funnel Banner */}
                <div className={`mb-12 p-6 md:p-8 rounded-2xl border ${bannerBg} flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all`}>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-500 font-bold">
                                Available for Freelance &amp; Consulting
                            </span>
                        </div>
                        <h4 className="text-lg md:text-xl font-bold tracking-tight">
                            {serviceInfo.title}
                        </h4>
                        <p className={`text-xs md:text-sm ${mutedClass} max-w-2xl leading-relaxed`}>
                            {serviceInfo.description}
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
                        <a
                            href={serviceInfo.url}
                            className={`px-5 py-3 ${ctaPrimary} text-xs font-bold font-mono uppercase tracking-wider rounded-lg transition-all text-center flex-1 sm:flex-none shadow-sm`}
                        >
                            Explore Service &rarr;
                        </a>
                        <a
                            href="https://rounakneema.in/contact"
                            className={`px-5 py-3 border ${ctaSecondary} text-xs font-bold font-mono uppercase tracking-wider rounded-lg transition-all text-center flex-1 sm:flex-none`}
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
                        isLight={isLight}
                    />
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-12 text-xs font-mono">
                    {/* Metadata */}
                    <div className="flex flex-wrap gap-x-12 gap-y-6">
                        <div className="flex flex-col gap-1.5">
                            <span className={`${mutedClass} uppercase tracking-widest font-bold`}>Author</span>
                            <a href="https://rounakneema.in" className={`font-bold ${hoverClass} underline underline-offset-4 transition-colors`}>Rounak Neema</a>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <span className={`${mutedClass} uppercase tracking-widest font-bold`}>Category</span>
                            <span className="font-bold">{project.category}</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <span className={`${mutedClass} uppercase tracking-widest font-bold`}>Status</span>
                            <span className="font-bold">{project.status}</span>
                        </div>
                        {project.github && (
                            <div className="flex flex-col gap-1.5">
                                <span className={`${mutedClass} uppercase tracking-widest font-bold`}>Source</span>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className={`font-bold ${hoverClass} underline underline-offset-4 transition-colors`}>
                                    GitHub &#8599;
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Related Projects */}
                    <div className="flex flex-col gap-2 min-w-[250px]">
                        <span className={`${mutedClass} uppercase tracking-widest font-bold mb-2`}>Also by Rounak Neema</span>
                        <div className="flex flex-col gap-2.5">
                            {projects.filter(p => p.slug !== slug).slice(0, 3).map(p => (
                                <a key={p.slug} href={`https://${p.subdomain}`} className={`${mutedClass} ${hoverClass} transition-colors underline underline-offset-4 ${decorationClass}`}>
                                    &#8599; {p.title} // {p.category}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`mt-12 pt-6 border-t ${borderClass} flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono ${mutedClass}`}>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://rounakneema.in" className={`${hoverClass} transition-colors underline underline-offset-4 ${decorationClass}`}>&larr; Root</a>
                        <a href="https://rounakneema.in/freelance" className={`${hoverClass} font-bold text-emerald-500 transition-colors underline underline-offset-4 ${decorationClass}`}>Freelance Services</a>
                        <a href="https://rounakneema.in/projects" className={`${hoverClass} transition-colors underline underline-offset-4 ${decorationClass}`}>Projects Hub</a>
                        <a href="https://rounakneema.in/portfolio" className={`${hoverClass} transition-colors underline underline-offset-4 ${decorationClass}`}>Portfolio</a>
                        <a href="https://rounakneema.in/contact" className={`${hoverClass} transition-colors underline underline-offset-4 ${decorationClass}`}>Contact</a>
                    </div>
                    <span className="uppercase tracking-widest">
                        {project.title}_SYSTEM // {new Date().getFullYear()}
                    </span>
                </div>
            </div>
        </footer>
    );
}
