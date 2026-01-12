import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { LearningSection } from './components/layout/LearningSection';
import { LookingForSection } from './components/sections/LookingForSection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <LearningSection />
      <LookingForSection />
      <Footer />
    </Layout>
  );
}

export default App;
