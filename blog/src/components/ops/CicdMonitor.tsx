'use client';

import { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

export function CicdMonitor() {
    const [tasks, setTasks] = useState<string[]>([]);

    useEffect(() => {
        const ansibleTasks = [
            "TASK [Update apt cache] ******************",
            "<span class='text-green-500'>ok: [web-01]</span>",
            "TASK [Install Nginx] *********************",
            "<span class='text-yellow-500'>changed: [web-01]</span>",
            "TASK [Copy Config] ***********************",
            "<span class='text-green-500'>ok: [db-01]</span>",
            "TASK [Restart Service] *******************",
        ];

        let index = 0;
        const interval = setInterval(() => {
            setTasks(prev => {
                const newTasks = [ansibleTasks[index % ansibleTasks.length], ...prev];
                return newTasks.slice(0, 8);
            });
            index++;
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-6">
            {/* Jenkins Status */}
            <div className="p-6 glass-panel relative group hover:border-cyan-500/30 transition-colors">
                <div className="text-[10px] text-gray-500 uppercase mb-2 font-mono">Continuous Deployment</div>
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    <h2 className="text-sm font-bold text-white font-mono">JENKINS: BUILD #8842</h2>
                </div>
                <div className="w-full bg-gray-800 h-1 mt-2 mb-1 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[75%] animate-pulse"></div>
                </div>
                <div className="flex justify-between text-[8px] text-gray-500 font-mono">
                    <span>STAGE: DOCKER_BUILD</span>
                    <span>75%</span>
                </div>
            </div>

            {/* Ansible Stream */}
            <div className="relative group">
                <label className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 block font-mono">Automation Stream</label>
                <div className="h-40 overflow-hidden border border-white/10 p-2 font-mono text-[9px] text-gray-400 bg-black/20 rounded">
                    <div className="space-y-1">
                        {tasks.map((task, i) => (
                            <div key={i} dangerouslySetInnerHTML={{ __html: task }} className="animate-type-line" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
