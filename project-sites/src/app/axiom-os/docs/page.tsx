import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AXIOM OS | Documentation',
    description: 'System documentation, schemas, and daemon configuration for AXIOM OS.',
};

export default function AxiomOsDocsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-red-600 selection:text-white p-6 md:p-12 lg:p-24 max-w-[1200px] mx-auto border-x-2 border-x-[#333] border-b-2 border-b-[#333]">
            <style dangerouslySetInnerHTML={{ __html: `
                .brutalist-border { border: 2px solid #333; }
                .brutalist-border-b { border-bottom: 2px solid #333; }
                .brutalist-border-t { border-top: 2px solid #333; }
                .code-block { background: #050505; color: #a3a3a3; padding: 1rem; overflow-x: auto; font-size: 0.85rem; }
            `}} />

            <header className="mb-16 brutalist-border-b pb-8">
                <p className="text-red-500 font-bold mb-4 tracking-widest text-sm uppercase">AXIOM-OS // DOCS</p>
                <h1 className="text-2xl font-black uppercase tracking-tighter">System Manual</h1>
                <p className="text-gray-400 mt-4 max-w-2xl">
                    Raw engineering documentation for AXIOM OS. Specter daemon flags, memory schema definitions, and local Ollama setup.
                </p>
                <div className="mt-8">
                    <a href="/axiom-os" className="text-red-500 hover:text-white transition-colors underline decoration-2 underline-offset-4 font-bold uppercase">
                        &lt; Return to Overview
                    </a>
                </div>
            </header>

            <section className="mb-16">
                <h2 className="text-2xl font-bold uppercase mb-6 text-white border-l-4 border-red-500 pl-4">1. Specter Daemon Configuration</h2>
                <p className="text-gray-400 mb-4">
                    The Specter daemon (written in Go) collects local telemetry. It is strictly configured via CLI flags or a <code>config.yaml</code>.
                </p>
                <div className="brutalist-border code-block mb-4">
<pre>{`$ specterd --help
Usage of specterd:
  -config string
        Path to config.yaml (default "/etc/axiom/specter.yaml")
  -db string
        SQLite database path (default "/var/lib/axiom/memory.db")
  -poll-interval duration
        Telemetry polling interval (default 500ms)
  -module-browser bool
        Enable browser history tracking (default true)
  -module-shell bool
        Enable bash/zsh history parsing (default true)
  -module-screen bool
        Enable periodic screen OCR [HEAVY] (default false)
  -log-level string
        Log level: debug, info, warn, error (default "info")`}</pre>
                </div>
                <div className="bg-[#111] p-4 brutalist-border text-sm text-gray-300">
                    <strong className="text-red-500 uppercase">Warning:</strong> Enabling <code>-module-screen</code> will invoke the local Tesseract binary and spike CPU usage. Use with caution on battery power.
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold uppercase mb-6 text-white border-l-4 border-red-500 pl-4">2. Memory Layer (SQLite Schema)</h2>
                <p className="text-gray-400 mb-4">
                    AXIOM relies on a determinisitic memory layer to store context before AI evaluation. The schema ensures strict typing for telemetry events.
                </p>
                <div className="brutalist-border code-block">
<pre>{`-- memory.sql
CREATE TABLE telemetry_events (
    id TEXT PRIMARY KEY,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    source TEXT NOT NULL, -- e.g., 'browser', 'shell', 'window_manager'
    payload JSON NOT NULL,
    processed BOOLEAN DEFAULT 0
);

CREATE TABLE behavior_evaluations (
    id TEXT PRIMARY KEY,
    event_id TEXT,
    axis_1_score REAL, -- Current Role Duties
    axis_2_score REAL, -- Personal Goal Alignment
    axis_3_score REAL, -- General Wellbeing
    intent_label TEXT,
    roast_generated BOOLEAN DEFAULT 0,
    FOREIGN KEY(event_id) REFERENCES telemetry_events(id)
);

CREATE INDEX idx_unprocessed_events ON telemetry_events(timestamp) WHERE processed = 0;`}</pre>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold uppercase mb-6 text-white border-l-4 border-red-500 pl-4">3. Local Ollama Initialization</h2>
                <p className="text-gray-400 mb-4">
                    AXIOM's brain is powered by local LLMs via Ollama. We use a quantized version of Qwen 2.5 for the evaluation pipeline.
                </p>
                
                <h3 className="text-lg font-bold mb-2 mt-6">Pulling the Model</h3>
                <div className="brutalist-border code-block mb-4 text-green-500">
<pre>{`$ ollama pull qwen2.5:3b
pulling manifest
pulling 8a3423... 100% ▕████████████████████████████████████████▏ 1.7 GB
pulling 4a1323... 100% ▕████████████████████████████████████████▏ 12 KB
verifying sha256 digest
writing manifest
removing any unused layers
success`}</pre>
                </div>

                <h3 className="text-lg font-bold mb-2 mt-6">Starting the Inference Server</h3>
                <div className="brutalist-border code-block">
<pre>{`#!/bin/bash
# start-inference.sh

export OLLAMA_HOST="127.0.0.1:11434"
export OLLAMA_MAX_VRAM="4G"

echo "[*] Starting Ollama server daemon..."
systemctl start ollama

echo "[*] Pre-loading Qwen 2.5 context..."
curl -X POST http://$OLLAMA_HOST/api/generate -d '{
  "model": "qwen2.5:3b",
  "prompt": "SYSTEM: Initialize AXIOM evaluation protocol.",
  "stream": false
}'

echo "[+] Inference layer online."`}</pre>
                </div>
            </section>

            <footer className="brutalist-border-t pt-8 mt-16 text-center text-gray-600 text-xs uppercase tracking-widest">
                End of Documentation // AXIOM-OS
            </footer>
        </main>
    );
}
