import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AXIOM OS | Architecture',
    description: 'Deep dive into AXIOM OS system topology and daemon architecture.',
};

export default function ArchitecturePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-red-600 selection:text-white">
            <style dangerouslySetInnerHTML={{ __html: `
                .brutalist-border { border: 2px solid #333; }
                .brutalist-border-b { border-bottom: 2px solid #333; }
                .brutalist-border-r { border-right: 2px solid #333; }
                .grid-bg { background-size: 40px 40px; background-image: linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px); }
            `}} />

            <header className="brutalist-border-b p-6 bg-black flex justify-between items-center">
                <div>
                    <h1 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tighter">
                        Architecture Spec
                    </h1>
                    <p className="text-red-500 text-sm uppercase mt-1">AXIOM OS // System Topology</p>
                </div>
                <Link href="/axiom-os" className="text-gray-500 hover:text-white uppercase text-sm border border-gray-800 px-4 py-2 hover:bg-white hover:text-black transition-colors">
                    &lt; Return Base
                </Link>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 max-w-[1600px] mx-auto min-h-screen">
                {/* LEFT SIDEBAR */}
                <div className="lg:col-span-3 brutalist-border-r bg-[#050505] p-6 hidden lg:block">
                    <h3 className="text-gray-600 uppercase text-xs font-bold mb-4 tracking-widest">Index</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="hover:text-red-500 cursor-pointer">1. Top-Level Topology</li>
                        <li className="hover:text-red-500 cursor-pointer">2. Specter Daemon</li>
                        <li className="hover:text-red-500 cursor-pointer">3. Local Memory Layer</li>
                        <li className="hover:text-red-500 cursor-pointer">4. AI Interpretation</li>
                    </ul>

                    <div className="mt-12">
                        <h3 className="text-gray-600 uppercase text-xs font-bold mb-4 tracking-widest">Status</h3>
                        <div className="bg-black border border-gray-800 p-4 font-mono text-xs text-green-500">
                            [OK] DAEMON_ALIVE<br/>
                            [OK] DB_LOCKED<br/>
                            [OK] OLLAMA_READY<br/>
                            V: 0.1.0-alpha
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="lg:col-span-9 p-6 md:p-12 xl:p-16 grid-bg">
                    <div className="max-w-4xl mx-auto space-y-16">
                        
                        <section>
                            <h2 className="text-3xl font-black uppercase text-white mb-6">1. Top-Level Topology</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                AXIOM OS operates entirely on the local machine. There is no cloud telemetry, no remote inference, and no external API dependencies. 
                                The architecture is strictly separated into three layers: Collection (Specter), Storage (SQLite), and Intelligence (Ollama + Qwen).
                            </p>
                            <div className="bg-black brutalist-border p-6 overflow-x-auto">
                                <pre className="text-green-500 text-xs leading-tight">
{`
+-------------------------------------------------------------+
|                        USER MACHINE                         |
|                                                             |
|  +-----------------+    +-----------------+                 |
|  |                 |    |                 |                 |
|  |  Specter Daemon |    |  Ollama Engine  |                 |
|  |  (Go)           |    |  (qwen2.5:3b)   |                 |
|  |                 |    |                 |                 |
|  +--------+--------+    +--------+--------+                 |
|           |                      |                          |
|           | (Write)              | (Read/Infer)             |
|           v                      v                          |
|  +----------------------------------------+                 |
|  |                                        |                 |
|  |           SQLite Memory Layer          |                 |
|  |                                        |                 |
|  +----------------------------------------+                 |
|                                                             |
+-------------------------------------------------------------+
`}
                                </pre>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-black uppercase text-white mb-6">2. Specter Daemon</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Written in Go for minimal overhead, the Specter daemon is the sensory organ of AXIOM. It continuously monitors window focus, active processes, and system state. It does not analyze text—it merely records deterministic facts.
                            </p>
                            <div className="bg-black border border-gray-800 p-6 text-sm text-gray-400">
                                <p className="mb-2"><span className="text-blue-500 font-bold">Process:</span> specter.exe</p>
                                <p className="mb-2"><span className="text-blue-500 font-bold">Memory Footprint:</span> &lt; 15MB</p>
                                <p><span className="text-blue-500 font-bold">Interval:</span> 1Hz (1 poll per second)</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-black uppercase text-white mb-6">3. Local Memory Layer</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                All telemetry is funneled into a local SQLite database. This acts as the single source of truth. The AI layer cannot modify the raw telemetry, ensuring an immutable ledger of behavior that prevents the LLM from hallucinating past user actions.
                            </p>
                            <div className="bg-black border-l-4 border-red-600 p-6">
                                <pre className="text-gray-300 text-xs">
{`CREATE TABLE telemetry (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    active_window TEXT NOT NULL,
    process_name TEXT NOT NULL,
    category TEXT DEFAULT 'UNKNOWN'
);`}
                                </pre>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-black uppercase text-white mb-6">4. AI Interpretation</h2>
                            <p className="text-gray-300 leading-relaxed">
                                The intelligence layer runs on demand, querying the SQLite database for recent behavior contexts. Using small, efficient local models via Ollama (like Qwen 2.5), it cross-references recorded actions against predefined user policies to generate "Focus Scores" or issue contextual reprimands.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </main>
    );
}
