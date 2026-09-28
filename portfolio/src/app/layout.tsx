import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from 'next';
import { TitleHandler } from '@/components/TitleHandler';
import Script from 'next/script';
import JsonLd from '@/components/JsonLd';
import './styles.css';

export const metadata: Metadata = {
    title: 'Rounak Neema | Cybersecurity, DevSecOps & Cloud Engineering',
    description: 'Rounak Neema is a computer science student focused on cybersecurity, DevSecOps, cloud infrastructure and security engineering. Explore his projects, technical work, research and engineering portfolio.',
    metadataBase: new URL('https://rounakneema.in'),
    alternates: {},
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-paper text-black font-sans antialiased">
                <TitleHandler />
                <JsonLd type="portfolio" />
                {children}
                <Analytics />
            
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9VE98GTMDY" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9VE98GTMDY');
          `}
        </Script>
      </body>
        </html>
    );
}




