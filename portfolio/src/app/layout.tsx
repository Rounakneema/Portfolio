import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
    title: 'Portfolio // Rounak Neema',
    description: 'Rounak Neema - DevOps & Security Engineer Portfolio',
    metadataBase: new URL('https://rounakneema.in/portfolio'),
    alternates: {
        canonical: './',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-paper text-black font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
