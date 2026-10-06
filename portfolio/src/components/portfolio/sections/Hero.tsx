import { Terminal, Shield, Code2 } from 'lucide-react';

export function Hero() {
    const stats = [
        { value: '1st', label: 'Place @ Techfest', sub: 'CTF Competition', delayClass: 'delay-100' },
        { value: '100+', label: 'CTF Challenges', sub: 'Solved (THM/HTB)', delayClass: 'delay-200' },
        { value: '12+', label: 'Microservices', sub: 'Docker & Go & AI', delayClass: 'delay-300' },
    ];

    return (
        <header className="mb-20">
            <div className="flex flex-col lg:flex-row justify-between items-end border-b border-black pb-8 mb-8 gap-8">
                <div>
                    <div className="flex items-center gap-3 mb-6 animate-fade-in-up opacity-0-init">
                        <span className="mono-tag bg-blue-50 text-blue-600 border-blue-200">
                            EARLY CAREER // STUDENT
                        </span>
                        <span className="mono-tag bg-green-50 text-green-600 border-green-200">
                            OPEN TO INTERNSHIPS & ENTRY-LEVEL ROLES
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-4 text-black animate-fade-in-up opacity-0-init delay-100">
                        ROUNAK<br />NEEMA.
                    </h1>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-12 mb-8">
                        <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 animate-scale-in opacity-0-init delay-200">
                            <div className="absolute inset-0 border border-black/10 rotate-3"></div>
                            <div className="absolute inset-0 border border-black/10 -rotate-3"></div>
                            <div className="w-full h-full bg-gray-100 border border-border flex items-center justify-center relative overflow-hidden group">
                                <img
                                    src="/portfolio/me.jpg"
                                    fetchpriority="high"
                                    className="absolute inset-0 w-full h-full object-cover saturate-125"
                                    alt="Rounak Neema"
                                />
                            </div>
                        </div>

                        <div className="text-lg md:text-xl font-medium text-secondary animate-fade-in-up opacity-0-init delay-300">
                            <div className="flex items-center gap-3 mb-4 text-black">
                                <span className="text-accent font-bold">&gt;</span>
                                SECURITY & INFRASTRUCTURE ENGINEER (EARLY CAREER)
                            </div>
                            <p className="text-base text-gray-600 max-w-xl leading-relaxed mb-4">
                                Focused on cybersecurity, DevSecOps, and cloud security fundamentals through hands-on labs, CTFs, and self-built tools.
                            </p>
                            <p className="text-base text-gray-500 max-w-xl leading-relaxed">
                                I'm a computer science student building a strong foundation in offensive security, cloud infrastructure, and security automation. I learn by breaking systems in controlled environments, fixing them with code, and documenting what I understand.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-8 md:gap-12 text-right w-full lg:w-auto animate-scale-in opacity-0-init delay-400">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-widest text-secondary font-mono mb-1">
                                {stat.label}
                            </div>
                            <div className="text-[10px] text-gray-400 font-medium">
                                {stat.sub}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap gap-8 text-xl font-mono text-secondary mt-12 animate-fade-in-up opacity-0-init delay-400">
                <div className="flex items-center gap-3">
                    <Terminal className="w-6 h-6 text-accent" />
                    <span>DevSecOps</span>
                </div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full my-auto"></div>
                <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-accent" />
                    <span>Red Teaming</span>
                </div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full my-auto"></div>
                <div className="flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-accent" />
                    <span>Automation</span>
                </div>
            </div>
        </header>
    );
}
