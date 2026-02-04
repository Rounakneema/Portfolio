import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import { GlobalSearchWrapper } from '@/components/GlobalSearchWrapper';
import { PortfolioLink } from '@/components/PortfolioLink';
import { UnifiedFooter } from '@/components/UnifiedFooter';
import JsonLd from '@/components/JsonLd';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Rounak Neema // DevOps & Security Engineer',
    template: '%s // Rounak Neema',
  },
  description: 'Portfolio of Rounak Neema, a DevOps & Security Engineer from NMIMS University. Specializing in Cloud Native, Red Teaming, and Infrastructure Automation.',
  metadataBase: new URL('https://rounakneema.vercel.app'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Rounak Neema',
    'Rounak Neema NMIMS',
    'DevOps Engineer',
    'Security Engineer',
    'Cloud Security',
    'Red Teaming',
    'NMIMS Shirpur',
    'Golang Developer',
    'Kubernetes',
    'Cybersecurity Portfolio'
  ],
  authors: [{ name: 'Rounak Neema', url: 'https://rounakneema.vercel.app' }],
  creator: 'Rounak Neema',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rounakneema.vercel.app',
    title: 'Rounak Neema // DevOps & Security Engineer',
    description: 'Portfolio of Rounak Neema. Building secure cloud infrastructure and automating defense systems.',
    siteName: 'Rounak Neema',
    images: [
      {
        url: '/og-image.png', // We should ensure this exists
        width: 1200,
        height: 630,
        alt: 'Rounak Neema Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rounak Neema // DevOps & Security Engineer',
    description: 'Building secure cloud infrastructure and automating defense systems.',
    creator: '@rounakneema',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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

        <PortfolioLink />

        <div className="relative z-10 flex-1 w-full text-black">
          {children}
        </div>

        <JsonLd />
        {/* <GlobalSearchWrapper posts={posts} /> */}

        <UnifiedFooter />
      </body>
    </html>
  );
}
