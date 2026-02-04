'use client';

import { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

export function LiveTerminal() {
    const [text, setText] = useState('');

    useEffect(() => {
        const commands = [
            "kubectl get pods -n prod --watch",
            "terraform plan -out=tfplan",
            "ansible-playbook site.yml -i inventory",
            "go run main.go",
            "python3 audit_iam.py"
        ];

        let cmdIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeout: NodeJS.Timeout;

        const type = () => {
            const currentCmd = commands[cmdIndex % commands.length];

            if (!isDeleting) {
                setText(currentCmd.substring(0, charIndex + 1));
                charIndex++;
                if (charIndex === currentCmd.length) {
                    isDeleting = true;
                    timeout = setTimeout(type, 1500); // Pause at end
                    return;
                }
            } else {
                setText(currentCmd.substring(0, charIndex - 1));
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    cmdIndex++;
                }
            }
            timeout = setTimeout(type, isDeleting ? 30 : 80);
        };

        type();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="glass-panel p-4 flex flex-col h-full group hover:border-cyan-500/30 transition-colors">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white tracking-widest">LIVE_CONSOLE</span>
                </div>
                <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500/50"></span>
                </div>
            </div>

            <div className="flex-1 bg-[#0a0a0a] border border-white/5 p-3 font-mono text-[10px] text-gray-300 rounded overflow-hidden">
                <div className="flex gap-2 mb-2 border-b border-white/10 pb-1">
                    <span className="text-cyan-400">bash</span>
                    <span className="text-gray-600">python</span>
                    <span className="text-gray-600">go</span>
                </div>
                <div>
                    <span className="text-green-500">root@sentinel:~$</span>{' '}
                    <span className="text-white">{text}</span>
                    <span className="animate-pulse">_</span>
                </div>
            </div>
        </div>
    );
}
