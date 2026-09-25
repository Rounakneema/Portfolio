import { projects } from '@/lib/projects';
import Link from 'next/link';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { HeroSequence } from './HeroSequence';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

export const metadata = {
    title: 'Klarity — AI Repository Intelligence for Technical Recruiting',
    description: 'AI Repository Intelligence for Technical Recruiting featuring repository grounding.',
    alternates: {
        canonical: 'https://devcontext.rounakneema.in'
    }
};

export default function DevContextPage() {
    const project = projects.find(p => p.slug === 'devcontext');

    const projectData = {
        name: 'Klarity',
        url: 'https://devcontext.rounakneema.in',
        description: 'AI Repository Intelligence for Technical Recruiting.',
        schemaCategory: 'SoftwareApplication',
        programmingLanguage: 'React, AWS Serverless',
        faq: [
            { question: "What is Klarity?", answer: "Klarity is an AI Repository Intelligence tool designed for technical recruiting to provide accurate insights." },
            { question: "How does it prevent hallucinated assessments?", answer: "It utilizes repository grounding to anchor AI responses in actual codebase reality, significantly reducing hallucinated assessments." },
            { question: "How does repository grounding work?", answer: "Repository grounding works by analyzing the candidate's actual code repository, understanding its context, and feeding this precise context to the AI (Amazon Bedrock / Claude)." },
            { question: "What is the primary tech stack?", answer: "The primary stack includes React for the frontend and AWS Serverless for scalable backend processing." },
            { question: "Who built Klarity?", answer: "Klarity was built by Rounak Neema." },
            { question: "What AI models does Klarity use?", answer: "Klarity leverages Amazon Bedrock and Claude for its AI capabilities." },
            { question: "What is the key differentiator of Klarity?", answer: "The key differentiator is its robust repository grounding mechanism." }
        ]
    };

    if (!project) return null;

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#1f6feb] selection:text-[#fff] overflow-x-hidden">
            <ProjectJsonLd slug="devcontext" />
            {/* Header */}
            <ScrollReveal direction="up" delay={0.1}>
                <header className="p-4 md:p-8 border-b border-[#333] flex flex-col md:flex-row justify-between items-start md:items-center text-xs uppercase tracking-widest gap-4">
                    <div className="flex gap-4">
                        <span className="text-[#58a6ff] bg-[#1f6feb]/10 border border-[#1f6feb]/30 px-2 py-1">Project Ref: {project.slug}</span>
                        <span className="text-[#58a6ff] bg-[#1f6feb]/10 border border-[#1f6feb]/30 px-2 py-1">Status: {project.status}</span>
                    </div>
                    <nav className="flex gap-6 border-l border-[#333] pl-6 overflow-x-auto w-full md:w-auto">
                        <Link href="/" className="text-white border-b border-[#1f6feb] hover:text-[#58a6ff] hover:-translate-y-1 hover:border-[#1f6feb] transition-all duration-300 whitespace-nowrap">Analysis Pipeline</Link>
                        <Link href="/grounding" className="text-[#666] hover:text-[#58a6ff] hover:-translate-y-1 hover:border-[#1f6feb] transition-all duration-300 whitespace-nowrap">Grounding</Link>
                        <Link href="/architecture" className="text-[#666] hover:text-[#58a6ff] hover:-translate-y-1 hover:border-[#1f6feb] transition-all duration-300 whitespace-nowrap">Architecture</Link>
                        <Link href="/interview" className="text-[#666] hover:text-[#58a6ff] hover:-translate-y-1 hover:border-[#1f6feb] transition-all duration-300 whitespace-nowrap">Interview Engine</Link>
                        <Link href="/docs" className="text-[#666] hover:text-[#58a6ff] hover:-translate-y-1 hover:border-[#1f6feb] transition-all duration-300 whitespace-nowrap">Docs</Link>
                    </nav>
                </header>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
                <div className="p-4 md:p-8 lg:p-16 pt-12">
                    <HeroSequence />
                    
                    <div className="mt-24 border-t border-[#1f6feb]/30 pt-16">
                    </div>
                </div>
            </ScrollReveal>

            {/* Data Grid */}
            <ScrollReveal direction="up" delay={0.1}>
                <StaggerContainer>
                    <section className="grid grid-cols-1 md:grid-cols-4 border-y border-[#333]">
                        {project.metrics?.map((metric, i) => (
                            <StaggerItem key={i}>
                                <div className={`p-6 border-b md:border-b-0 ${i !== 3 ? 'md:border-r' : ''} border-[#333] bg-white/5 backdrop-blur-md rounded-lg shadow-xl hover:-translate-y-1 hover:border-[#1f6feb] transition-all duration-300`}>
                                    <div className="text-[10px] text-[#1f6feb] uppercase mb-2">Metric_{i+1} // {metric.label}</div>
                                    <div className="text-2xl font-bold tracking-tight text-white">{metric.value}</div>
                                </div>
                            </StaggerItem>
                        ))}
                    </section>
                </StaggerContainer>
            </ScrollReveal>

            {/* Content Asymmetric */}
            <ScrollReveal direction="up" delay={0.1}>
                <section className="p-4 md:p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-[#333]">
                    <div className="lg:col-span-5 space-y-16">
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-tighter text-[#58a6ff] mb-6 flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-[#1f6feb]"></span>
                                The Challenge
                            </h2>
                            <p className="text-lg leading-relaxed text-[#aaa]">
                                {project.challenge}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-tighter text-[#58a6ff] mb-6 flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-[#1f6feb]"></span>
                                The Solution
                            </h2>
                            <p className="text-lg leading-relaxed text-[#aaa]">
                                {project.solution}
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl relative overflow-hidden group hover:-translate-y-1 hover:border-[#1f6feb] transition-all duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#1f6feb]/10 blur-3xl rounded-full group-hover:bg-[#1f6feb]/20 transition-all duration-700"></div>
                        <h3 className="text-2xl font-bold uppercase mb-8 border-b border-[#1f6feb]/30 pb-4 text-white tracking-tight">System Context</h3>
                        <p className="text-base leading-relaxed text-[#ccc] mb-12">
                            {project.fullDescription}
                        </p>
                        
                        <StaggerContainer>
                            <div className="space-y-6">
                                {project.bullets.map((bullet, i) => (
                                    <StaggerItem key={i}>
                                        <div className="flex gap-4 items-start border-l-2 border-[#1f6feb] pl-4">
                                            <div>
                                                <h4 className="text-white font-bold text-sm uppercase mb-1 tracking-tight">{bullet.label}</h4>
                                                <p className="text-sm text-[#888] leading-relaxed">{bullet.text}</p>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </div>
                        </StaggerContainer>

                        <div className="mt-12 pt-8 border-t border-[#1f6feb]/30">
                            <Link href="/architecture" className="inline-flex items-center gap-2 bg-[#1f6feb] text-white px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#58a6ff] hover:-translate-y-1 hover:border-[#1f6feb] transition-all duration-300">
                                Deep Dive Architecture &rarr;
                            </Link>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
            
            {/* FAQ Section */}
            <ScrollReveal direction="up" delay={0.1}>
                <section className="p-4 md:p-8 lg:p-16 bg-[#000] border-t border-[#333]">
                    <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-8 border-l-4 border-[#1f6feb] pl-4">Frequently Asked Questions</h2>
                    <StaggerContainer>
                        <div className="space-y-6 max-w-4xl">
                            {projectData.faq.map((q, i) => (
                                <StaggerItem key={i}>
                                    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl hover:-translate-y-1 hover:border-[#1f6feb] transition-all duration-300">
                                        <h3 className="text-white font-bold mb-2 tracking-tight">{q.question}</h3>
                                        <p className="text-[#aaa] text-sm leading-relaxed">{q.answer}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </section>
            </ScrollReveal>

            <div className="px-4 md:px-8 lg:px-16 pb-16 bg-[#0a0a0a]">
                </div>
            {/* Footer */}
            <ScrollReveal direction="up" delay={0.1}>
                <footer className="p-8 border-t border-[#333] flex justify-between items-center text-xs uppercase text-[#555]">
                    <div>DevContext.AI // {new Date().getFullYear()}</div>
                    <Link href="/" className="hover:text-[#58a6ff] hover:-translate-y-1 hover:border-[#1f6feb] transition-all duration-300 flex items-center gap-2">
                        <span className="w-4 h-[1px] bg-current"></span>
                        Return Home
                    </Link>
                </footer>
            </ScrollReveal>
        </main>
    );
}
