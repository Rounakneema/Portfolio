import { Github, Linkedin, FileText } from 'lucide-react';

export function Footer() {
    return (
        <footer id="contact" className="bg-black text-white px-8 md:px-12 py-32 rounded-t-[3rem] -mx-6 md:-mx-12">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
                            LET'S<br />CONNECT.
                        </h2>
                        <div className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl leading-relaxed">
                            Open to internships, entry-level roles, and learning-focused opportunities.
                        </div>
                        <a href="mailto:rounakneema414@gmail.com" className="text-2xl md:text-3xl font-bold hover:text-accent transition-colors border-b-2 border-black hover:border-accent pb-1 inline-block">
                            rounakneema414@gmail.com
                        </a>
                    </div>

                    <div className="text-right">
                        <div className="flex gap-6 mb-8 justify-end">
                            <a href="https://github.com/rounakneema" target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white hover:bg-accent transition-colors rounded-full">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/Rnks23" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0077b5] text-white hover:bg-accent transition-colors rounded-full">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="/resume.pdf" className="p-3 bg-gray-200 text-black hover:bg-accent hover:text-white transition-colors rounded-full">
                                <FileText className="w-6 h-6" />
                            </a>
                        </div>
                        <div className="text-sm font-mono text-gray-400">
                            ROUNAK NEEMA<br />
                            Security & Infrastructure Engineer (Early Career)<br />
                            India • Open to Work
                        </div>
                    </div>
                </div>

                <div className="text-right flex flex-col justify-end">
                    <p className="text-sm text-gray-500 max-w-md ml-auto leading-relaxed">
                        &copy; {new Date().getFullYear()} Rounak Neema.<br />
                        Built with React, Vite & Tailwind.
                    </p>
                </div>
            </div>
        </footer>
    );
}
