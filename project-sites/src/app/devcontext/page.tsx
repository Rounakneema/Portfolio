import React from 'react';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { DevContextNav } from '@/components/devcontext/DevContextNav';
import { DevContextHero } from '@/components/devcontext/DevContextHero';
import { DevContextWorkflow } from '@/components/devcontext/DevContextWorkflow';
import { DevContextFeatures } from '@/components/devcontext/DevContextFeatures';
import { DevContextArchitectureBanner } from '@/components/devcontext/DevContextArchitectureBanner';
import { SearchableFaq } from '@/components/shared/SearchableFaq';
import { projectFaqs } from '@/lib/projectFaqs';
import { ProjectEmailIntake } from '@/components/ProjectEmailIntake';

export const metadata = {
  title: 'DevContext · Grounded Codebase Intelligence & Technical Interview Confidence',
  description: 'DevContext parses repository syntax trees into clear architecture diagrams, extracts deep technical questions, and lets you practice mock interviews with zero hallucinations.',
  alternates: {
    canonical: 'https://devcontext.rounakneema.in',
  },
};

export default function DevContextPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ee] text-[#18181b] font-sans selection:bg-[#1d4ed8] selection:text-white overflow-x-hidden">
      {/* Schema.org Structured Data */}
      <ProjectJsonLd slug="devcontext" />

      {/* Screen Reader Semantic Title */}
      <h1 className="sr-only">DevContext - Grounded Codebase Intelligence &amp; Technical Interview Confidence</h1>

      {/* Navigation */}
      <DevContextNav />

      {/* Hero Workspace with Layered Desk */}
      <DevContextHero />

      {/* 4-Step Process Strip & Washi Tape Banner */}
      <DevContextWorkflow />

      {/* Features & AST Grounding Depth */}
      <DevContextFeatures />

      {/* Architecture Subpage Documentation Banner Card */}
      <DevContextArchitectureBanner />

      {/* Searchable SEO FAQs & Email Intake Section */}
      <section id="faq" className="w-full py-16 px-6 md:px-10 max-w-[1400px] mx-auto border-t border-[#e5ded2]">
        <SearchableFaq
          items={projectFaqs.devcontext}
          theme="light"
          accentColor="#1d4ed8"
          title="Frequently Asked Questions"
          eyebrow="EVIDENCE GROUNDING &amp; ARCHITECTURE FAQ"
          projectName="DevContext"
        />

        <div className="mt-16">
          <ProjectEmailIntake
            slug="devcontext"
            projectName="DevContext"
            isLight={true}
          />
        </div>
      </section>
    </main>
  );
}
