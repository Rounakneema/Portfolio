import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from 'next';

// ... inside the default export function, likely near JsonLd or children ...
// Wait, I should not use comment placeholders in ReplacementContent if I want to be precise.
// I will use strict StartLine/EndLine or carefully construct the replacement.
// Let's modify imports first then the body.

import { getAllPosts } from '@/lib/posts';
import { GlobalSearchWrapper } from '@/components/GlobalSearchWrapper';
import JsonLd from '@/components/JsonLd';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rounak Neema | DevOps & Security-Focused Platform Engineer',
  description: 'DevOps and security-focused platform engineer. Portfolio, projects, and engineering logs covering cloud infrastructure, DevSecOps, automation, and offensive security.',
  metadataBase: new URL('https://rounakneema.in'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Rounak Neema',
    'DevOps Engineer',
    'Security Engineer',
    'Cloud Security',
    'Red Teaming',
    'Golang',
    'Kubernetes',
    'Cybersecurity',
    'Penetration Tester',
    'Cybersecurity Engineer',
    'Ethical Hacker',
  ],
  authors: [{ name: 'Rounak Neema', url: 'https://rounakneema.in' }],
  creator: 'Rounak Neema',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rounakneema.in',
    title: 'Rounak Neema | DevOps & Security-Focused Platform Engineer',
    description: 'DevOps and security-focused platform engineer. Portfolio, projects, and engineering logs covering cloud infrastructure, DevSecOps, automation, and offensive security.',
    siteName: 'Rounak Neema',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Rounak Neema' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rounak Neema | DevOps & Security-Focused Platform Engineer',
    description: 'DevOps and security-focused platform engineer. Portfolio, projects, and engineering logs covering cloud infrastructure, DevSecOps, automation, and offensive security.',
    creator: '@rounakneema',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getAllPosts();

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900 bg-gray-50 text-black">
        {/* Engineering Grid Background */}
        <div className="fixed inset-0 z-[-1] opacity-[0.4]" style={{
          backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        {/* Soft Background Aurora */}
        <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50/80 via-white/20 to-transparent pointer-events-none z-[-1]"></div>
        <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none z-[-1]"></div>
        <div className="fixed top-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-3xl pointer-events-none z-[-1]"></div>


        <div className="relative z-10 flex-1 w-full text-black">
          {children}
        </div>

        <JsonLd />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rounak Neema",
              "url": "https://rounakneema.in",
              "sameAs": [
                "https://github.com/rounakneema",
                "https://linkedin.com/in/Rnks23"
              ],
              "jobTitle": "DevOps Engineer | Security Engineer | Penetration Tester",
              "worksFor": {
                "@type": "Organization",
                "name": "NMIMS University"
              },
              "knowsAbout": [
                "DevOps",
                "Cloud Infrastructure",
                "Cybersecurity",
                "DevSecOps",
                "Penetration Testing",
                "Go (Progamming Language)",
                "Kubernetes",
                "Automation",
                "Network Security"
              ],
              "description": "Early-career DevOps and security-focused engineer with hands-on experience in cloud infrastructure, DevSecOps pipelines, security automation, and offensive security labs."
            })
          }}
        />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
