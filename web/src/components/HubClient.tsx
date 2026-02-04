'use client';

import Link from 'next/link';
import { ArrowUpRight, Shield, Terminal, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { WebTerminal } from './WebTerminal';

export function HubClient() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-zinc-900 font-mono p-6 relative bg-transparent">

            {/* Sticky CTA */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="fixed top-6 right-6 z-50"
            >
                <Link href="/portfolio" className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-zinc-800 transition-all shadow-lg flex items-center gap-2 group">
                    VIEW PORTFOLIO <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
            </motion.div>

            {/* Hero Section */}
            <header className="mb-16 text-center max-w-4xl mx-auto mt-20">
                <WebTerminal />

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-none"
                >
                    ROUNAK NEEMA
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl text-zinc-800 font-bold mb-6 tracking-tight"
                >
                    DevOps & Security-Focused Platform Engineer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    I build cloud-native systems, security tooling, and automation.
                    <br className="hidden md:block" /> This site documents my projects, engineering write-ups, and portfolio.
                </motion.p>

                {/* Proof Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-wider mb-8"
                >
                    <div className="flex items-center gap-2 hover:text-emerald-700 transition-colors cursor-default">
                        <Shield className="w-4 h-4 text-emerald-600" /> 100+ CTF Challenges Solved
                    </div>
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full my-auto hidden md:block"></div>
                    <div className="flex items-center gap-2 hover:text-blue-700 transition-colors cursor-default">
                        <Terminal className="w-4 h-4 text-blue-600" /> Go-Based Security Tooling
                    </div>
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full my-auto hidden md:block"></div>
                    <div className="flex items-center gap-2 hover:text-purple-700 transition-colors cursor-default">
                        <Cpu className="w-4 h-4 text-purple-600" /> Cloud + DevSecOps Focus
                    </div>
                </motion.div>
            </header>

            {/* Main Navigation - The "Funnel" */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-5xl mb-24">

                {/* Primary Action: Portfolio (Dominant) */}
                <motion.div
                    className="md:col-span-8"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, type: "spring" }}
                >
                    <Link href="/portfolio" className="group h-full relative overflow-hidden bg-zinc-900 text-white p-10 md:p-14 rounded-xl flex flex-col justify-between hover:shadow-2xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-black block">
                        <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-white/10 duration-700"></div>

                        <div className="relative z-10">
                            <span className="inline-block px-3 py-1 rounded-full border border-white/30 text-[10px] font-bold tracking-widest mb-6 bg-white/10 backdrop-blur-sm uppercase group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 group-hover:text-emerald-300 transition-all duration-500">
                                <span className="animate-pulse inline-block w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                                Primary Destination
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-white transition-colors">PORTFOLIO</h3>
                            <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                                Resume, technical skills, detailed experience & hiring context.
                                <br />Everything you need to evaluate me as a candidate.
                            </p>
                        </div>

                        <div className="relative z-10 mt-12 flex items-center gap-3 font-bold group-hover:gap-5 transition-all text-emerald-400">
                            VIEW PORTFOLIO <ArrowUpRight className="w-6 h-6" />
                        </div>
                    </Link>
                </motion.div>

                <div className="md:col-span-4 flex flex-col gap-6">
                    {/* Secondary Action: Projects */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, type: "spring" }}
                    >
                        <Link href="/projects" className="h-full group p-8 bg-white/80 backdrop-blur-sm border-2 border-zinc-100 hover:border-emerald-600 hover:shadow-lg rounded-xl flex flex-col justify-center transition-all hover:-translate-y-0.5 relative overflow-hidden block">
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors flex items-center gap-2">
                                    PROJECTS HUB <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-xs text-zinc-500 font-sans">Case studies & deep dives.</p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Secondary Action: Archive */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, type: "spring" }}
                    >
                        <Link href="/blog" className="h-full group p-8 bg-white/80 backdrop-blur-sm border-2 border-zinc-100 hover:border-blue-600 hover:shadow-lg rounded-xl flex flex-col justify-center transition-all hover:-translate-y-0.5 relative overflow-hidden block">
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                                    ARCHIVE <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-xs text-zinc-500 font-sans">Engineering logs & research.</p>
                            </div>
                        </Link>
                    </motion.div>
                </div>

            </div>

            {/* SEO Content Section - Semantic Footer */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="max-w-3xl mx-auto text-center border-t border-zinc-200/50 pt-16 pb-12"
            >
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">About This Hub</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
                    This website serves as a central hub for my portfolio, projects, and engineering write-ups focused on DevOps, cloud infrastructure, cybersecurity, and penetration testing.
                </p>

                {/* Semantic Text Navigation for Crawlers */}
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-zinc-600">
                    <Link href="/portfolio" className="hover:text-black hover:underline decoration-zinc-400 underline-offset-4">Portfolio</Link>
                    <Link href="/projects" className="hover:text-black hover:underline decoration-zinc-400 underline-offset-4">Projects Hub</Link>
                    <Link href="/blog" className="hover:text-black hover:underline decoration-zinc-400 underline-offset-4">Engineering Archive</Link>
                </nav>
            </motion.section>

            <footer className="text-xs text-zinc-300 py-6">
                &copy; {new Date().getFullYear()} Rounak Neema
            </footer>
        </div>
    );
}
