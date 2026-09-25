import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/projects';
import { ExternalLink, ArrowRight, Github } from 'lucide-react';

export async function generateMetadata({ params }: { params: { project: string } }) {
    // Next.js 15: params must be awaited
    const { project: slug } = await params;
    const p = getProjectBySlug(slug);
    if (!p) return { title: 'Project Not Found' };

    return {
        title: `${p.title} | Technical Documentation`,
        description: p.fullDescription,
        keywords: [p.title, ...p.tags.map(t => t.text)],
        alternates: {
            canonical: `https://${p.subdomain}`,
        },
        openGraph: {
            title: `${p.title} | Technical Documentation`,
            description: p.fullDescription,
            url: `https://${p.subdomain}`,
            siteName: p.title,
            type: 'website',
        }
    };
}

export default async function ProjectSitePage({ params }: { params: { project: string } }) {
    // Next.js 15: params must be awaited
    const { project: slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-20">
            {/* Header */}
            <header className="mb-20">
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        {project.category}
                    </span>
                    <span className="text-xs font-mono text-gray-500">
                        {project.status.toUpperCase()}
                    </span>
                </div>
                
                <h1 className="text-2xl font-black tracking-tighter mb-6 text-black">
                    {project.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mb-10">
                    {project.fullDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                    {project.links.map(link => (
                        <a 
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                                link.primary 
                                ? 'bg-black text-white hover:bg-gray-800'
                                : 'bg-white text-black border-2 border-gray-200 hover:border-black'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </header>

            {/* Grid Layout for Tech & Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                {/* Tech Stack */}
                <section>
                    <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-6">// Core Technologies</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map(t => (
                            <span key={t} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono font-medium text-gray-700">
                                {t}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Metrics */}
                {project.metrics && (
                    <section>
                        <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-6">// Performance & Metrics</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {project.metrics.map(m => (
                                <div key={m.label} className="p-5 bg-gray-50 border border-gray-100 rounded-xl">
                                    <div className="text-xs font-mono text-gray-500 mb-2">{m.label}</div>
                                    <div className="text-2xl font-black font-mono">{m.value}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Terminal Preview */}
            {project.terminal && (
                <section className="mb-20">
                    <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-6">// Quick Start</h2>
                    <div className="bg-zinc-950 rounded-xl p-8 font-mono text-sm border border-zinc-800 shadow-2xl">
                        <div className="flex gap-2 text-white mb-4">
                            <span className="text-blue-500">➜</span>
                            <span className="text-zinc-400">~</span>
                            <span>{project.terminal.command}</span>
                        </div>
                        <div className="space-y-2 pl-4 border-l-2 border-zinc-800">
                            {project.terminal.output.map((line, i) => (
                                <div key={i} className={`${line.color}`}>{line.text}</div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Architecture / Breakdown */}
            <section className="mb-20">
                <h2 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-8">// System Architecture</h2>
                <div className="space-y-8">
                    {project.bullets.map((b, i) => (
                        <div key={b.label} className="flex gap-6 items-start">
                            <div className="text-2xl font-black text-gray-200 font-mono w-10 shrink-0">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">{b.label}</h3>
                                <p className="text-gray-600 leading-relaxed max-w-2xl">{b.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="pt-10 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm font-mono text-gray-500">
                    Built by <a href="https://rounakneema.in" className="text-black font-bold hover:underline">Rounak Neema</a>
                </div>
                <a href="https://rounakneema.in/projects" className="text-sm font-mono font-bold text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    View all projects <ArrowRight className="w-4 h-4" />
                </a>
            </footer>
        </div>
    );
}
