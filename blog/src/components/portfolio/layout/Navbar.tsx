import { FileText, Github, Linkedin, Menu, X, PenTool } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-border bg-white/90 backdrop-blur-md">
            <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo & Status */}
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold font-mono rounded-sm select-none">
                        RN
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="text-xs font-mono text-secondary leading-tight mb-1">STATUS</div>
                        <div className="text-sm font-bold tracking-widest text-green-600 flex items-center justify-end gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            OPEN TO WORK
                        </div>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="https://github.com/rounakneema" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 tracking-wide">
                        <Github className="w-5 h-5" /> GITHUB
                    </a>
                    <a href="/blog" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 tracking-wide">
                        <PenTool className="w-5 h-5" /> WRITINGS
                    </a>
                    <a href="https://www.linkedin.com/in/Rnks23" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 tracking-wide">
                        <Linkedin className="w-5 h-5" /> LINKEDIN
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-6 py-3 text-sm font-bold tracking-wide hover:bg-accent transition-colors flex items-center gap-2 rounded-sm"
                    >
                        <FileText className="w-4 h-4" /> DOWNLOAD RESUME (PDF)
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 hover:bg-gray-100 rounded"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden border-b border-border bg-white overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            <a href="#" className="text-sm font-bold flex items-center gap-3 py-2">
                                <Github className="w-4 h-4" /> GITHUB
                            </a>
                            <a href="#" className="text-sm font-bold flex items-center gap-3 py-2">
                                <Linkedin className="w-4 h-4" /> LINKEDIN
                            </a>
                            <a href="/resume.pdf" className="text-sm font-bold flex items-center gap-3 py-2 text-accent">
                                <FileText className="w-4 h-4" /> DOWNLOAD RESUME
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
