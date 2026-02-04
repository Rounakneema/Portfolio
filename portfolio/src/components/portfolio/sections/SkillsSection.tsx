'use client';

import { motion } from 'framer-motion';

export function SkillsSection() {
    const categories = [
        {
            title: 'LANGUAGES',
            color: 'text-blue-600',
            hoverColor: 'group-hover:text-blue-600',
            skills: [
                { name: 'Go (Golang)', desc: 'High-performance tools & backend services.' },
                { name: 'Java', desc: 'Enterprise application development.' },
                { name: 'Python', desc: 'Automation scripts & security tools.' },
                { name: 'Bash / Shell', desc: 'Linux system automation.' },
                { name: 'SQL', desc: 'Effective database management.' }
            ]
        },
        {
            title: 'SYSTEMS & SECURITY',
            color: 'text-red-600',
            hoverColor: 'group-hover:text-red-600',
            skills: [
                { name: 'Linux Internals', desc: 'Filesystems, processes, and permissions.' },
                { name: 'TCP/IP', desc: 'Raw sockets & packet analysis.' },
                { name: 'Vulnerability Testing', desc: 'Identifying exploitable flaws.' },
                { name: 'Detection Eng', desc: 'Writing rules for threat detection.' }
            ]
        },
        {
            title: 'DEVOPS & INFRA',
            color: 'text-green-600',
            hoverColor: 'group-hover:text-green-600',
            skills: [
                { name: 'Docker', desc: 'Containerization & Microservices.' },
                { name: 'Kubernetes', desc: 'Orchestration & Cluster Management.' },
                { name: 'CI/CD', desc: 'Automated pipelines (GitHub Actions).' },
                { name: 'PostgreSQL/SQLite', desc: 'Database administration.' }
            ]
        },
        {
            title: 'TOOLS',
            color: 'text-purple-600',
            hoverColor: 'group-hover:text-purple-600',
            skills: [
                { name: 'Git', desc: 'Version control & collaboration.' },
                { name: 'Burp Suite', desc: 'Web application security testing.' },
                { name: 'Wireshark', desc: 'Network protocol analysis.' },
                { name: 'Nmap', desc: 'Network mapper & reconnaissance.' }
            ]
        }
    ];

    return (
        <section className="mb-48">
            <span className="section-label text-sm">// TECHNICAL ARSENAL (VERIFIED)</span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="border border-border p-8 bg-white hover:border-gray-400 transition-colors"
                    >
                        <h3 className={`font-bold text-base mb-6 flex items-center gap-2 ${category.color}`}>
                            {category.title}
                        </h3>
                        <ul className="space-y-6 text-sm">
                            {category.skills.map(skill => (
                                <li key={skill.name} className="group">
                                    <div className={`font-bold text-lg text-black ${category.hoverColor} transition-colors mb-1`}>
                                        {skill.name}
                                    </div>
                                    <div className="text-secondary leading-normal">
                                        {skill.desc}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
