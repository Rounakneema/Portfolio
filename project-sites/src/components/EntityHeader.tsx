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
    // Only return the metadata table, stripped of the massive brutalist borders and duplicate nav buttons
    return (
        <article className="py-12 mt-12 border-t border-white/10 opacity-60 hover:opacity-100 transition-opacity">
            <h2 className="sr-only">{title} Metadata</h2>
            
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
                        View Source on GitHub +?
                    </a>
                </div>
            )}
        </article>
    );
}
