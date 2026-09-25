import { projects } from '@/lib/projects';
import Link from 'next/link';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { EntityHeader } from '@/components/EntityHeader';
import { ProjectFacts, RelatedProjects } from '@/components/ProjectFacts';
import { HeroSequence } from './HeroSequence';

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
            <header className="p-4 md:p-8 border-b border-[#333] flex flex-col md:flex-row justify-between items-start md:items-center text-xs uppercase tracking-widest gap-4">
                <div className="flex gap-4">
                    <span className="text-[#58a6ff] bg-[#1f6feb]/10 border border-[#1f6feb]/30 px-2 py-1">Project Ref: {project.slug}</span>
                    <span className="text-[#58a6ff] bg-[#1f6feb]/10 border border-[#1f6feb]/30 px-2 py-1">Status: {project.status}</span>
                </div>
                <nav className="flex gap-6 border-l border-[#333] pl-6 overflow-x-auto w-full md:w-auto">
                    <Link href="/devcontext" className="text-white border-b border-[#1f6feb] hover:text-[#58a6ff] transition-colors whitespace-nowrap">Analysis Pipeline</Link>
                    <Link href="/devcontext/grounding" className="text-[#666] hover:text-[#58a6ff] transition-colors whitespace-nowrap">Grounding</Link>
                    <Link href="/devcontext/architecture" className="text-[#666] hover:text-[#58a6ff] transition-colors whitespace-nowrap">Architecture</Link>
                    <Link href="/devcontext/interview" className="text-[#666] hover:text-[#58a6ff] transition-colors whitespace-nowrap">Interview Engine</Link>
                    <Link href="/devcontext/docs" className="text-[#666] hover:text-[#58a6ff] transition-colors whitespace-nowrap">Docs</Link>
                </nav>
            </header>

            <div className="p-4 md:p-8 lg:p-16 pt-12">
                <HeroSequence />
                
                <div className="mt-24 border-t border-[#1f6feb]/30 pt-16">
                    <EntityHeader 
                        title="Klarity"
                        subtitle="AI Repository Intelligence for Technical Recruiting"
                        category="Recruiting Tech"
                        status={project.status}
                        language="React / AWS Serverless"
                        architecture="/devcontext/architecture"
                        docs="/devcontext/docs"
                    />
                    <ProjectFacts facts={[
                        { label: "Built by", value: "Rounak Neema" },
                        { label: "Primary Stack", value: "React & AWS Serverless" },
                        { label: "AI Engine", value: "Amazon Bedrock / Claude" },
                        { label: "Key Differentiator", value: "Repository Grounding" }
                    ]} />
                </div>
            </div>

            {/* Data Grid */}
            <section className="grid grid-cols-1 md:grid-cols-4 border-y border-[#333]">
                {project.metrics?.map((metric, i) => (
                    <div key={i} className={`p-6 border-b md:border-b-0 ${i !== 3 ? 'md:border-r' : ''} border-[#333] hover:bg-[#1f6feb]/5 transition-colors`}>
                        <div className="text-[10px] text-[#1f6feb] uppercase mb-2">Metric_{i+1} // {metric.label}</div>
                        <div className="text-2xl font-bold tracking-tight text-white">{metric.value}</div>
                    </div>
                ))}
            </section>

            {/* Content Asymmetric */}
            <section className="p-4 md:p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-[#333]">
                <div className="lg:col-span-5 space-y-16">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#58a6ff] mb-6 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-[#1f6feb]"></span>
                            The Challenge
                        </h2>
                        <p className="text-lg leading-relaxed text-[#aaa]">
                            {project.challenge}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#58a6ff] mb-6 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-[#1f6feb]"></span>
                            The Solution
                        </h2>
                        <p className="text-lg leading-relaxed text-[#aaa]">
                            {project.solution}
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-7 bg-[#050505] border border-[#1f6feb]/30 p-8 md:p-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#1f6feb]/10 blur-3xl rounded-full group-hover:bg-[#1f6feb]/20 transition-all duration-700"></div>
                    <h3 className="text-2xl font-bold uppercase mb-8 border-b border-[#1f6feb]/30 pb-4 text-white">System Context</h3>
                    <p className="text-base leading-loose text-[#ccc] mb-12">
                        {project.fullDescription}
                    </p>
                    
                    <div className="space-y-6">
                        {project.bullets.map((bullet, i) => (
                            <div key={i} className="flex gap-4 items-start border-l-2 border-[#1f6feb] pl-4">
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase mb-1">{bullet.label}</h4>
                                    <p className="text-sm text-[#888]">{bullet.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-[#1f6feb]/30">
                        <Link href="/devcontext/architecture" className="inline-flex items-center gap-2 bg-[#1f6feb] text-white px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#58a6ff] transition-colors">
                            Deep Dive Architecture &rarr;
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* FAQ Section */}
            <section className="p-4 md:p-8 lg:p-16 bg-[#000] border-t border-[#333]">
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-8 border-l-4 border-[#1f6feb] pl-4">Frequently Asked Questions</h2>
                <div className="space-y-6 max-w-4xl">
                    {projectData.faq.map((q, i) => (
                        <div key={i} className="bg-[#111] border border-[#222] hover:border-[#1f6feb]/50 transition-colors p-6">
                            <h3 className="text-white font-bold mb-2">{q.question}</h3>
                            <p className="text-[#aaa] text-sm leading-relaxed">{q.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="px-4 md:px-8 lg:px-16 pb-16 bg-[#0a0a0a]">
                <RelatedProjects links={[
                    { name: "SortMail", url: "/sortmail" },
                    { name: "Portfolio", url: "/" }
                ]} />
            </div>
            {/* Footer */}
            <footer className="p-8 border-t border-[#333] flex justify-between items-center text-xs uppercase text-[#555]">
                <div>DevContext.AI // {new Date().getFullYear()}</div>
                <Link href="/" className="hover:text-[#58a6ff] transition-colors flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-current"></span>
                    Return Home
                </Link>
            </footer>
        </main>
    );
}
