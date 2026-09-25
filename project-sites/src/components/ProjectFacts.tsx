import React from 'react';

export function ProjectFacts({ facts }: { facts: { label: string; value: string }[] }) {
    return (
        <div className="bg-[#111] border-2 border-[#333] p-8 mb-12">
            <h2 className="text-xl font-bold uppercase tracking-widest text-white mb-6 border-b border-[#333] pb-4">
                Structured Facts
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-sm">
                {facts.map((fact, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <dt className="text-gray-500 uppercase">{fact.label}</dt>
                        <dd className="text-white font-bold">{fact.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export function RelatedProjects({ links }: { links: { name: string; url: string }[] }) {
    return (
        <section className="mt-24 pt-12 border-t-4 border-[#222]">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Also by Rounak Neema</h3>
            <div className="flex flex-col gap-4 font-mono text-sm">
                {links.map((link, index) => (
                    <a key={index} href={link.url} className="text-white hover:text-red-500 hover:underline decoration-red-500 underline-offset-4 transition-colors">
                        ↗ {link.name}
                    </a>
                ))}
                <a href="https://rounakneema.in" className="text-white hover:text-blue-500 hover:underline decoration-blue-500 underline-offset-4 transition-colors mt-4 pt-4 border-t border-[#333]">
                    ↗ Back to Portfolio Main
                </a>
            </div>
        </section>
    );
}
