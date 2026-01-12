'use client';

import { useEffect, useState } from 'react';
import { Layers } from 'lucide-react';

export function TerraformLog() {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        const messages = [
            "<span class='text-yellow-500'>~ update</span> aws_s3_bucket.logs",
            "<span class='text-red-500'>- destroy</span> aws_security_group.legacy",
            "<span class='text-green-500'>+ create</span> aws_lambda_function.audit",
            "<span class='text-gray-500'>refreshing state...</span>",
            "<span class='text-cyan-500'>~ modify</span> aws_iam_role.k8s_worker",
        ];

        let index = 0;
        const interval = setInterval(() => {
            setLogs(prev => {
                const newLogs = [messages[index % messages.length], ...prev];
                return newLogs.slice(0, 7); // Keep last 7
            });
            index++;
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-panel p-4 flex flex-col h-full group hover:border-cyan-500/30 transition-colors">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white tracking-widest">IaC_STATE_MONITOR</span>
                </div>
                <span className="text-[10px] text-yellow-500 animate-pulse font-mono">DRIFT DETECTED</span>
            </div>

            <div className="flex-1 bg-black/50 border border-white/5 p-3 font-mono text-[10px] overflow-hidden relative rounded">
                <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500/50"></div>
                <div className="space-y-1">
                    {logs.map((log, i) => (
                        <div key={i} dangerouslySetInnerHTML={{ __html: log }} className="animate-type-line" />
                    ))}
                </div>
            </div>

            <div className="mt-4 flex justify-between text-[10px] text-gray-500 font-mono">
                <span>PROVIDER: AWS</span>
                <span>STATE: LOCKED</span>
            </div>
        </div>
    );
}
