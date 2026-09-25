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
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#00d4aa] selection:text-black">
            <style dangerouslySetInnerHTML={{ __html: `
                .grid-bg { background-size: 40px 40px; background-image: linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px); }
            `}} />

            <div className="max-w-[1200px] mx-auto p-6 md:p-12 xl:p-16 grid-bg min-h-screen">
                <div className="space-y-16">
                    
                    <ScrollReveal direction="up" delay={0.1}>
                        <section>
                            <h2 className="text-white text-3xl font-black uppercase mb-8 border-l-4 border-[#00d4aa] pl-4 tracking-tighter">Zero-Cloud Privacy</h2>
                            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl hover:-translate-y-1 hover:border-[#00d4aa] transition-all duration-300">
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Modern productivity agents rely heavily on cloud APIs (OpenAI, Anthropic) to process context. This fundamentally compromises privacy when dealing with screen content, private messages, and personal work habits. AXIOM OS enforces a strict <strong>zero-cloud constraint</strong>.
                                </p>
                                <StaggerContainer>
                                    <ul className="list-disc list-inside text-gray-400 space-y-3">
                                        <StaggerItem><li className="leading-relaxed">No external API keys required.</li></StaggerItem>
                                        <StaggerItem><li className="leading-relaxed">All inference runs locally via Ollama.</li></StaggerItem>
                                        <StaggerItem><li className="leading-relaxed">Telemetry never leaves the device loopback interface.</li></StaggerItem>
                                    </ul>
                                </StaggerContainer>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.1}>
                        <section>
                            <h2 className="text-white text-3xl font-black uppercase mb-8 border-l-4 border-[#00d4aa] pl-4 tracking-tighter">Local Model Selection</h2>
                            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl hover:-translate-y-1 hover:border-[#00d4aa] transition-all duration-300">
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Running an LLM constantly in the background can monopolize system resources. We evaluated several models before settling on the 3-billion to 8-billion parameter class.
                                </p>
                                
                                <div className="overflow-x-auto mt-8">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b-2 border-gray-800">
                                                <th className="py-4 text-white uppercase text-sm tracking-tight">Model</th>
                                                <th className="py-4 text-white uppercase text-sm tracking-tight">VRAM Reqm.</th>
                                                <th className="py-4 text-white uppercase text-sm tracking-tight">Reasoning Speed</th>
                                                <th className="py-4 text-white uppercase text-sm tracking-tight">Verdict</th>
                                            </tr>
                                        </thead>
                                        <StaggerContainer>
                                            <tbody className="text-gray-400 text-sm">
                                                <StaggerItem>
                                                    <tr className="border-b border-gray-900 hover:bg-white/5 transition-colors">
                                                        <td className="py-4 leading-relaxed">Llama-3-8b</td>
                                                        <td className="py-4 leading-relaxed">~6 GB</td>
                                                        <td className="py-4 leading-relaxed">Medium</td>
                                                        <td className="py-4 leading-relaxed">Good, but heavy on laptops.</td>
                                                    </tr>
                                                </StaggerItem>
                                                <StaggerItem>
                                                    <tr className="border-b border-[#00d4aa]/30 bg-[#00d4aa]/5 hover:bg-[#00d4aa]/10 transition-colors">
                                                        <td className="py-4 text-[#00d4aa] font-bold leading-relaxed">Qwen-2.5-3b</td>
                                                        <td className="py-4 text-[#00d4aa] leading-relaxed">~2.5 GB</td>
                                                        <td className="py-4 text-[#00d4aa] leading-relaxed">Very Fast</td>
                                                        <td className="py-4 text-[#00d4aa] leading-relaxed">Selected for core logic.</td>
                                                    </tr>
                                                </StaggerItem>
                                                <StaggerItem>
                                                    <tr className="hover:bg-white/5 transition-colors">
                                                        <td className="py-4 leading-relaxed">Phi-3-Mini</td>
                                                        <td className="py-4 leading-relaxed">~2 GB</td>
                                                        <td className="py-4 leading-relaxed">Fast</td>
                                                        <td className="py-4 leading-relaxed">Context window issues.</td>
                                                    </tr>
                                                </StaggerItem>
                                            </tbody>
                                        </StaggerContainer>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.1}>
                        <section>
                            <h2 className="text-white text-3xl font-black uppercase mb-8 border-l-4 border-[#00d4aa] pl-4 tracking-tighter">Determinism vs Hallucination</h2>
                            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl hover:-translate-y-1 hover:border-[#00d4aa] transition-all duration-300">
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
