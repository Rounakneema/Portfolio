'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
            <div className="lg:col-span-8">
                <span className="section-label">// CANDIDATE PROFILE</span>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 md:p-12"
                >
                    <h2 className="text-2xl font-bold mb-6">BACKGROUND</h2>
                    <p className="text-secondary leading-relaxed mb-6 font-medium">
                        Final-year Computer Science student at NMIMS University with a deep focus on DevSecOps and Offensive Security.
                    </p>
                    <p className="text-secondary leading-relaxed mb-6 text-sm">
                        Unlike typical students, I don't just study theory. I build and break real infrastructure in my home lab. I have extensive hands-on experience deploying Kubernetes clusters, writing custom security tools in Go, and simulating Red Team operations in controlled environments.
                    </p>
                    <p className="text-secondary leading-relaxed mb-6 text-sm border-l-2 border-accent pl-4">
                        <strong className="text-black">Goal:</strong> Seeking an internship or entry-level role where I can contribute to securing cloud infrastructure and automating defense pipelines.
                    </p>
                </motion.div>
            </div>

            <div className="lg:col-span-4">
                <span className="section-label">// CURRENT STATUS</span>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white border border-border p-8 h-full flex flex-col justify-between"
                >
                    <div className="space-y-6">
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="font-mono text-xs text-gray-400">EDUCATION</span>
                            <span className="font-bold text-sm text-right">NMIMS University<br /><span className="text-secondary font-normal">B.Tech CS (3rd Year)</span></span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="font-mono text-xs text-gray-400">FOCUS</span>
                            <span className="font-bold text-sm text-right">DevOps<br />Cybersecurity</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="font-mono text-xs text-gray-400">LOCATION</span>
                            <span className="font-bold text-sm text-right">Shirpur, India</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="text-[10px] font-mono text-gray-400 mb-2">KEY INTERESTS</div>
                        <div className="flex flex-wrap gap-2">
                            <span className="mono-tag">Java</span>
                            <span className="mono-tag">Go</span>
                            <span className="mono-tag">Networking</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
