export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': 'https://rounakneema.in/#website',
                'url': 'https://rounakneema.in',
                'name': 'Rounak Neema',
                'publisher': {
                    '@id': 'https://rounakneema.in/#person'
                }
            },
            {
                '@type': 'Person',
                '@id': 'https://rounakneema.in/#person',
                'name': 'Rounak Neema',
                'url': 'https://rounakneema.in',
                'image': 'https://rounakneema.in/og-image.png',
                'sameAs': [
                    'https://github.com/rounakneema',
                    'https://linkedin.com/in/Rnks23',
                    'https://twitter.com/rounakneema',
                ],
                'jobTitle': 'DevOps Engineer | Security Engineer | Penetration Tester',
                'worksFor': {
                    '@type': 'Organization',
                    'name': 'Open to Work',
                },
                'alumniOf': {
                    '@type': 'CollegeOrUniversity',
                    'name': 'NMIMS University',
                },
                'knowsAbout': [
                    'DevOps',
                    'Cloud Infrastructure',
                    'Cybersecurity',
                    'DevSecOps',
                    'Penetration Testing',
                    'Go (Programming Language)',
                    'Kubernetes',
                    'Automation',
                    'Network Security',
                    'Red Teaming'
                ],
                'description': 'Early-career DevOps and security-focused engineer with hands-on experience in cloud infrastructure, DevSecOps pipelines, security automation, and offensive security labs.'
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
