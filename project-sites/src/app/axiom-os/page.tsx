import React from 'react';
import { Metadata } from 'next';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
    title: 'AXIOM OS | Rounak Neema',
    description: 'Zero-Cloud Local Personal Operating System',
};

export default function AxiomOsPage() {
    const project = projects.find((p) => p.slug === 'axiom-os');

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-red-600 selection:text-white">
            <style dangerouslySetInnerHTML={{ __html: `
                .brutalist-border { border: 2px solid #333; }
                .brutalist-border-b { border-bottom: 2px solid #333; }
                .brutalist-border-r { border-right: 2px solid #333; }
                .marquee { white-space: nowrap; overflow: hidden; box-sizing: border-box; }
                .marquee span { display: inline-block; padding-left: 100%; animation: marquee 15s linear infinite; }
                @keyframes marquee { 0% { transform: translate(0, 0); } 100% { transform: translate(-100%, 0); } }
                .glitch { position: relative; }
                .glitch::before, .glitch::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #0a0a0a; }
                .glitch::before { left: 2px; text-shadow: -1px 0 red; clip: rect(24px, 550px, 90px, 0); animation: glitch-anim 3s infinite linear alternate-reverse; }
                .glitch::after { left: -2px; text-shadow: -1px 0 blue; clip: rect(85px, 550px, 140px, 0); animation: glitch-anim 2.5s infinite linear alternate-reverse; }
                @keyframes glitch-anim { 
                    0% { clip: rect(98px, 9999px, 83px, 0); }
                    20% { clip: rect(61px, 9999px, 73px, 0); }
                    40% { clip: rect(10px, 9999px, 20px, 0); }
                    60% { clip: rect(74px, 9999px, 87px, 0); }
                    80% { clip: rect(17px, 9999px, 91px, 0); }
                    100% { clip: rect(35px, 9999px, 63px, 0); }
                }
                .grid-bg { background-size: 40px 40px; background-image: linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px); }
            `}} />

            {/* HEADER */}
            <header className="brutalist-border-b p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 bg-black relative overflow-hidden">
                <div className="z-10 relative">
                    <p className="text-red-500 font-bold mb-4 tracking-widest text-sm uppercase">[{project.category}] // {project.status}</p>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none glitch" data-text={project.title}>
                        {project.title}
                    </h1>
                    <h2 className="text-xl md:text-3xl mt-6 text-gray-400 font-light max-w-3xl">
                        {project.subtitle}
                    </h2>
                </div>
                <div className="z-10 text-right space-y-2 hidden md:block">
                    <p className="text-gray-600 uppercase text-xs">Sys. Architecture</p>
                    <p className="text-gray-400 uppercase text-sm">Target: Local-First</p>
                    <p className="text-gray-400 uppercase text-sm">Engine: AXIOM Context Intelligence</p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-900 opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
            </header>

            {/* MARQUEE */}
            <div className="bg-red-600 text-black font-black uppercase text-xl py-2 marquee border-y-2 border-red-800">
                <span>{project.tech.join(' // ')} // {project.tech.join(' // ')} // </span>
            </div>

            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 brutalist-border-b">
                    
                    {/* LEFT COLUMN: METRICS & TRACES */}
                    <div className="lg:col-span-3 brutalist-border-r p-6 bg-[#050505] flex flex-col gap-8">
                        <div>
                            <h3 className="text-gray-500 uppercase text-xs tracking-widest mb-4">System Manuals</h3>
                            <ul className="space-y-4 mb-12">
                                <li>
                                    <a href="/axiom-os/docs" className="block brutalist-border p-4 bg-[#0a0a0a] hover:bg-white hover:text-black transition-colors font-bold uppercase text-sm">
                                        [00] Documentation &gt;
                                    </a>
                                </li>
                                <li>
                                    <a href="/axiom-os/architecture" className="block brutalist-border p-4 bg-[#0a0a0a] hover:bg-white hover:text-black transition-colors font-bold uppercase text-sm">
                                        [01] Architecture Spec &gt;
                                    </a>
                                </li>
                                <li>
                                    <a href="/axiom-os/decisions" className="block brutalist-border p-4 bg-[#0a0a0a] hover:bg-white hover:text-black transition-colors font-bold uppercase text-sm">
                                        [02] Eng. Decisions &gt;
                                    </a>
                                </li>
                            </ul>

                            <h3 className="text-gray-500 uppercase text-xs tracking-widest mb-4">Core Specifications</h3>
                            <ul className="space-y-4">
                                {project.metrics?.map((metric, i) => (
                                    <li key={i} className="brutalist-border p-4 bg-black relative group">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                        <p className="text-gray-500 text-sm uppercase">{metric.label}</p>
                                        <p className="text-xl font-bold mt-1 text-white">{metric.value}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto pt-8">
                            <h3 className="text-gray-500 uppercase text-xs tracking-widest mb-4">System Trace</h3>
                            <div className="bg-black brutalist-border p-4 text-xs text-green-500 font-mono overflow-hidden h-48 flex flex-col justify-end">
                                <p className="opacity-50">kernel: initializing telemetry daemon (Specter)...</p>
                                <p className="opacity-60">Specter: hooked into process monitor.</p>
                                <p className="opacity-70">SQLite: memory layer online.</p>
                                <p className="opacity-80">Ollama: warming up qwen2.5:3b...</p>
                                <p className="opacity-90 text-yellow-500">WARN: UNKNOWN state detected.</p>
                                <p className="opacity-100 text-red-500">POLICY: productivity &lt; 0.40 AND intent DISTRACT.</p>
                                <p className="opacity-100 font-bold mt-2">&gt; executing contextual roast...</p>
                            </div>
                        </div>
                    </div>

                    {/* MAIN CONTENT AREA */}
                    <div className="lg:col-span-9 p-6 md:p-12 lg:p-16 xl:p-24 grid-bg relative">
                        <div className="max-w-4xl space-y-16 relative z-10">
                            
                            {/* CHALLENGE / SOLUTION EDITORIAL */}
                            <section className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-red-500 uppercase text-xl font-black mb-4">01 // The Problem</h3>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {project.challenge}
                                    </p>
                                </div>
                                <div className="border-l-2 border-gray-800 pl-6 md:pl-12">
                                    <h3 className="text-white uppercase text-xl font-black mb-4">02 // The Synthesis</h3>
                                    <p className="text-lg text-gray-300 leading-relaxed font-semibold">
                                        {project.solution}
                                    </p>
                                </div>
                            </section>

                            <hr className="border-gray-800" />

                            {/* DEEP DIVE */}
                            <section>
                                <h3 className="text-3xl font-black uppercase mb-8 text-white">System Architecture</h3>
                                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                                    {project.fullDescription}
                                </p>
                                
                                <div className="bg-black brutalist-border p-8 my-12 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                                    <h4 className="text-red-500 font-bold uppercase mb-6 tracking-widest">Tri-Axis Evaluation Model</h4>
                                    <p className="text-gray-300 mb-6">
                                        AXIOM evaluates whether an activity is productive in context, not merely whether it advances a declared career goal. 
                                        Three independent axes define the behavioral state:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div className="brutalist-border p-4 bg-[#0a0a0a]">
                                            <p className="text-sm text-gray-500 uppercase mb-2">Axis I</p>
                                            <p className="font-bold text-white uppercase">Current Role Duties</p>
                                        </div>
                                        <div className="brutalist-border p-4 bg-[#0a0a0a]">
                                            <p className="text-sm text-gray-500 uppercase mb-2">Axis II</p>
                                            <p className="font-bold text-white uppercase">Personal Goal Alignment</p>
                                        </div>
                                        <div className="brutalist-border p-4 bg-[#0a0a0a]">
                                            <p className="text-sm text-gray-500 uppercase mb-2">Axis III</p>
                                            <p className="font-bold text-white uppercase">General / Wellbeing</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-6 text-center uppercase tracking-widest">
                                        Rules before models. Evidence &gt; Labels.
                                    </p>
                                </div>
                            </section>

                            {/* CAPABILITIES */}
                            <section>
                                <h3 className="text-2xl font-black uppercase mb-8 text-white">Key Subsystems</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800 brutalist-border">
                                    {project.bullets.map((bullet, idx) => (
                                        <div key={idx} className="bg-[#050505] p-8 hover:bg-[#0a0a0a] transition-colors group">
                                            <h4 className="text-white font-bold uppercase text-lg mb-4 group-hover:text-red-500 transition-colors">
                                                {idx + 1}. {bullet.label}
                                            </h4>
                                            <p className="text-gray-400">
                                                {bullet.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>

            <footer className="p-6 md:p-12 text-center text-gray-600 text-sm uppercase tracking-widest brutalist-border-t bg-black">
                <p>Status: {project.status} // EOF</p>
            </footer>
        </main>
    );
}
