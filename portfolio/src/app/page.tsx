import { Navbar } from '@/components/portfolio/layout/Navbar';
import { Hero } from '@/components/portfolio/sections/Hero';
import { AboutSection } from '@/components/portfolio/sections/AboutSection';
import { SkillsSection } from '@/components/portfolio/sections/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/sections/ProjectsSection';
import { LookingForSection } from '@/components/portfolio/sections/LookingForSection';
import { Footer } from '@/components/portfolio/layout/Footer';

export const metadata = {
    title: 'Rounak Neema | Cybersecurity, DevSecOps & Cloud Security Engineer',
    description: 'Rounak Neema is a Computer Science student and early-career security and infrastructure engineer focused on cybersecurity, DevSecOps, cloud security, Go, network security, and security engineering.',
    alternates: {
        canonical: '/portfolio',
    },
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
            <Navbar />
            <div className="pt-20 px-6 md:px-12 max-w-[1400px] mx-auto">
                <Hero />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <LookingForSection />
            </div>
            <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <Footer />
            </div>
        </main>
    );
}

