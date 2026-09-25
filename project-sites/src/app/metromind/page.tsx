import Link from 'next/link';
import {
    ArrowRight,
    ExternalLink,
    Github,
    Database,
    Search,
    Shield,
    Zap,
    Container,
    BrainCircuit,
    LockKeyhole,
    Network,
    Activity,
    FileSearch,
    Layers3,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MetroMind — AI Document Intelligence Platform',
    description:
        'AI-powered document intelligence platform with 12+ containerized microservices, OCR pipelines, vector search, and 100% audit logging built for the Smart India Hackathon.',
    alternates: {
        canonical: 'https://metromind.rounakneema.in',
    },
};

const capabilities = [
    {
        icon: Container,
        number: '01',
        title: '12+ Microservices',
        description:
            'Decoupled services orchestrated through Docker Compose, allowing OCR, indexing, APIs and supporting workloads to evolve independently.',
        accent: 'purple',
    },
    {
        icon: Search,
        number: '02',
        title: 'Semantic Retrieval',
        description:
            'OCR extracts document content, embeddings represent meaning, and vector search enables natural-language discovery beyond keyword matching.',
        accent: 'blue',
    },
    {
        icon: Shield,
        number: '03',
        title: 'RBAC + Audit',
        description:
            'Granular role-based access control with 100% audit logging coverage for privileged operations and department-level data isolation.',
        accent: 'red',
    },
    {
        icon: Zap,
        number: '04',
        title: 'Async Processing',
        description:
            'RabbitMQ moves heavy OCR and indexing workloads into asynchronous pipelines so API requests remain responsive.',
        accent: 'green',
    },
];

const pipeline = [
    { icon: FileSearch, label: 'DOCUMENT', sub: 'Upload / Scan' },
    { icon: BrainCircuit, label: 'OCR', sub: 'Extract' },
    { icon: Layers3, label: 'EMBED', sub: 'Represent' },
    { icon: Database, label: 'VECTOR DB', sub: 'Index' },
    { icon: Search, label: 'SEARCH', sub: 'Retrieve' },
];

export default function MetroMindHome() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#050507] text-white selection:bg-purple-500/30 selection:text-purple-200">

            {/* Ambient background */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.16),transparent_35%)]" />
                <div className="absolute left-[-20%] top-[30%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />
                <div className="absolute right-[-20%] top-[45%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

                <div
                    className="absolute inset-0 opacity-[0.045]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pt-20">

                {/* HERO */}
                <section className="relative min-h-[720px]">

                    {/* decorative orb */}
                    <div className="pointer-events-none absolute right-[-120px] top-[-80px] hidden h-[520px] w-[520px] lg:block">
                        <div className="absolute inset-0 rounded-full border border-purple-500/10" />
                        <div className="absolute inset-[55px] rounded-full border border-purple-500/10" />
                        <div className="absolute inset-[110px] rounded-full border border-purple-500/10" />
                        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_50px_20px_rgba(168,85,247,.3)]" />
                    </div>

                    <div className="relative max-w-4xl">

                        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-purple-500/20 bg-purple-500/[0.07] px-4 py-2">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-70" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
                            </span>

                            <span className="font-mono text-[10px] font-medium tracking-[0.25em] text-purple-300">
                                AI DOCUMENT INTELLIGENCE
                            </span>
                        </div>

                        <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-8xl">
                            Documents in.
                            <br />
                            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                                Intelligence out.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-xl">
                            MetroMind turns scanned and unstructured transit documents into
                            searchable, permission-aware intelligence — powered by OCR,
                            semantic retrieval and a distributed microservice architecture.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="https://github.com/rounakneema/MetroMind"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
                            >
                                <Github className="h-4 w-4" />
                                Explore Source
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>

                            <Link
                                href="/architecture"
                                className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-purple-500/30 hover:bg-purple-500/[0.08]"
                            >
                                System Architecture
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Telemetry strip */}
                    <div className="absolute bottom-0 left-0 right-0 hidden grid-cols-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur md:grid">
                        {[
                            ['12+', 'MICROSERVICES'],
                            ['OCR', 'EXTRACTION'],
                            ['VECTOR', 'SEMANTIC SEARCH'],
                            ['100%', 'AUDIT COVERAGE'],
                        ].map(([value, label], index) => (
                            <div
                                key={label}
                                className={`group px-6 py-5 ${
                                    index !== 0 ? 'border-l border-white/[0.07]' : ''
                                }`}
                            >
                                <div className="font-mono text-xl font-bold tracking-tight text-white transition group-hover:text-purple-300">
                                    {value}
                                </div>
                                <div className="mt-1 text-[9px] font-medium tracking-[0.2em] text-zinc-600">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TECH STACK */}
                <section className="border-y border-white/[0.07] py-7">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                            SYSTEM STACK
                        </span>

                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                            {[
                                ['Go', 'bg-blue-400'],
                                ['Python', 'bg-yellow-400'],
                                ['Docker', 'bg-blue-500'],
                                ['RabbitMQ', 'bg-orange-400'],
                                ['Vector DB', 'bg-green-400'],
                                ['OCR Engine', 'bg-red-400'],
                            ].map(([name, color]) => (
                                <div key={name} className="flex items-center gap-2">
                                    <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
                                    <span className="font-mono text-xs text-zinc-500">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CAPABILITIES */}
                <section className="py-28">
                    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <div className="mb-3 font-mono text-[10px] tracking-[0.3em] text-purple-400">
                                SYSTEM CAPABILITIES
                            </div>

                            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                                Built as a system,
                                <br />
                                not a demo.
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-zinc-500">
                            Each layer solves a distinct part of the document intelligence
                            problem — from ingestion and extraction to retrieval and access control.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {capabilities.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.045]"
                                >
                                    <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-purple-500/10 blur-3xl transition group-hover:bg-purple-500/20" />

                                    <div className="relative">
                                        <div className="mb-8 flex items-center justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-black/30">
                                                <Icon className="h-5 w-5 text-purple-400" />
                                            </div>

                                            <span className="font-mono text-[10px] text-zinc-700">
                                                / {item.number}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold tracking-tight">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* PIPELINE */}
                <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#08080c] px-6 py-16 md:px-12">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,.08),transparent_55%)]" />

                    <div className="relative">
                        <div className="mb-12 text-center">
                            <div className="mb-3 font-mono text-[10px] tracking-[0.3em] text-blue-400">
                                DOCUMENT FLOW
                            </div>

                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                                From raw document to searchable intelligence.
                            </h2>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-0">
                            {pipeline.map((step, index) => {
                                const Icon = step.icon;

                                return (
                                    <div key={step.label} className="flex items-center">
                                        <div className="group flex w-32 flex-col items-center text-center">
                                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] transition group-hover:border-purple-500/40 group-hover:bg-purple-500/[0.08]">
                                                <Icon className="h-6 w-6 text-zinc-400 transition group-hover:text-purple-300" />
                                            </div>

                                            <div className="font-mono text-[10px] font-bold tracking-[0.18em] text-zinc-300">
                                                {step.label}
                                            </div>

                                            <div className="mt-1 text-[10px] text-zinc-600">
                                                {step.sub}
                                            </div>
                                        </div>

                                        {index < pipeline.length - 1 && (
                                            <div className="hidden h-px w-12 bg-gradient-to-r from-purple-500/40 to-blue-500/10 md:block" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* PROBLEM / SOLUTION */}
                <section className="py-28">
                    <div className="mb-12">
                        <div className="mb-3 font-mono text-[10px] tracking-[0.3em] text-zinc-600">
                            WHY METROMIND
                        </div>

                        <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
                            The problem wasn't storage.
                            <br />
                            <span className="text-zinc-500">It was making documents useful.</span>
                        </h2>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
                        {/* Challenge */}
                        <div className="relative overflow-hidden rounded-3xl border border-red-500/10 bg-red-500/[0.025] p-8 md:p-10">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                                    <LockKeyhole className="h-4 w-4 text-red-400" />
                                </div>

                                <span className="font-mono text-[10px] tracking-[0.25em] text-red-400">
                                    THE CHALLENGE
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold leading-tight md:text-3xl">
                                Unstructured transit data trapped in physical and scanned documents.
                            </h3>

                            <p className="mt-6 text-sm leading-7 text-zinc-500">
                                Managing and semantically searching large volumes of transit
                                documents across departments is inefficient without intelligent
                                tooling. Scanned documents also make their underlying text
                                inaccessible to standard SQL databases.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-zinc-500">
                                Sensitive inter-departmental documents additionally require
                                strict isolation and access tracking to prevent unauthorized retrieval.
                            </p>
                        </div>

                        {/* Solution */}
                        <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-purple-500/[0.035] p-8 md:p-10">
                            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-purple-500/10 blur-[80px]" />

                            <div className="relative">
                                <div className="mb-8 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
                                        <Network className="h-4 w-4 text-purple-400" />
                                    </div>

                                    <span className="font-mono text-[10px] tracking-[0.25em] text-purple-400">
                                        THE METROMIND SOLUTION
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        'Automated OCR extraction pipeline',
                                        'Text chunking and embedding generation',
                                        'Vector database for semantic querying',
                                        'API Gateway handling JWT & RBAC validation',
                                        'Distributed logging and telemetry',
                                    ].map((item, i) => (
                                        <div
                                            key={item}
                                            className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3 transition hover:border-purple-500/20 hover:bg-purple-500/[0.05]"
                                        >
                                            <span className="font-mono text-[10px] text-purple-500">
                                                0{i + 1}
                                            </span>

                                            <span className="text-sm text-zinc-300">
                                                {item}
                                            </span>

                                            <Activity className="ml-auto h-3.5 w-3.5 text-zinc-700 transition group-hover:text-purple-400" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ARCHITECTURE CTA */}
                <section className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/[0.09] via-transparent to-blue-500/[0.06] p-8 md:p-12">
                    <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />

                    <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <div className="mb-3 font-mono text-[10px] tracking-[0.3em] text-purple-400">
                                GO DEEPER
                            </div>

                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                                See how the system fits together.
                            </h2>

                            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
                                Explore the microservice topology, asynchronous processing,
                                data flow, security boundaries and document retrieval architecture.
                            </p>
                        </div>

                        <Link
                            href="/architecture"
                            className="group flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
                        >
                            Explore Architecture
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="flex flex-col justify-between gap-5 border-t border-white/[0.07] pt-10 text-xs text-zinc-600 md:flex-row md:items-center">
                    <div className="font-mono tracking-[0.12em]">
                        METROMIND / DOCUMENT INTELLIGENCE
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://rounakneema.in"
                            className="transition hover:text-white"
                        >
                            ROUNAK NEEMA
                        </a>

                        <a
                            href="https://github.com/rounakneema/MetroMind"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition hover:text-white"
                        >
                            GITHUB
                            <ExternalLink className="h-3 w-3" />
                        </a>
                    </div>
                </footer>
            </div>
        </main>
    );
}
