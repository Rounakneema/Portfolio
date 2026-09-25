import { projects } from '@/lib/projects';
import Link from 'next/link';

export const metadata = {
    title: 'DevContext.AI | Engineering Case Study',
    description: 'AI Repository Intelligence for Recruiters',
};

export default function DevContextPage() {
    const project = projects.find(p => p.slug === 'devcontext');

    if (!project) return null;

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#fff] selection:text-[#000] overflow-x-hidden">
            {/* Header */}
            <header className="p-4 md:p-8 border-b border-[#333] flex flex-col md:flex-row justify-between items-start md:items-center text-xs uppercase tracking-widest gap-4">
                <div className="flex gap-4">
                    <span className="text-white bg-[#222] px-2 py-1">Project Ref: {project.slug}</span>
                    <span className="text-white bg-[#222] px-2 py-1">Status: {project.status}</span>
                </div>
                <nav className="flex gap-6 border-l border-[#333] pl-6">
                    <Link href="/devcontext" className="text-white border-b border-white hover:text-white transition-colors">Overview</Link>
                    <Link href="/devcontext/architecture" className="text-[#666] hover:text-white transition-colors">Architecture</Link>
                    <Link href="/devcontext/decisions" className="text-[#666] hover:text-white transition-colors">Decisions</Link>
                    <Link href="/devcontext/docs" className="text-[#666] hover:text-white transition-colors">Docs</Link>
                </nav>
            </header>

            {/* Hero */}
            <section className="p-4 md:p-8 lg:p-16 relative">
                <div className="absolute top-0 right-0 p-16 text-2xl font-bold text-[#1a1a1a] select-none pointer-events-none leading-none -z-10 tracking-tighter mix-blend-difference">
                    DCX:01
                </div>
                <div className="max-w-5xl">
                    <h1 className="text-2xl font-bold uppercase tracking-tighter leading-[0.9] mb-8 text-white">
                        {project.title.split(' / ').map((t, i) => (
                            <span key={i} className="block hover:italic transition-all duration-300">
                                {t}
                            </span>
                        ))}
                    </h1>
                    <p className="text-xl md:text-3xl font-light max-w-2xl text-[#888] mb-16 border-l-4 border-white pl-6">
                        {project.subtitle}
                    </p>
                </div>
            </section>

            {/* Data Grid */}
            <section className="grid grid-cols-1 md:grid-cols-4 border-y border-[#333]">
                {project.metrics?.map((metric, i) => (
                    <div key={i} className={`p-6 border-b md:border-b-0 ${i !== 3 ? 'md:border-r' : ''} border-[#333] hover:bg-[#111] transition-colors`}>
                        <div className="text-[10px] text-[#666] uppercase mb-2">Metric_{i+1} // {metric.label}</div>
                        <div className="text-2xl font-bold tracking-tight text-white">{metric.value}</div>
                    </div>
                ))}
            </section>

            {/* Content Asymmetric */}
            <section className="p-4 md:p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-[#333]">
                <div className="lg:col-span-5 space-y-16">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-white"></span>
                            The Challenge
                        </h2>
                        <p className="text-lg leading-relaxed text-[#aaa]">
                            {project.challenge}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-white"></span>
                            The Solution
                        </h2>
                        <p className="text-lg leading-relaxed text-[#aaa]">
                            {project.solution}
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-7 bg-[#050505] border border-[#222] p-8 md:p-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all duration-700"></div>
                    <h3 className="text-2xl font-bold uppercase mb-8 border-b border-[#333] pb-4 text-white">System Context</h3>
                    <p className="text-base leading-loose text-[#ccc] mb-12">
                        {project.fullDescription}
                    </p>
                    
                    <div className="space-y-6">
                        {project.bullets.map((bullet, i) => (
                            <div key={i} className="flex gap-4 items-start border-l border-[#333] pl-4">
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase mb-1">{bullet.label}</h4>
                                    <p className="text-sm text-[#888]">{bullet.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-[#333]">
                        <Link href="/devcontext/architecture" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#ccc] transition-colors">
                            Deep Dive Architecture &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tech Stack Terminal */}
            <section className="p-4 md:p-8 lg:p-16 bg-[#000]">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 mb-4 px-4 border-b border-[#222] pb-2">
                        <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                        <div className="ml-4 text-xs text-[#555] font-mono">system_trace.log</div>
                    </div>
                    <div className="p-6 md:p-10 font-mono text-sm leading-relaxed overflow-x-auto text-[#aaa]">
                        <div className="text-white mb-4">$ analyze-stack --target devcontext</div>
                        <div className="text-[#666] mb-6">Initializing dependency graph... Done.</div>
                        {project.tech.map((tech, i) => (
                            <div key={i} className="flex gap-4 mb-2">
                                <span className="text-[#444]">[{String(i+1).padStart(2, '0')}:INFO]</span>
                                <span className="text-[#888]">Layer {i+1}:</span>
                                <span className="text-white">{tech}</span>
                                <span className="text-[#444] ml-auto block whitespace-nowrap">STATUS: STABLE</span>
                            </div>
                        ))}
                        <div className="text-white mt-6 animate-pulse">_</div>
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="p-8 border-t border-[#333] flex justify-between items-center text-xs uppercase text-[#555]">
                <div>DevContext.AI // {new Date().getFullYear()}</div>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-current"></span>
                    Return Home
                </Link>
            </footer>
        </main>
    );
}
