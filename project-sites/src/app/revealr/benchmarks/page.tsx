import Link from 'next/link';
import { Activity, ArrowRight, Gauge, MonitorCog, Network, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
  title: 'Benchmarks — Revealr Network Scanner',
  description: 'Measured performance methodology and throughput targets for Revealr on controlled, authorized networks.',
  alternates: { canonical: 'https://revealr.rounakneema.in/benchmarks' },
};

const benchmarkData = [
  { rate: '5,000', profile: 'Polite', scale: '15%', note: 'IDS-conscious discovery' },
  { rate: '10,000', profile: 'Default', scale: '30%', note: 'Balanced internal audit' },
  { rate: '25,000', profile: 'Fast', scale: '58%', note: 'Controlled network use' },
  { rate: '50,000', profile: 'High throughput', scale: '100%', note: 'LAN benchmark target', featured: true },
];

export default function RevealrBenchmarks() {
  return (
    <div className="relative isolate overflow-hidden bg-[#080b0a] text-zinc-400">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] overflow-hidden">
        <div className="absolute left-[53%] top-[-330px] h-[720px] w-[720px] rounded-full border border-lime-300/10 bg-lime-400/[0.035] shadow-[0_0_170px_45px_rgba(132,204,22,0.08)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(132,204,22,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(132,204,22,0.022)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <ScrollReveal direction="up" delay={0.1}>
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-lime-300">Performance profile</p>
            <h1 className="mt-5 text-balance text-2xl font-black leading-[0.93] tracking-tight text-white sm:text-2xl">Tune the signal, not just the speed.</h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">Revealr exposes rate and profile controls so authorized assessments can match the constraints of the environment—quietly, deliberately, and without losing context.</p>
          </div>

          <StaggerContainer>
            <div className="mt-14 grid gap-4 lg:grid-cols-[1.3fr_0.7fr] md:mt-20">
              <StaggerItem>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-5 sm:p-8 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-zinc-500">
                      <Gauge className="h-3.5 w-3.5 text-lime-300" /> Rate envelope
                    </div>
                    <span className="text-[10px] text-zinc-600">probes / minute</span>
                  </div>
                  <StaggerContainer>
                    <div className="mt-10 space-y-6">
                      {benchmarkData.map((row) => (
                        <StaggerItem key={row.rate}>
                          <div>
                            <div className="mb-2 flex items-end justify-between gap-4">
                              <div>
                                <span className={`text-sm font-bold ${row.featured ? 'text-lime-200' : 'text-zinc-200'}`}>{row.rate}</span>
                                <span className="ml-2 text-xs text-zinc-600">{row.profile}</span>
                              </div>
                              <span className="text-[10px] text-zinc-600">{row.note}</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
                              <div style={{ width: row.scale }} className={`h-full rounded-full ${row.featured ? 'bg-gradient-to-r from-lime-300 to-green-200 shadow-[0_0_16px_rgba(132,204,22,0.45)]' : 'bg-lime-300/40'}`} />
                            </div>
                          </div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>
                  <div className="mt-10 rounded-lg border border-lime-300/10 bg-lime-300/[0.045] px-4 py-3 text-xs leading-5 text-lime-100/65">
                    Throughput is a configuration target, not a universal promise. Verify results on the authorized network and hardware that matter to your engagement.
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-6 hover:-translate-y-1 transition-all duration-300">
                  <Activity className="h-5 w-5 text-lime-300" />
                  <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.17em] text-zinc-500">The benchmark rule</p>
                  <h2 className="mt-3 text-2xl font-black tracking-tight text-white">Measure the environment you will actually scan.</h2>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-500">Network latency, packet loss, NIC capacity, host behavior, and controls such as IDS all affect observed throughput.</p>
                  <div className="mt-8 space-y-3 border-t border-white/[0.07] pt-6">
                    <div className="flex gap-3 text-xs text-zinc-500"><Network className="h-4 w-4 shrink-0 text-lime-300" />Use controlled networks only.</div>
                    <div className="flex gap-3 text-xs text-zinc-500"><ShieldCheck className="h-4 w-4 shrink-0 text-lime-300" />Confirm written authorization.</div>
                  </div>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <section className="border-y border-white/[0.07] bg-white/[0.018]">
          <StaggerContainer>
            <div className="mx-auto grid max-w-7xl divide-y divide-white/[0.07] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10">
              {[['5K–50K', 'configurable rate range'], ['4', 'scan profiles'], ['SQLite', 'result history']].map(([value, label]) => (
                <StaggerItem key={label}>
                  <div className="py-7 text-center">
                    <p className="text-xl font-black tracking-tight text-white">{value}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-600">{label}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-300">Responsible methodology</p>
              <h2 className="mt-4 text-2xl font-black tracking-tight text-white">A rate is only meaningful with its context.</h2>
            </div>
            <StaggerContainer>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: MonitorCog, title: 'Record the setup', text: 'Capture CPU, RAM, NIC, operating system, target count, and network topology for comparable results.' },
                  { icon: Network, title: 'Control the target', text: 'Benchmark only against systems and networks you administer or are expressly authorized to assess.' },
                  { icon: Gauge, title: 'Compare fairly', text: 'Use the same target scope, port range, and collection method when comparing tools or profiles.' },
                  { icon: ShieldCheck, title: 'Choose the profile', text: 'Start with the least disruptive rate that provides the visibility your engagement needs.' }
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-5 hover:-translate-y-1 transition-all duration-300">
                      <item.icon className="h-5 w-5 text-lime-300" />
                      <h3 className="mt-6 font-bold tracking-tight text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.text}</p>
                    </article>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
          <div className="mt-16 border-t border-white/[0.07] pt-8">
            <Link href="/security" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-lime-300 transition hover:text-lime-200 hover:-translate-y-1 duration-300">
              Explore the security model <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
