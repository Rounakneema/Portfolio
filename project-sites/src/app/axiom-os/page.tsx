import React from 'react';
import { Metadata } from 'next';
import { projects } from '@/lib/projects';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { AxiomHud } from '@/components/axiom/AxiomHud';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
    title: 'AXIOM OS — Local-First Personal AI Operating System',
    description: 'Zero-Cloud Local Personal Operating System',
    alternates: {
        canonical: 'https://axiom-os.rounakneema.in',
    },
    keywords: ['local AI', 'privacy-preserving AI', 'offline AI'],
};

export default function AxiomOsPage() {
    const project = projects.find((p) => p.slug === 'axiom-os');

    if (!project) {
        return <div>Project not found</div>;
    }

    const axiomJsonLd = {
        name: 'AXIOM OS',
        url: 'https://axiom-os.rounakneema.in',
        description: 'Zero-Cloud Local Personal Operating System',
        schemaCategory: 'SoftwareApplication',
        faq: [
            { question: 'What is AXIOM OS?', answer: 'AXIOM OS is a local-first personal AI operating system designed to run on your own hardware without relying on the cloud.' },
            { question: 'Is it cloud-based?', answer: 'No, AXIOM OS is completely zero-cloud. It runs locally to ensure maximum privacy and offline availability.' },
            { question: 'How does it collect telemetry?', answer: 'It uses a custom Golang daemon called Specter to collect contextual telemetry locally.' },
            { question: 'Why does AXIOM use deterministic policies?', answer: 'To ensure predictable behavior and prioritize your designated goals over probabilistic distractions.' },
            { question: 'Which LLMs does AXIOM OS support?', answer: 'It primarily utilizes local LLMs running via Ollama.' },
            { question: 'Where is the data stored?', answer: 'All memory and context data are stored locally in SQLite databases.' },
            { question: 'Can I use AXIOM OS offline?', answer: 'Yes, because it is local-first, it is fully functional offline.' }
        ]
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#00d4aa] selection:text-black">
            <ProjectJsonLd slug="axiom-os" />
            <style dangerouslySetInnerHTML={{ __html: `
                .os-border { border: 1px solid #333; }
                .os-border-b { border-bottom: 1px solid #333; }
                .grid-bg { background-size: 40px 40px; background-image: linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px); }
            `}} />

            {/* HERO HUD */}
            <div className="pt-12 px-6 md:px-12 grid-bg pb-12 os-border-b">
                <AxiomHud />
                
                {/* PROCESS CYCLE */}
                <div className="max-w-5xl mx-auto mt-16 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between text-center space-y-4 md:space-y-0 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-[#333] -z-10"></div>
                        
                        {[
                            { step: 'OBSERVE', desc: 'Daemon hooks' },
                            { step: 'MEASURE', desc: 'State tracking' },
                            { step: 'STORE', desc: 'SQLite memory' },
                            { step: 'INTERPRET', desc: 'Ollama eval' },
                            { step: 'INTERVENE', desc: 'Policy action' }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#0a0a0a] os-border p-4 w-40 transform transition-transform hover:-translate-y-1 hover:border-[#00d4aa]">
                                <p className="text-[#00d4aa] font-bold text-sm tracking-widest mb-2 leading-relaxed">{item.step}</p>
                                <p className="text-gray-500 text-xs uppercase leading-relaxed">{item.desc}</StaggerItem>
</p>
                            </div>
                        ))}
                    </div>
</StaggerContainer>
                </div>
            </div>

            {/* PROJECT METADATA */}
            <div className="px-6 md:px-12 py-12 os-border-b bg-[#050505]">
                </div>

            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    
                    {/* LEFT COLUMN: METRICS & TRACES */}
                    <div className="lg:col-span-3 border-r border-[#333] p-6 bg-[#050505] flex flex-col gap-8">
                        <div>
                            <h3 className="text-gray-500 uppercase text-xs tracking-widest mb-4">Core Specifications</h3>
                            <StaggerContainer>
<ul className="space-y-4">
                                {project.metrics?.map((metric, i) => (
                                    <StaggerItem>
<li key={i} className="os-border p-4 bg-black relative bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl hover:-translate-y-1 hover:border-[#00d4aa] transition-all duration-300 group">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-[#00d4aa] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                        <p className="text-gray-500 text-sm uppercase leading-relaxed">{metric.label}</p>
                                        <p className="text-xl font-bold mt-1 text-white leading-relaxed">{metric.value}</p>
                                    </li>
</StaggerItem>
                                ))}
                            </ul>
</StaggerContainer>
                        </div>

                        <div className="mt-auto pt-8">
                            <h3 className="text-gray-500 uppercase text-xs tracking-widest mb-4">System Trace</h3>
                            <div className="bg-black os-border p-4 text-xs text-[#00d4aa] font-mono bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl overflow-hidden h-48 flex flex-col justify-end">
                                <p className="opacity-50 leading-relaxed">kernel: initializing telemetry daemon (Specter)...</p>
                                <p className="opacity-60 leading-relaxed">Specter: hooked into process monitor.</p>
                                <p className="opacity-70 leading-relaxed">SQLite: memory layer online.</p>
                                <p className="opacity-80 leading-relaxed">Ollama: warming up qwen2.5:3b...</p>
                                <p className="opacity-90 text-yellow-500 leading-relaxed">WARN: UNKNOWN state detected.</p>
                                <p className="opacity-100 text-red-500 leading-relaxed">POLICY: productivity &lt; 0.40 AND intent DISTRACT.</p>
                                <p className="opacity-100 font-bold mt-2 text-white leading-relaxed">&gt; executing contextual roast...</p>
                            </div>
                        </div>
                    </div>

                    {/* MAIN CONTENT AREA */}
                    <div className="lg:col-span-9 p-6 md:p-12 lg:p-16 xl:p-24 grid-bg relative">
                        <div className="max-w-4xl space-y-16 relative z-10">
                            
                            {/* CHALLENGE / SOLUTION EDITORIAL */}
                            <ScrollReveal direction="up" delay={0.1}>
<section className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-red-500 uppercase text-xl font-black mb-4 tracking-tight">01 // The Problem</h3>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {project.challenge}
                                    </p>
                                </div>
                                <div className="border-l border-[#333] pl-6 md:pl-12">
                                    <h3 className="text-[#00d4aa] uppercase text-xl font-black mb-4 tracking-tight">02 // The Synthesis</h3>
                                    <p className="text-lg text-gray-300 leading-relaxed font-semibold">
                                        {project.solution}
                                    </p>
                                </div>
                            </section>
</ScrollReveal>

                            <hr className="border-[#333]" />

                            {/* DEEP DIVE */}
                            <ScrollReveal direction="up" delay={0.1}>
<section>
                                <h3 className="text-2xl font-black uppercase mb-8 text-white tracking-tight">System Architecture</h3>
                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    {project.fullDescription}
                                </p>
                                
                                <div className="bg-black os-border border-l-4 border-[#00d4aa] p-8 my-12 transition-transform duration-300">
                                    <h4 className="text-white font-bold uppercase mb-6 tracking-widest">Tri-Axis Evaluation Model</h4>
                                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                        AXIOM evaluates whether an activity is productive in context, not merely whether it advances a declared career goal. 
                                        Three independent axes define the behavioral state:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div className="os-border p-4 bg-[#0a0a0a]">
                                            <p className="text-xs text-[#00d4aa] uppercase mb-2 leading-relaxed">Axis I</p>
                                            <p className="font-bold text-gray-200 uppercase text-sm leading-relaxed">Current Role Duties</p>
                                        </div>
                                        <div className="os-border p-4 bg-[#0a0a0a]">
                                            <p className="text-xs text-[#00d4aa] uppercase mb-2 leading-relaxed">Axis II</p>
                                            <p className="font-bold text-gray-200 uppercase text-sm leading-relaxed">Personal Goal Alignment</p>
                                        </div>
                                        <div className="os-border p-4 bg-[#0a0a0a]">
                                            <p className="text-xs text-[#00d4aa] uppercase mb-2 leading-relaxed">Axis III</p>
                                            <p className="font-bold text-gray-200 uppercase text-sm leading-relaxed">General / Wellbeing</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-6 text-center uppercase tracking-widest leading-relaxed">
                                        Rules before models. Evidence &gt; Labels.
                                    </p>
                                </div>
                            </section>
</ScrollReveal>

                            {/* CAPABILITIES */}
                            <ScrollReveal direction="up" delay={0.1}>
<section>
                                <h3 className="text-2xl font-black uppercase mb-8 text-white tracking-tight">Key Subsystems</h3>
                                <StaggerContainer>
<StaggerContainer>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#333] os-border">
{project.bullets.map((bullet, idx) => (
                                        <StaggerItem><div key={idx} className="bg-[#050505] p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl hover:-translate-y-1 hover:border-[#00d4aa] transition-all duration-300 transition-colors group">
                                            <h4 className="text-white font-bold uppercase text-sm mb-4 group-hover:text-[#00d4aa] transition-colors tracking-wide">
                                                {idx + 1}. {bullet.label}
                                            </h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {bullet.text}
                                            </StaggerItem>
</p>
                                        </div>
                                    ))}
                                </div>
</StaggerContainer>
                            </section>
</ScrollReveal>

                            {/* FAQ */}
                            <ScrollReveal direction="up" delay={0.1}>
<section className="mt-16">
                                <h3 className="text-2xl font-black uppercase mb-8 text-white tracking-tight">Frequently Asked Questions</h3>
                                <div className="space-y-6">
                                    {axiomJsonLd.faq.map((q, idx) => (
                                        <div key={idx} className="bg-[#0a0a0a] os-border p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl">
                                            <h4 className="font-bold text-white mb-2 text-sm tracking-tight">{q.question}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{q.answer}</StaggerItem>
</p>
                                        </div>
                                    ))}
                                </div>
</StaggerContainer>
                            </section>
</ScrollReveal>

                        </div>
                    </div>
                </div>
            </div>

            <footer className="p-6 md:p-12 text-center text-gray-600 text-xs uppercase tracking-widest os-border-b border-t border-[#333] bg-black">
                <p>Status: {project.status} // SYSTEM ONLINE // EOF</p>
            </footer>
            
            <div className="px-6 md:px-12 pb-12 bg-black pt-12">
                </div>
        </main>
    );
}
