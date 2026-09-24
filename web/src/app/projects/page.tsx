import { Navbar } from '@/components/portfolio/layout/Navbar';
import { Footer } from '@/components/portfolio/layout/Footer';
import { ProjectsHubClient } from '@/components/ProjectsHubClient';
import { projects } from '@/lib/projects';

export const metadata = {
    title: 'Projects Hub // Rounak Neema',
    description: 'A collection of engineering projects spanning high-performance network scanning, offline security analytics, DevOps tooling, and microservices platforms.',
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
            <Navbar />

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto pt-32">
                {/* Page Header */}
                <header className="mb-20">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8 bg-gray-100 border border-gray-200">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="font-mono text-xs tracking-[0.1em] text-gray-500 uppercase">Case Studies & Engineering</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div>
                            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-black leading-none mb-4">
                                PROJECTS
                            </h1>
                            <p className="text-gray-500 font-medium text-lg max-w-2xl leading-relaxed">
                                Systems I've designed and built — from kernel-level packet processors to AI-powered document platforms.
                                Each project has its own subdomain for a direct deep dive.
                            </p>
                        </div>
                        <div className="shrink-0 font-mono text-xs text-gray-400 text-right hidden md:block">
                            <div>{projects.length} projects</div>
                            <div className="text-gray-300">*.rounakneema.in</div>
                        </div>
                    </div>
                </header>

                {/* Projects Grid */}
                <ProjectsHubClient />
            </div>

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto mt-32">
                <Footer />
            </div>
        </main>
    );
}
