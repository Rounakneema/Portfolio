import { Navbar } from '@/components/portfolio/layout/Navbar';
import { Hero } from '@/components/portfolio/sections/Hero';
import { AboutSection } from '@/components/portfolio/sections/AboutSection';
import { SkillsSection } from '@/components/portfolio/sections/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/sections/ProjectsSection';
import { LookingForSection } from '@/components/portfolio/sections/LookingForSection';
import { Footer } from '@/components/portfolio/layout/Footer';

export const metadata = {
    title: 'Portfolio // Rounak',
    description: 'Rounak Neema\'s professional portfolio. DevOps Engineer and Security Researcher from NMIMS seeking internships. Skills: Go, Kubernetes, Cloud Security.',
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
