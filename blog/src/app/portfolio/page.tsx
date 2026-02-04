import { Navbar } from '@/components/portfolio/layout/Navbar';
import { HeroSection } from '@/components/portfolio/sections/HeroSection';
import { AboutSection } from '@/components/portfolio/sections/AboutSection';
import { ExperienceSection } from '@/components/portfolio/sections/ExperienceSection';
import { SkillsSection } from '@/components/portfolio/sections/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/sections/ProjectsSection';
import { ContactSection } from '@/components/portfolio/sections/ContactSection';
import { Footer } from '@/components/portfolio/layout/Footer';

export const metadata = {
    title: 'Portfolio // Rounak',
    description: 'Full stack developer & security researcher portfolio.',
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
