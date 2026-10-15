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

                {/* Center: Services & Links */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs font-mono">
                    <span className="col-span-2 text-gray-500 font-bold uppercase tracking-widest mb-1">Freelance Services</span>
                    <a href="/freelance/software-development" className="text-gray-400 hover:text-white transition-colors">Go &amp; Backend MVP</a>
                    <a href="/freelance/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Security Audits</a>
                    <a href="/freelance/devsecops" className="text-gray-400 hover:text-white transition-colors">DevSecOps &amp; CI/CD</a>
                    <a href="/freelance/ai-development" className="text-gray-400 hover:text-white transition-colors">AI &amp; Document Ingest</a>
                    <a href="/freelance" className="text-blue-400 hover:text-blue-300 transition-colors font-bold mt-1">All Services &rarr;</a>
                    <a href="/projects" className="text-blue-400 hover:text-blue-300 transition-colors font-bold mt-1">Projects Hub &rarr;</a>
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
                        ROUNAK NEEMA · Software, Security &amp; Infrastructure<br />
                        India · Available for Freelance &amp; Roles · © {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </footer>
    );
}

