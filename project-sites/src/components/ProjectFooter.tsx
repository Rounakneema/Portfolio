import React from 'react';
import { projects } from '@/lib/projects';

export function ProjectFooter({ slug }: { slug: string }) {
    const project = projects.find(p => p.slug === slug);
    if (!project) return null;

    return (
        <footer className="mt-24 pt-12 border-t border-white/10 w-full max-w-7xl mx-auto px-6 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Entity Metadata */}
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Entity Metadata</h3>
                    <dl className="grid grid-cols-2 gap-4 text-xs font-mono">
                        <div className="flex flex-col gap-1">
                            <dt className="text-gray-500 uppercase">Author</dt>
                            <dd className="font-bold text-white">Rounak Neema</dd>
                        </div>
                        <div className="flex flex-col gap-1">
                            <dt className="text-gray-500 uppercase">Category</dt>
                            <dd className="font-bold text-white">{project.category}</dd>
                        </div>
                        <div className="flex flex-col gap-1">
                            <dt className="text-gray-500 uppercase">Status</dt>
                            <dd className="font-bold text-white">{project.status}</dd>
                        </div>
                        {project.github && (
                            <div className="flex flex-col gap-1">
                                <dt className="text-gray-500 uppercase">Source</dt>
                                <dd className="font-bold text-white">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2 text-blue-400">GitHub &#8599;</a>
                                </dd>
                            </div>
                        )}
                    </dl>
                </div>

                {/* Related Projects */}
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Also by Rounak Neema</h3>
                    <div className="flex flex-col gap-3 font-mono text-xs">
                        {projects.filter(p => p.slug !== slug).slice(0, 3).map(p => (
                            <a key={p.slug} href={`https://${p.subdomain}`} className="text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white">
                                &#8599; {p.title} &mdash; {p.category}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-xs font-mono text-gray-600">
                <a href="https://rounakneema.in" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20">
                    &larr; Back to Portfolio Main
                </a>
                <span className="uppercase tracking-widest">
                    {project.title}_SYSTEM // {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    );
}
