import React from 'react';
import { projects } from '@/lib/projects';

export function ProjectFooter({ slug }: { slug: string }) {
    const project = projects.find(p => p.slug === slug);
    if (!project) return null;

    // SortMail is light-themed, others are dark-themed
    const isLight = slug === 'sortmail';
    const bgClass = isLight ? 'bg-[#f8f9fa]' : 'bg-[#0a0a0a]';
    const textClass = isLight ? 'text-[#111]' : 'text-[#e0e0e0]';
    const borderClass = isLight ? 'border-black/10' : 'border-white/10';
    const mutedClass = isLight ? 'text-gray-500' : 'text-gray-400';
    const hoverClass = isLight ? 'hover:text-black' : 'hover:text-white';
    const decorationClass = isLight ? 'decoration-black/20 hover:decoration-black' : 'decoration-white/20 hover:decoration-white';

    return (
        <footer className={`w-full ${bgClass} ${textClass}`}>
            <div className={`mt-12 pt-8 border-t ${borderClass} w-full max-w-7xl mx-auto px-6 pb-8 opacity-90`}>
                <div className="flex flex-col lg:flex-row justify-between gap-12 text-xs font-mono">
                    
                    {/* Metadata */}
                    <div className="flex flex-wrap gap-x-12 gap-y-6">
                        <div className="flex flex-col gap-1.5">
                            <span className={`${mutedClass} uppercase tracking-widest font-bold`}>Author</span>
                            <span className="font-bold">Rounak Neema</span>
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
                                    &#8599; {p.title} &mdash; {p.category}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`mt-12 pt-6 border-t ${borderClass} flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono ${mutedClass}`}>
                    <a href="https://rounakneema.in" className={`${hoverClass} transition-colors underline underline-offset-4 ${decorationClass}`}>
                        &larr; Back to Portfolio Main
                    </a>
                    <span className="uppercase tracking-widest">
                        {project.title}_SYSTEM // {new Date().getFullYear()}
                    </span>
                </div>
            </div>
        </footer>
    );
}
