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

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto pt-28">
                {/* Page Header — compact */}
                <header className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 bg-gray-100 border border-gray-200">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                                </span>
                                <span className="font-mono text-[10px] tracking-[0.1em] text-gray-500 uppercase">Case Studies & Engineering</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-none">
                                PROJECTS HUB
                            </h1>
                        </div>
                        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                            Systems I've designed and built. Each project links to its own subdomain.
                        </p>
                    </div>
                </header>

                <ProjectsHubClient />
            </div>

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto mt-20">
                <Footer />
            </div>
        </main>
    );
}
