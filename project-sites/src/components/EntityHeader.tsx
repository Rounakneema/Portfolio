import React from 'react';

export function EntityHeader({ 
    title, 
    subtitle, 
    category, 
    status, 
    language, 
    github
}: { 
    title: string; 
    subtitle: string; 
    category?: string; 
    status?: string; 
    language?: string; 
    github?: string; 
    docs?: string; 
    architecture?: string;
}) {
    return (
        <article className="py-12 mt-12 border-t border-white/10 opacity-60 hover:opacity-100 transition-opacity">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
            {subtitle && <p className="text-lg text-gray-400 mb-8 max-w-2xl">{subtitle}</p>}
            
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
                <div className="flex flex-col gap-1">
                    <dt className="text-gray-500 uppercase">Author</dt>
                    <dd className="font-bold text-white">
                        <a rel="author" href="https://rounakneema.in" className="hover:underline underline-offset-2">Rounak Neema</a>
                    </dd>
                </div>
                {category && (
                    <div className="flex flex-col gap-1">
                        <dt className="text-gray-500 uppercase">Category</dt>
                        <dd className="font-bold text-white">{category}</dd>
                    </div>
                )}
                {language && (
                    <div className="flex flex-col gap-1">
                        <dt className="text-gray-500 uppercase">Stack</dt>
                        <dd className="font-bold text-white">{language}</dd>
                    </div>
                )}
                {status && (
                    <div className="flex flex-col gap-1">
                        <dt className="text-gray-500 uppercase">Status</dt>
                        <dd className="font-bold text-white">{status}</dd>
                    </div>
                )}
            </dl>

            {github && (
                <div className="mt-6 font-mono text-xs">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors underline underline-offset-4">
                        View Source on GitHub ↗
                    </a>
                </div>
            )}
        </article>
    );
}
