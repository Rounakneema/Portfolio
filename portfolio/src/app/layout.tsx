import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from 'next';
import { TitleHandler } from '@/components/TitleHandler';
import JsonLd from '@/components/JsonLd';
import './styles.css';

export const metadata: Metadata = {
    title: 'Portfolio // Rounak Neema',
    description: 'Rounak Neema - DevOps & Security Engineer Portfolio',
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
            </body>
        </html>
    );
}



