'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function LookingForSection() {
    return (
        <section className="mb-48">
            <span className="section-label text-base md:text-lg mb-12">// WHAT I'M LOOKING FOR</span>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-12 md:p-16 border-l-4 border-accent relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <ArrowRight className="w-64 h-64" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                    <div>
                        <h3 className="text-3xl font-bold mb-8">OPEN TO ROLES</h3>
                        <ul className="space-y-4">
                            {[
                                'DevSecOps Engineer / Intern',
                                'Cloud Security Engineer',
                                'Red Teaming / Offensive Security',
                                'Security Infrastructure Engineer',
                                'DevOps Engineer',
                                'Cybersecurity Analyst'
                            ].map(role => (
                                <li key={role} className="flex items-center gap-4 text-xl font-medium text-secondary">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                    {role}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold mb-8">WHAT I BRING</h3>
                        <div className="space-y-6">
                            <p className="text-lg text-secondary leading-relaxed">
                                <strong className="text-black">Strong Fundamentals:</strong> I don't just use tools; I understand the underlying protocols and systems they interact with.
                            </p>
                            <p className="text-lg text-secondary leading-relaxed">
                                <strong className="text-black">Hands-on Mindset:</strong> I learn by doing. My labs and projects are proof of my ability to build, break, and fix.
                            </p>
                            <p className="text-lg text-secondary leading-relaxed">
                                <strong className="text-black">Communication:</strong> I believe security is about enabling teams, not blocking them. I explain technical risks clearly.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
