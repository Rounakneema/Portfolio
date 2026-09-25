import React from 'react';
import { projects } from '@/lib/projects';

export function ProjectFacts({ facts }: { facts: { label: string; value: string }[] }) {
    if (!facts) return null;
    return (
        <div className="py-8 mb-8 border-b border-white/5">
            <h2 className="sr-only">Structured Facts</h2>
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
                {facts.map((fact, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <dt className="text-gray-500 uppercase tracking-wider">{fact.label}</dt>
                        <dd className="text-white font-medium">{fact.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export function RelatedProjects({ links }: { links?: { name: string; url: string }[] }) {
    let finalLinks = links;
    if (!finalLinks) {
        finalLinks = projects.slice(0, 3).map(p => ({
            name: p.title,
            url: `https://${p.subdomain}`
        }));
    }

    return (
        <section className="mt-24 pt-12 border-t border-white/10 opacity-70 hover:opacity-100 transition-opacity">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Also by Rounak Neema</h3>
            <div className="flex flex-wrap gap-6 font-mono text-xs">
                {finalLinks.map((link, index) => (
                    <a key={index} href={link.url} className="text-white hover:text-gray-300 underline underline-offset-4 transition-colors">
                        +? {link.name}
                    </a>
                ))}
                <div className="w-full mt-4">
                    <a href="https://rounakneema.in" className="text-gray-500 hover:text-white underline underline-offset-4 transition-colors">
                        +? Back to Portfolio Main
                    </a>
                </div>
            </div>
        </section>
    );
}
