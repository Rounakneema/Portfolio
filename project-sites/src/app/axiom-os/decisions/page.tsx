import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
    title: 'AXIOM OS | Decisions',
    description: 'Engineering trade-offs and zero-cloud constraints for AXIOM OS.',
};

export default function DecisionsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-red-600 selection:text-white">
            <style dangerouslySetInnerHTML={{ __html: `
                .brutalist-border { border: 2px solid #333; }
                .brutalist-border-b { border-bottom: 2px solid #333; }
                .brutalist-border-r { border-right: 2px solid #333; }
                .grid-bg { background-size: 40px 40px; background-image: linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px); }
            `}} />



            <div className="max-w-[1200px] mx-auto p-6 md:p-12 xl:p-16 grid-bg min-h-screen">
                <div className="space-y-16">
                    
                    <ScrollReveal direction="up" delay={0.1}>
<section>
                        <h2 className="text-white text-3xl font-black uppercase mb-8 border-l-4 border-red-600 pl-4 tracking-tight">Zero-Cloud Privacy</h2>
                        <div className="bg-[#050505] brutalist-border p-8">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Modern productivity agents rely heavily on cloud APIs (OpenAI, Anthropic) to process context. This fundamentally compromises privacy when dealing with screen content, private messages, and personal work habits. AXIOM OS enforces a strict <strong>zero-cloud constraint</strong>.
                            </p>
                            <StaggerContainer>
<ul className="list-disc list-inside text-gray-400 space-y-3">
                                <StaggerItem>
<li>No external API keys required.</li>
</StaggerItem>
                                <StaggerItem>
<li>All inference runs locally via Ollama.</li>
</StaggerItem>
                                <StaggerItem>
<li>Telemetry never leaves the device loopback interface.</li>
</StaggerItem>
                            </ul>
</StaggerContainer>
                        </div>
                    </section>
</ScrollReveal>

                    <ScrollReveal direction="up" delay={0.1}>
<section>
                        <h2 className="text-white text-3xl font-black uppercase mb-8 border-l-4 border-red-600 pl-4 tracking-tight">Local Model Selection</h2>
                        <div className="bg-[#050505] brutalist-border p-8">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Running an LLM constantly in the background can monopolize system resources. We evaluated several models before settling on the 3-billion to 8-billion parameter class.
                            </p>
                            
                            <div className="overflow-x-auto mt-8">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-gray-800">
                                            <th className="py-4 text-white uppercase text-sm">Model</th>
                                            <th className="py-4 text-white uppercase text-sm">VRAM Reqm.</th>
                                            <th className="py-4 text-white uppercase text-sm">Reasoning Speed</th>
                                            <th className="py-4 text-white uppercase text-sm">Verdict</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-400 text-sm">
                                        <tr className="border-b border-gray-900">
                                            <td className="py-4">Llama-3-8b</td>
                                            <td className="py-4">~6 GB</td>
                                            <td className="py-4">Medium</td>
                                            <td className="py-4">Good, but heavy on laptops.</td>
                                        </tr>
                                        <tr className="border-b border-gray-900 bg-[#0a0a0a]">
                                            <td className="py-4 text-green-500 font-bold">Qwen-2.5-3b</td>
                                            <td className="py-4 text-green-500">~2.5 GB</td>
                                            <td className="py-4 text-green-500">Very Fast</td>
                                            <td className="py-4 text-green-500">Selected for core logic.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4">Phi-3-Mini</td>
                                            <td className="py-4">~2 GB</td>
                                            <td className="py-4">Fast</td>
                                            <td className="py-4">Context window issues.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
</ScrollReveal>

                    <ScrollReveal direction="up" delay={0.1}>
<section>
                        <h2 className="text-white text-3xl font-black uppercase mb-8 border-l-4 border-red-600 pl-4 tracking-tight">Determinism vs Hallucination</h2>
                        <div className="bg-[#050505] brutalist-border p-8">
                            <p className="text-gray-300 leading-relaxed">
                                A critical design decision was separating the factual measurement of behavior from the AI's interpretation. The Go daemon writes strict facts to SQLite (e.g., "Chrome was open on youtube.com for 5 minutes"). The LLM is only given read-access to this data to form opinions. This guarantees the AI cannot hallucinate past user actions—it can only judge them.
                            </p>
                        </div>
                    </section>
</ScrollReveal>

                </div>
            </div>
        </main>
    );
}
