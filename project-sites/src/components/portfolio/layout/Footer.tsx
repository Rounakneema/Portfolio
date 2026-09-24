import { Github, Linkedin, FileText } from 'lucide-react';

export function Footer() {
    return (
        <footer id="contact" className="bg-black text-white px-8 md:px-12 py-14 rounded-t-2xl -mx-6 md:-mx-12">
            <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                {/* Left: CTA */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tighter leading-none">
                        LET'S CONNECT.
                    </h2>
                    <p className="text-sm text-gray-400 mb-4 max-w-xs leading-relaxed">
                        Open to internships, entry-level roles, and learning-focused opportunities.
                    </p>
                    <a
                        href="mailto:rounakneema414@gmail.com"
                        className="text-sm md:text-base font-bold hover:text-blue-400 transition-colors border-b border-zinc-700 hover:border-blue-400 pb-0.5 inline-block"
                    >
                        rounakneema414@gmail.com
                    </a>
                </div>

                {/* Right: icons + tagline */}
                <div className="flex flex-col items-start md:items-end gap-4">
                    <div className="flex gap-3">
                        <a href="https://github.com/rounakneema" target="_blank" rel="noopener noreferrer"
                            className="p-2.5 bg-zinc-800 text-white hover:bg-blue-600 transition-colors rounded-lg">
                            <Github className="w-4 h-4" />
                        </a>
                        <a href="https://www.linkedin.com/in/Rnks23" target="_blank" rel="noopener noreferrer"
                            className="p-2.5 bg-[#0077b5] text-white hover:bg-blue-600 transition-colors rounded-lg">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="/resume-sre.pdf" title="Resume (SRE/DevOps)"
                            className="p-2.5 bg-zinc-800 text-white hover:bg-blue-600 transition-colors rounded-lg">
                            <FileText className="w-4 h-4" />
                        </a>
                        <a href="/resume-cybersec.pdf" title="Resume (Cybersecurity)"
                            className="p-2.5 bg-zinc-800 text-white hover:bg-blue-600 transition-colors rounded-lg">
                            <FileText className="w-4 h-4" />
                        </a>
                    </div>
                    <div className="text-xs font-mono text-gray-500 text-left md:text-right leading-relaxed">
                        ROUNAK NEEMA · Security & Infrastructure (Early Career)<br />
                        India · Open to Work · © {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </footer>
    );
}

