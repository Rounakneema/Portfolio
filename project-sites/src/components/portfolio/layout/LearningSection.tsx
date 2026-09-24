import { motion } from 'framer-motion';
import { BookOpen, FileText, Globe, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BlogPost {
    id: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    snippet: string;
}

export function LearningSection() {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        fetch('/blog/blogs.json')
            .then(res => res.json())
            .then(data => {
                // Take top 3
                setPosts(data.slice(0, 3));
            })
            .catch(err => console.error("Failed to fetch blogs:", err));
    }, []);

    // Fallback static items if fetch fails or loading
    const staticItems = [
        {
            title: 'Zero Trust Basics',
            type: 'Note',
            desc: 'Understanding identity-aware proxies and least privilege in cloud-native environments.',
            icon: BookOpen,
            status: 'Detailed Notes',
            color: 'text-blue-500 bg-blue-50 border-blue-200'
        },
        {
            title: 'K8s Attack Paths',
            type: 'Research',
            desc: 'Common misconfigurations in RBAC and container runtime security.',
            icon: Globe,
            status: 'Lab Write-up',
            color: 'text-purple-500 bg-purple-50 border-purple-200'
        },
        {
            title: 'CTF Retrospectives',
            type: 'Write-up',
            desc: 'Lessons learned from HackTheBox machines and documented attack chains.',
            icon: FileText,
            status: 'Documentation',
            color: 'text-green-500 bg-green-50 border-green-200'
        }
    ];

    const displayItems = posts.length > 0 ? posts.map(post => ({
        title: post.title,
        type: 'Blog Post',
        desc: post.description || post.snippet.substring(0, 100) + '...',
        icon: FileText,
        status: post.date,
        color: 'text-blue-500 bg-blue-50 border-blue-200',
        link: `/blog/posts/${post.id}`
    })) : staticItems;

    return (
        <section className="mb-48">
            <div className="flex justify-between items-end mb-12">
                <span className="section-label text-base md:text-lg mb-0">// LEARNING & WRITING</span>
                <a href="/blog" className="text-sm font-bold flex items-center gap-2 hover:text-accent transition-colors">
                    VIEW ALL <ArrowRight className="w-4 h-4" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayItems.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group border border-border p-8 hover:border-black transition-all cursor-pointer bg-white flex flex-col justify-between h-full"
                        onClick={() => {
                            if ((item as any).link) window.location.href = (item as any).link;
                        }}
                    >
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-full ${item.color}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <span className="mono-tag text-xs">{item.type}</span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-secondary leading-relaxed mb-8">
                                {item.desc}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                            {item.status}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
