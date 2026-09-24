import { notFound } from 'next/navigation';
import { Navbar } from '@/components/portfolio/layout/Navbar';
import { Footer } from '@/components/portfolio/layout/Footer';
import { ProjectDetailClient } from '@/components/ProjectDetailClient';
import { projects, getProjectBySlug } from '@/lib/projects';

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const project = getProjectBySlug(params.slug);
    if (!project) return {};
    return {
        title: `${project.title} // Rounak Neema`,
        description: project.fullDescription,
    };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = getProjectBySlug(params.slug);
    if (!project) notFound();

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
            <Navbar />

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto pt-32">
                <ProjectDetailClient project={project} />
            </div>

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto mt-16">
                <Footer />
            </div>
        </main>
    );
}
