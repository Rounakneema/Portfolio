'use client';

import { FileText, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ResumeDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-black text-white px-6 py-3 text-sm font-bold tracking-wide hover:bg-accent transition-colors flex items-center gap-2 rounded-sm focus:outline-none"
            >
                <FileText className="w-4 h-4" /> DOWNLOAD RESUME <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-56 bg-white border border-border shadow-lg z-50 rounded-sm overflow-hidden"
                    >
                        <div className="flex flex-col">
                            <a
                                href="/resume-sre.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-3 text-sm font-bold hover:bg-gray-100 transition-colors border-b border-gray-100 text-black flex items-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <FileText className="w-4 h-4 text-accent" /> SRE / DevOps
                            </a>
                            <a
                                href="/resume-cybersec.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-3 text-sm font-bold hover:bg-gray-100 transition-colors text-black flex items-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <FileText className="w-4 h-4 text-accent" /> Cybersecurity
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
