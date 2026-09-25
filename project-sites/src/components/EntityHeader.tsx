import React from 'react';

export function EntityHeader({ 
    title, 
    subtitle, 
    category, 
    status, 
    language, 
    github, 
    docs, 
    architecture 
}: { 
    title: string; 
    subtitle: string; 
    category: string; 
    status: string; 
    language: string; 
    github?: string; 
    docs?: string; 
    architecture?: string;
}) {
    return (
        <article className="border-4 border-white bg-[#0a0a0a] p-6 md:p-12 mb-12 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">{title}</h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 font-mono border-l-4 border-white pl-4 py-2">{subtitle}</p>
            
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm font-mono border-t-2 border-white pt-8 mb-8">
                <div className="flex justify-between border-b border-gray-800 pb-2">
                    <dt className="text-gray-500 uppercase">Author</dt>
                    <dd className="font-bold text-white">
                        <a rel="author" href="https://rounakneema.in" className="hover:underline decoration-white underline-offset-4">Rounak Neema</a>
                    </dd>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                    <dt className="text-gray-500 uppercase">Category</dt>
                    <dd className="font-bold text-white">{category}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                    <dt className="text-gray-500 uppercase">Language</dt>
                    <dd className="font-bold text-white">{language}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                    <dt className="text-gray-500 uppercase">Status</dt>
                    <dd className="font-bold text-white">{status}</dd>
                </div>
            </dl>

            <div className="flex flex-wrap gap-4 font-mono text-xs font-bold uppercase tracking-widest">
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 hover:bg-gray-200 transition-colors">
                        [ GitHub ]
                    </a>
                )}
                {architecture && (
                    <a href={architecture} className="border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
                        [ Architecture ]
                    </a>
                )}
                {docs && (
                    <a href={docs} className="border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
                        [ Docs ]
                    </a>
                )}
            </div>
        </article>
    );
}
