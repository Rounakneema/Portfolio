'use client';

import { K8sGrid } from './K8sGrid';
import { TerraformLog } from './TerraformLog';
import { LiveTerminal } from './LiveTerminal';
import { CicdMonitor } from './CicdMonitor';

export function DevOpsDashboard() {
    return (
        <section className="mb-24">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgb(0,240,255)] animate-pulse"></div>
                <span className="text-sm font-bold tracking-[0.2em] text-white font-mono">SENTINEL // OPS_CENTER</span>
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-900/50 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-80 relative z-10">
                {/* Main Grid: K8s, Terraform, Terminal */}
                <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                    <div className="relative group">
                        <div className="absolute -top-3 right-4 px-2 bg-black text-[10px] text-cyan-500 font-mono border border-cyan-900/50 rounded z-20">
                            SKILL: ORCHESTRATION
                        </div>
                        <K8sGrid />
                    </div>
                    <div className="relative group">
                        <div className="absolute -top-3 right-4 px-2 bg-black text-[10px] text-yellow-500 font-mono border border-yellow-900/50 rounded z-20">
                            SKILL: IaC_EXPERT
                        </div>
                        <TerraformLog />
                    </div>
                    <div className="relative group">
                        <div className="absolute -top-3 right-4 px-2 bg-black text-[10px] text-green-500 font-mono border border-green-900/50 rounded z-20">
                            SKILL: AUTOMATION
                        </div>
                        <LiveTerminal />
                    </div>
                </div>

                {/* Sidebar: CI/CD */}
                <div className="lg:col-span-3 h-full relative group">
                    <div className="absolute -top-3 right-4 px-2 bg-black text-[10px] text-purple-500 font-mono border border-purple-900/50 rounded z-20">
                        SKILL: PIPELINES
                    </div>
                    <div className="glass-panel p-6 h-full">
                        <CicdMonitor />
                    </div>
                </div>
            </div>

            {/* Visual Connector to Content */}
            <div className="flex flex-col items-center mt-8 opacity-50">
                <div className="w-px h-16 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                <div className="px-4 py-1 border border-cyan-500/30 rounded-full bg-cyan-500/5 text-[10px] text-cyan-400 font-mono tracking-widest">
                    :: INCOMING_TRANSMISSIONS ::
                </div>
                <div className="w-px h-8 bg-gradient-to-b from-cyan-500/30 to-transparent"></div>
            </div>
        </section>
    );
}
