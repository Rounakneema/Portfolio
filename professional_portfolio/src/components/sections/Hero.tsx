import { motion } from 'framer-motion';
import { Terminal, Shield, Code2 } from 'lucide-react';

export function Hero() {
    const stats = [
        { value: '1st', label: 'Place @ Techfest', sub: 'CTF Competition', delay: 0 },
        { value: '100+', label: 'CTF Challenges', sub: 'Solved (THM/HTB)', delay: 0.1 },
        { value: '12+', label: 'Microservices', sub: 'Docker • Go • AI', delay: 0.2 },
    ];

    return (
        <header className="mb-32">
            <div className="flex flex-col lg:flex-row justify-between items-end border-b border-black pb-8 mb-8 gap-8">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="mono-tag bg-blue-50 text-blue-600 border-blue-200">
                            EARLY CAREER // STUDENT
                        </span>
                        <span className="mono-tag bg-green-50 text-green-600 border-green-200">
                            OPEN TO INTERNSHIPS & ENTRY-LEVEL ROLES
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-4 text-black"
                    >
                        ROUNAK<br />NEEMA.
                    </motion.h1>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-12 mb-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative w-48 h-48 md:w-56 md:h-56 shrink-0"
                        >
                            <div className="absolute inset-0 border border-black/10 rotate-3"></div>
                            <div className="absolute inset-0 border border-black/10 -rotate-3"></div>
                            <div className="w-full h-full bg-gray-100 border border-border flex items-center justify-center relative overflow-hidden group">
                                <div className="text-xs font-mono text-center text-gray-400 p-4">
                                    [PROFILE_PIC]<br />
                                    SQUARE<br />
                                    BW / HIGH RES
                                </div>
                                {/* <img src="/path-to-your-image.jpg" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125" alt="Profile" /> */}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg md:text-xl font-medium text-secondary"
                        >
                            <div className="flex items-center gap-3 mb-4 text-black">
                                <span className="text-accent font-bold">&gt;</span>
                                SECURITY & INFRASTRUCTURE ENGINEER (EARLY CAREER)
                            </div>
                            <p className="text-base text-gray-600 max-w-xl leading-relaxed mb-4">
                                Focused on cybersecurity, DevSecOps, and cloud security fundamentals through hands-on labs, CTFs, and self-built tools.
                            </p>
                            <p className="text-base text-gray-500 max-w-xl leading-relaxed">
                                I’m a computer science student building a strong foundation in offensive security, cloud infrastructure, and security automation. I learn by breaking systems in controlled environments, fixing them with code, and documenting what I understand.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-3 gap-8 md:gap-12 text-right w-full lg:w-auto"
                >
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
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-8 text-xl font-mono text-secondary mt-12"
            >
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
            </motion.div>
        </header>
    );
}
