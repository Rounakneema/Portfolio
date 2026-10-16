import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import { projectFaqs } from '@/lib/projectFaqs';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SearchableFaq } from '@/components/shared/SearchableFaq';
import { ProjectEmailIntake } from '@/components/ProjectEmailIntake';
import { AxiomFocusTimer } from '@/components/axiom/AxiomFocusTimer';
import { AxiomDashboardWindow } from '@/components/axiom/AxiomDashboardWindow';

export const metadata = {
  title: 'AXIOM OS · Local-First Personal AI Operating System',
  description: 'A quiet desktop companion that notices when your day drifts from your goals, and helps you get back on track. Your data stays on your machine.',
  alternates: {
    canonical: 'https://axiomos.rounakneema.in',
  },
};

export default function AxiomPage() {
    const project = projects.find((p) => p.slug === 'axiomos');
    if (!project) return notFound();

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#faf7ee] via-[#f7f2e8] to-[#eee7db] text-[#1c1917] selection:bg-[#2d5a3f] selection:text-white font-sans overflow-x-hidden relative">
            <ProjectJsonLd slug="axiomos" />

            {/* FADED ATMOSPHERIC BACKGROUND LAYERS */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Soft top ambient aura */}
                <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] rounded-full bg-[#fcfbf7] blur-[110px] opacity-90" />
                {/* Subtle sage-green ambient glow */}
                <div className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#2d5a3f]/[0.045] blur-[150px]" />
                {/* Soft warm wood tone glow */}
                <div className="absolute top-[45%] left-[-10%] w-[650px] h-[650px] rounded-full bg-[#d7c3a3]/[0.22] blur-[140px]" />
                {/* Subtle warm glow middle */}
                <div className="absolute top-[70%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#2d5a3f]/[0.035] blur-[130px]" />
                {/* Bottom sage landscape mist */}
                <div className="absolute bottom-0 inset-x-0 h-[600px] bg-gradient-to-t from-[#2d5a3f]/[0.06] via-[#2d5a3f]/[0.02] to-transparent blur-3xl" />
                {/* Very subtle grain */}
                <div className="absolute inset-0 bg-[radial-gradient(#c8bead_1px,transparent_1px)] [background-size:28px_28px] opacity-25 mix-blend-multiply" />
            </div>

            <div className="relative z-10">
                
                {/* ========================================================= */}
                {/* SECTION 1: HERO SECTION                                   */}
                {/* ========================================================= */}
                <section className="max-w-[1340px] mx-auto px-6 md:px-12 pt-10 sm:pt-14 pb-12 sm:pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                        
                        {/* Hero Left: Editorial Copy */}
                        <div className="lg:col-span-5 space-y-6 text-left z-10">
                            <ScrollReveal direction="up" delay={0.05}>
                                <div className="text-[#2d5a3f] text-xs font-mono font-semibold uppercase tracking-[0.22em]">
                                    A personal OS that stays with you
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.1}>
                                <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-[#1c1917] leading-[1.04]">
                                    Make time<br />
                                    for what matters.
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.15}>
                                <p className="text-base sm:text-lg text-[#57534e] max-w-md leading-relaxed font-sans">
                                    AXIOM OS is a quiet desktop companion that understands your goals, notices when your day drifts, and helps you get back on track. Your data stays on your machine.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.2}>
                                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                                    <a
                                        href="#download"
                                        className="px-6 py-3 rounded-full bg-[#1c1917] hover:bg-[#2d5a3f] text-white text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow inline-flex items-center gap-2 group"
                                    >
                                        <span>Download AXIOM OS</span>
                                        <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">&rarr;</span>
                                    </a>
                                    <a
                                        href="#how-it-works"
                                        className="px-6 py-3 rounded-full bg-transparent hover:bg-stone-200/50 border border-[#d6cfc4] text-[#1c1917] text-xs sm:text-sm font-medium transition-all"
                                    >
                                        See how it works
                                    </a>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Hero Right: Integrated Cozy Desk Scene */}
                        <div className="lg:col-span-7 relative" id="companion">
                            <ScrollReveal direction="up" delay={0.15}>
                                <div className="relative w-full rounded-2xl overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_100%)]">
                                    <div className="relative w-full aspect-[600/275]">
                                        <Image
                                            src="/images/axiom/axiom-master-hero-desk-2x.png"
                                            alt="AXIOM OS cozy desk companion scene with sticky note, mascot at laptop, and focus timeline"
                                            fill
                                            className="object-contain object-right"
                                            priority
                                            style={{ imageRendering: 'pixelated' }}
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                    </div>
                </section>

                {/* ========================================================= */}
                {/* SECTION 2: THREE-FEATURE STRIP                            */}
                {/* ========================================================= */}
                <section className="max-w-[1340px] mx-auto px-6 md:px-12 py-6">
                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="border-y border-[#e5ded2] py-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                                
                                {/* Feature 1 */}
                                <div className="flex items-center gap-4 md:px-8 md:border-r border-[#e5ded2]">
                                    <div className="w-9 h-9 shrink-0 text-[#2d5a3f] flex items-center justify-center">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                            <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-bold text-sm sm:text-base text-[#1c1917]">
                                            Works offline
                                        </h3>
                                        <p className="text-xs text-[#57534e] mt-0.5">
                                            Runs entirely on your machine.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex items-center gap-4 md:px-8 md:border-r border-[#e5ded2]">
                                    <div className="w-9 h-9 shrink-0 text-[#2d5a3f] flex items-center justify-center">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.97 0 8 1.45 8 2s-3.03 2-8 2-8-1.45-8-2 3.03-2 8-2zm8 14c0 .55-3.03 2-8 2s-8-1.45-8-2v-2.21c2.16 1.37 5.09 2.21 8 2.21s5.84-.84 8-2.21V18zm0-4.5c0 .55-3.03 2-8 2s-8-1.45-8-2V11.3c2.16 1.36 5.09 2.2 8 2.2s5.84-.84 8-2.2v2.2z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-bold text-sm sm:text-base text-[#1c1917]">
                                            Your data stays local
                                        </h3>
                                        <p className="text-xs text-[#57534e] mt-0.5">
                                            No cloud, no tracking.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex items-center gap-4 md:px-8">
                                    <div className="w-9 h-9 shrink-0 text-[#2d5a3f] flex items-center justify-center">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-bold text-sm sm:text-base text-[#1c1917]">
                                            Helps you stay accountable
                                        </h3>
                                        <p className="text-xs text-[#57534e] mt-0.5">
                                            Turns intentions into consistent action.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* ========================================================= */}
                {/* SECTION 3: A SIMPLE FLOW                                  */}
                {/* ========================================================= */}
                <section className="max-w-[1340px] mx-auto px-6 md:px-12 py-16 sm:py-24" id="how-it-works">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        
                        {/* Left Heading Column */}
                        <div className="lg:col-span-4 text-left">
                            <ScrollReveal direction="up" delay={0.05}>
                                <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#2d5a3f] font-semibold block">
                                    A simple flow
                                </span>
                            </ScrollReveal>
                            <ScrollReveal direction="up" delay={0.1}>
                                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1917] tracking-tight leading-tight mt-2">
                                    From your day<br />
                                    to real progress.
                                </h2>
                                <div className="w-12 h-0.5 bg-[#2d5a3f] mt-4 rounded-full" />
                            </ScrollReveal>
                        </div>

                        {/* Right Flow Progression Column */}
                        <div className="lg:col-span-8">
                            <ScrollReveal direction="up" delay={0.15}>
                                <div className="space-y-4">
                                    {/* The Wavy Mascot Thread Illustration */}
                                    <div className="relative w-full aspect-[730/85]">
                                        <Image
                                            src="/images/axiom/axiom-flow-clean-trans-2x.png"
                                            alt="A simple flow timeline with cute sprout mascots noticing activity, comparing priorities, and nudging back into flow"
                                            fill
                                            className="object-contain"
                                            style={{ imageRendering: 'pixelated' }}
                                        />
                                    </div>

                                    {/* Aligned 3-step text captions */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 text-left">
                                        {/* Step 1 text */}
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#2d5a3f] font-mono font-bold text-xs">01</span>
                                                <h3 className="font-serif font-bold text-sm text-[#1c1917]">Notice</h3>
                                            </div>
                                            <p className="text-xs text-[#57534e] mt-1.5 leading-relaxed">
                                                Understands what you&apos;re doing from local activity signals.
                                            </p>
                                        </div>

                                        {/* Step 2 text */}
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#2d5a3f] font-mono font-bold text-xs">02</span>
                                                <h3 className="font-serif font-bold text-sm text-[#1c1917]">Compare with your goals</h3>
                                            </div>
                                            <p className="text-xs text-[#57534e] mt-1.5 leading-relaxed">
                                                Checks it against the goals you define in your system.
                                            </p>
                                        </div>

                                        {/* Step 3 text */}
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#2d5a3f] font-mono font-bold text-xs">03</span>
                                                <h3 className="font-serif font-bold text-sm text-[#1c1917]">Nudge you back</h3>
                                            </div>
                                            <p className="text-xs text-[#57534e] mt-1.5 leading-relaxed">
                                                Gives timely, friendly nudges to help you refocus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                    </div>
                </section>

                {/* ========================================================= */}
                {/* SECTION 4: MORE THAN A TO-DO LIST (BENTO CARDS)           */}
                {/* ========================================================= */}
                <section className="max-w-[1340px] mx-auto px-6 md:px-12 py-16 sm:py-24" id="features">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        
                        {/* Left Column Copy */}
                        <div className="lg:col-span-4 space-y-5 text-left">
                            <ScrollReveal direction="up" delay={0.05}>
                                <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#2d5a3f] font-semibold block">
                                    More than a to-do list
                                </span>
                            </ScrollReveal>
                            <ScrollReveal direction="up" delay={0.1}>
                                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1c1917] tracking-tight leading-tight">
                                    A system that understands context.
                                </h2>
                            </ScrollReveal>
                            <ScrollReveal direction="up" delay={0.15}>
                                <p className="text-sm sm:text-base text-[#57534e] leading-relaxed">
                                    AXIOM OS connects your goals, your work, and your daily activity to give you personalized insights and nudges without needing the cloud.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal direction="up" delay={0.2}>
                                <div className="pt-2">
                                    <Link
                                        href="/architecture"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1c1917] hover:bg-[#2d5a3f] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group"
                                    >
                                        <span>Explore features</span>
                                        <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">&rarr;</span>
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Bento Grid (6 Cards) */}
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                                
                                {/* Card 1 */}
                                <div className="p-6 rounded-2xl bg-[#faf6ee] border border-[#e8dfd2] shadow-xs hover:shadow-md transition-all group">
                                    <div className="w-8 h-8 rounded-lg bg-[#2d5a3f]/10 text-[#2d5a3f] flex items-center justify-center text-base mb-4 group-hover:scale-105 transition-transform">
                                        📄
                                    </div>
                                    <h3 className="font-serif font-bold text-sm text-[#1c1917] mb-1.5">
                                        Goal Tracking
                                    </h3>
                                    <p className="text-xs text-[#57534e] leading-relaxed">
                                        Define your goals and break them into actionable daily targets.
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className="p-6 rounded-2xl bg-[#faf6ee] border border-[#e8dfd2] shadow-xs hover:shadow-md transition-all group">
                                    <div className="w-8 h-8 rounded-lg bg-[#2d5a3f]/10 text-[#2d5a3f] flex items-center justify-center text-base mb-4 group-hover:scale-105 transition-transform">
                                        ⚡
                                    </div>
                                    <h3 className="font-serif font-bold text-sm text-[#1c1917] mb-1.5">
                                        Smart Monitoring
                                    </h3>
                                    <p className="text-xs text-[#57534e] leading-relaxed">
                                        Understands your activity, apps and focus patterns locally.
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className="p-6 rounded-2xl bg-[#faf6ee] border border-[#e8dfd2] shadow-xs hover:shadow-md transition-all group">
                                    <div className="w-8 h-8 rounded-lg bg-[#2d5a3f]/10 text-[#2d5a3f] flex items-center justify-center text-base mb-4 group-hover:scale-105 transition-transform">
                                        🔔
                                    </div>
                                    <h3 className="font-serif font-bold text-sm text-[#1c1917] mb-1.5">
                                        Intelligent Nudges
                                    </h3>
                                    <p className="text-xs text-[#57534e] leading-relaxed">
                                        Gentle reminders when you drift away from what matters.
                                    </p>
                                </div>

                                {/* Card 4 */}
                                <div className="p-6 rounded-2xl bg-[#faf6ee] border border-[#e8dfd2] shadow-xs hover:shadow-md transition-all group">
                                    <div className="w-8 h-8 rounded-lg bg-[#2d5a3f]/10 text-[#2d5a3f] flex items-center justify-center text-base mb-4 group-hover:scale-105 transition-transform">
                                        💬
                                    </div>
                                    <h3 className="font-serif font-bold text-sm text-[#1c1917] mb-1.5">
                                        Local AI Assistant
                                    </h3>
                                    <p className="text-xs text-[#57534e] leading-relaxed">
                                        Chat with your data, ask questions, and get insights offline.
                                    </p>
                                </div>

                                {/* Card 5 */}
                                <div className="p-6 rounded-2xl bg-[#faf6ee] border border-[#e8dfd2] shadow-xs hover:shadow-md transition-all group">
                                    <div className="w-8 h-8 rounded-lg bg-[#2d5a3f]/10 text-[#2d5a3f] flex items-center justify-center text-base mb-4 group-hover:scale-105 transition-transform">
                                        📊
                                    </div>
                                    <h3 className="font-serif font-bold text-sm text-[#1c1917] mb-1.5">
                                        Visual Progress
                                    </h3>
                                    <p className="text-xs text-[#57534e] leading-relaxed">
                                        See your progress with clean, minimal dashboards.
                                    </p>
                                </div>

                                {/* Card 6 */}
                                <div className="p-6 rounded-2xl bg-[#faf6ee] border border-[#e8dfd2] shadow-xs hover:shadow-md transition-all group">
                                    <div className="w-8 h-8 rounded-lg bg-[#2d5a3f]/10 text-[#2d5a3f] flex items-center justify-center text-base mb-4 group-hover:scale-105 transition-transform">
                                        🧩
                                    </div>
                                    <h3 className="font-serif font-bold text-sm text-[#1c1917] mb-1.5">
                                        Extensible
                                    </h3>
                                    <p className="text-xs text-[#57534e] leading-relaxed">
                                        Built with Go, Python and Java, easy to extend with your own plugins.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                {/* ========================================================= */}
                {/* SECTION 5: YOUR DESKTOP COMPANION (OVER SCENIC LANDSCAPE) */}
                {/* ========================================================= */}
                <section className="relative w-full py-16 sm:py-24 overflow-hidden">
                    {/* Background Panoramic Landscape Banner with Soft Mist Fade */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/axiom/axiom-landscape-banner-generated.jpg"
                            alt="Scenic mountains and pine forest background"
                            fill
                            className="object-cover object-center opacity-40 brightness-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#faf7ee] via-transparent to-[#faf7ee]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#faf7ee]/95 via-[#faf7ee]/70 to-[#faf7ee]/95" />
                    </div>

                    <div className="max-w-[1340px] mx-auto px-6 md:px-12 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            
                            {/* Left Text Column */}
                            <div className="lg:col-span-5 space-y-6 text-left">
                                <ScrollReveal direction="up" delay={0.05}>
                                    <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#2d5a3f] font-semibold block">
                                        Your desktop companion
                                    </span>
                                </ScrollReveal>
                                <ScrollReveal direction="up" delay={0.1}>
                                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1917] tracking-tight leading-tight">
                                        A calmer, more focused you.
                                    </h2>
                                </ScrollReveal>
                                <ScrollReveal direction="up" delay={0.15}>
                                    <p className="text-sm sm:text-base text-[#57534e] leading-relaxed">
                                        AXIOM OS lives quietly in the background, understands your context, and helps you make better choices throughout the day.
                                    </p>
                                </ScrollReveal>

                                <ScrollReveal direction="up" delay={0.2}>
                                    <div className="space-y-3 pt-2">
                                        <div className="flex items-center gap-3">
                                            <span className="w-5 h-5 rounded-full bg-[#2d5a3f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                                                ✓
                                            </span>
                                            <span className="text-sm font-medium text-[#1c1917]">
                                                Offline-first and privacy focused
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="w-5 h-5 rounded-full bg-[#2d5a3f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                                                ✓
                                            </span>
                                            <span className="text-sm font-medium text-[#1c1917]">
                                                Runs on Windows, macOS and Linux
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="w-5 h-5 rounded-full bg-[#2d5a3f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                                                ✓
                                            </span>
                                            <span className="text-sm font-medium text-[#1c1917]">
                                                Lightweight and minimal
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="w-5 h-5 rounded-full bg-[#2d5a3f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                                                ✓
                                            </span>
                                            <span className="text-sm font-medium text-[#1c1917]">
                                                Designed for deep work
                                            </span>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            {/* Right Floating Dashboard Window Component */}
                            <div className="lg:col-span-7">
                                <ScrollReveal direction="up" delay={0.2}>
                                    <AxiomDashboardWindow />
                                </ScrollReveal>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ========================================================= */}
                {/* SECTION 6: MODES FOR DIFFERENT MOMENTS (FOCUS TIMER)      */}
                {/* ========================================================= */}
                <section className="max-w-[1340px] mx-auto px-6 md:px-12 py-16 sm:py-24">
                    <ScrollReveal direction="up" delay={0.05}>
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                            <div>
                                <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#2d5a3f] font-semibold block mb-2">
                                    Modes for different moments
                                </span>
                                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1c1917] tracking-tight">
                                    Your goals, your way.
                                </h2>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.15}>
                        <AxiomFocusTimer />
                    </ScrollReveal>
                </section>

                {/* ========================================================= */}
                {/* SECTION 7: BUILT FOR REAL LIFE (3 PERSONA CARDS)          */}
                {/* ========================================================= */}
                <section className="max-w-[1340px] mx-auto px-6 md:px-12 py-16 sm:py-24">
                    <ScrollReveal direction="up" delay={0.05}>
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#2d5a3f] font-semibold block mb-2">
                                Built for real life
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1917] tracking-tight">
                                For students, creators and professionals.
                            </h2>
                            <p className="text-sm sm:text-base text-[#57534e] mt-3 leading-relaxed">
                                Whether you&apos;re preparing for exams, building a project, or managing multiple responsibilities, AXIOM OS adapts to your workflow.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        {/* Persona 1: Students */}
                        <ScrollReveal direction="up" delay={0.1}>
                            <div className="p-6 rounded-2xl bg-[#faf6ee] border border-[#e8dfd2] shadow-sm hover:shadow-md transition-all text-left">
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#f4eee3]">
                                    <Image
                                        src="/images/axiom/axiom-persona-student-generated.jpg"
                                        alt="Student studying with headphones at desk"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                <h3 className="font-serif font-bold text-lg text-[#1c1917] mb-1.5">
                                    Students
                                </h3>
                                <p className="text-xs text-[#57534e] leading-relaxed">
                                    Stay consistent with your study goals and track progress.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Persona 2: Creators & Builders */}
                        <ScrollReveal direction="up" delay={0.15}>
                            <div className="p-6 rounded-2xl bg-[#faf6ee] border border-[#e8dfd2] shadow-sm hover:shadow-md transition-all text-left">
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#f4eee3]">
                                    <Image
                                        src="/images/axiom/axiom-persona-creator-compiling.jpg"
                                        alt="Creator and builder at computer workstation"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                <h3 className="font-serif font-bold text-lg text-[#1c1917] mb-1.5">
                                    Creators &amp; Builders
                                </h3>
                                <p className="text-xs text-[#57534e] leading-relaxed">
                                    Make progress on your projects without getting distracted.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Persona 3: Professionals */}
                        <ScrollReveal direction="up" delay={0.2}>
                            <div className="p-6 rounded-2xl bg-[#faf6ee] border border-[#e8dfd2] shadow-sm hover:shadow-md transition-all text-left">
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#f4eee3]">
                                    <Image
                                        src="/images/axiom/axiom-persona-pro-generated.jpg"
                                        alt="Professional with glasses at organized desk"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                <h3 className="font-serif font-bold text-lg text-[#1c1917] mb-1.5">
                                    Professionals
                                </h3>
                                <p className="text-xs text-[#57534e] leading-relaxed">
                                    Balance work, learning and personal goals in one place.
                                </p>
                            </div>
                        </ScrollReveal>

                    </div>
                </section>

                {/* ========================================================= */}
                {/* SECTION 8: PRIVACY BY DESIGN (RAINY WINDOW SCENE)         */}
                {/* ========================================================= */}
                <section className="max-w-[1340px] mx-auto px-6 md:px-12 py-16 sm:py-24" id="privacy">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        
                        {/* Left Text */}
                        <div className="lg:col-span-5 space-y-6 text-left">
                            <ScrollReveal direction="up" delay={0.05}>
                                <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#2d5a3f] font-semibold block">
                                    Privacy by design
                                </span>
                            </ScrollReveal>
                            <ScrollReveal direction="up" delay={0.1}>
                                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1917] tracking-tight leading-tight">
                                    Your data stays with you.
                                </h2>
                            </ScrollReveal>
                            <ScrollReveal direction="up" delay={0.15}>
                                <p className="text-sm sm:text-base text-[#57534e] leading-relaxed">
                                    AXIOM OS is built to run completely on your machine. Your activity data, goals and notes never leave your device.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.2}>
                                <div className="space-y-3 pt-2">
                                    <div className="flex items-center gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#2d5a3f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                                            ✓
                                        </span>
                                        <span className="text-sm font-medium text-[#1c1917]">
                                            No cloud storage
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#2d5a3f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                                            ✓
                                        </span>
                                        <span className="text-sm font-medium text-[#1c1917]">
                                            No tracking or analytics
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#2d5a3f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                                            ✓
                                        </span>
                                        <span className="text-sm font-medium text-[#1c1917]">
                                            Full control over your data
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#2d5a3f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                                            ✓
                                        </span>
                                        <span className="text-sm font-medium text-[#1c1917]">
                                            Open and extensible architecture
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Rainy Window Illustration */}
                        <div className="lg:col-span-7">
                            <ScrollReveal direction="up" delay={0.15}>
                                <div className="relative rounded-2xl overflow-hidden border border-[#ded5c7] shadow-md bg-[#ebe4d6]">
                                    <div className="relative w-full aspect-[16/9]">
                                        <Image
                                            src="/images/axiom/axiom-privacy-rainy-generated.jpg"
                                            alt="A system that works for you, not the other way around. Cozy rainy window desk scene with sleeping sprout mascot"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                    </div>
                </section>

                {/* ========================================================= */}
                {/* SECTION 9: DARK TWILIGHT VIADUCT CTA BANNER               */}
                {/* ========================================================= */}
                <section className="w-full pt-10 pb-16" id="download">
                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="max-w-[1340px] mx-auto px-6 md:px-12">
                            <div className="relative rounded-3xl overflow-hidden border border-[#233527] shadow-xl bg-[#0f1f14]">
                                
                                {/* Background Image with Dark Forest Mist Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/axiom/axiom-dark-cta-landscape-generated.jpg"
                                        alt="Twilight train on viaduct through misty pine valley"
                                        fill
                                        className="object-cover object-center opacity-70"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d13]/90 via-[#0e1d13]/60 to-[#0e1d13]/80" />
                                </div>

                                {/* Content Overlay */}
                                <div className="relative z-10 py-16 sm:py-20 px-6 text-center text-white space-y-6 max-w-2xl mx-auto">
                                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#fbf8f1]">
                                        Ready to take control of your time?
                                    </h2>
                                    <p className="text-sm sm:text-base text-[#c7d5cb] leading-relaxed">
                                        Download AXIOM OS and start building a more focused, intentional you.
                                    </p>

                                    <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                                        <a
                                            href="https://github.com/rounakneema/axiom-os"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-7 py-3.5 rounded-full bg-[#fbf8f1] hover:bg-white text-[#1c1917] text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center gap-2 group"
                                        >
                                            <span>Download AXIOM OS</span>
                                            <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">&rarr;</span>
                                        </a>
                                        <Link
                                            href="/architecture"
                                            className="px-6 py-3.5 rounded-full bg-transparent hover:bg-white/10 border border-white/25 text-white text-xs sm:text-sm font-medium transition-all"
                                        >
                                            Inspect Architecture
                                        </Link>
                                    </div>

                                    {/* Platform Support Pills */}
                                    <div className="pt-4 flex items-center justify-center gap-6 text-xs text-[#a3b8aa] font-mono">
                                        <div className="flex items-center gap-1.5">
                                            <span>🪟</span>
                                            <span>Windows</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span>🍎</span>
                                            <span>macOS</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span>🐧</span>
                                            <span>Linux</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* ========================================================= */}
                {/* SECTION 10: ARCHITECTURE SPECIFICATION CARD               */}
                {/* ========================================================= */}
                <section className="max-w-[1340px] mx-auto px-6 md:px-12 py-8">
                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="p-8 sm:p-10 rounded-2xl bg-[#f6f0e4] border border-[#e5dcd0] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#2d5a3f]/30 transition-all">
                            <div className="space-y-2 max-w-2xl text-left">
                                <span className="text-[11px] uppercase font-mono tracking-widest text-[#2d5a3f] font-semibold block">
                                    Technical architecture subpage
                                </span>
                                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1c1917] tracking-tight">
                                    Inspect Specter Daemon, SQLite WAL &amp; Ollama Topology
                                </h3>
                                <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed">
                                    All raw CLI traces, low-level goroutine collectors, and deterministic policy algorithms belong strictly on our dedicated technical specification page.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <Link
                                    href="/architecture"
                                    className="px-5 py-3 rounded-full bg-[#1c1917] hover:bg-[#2d5a3f] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 group"
                                >
                                    <span>Explore Architecture</span>
                                    <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* ========================================================= */}
                {/* SECTION 11: SEARCHABLE SEO FAQ                            */}
                {/* ========================================================= */}
                <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 sm:py-24" id="faq">
                    <ScrollReveal direction="up" delay={0.1}>
                        <SearchableFaq
                            items={projectFaqs.axiomos}
                            theme="light"
                            accentColor="#2d5a3f"
                            title="Frequently Asked Questions"
                            eyebrow="SYSTEM KNOWLEDGE BASE &amp; FAQ"
                            projectName="AXIOM OS"
                        />
                    </ScrollReveal>

                    {/* Email Intake for Project Inquiries */}
                    <ScrollReveal direction="up" delay={0.15}>
                        <div className="mt-16">
                            <ProjectEmailIntake
                                slug="axiomos"
                                projectName="AXIOM OS"
                                isLight={true}
                            />
                        </div>
                    </ScrollReveal>
                </section>

                {/* ========================================================= */}
                {/* SECTION 12: CREATOR SHOWCASE / FREELANCE INQUIRY          */}
                {/* ========================================================= */}
                <section className="max-w-3xl mx-auto px-6 md:px-12 pb-20 text-center">
                    <ScrollReveal direction="up" delay={0.1}>
                        <span className="text-[11px] uppercase font-mono tracking-widest text-[#2d5a3f] font-semibold inline-block px-3 py-1 rounded-full bg-[#2d5a3f]/10 mb-3 border border-[#2d5a3f]/20">
                            Engineering showcase by Rounak Neema
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1c1917] tracking-tight mb-3">
                            Need Local-First AI Systems or Custom OS Daemons?
                        </h2>
                        <p className="text-xs sm:text-sm text-[#57534e] max-w-lg mx-auto leading-relaxed mb-6">
                            We design native background daemons, privacy-preserving desktop software, and on-premise Ollama workflows so your sensitive information never touches the cloud.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <a
                                href="https://rounakneema.in/freelance/ai-development"
                                className="px-5 py-2.5 rounded-full bg-[#1c1917] hover:bg-[#2d5a3f] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                            >
                                Explore AI Engineering Services &rarr;
                            </a>
                            <a
                                href="https://rounakneema.in/contact"
                                className="px-5 py-2.5 rounded-full bg-transparent hover:bg-stone-200/50 border border-[#d6cfc4] text-[#1c1917] text-xs font-semibold uppercase tracking-wider transition-all"
                            >
                                Start Client Inquiry
                            </a>
                        </div>
                    </ScrollReveal>
                </section>

            </div>
        </main>
    );
}
