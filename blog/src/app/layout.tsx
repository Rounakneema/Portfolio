import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import { GlobalSearchWrapper } from '@/components/GlobalSearchWrapper';
import { PortfolioLink } from '@/components/PortfolioLink';
import { UnifiedFooter } from '@/components/UnifiedFooter';
import './globals.css';

export const metadata: Metadata = {
  title: 'Archive // Rounak',
  description: 'A personal archive of engineering logs, security research, and CTF writeups.',
  metadataBase: new URL('https://rounakneema.in/blog'),
  alternates: {
    canonical: './',
  },
  keywords: ['Cybersecurity', 'DevOps', 'Engineering', 'Go', 'Security Research', 'CTF'],
  authors: [{ name: 'Rounak Neema', url: 'https://rounakneema.in' }],
  openGraph: {
    title: 'Archive // Rounak',
    description: 'A personal archive of engineering logs, security research, and CTF writeups.',
    url: 'https://rounakneema.in',
    siteName: 'Archive',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archive // Rounak',
    description: 'Security Research & Engineering Logs',
    creator: '@rounakneema',
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

        {/* <GlobalSearchWrapper posts={posts} /> */}

        <UnifiedFooter />
      </body>
    </html>
  );
}
