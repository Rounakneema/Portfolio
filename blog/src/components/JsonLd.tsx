
export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Rounak Neema',
        url: 'https://rounakneema.vercel.app',
        image: 'https://rounakneema.vercel.app/og-image.png',
        sameAs: [
            'https://github.com/rounakneema',
            'https://www.linkedin.com/in/Rnks23',
            'https://twitter.com/rounakneema',
        ],
        jobTitle: 'DevOps & Security Engineer',
        worksFor: {
            '@type': 'Organization',
            name: 'Open to Work',
        },
        alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'NMIMS University',
        },
        knowsAbout: ['DevOps', 'Cybersecurity', 'Cloud Computing', 'Go', 'Kubernetes', 'Red Teaming'],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
