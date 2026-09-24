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
        title: `${project.title} | Rounak Neema`,
        description: project.fullDescription.substring(0, 160),
        keywords: [project.title, ...project.tech, project.category, 'Rounak Neema', 'Projects'],
        openGraph: {
            title: `${project.title} | Project by Rounak Neema`,
            description: project.fullDescription.substring(0, 160),
            url: `https://${project.subdomain}`,
            siteName: 'Rounak Neema',
            images: [
                {
                    url: '/og-image.png', // Assuming default og-image for now
                    width: 1200,
                    height: 630,
                    alt: project.title,
                }
            ],
            locale: 'en_US',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} | Rounak Neema`,
            description: project.fullDescription.substring(0, 160),
            creator: '@rounakneema',
        }
    };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = getProjectBySlug(params.slug);
    if (!project) notFound();

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
            <Navbar />

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto pt-24">
                <ProjectDetailClient project={project} />
            </div>

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto mt-12">
                <Footer />
            </div>
        </main>
    );
}
