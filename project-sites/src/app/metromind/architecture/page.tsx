import Link from 'next/link';
import { ArrowRight, Box, BrainCircuit, Database, FileSearch, LockKeyhole, Network, Search, ShieldCheck, Workflow } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architecture — MetroMind',
  description: 'A visual walk-through of MetroMind’s document intelligence pipeline, service boundaries, and audit-first access controls.',
  alternates: { canonical: 'https://metromind.rounakneema.in/architecture' },
};

const layers = [
  { icon: FileSearch, step: '01', title: 'Ingest & classify', text: 'Documents enter through the API gateway, where identity, department permissions, and document metadata are established before processing begins.', color: 'text-violet-300' },
  { icon: Workflow, step: '02', title: 'Queue & extract', text: 'RabbitMQ hands off long-running OCR tasks so uploads feel immediate while workers independently process, retry, and report progress.', color: 'text-sky-300' },
  { icon: BrainCircuit, step: '03', title: 'Embed & enrich', text: 'Extracted text is normalized and represented as semantic vectors, preserving the meaning needed for natural-language retrieval.', color: 'text-fuchsia-300' },
  { icon: Search, step: '04', title: 'Retrieve with context', text: 'Vector search, role-aware filtering, and audit events work together to surface the right answer to the right person.', color: 'text-emerald-300' },
];

export default function MetroMindArchitecture() {
  return (
    <div className="relative isolate overflow-hidden bg-[#050507]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] overflow-hidden"><div className="absolute left-1/2 top-[-420px] h-[780px] w-[780px] -translate-x-1/2 rounded-full border border-purple-400/10 bg-purple-500/[0.035] shadow-[0_0_180px_50px_rgba(124,58,237,0.10)]" /><div className="absolute inset-0 bg-[linear-gradient(rgba(196,181,253,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" /></div>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
        <div className="max-w-3xl"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-purple-300">System architecture</p><h1 className="mt-5 text-balance text-5xl font-black leading-[0.93] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl">Intelligence is a pipeline, not a single model.</h1><p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">MetroMind uses clear service boundaries to turn hard-to-search documents into dependable, permission-aware answers—without making the user wait for the work to happen.</p></div>

        <div className="relative mt-14 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0910]/90 p-5 shadow-2xl shadow-black/30 sm:p-8 md:mt-20 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.10),transparent_40%)]" />
          <div className="relative"><div className="mb-8 flex items-center justify-between"><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-zinc-500"><Network className="h-3.5 w-3.5 text-purple-300" /> Document intelligence flow</div><span className="rounded-full border border-purple-300/15 bg-purple-300/[0.07] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-purple-200">Async by design</span></div>
            <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
              {[{ icon: Box, label: 'API Gateway', sub: 'Auth · metadata', color: 'text-violet-300' }, { icon: Workflow, label: 'RabbitMQ', sub: 'Event handoff', color: 'text-sky-300' }, { icon: BrainCircuit, label: 'OCR + Embed', sub: 'Extract · represent', color: 'text-fuchsia-300' }, { icon: Database, label: 'Vector Store', sub: 'Index · retrieve', color: 'text-emerald-300' }].flatMap((node, index) => [<div key={node.label} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-5"><node.icon className={`h-5 w-5 ${node.color}`} /><p className="mt-6 text-sm font-bold text-white">{node.label}</p><p className="mt-1 text-xs text-zinc-600">{node.sub}</p></div>, index < 3 ? <ArrowRight key={`arrow-${index}`} className="mx-auto h-4 w-4 rotate-90 text-purple-300/45 lg:rotate-0" /> : null])}
            </div>
            <div className="mt-7 grid gap-3 border-t border-white/[0.07] pt-6 md:grid-cols-3"><div className="flex gap-3"><LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" /><p className="text-xs leading-5 text-zinc-500"><b className="font-medium text-zinc-300">RBAC gate:</b> department policy is checked before retrieval.</p></div><div className="flex gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" /><p className="text-xs leading-5 text-zinc-500"><b className="font-medium text-zinc-300">Audit trail:</b> privileged actions are captured as events.</p></div><div className="flex gap-3"><Workflow className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" /><p className="text-xs leading-5 text-zinc-500"><b className="font-medium text-zinc-300">Resilient workers:</b> processing stays off the request path.</p></div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.018]"><div className="mx-auto grid max-w-7xl divide-y divide-white/[0.07] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10">{[['12+', 'isolated services'], ['RabbitMQ', 'asynchronous work'], ['RBAC', 'permission-aware search']].map(([value, label]) => <div key={label} className="py-7 text-center"><p className="text-xl font-black text-white">{value}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-600">{label}</p></div>)}</div></section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"><div className="max-w-2xl"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300">Four deliberate stages</p><h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">Each service owns a clean part of the journey.</h2></div><div className="mt-12 grid gap-4 md:grid-cols-2">{layers.map((layer) => <article key={layer.step} className="group rounded-xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/[0.045]"><div className="flex items-start justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-black/20"><layer.icon className={`h-5 w-5 ${layer.color}`} /></div><span className="font-mono text-[10px] text-zinc-700">{layer.step}</span></div><h3 className="mt-8 text-xl font-bold text-white">{layer.title}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-zinc-500">{layer.text}</p></article>)}</div><div className="mt-16 border-t border-white/[0.07] pt-8"><Link href="/" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-purple-300 transition hover:text-purple-200">Explore MetroMind <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div></section>
    </div>
  );
}
