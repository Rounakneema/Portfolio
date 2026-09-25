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
                    'https://twitter.com/rounakneema'
                ],
                'jobTitle': 'Cybersecurity, Cloud & AI Systems Engineer',
                'worksFor': {
                    '@type': 'Organization',
                    'name': 'Open to Work'
                },
                'alumniOf': {
                    '@type': 'CollegeOrUniversity',
                    'name': 'NMIMS University'
                },
                'knowsAbout': [
                    'Cybersecurity',
                    'DevOps',
                    'Cloud Computing',
                    'Penetration Testing',
                    'Go (Programming Language)',
                    'Python',
                    'AI Engineering',
                    'Distributed Systems'
                ],
                'description': 'DevOps and security-focused platform engineer. Portfolio, projects, and engineering logs covering cloud infrastructure, DevSecOps, automation, and offensive security.'
            },
            {
                '@type': 'SoftwareApplication',
                'name': 'Revealr',
                'url': 'https://revealr.rounakneema.in',
                'description': 'High-Speed Go Network Scanner & Vulnerability Mapping Tool',
                'author': { '@id': 'https://rounakneema.in/#person' }
            },
            {
                '@type': 'SoftwareApplication',
                'name': 'OSA',
                'url': 'https://osa.rounakneema.in',
                'description': 'Offline Security Auditor for Air-Gapped Environments',
                'author': { '@id': 'https://rounakneema.in/#person' }
            },
            {
                '@type': 'SoftwareApplication',
                'name': 'MetroMind',
                'url': 'https://metromind.rounakneema.in',
                'description': 'Enterprise AI Document Intelligence Platform',
                'author': { '@id': 'https://rounakneema.in/#person' }
            },
            {
                '@type': 'SoftwareApplication',
                'name': 'PipelineForge',
                'url': 'https://pipelineforge.rounakneema.in',
                'description': 'GitOps DevSecOps CI/CD Pipeline Automation',
                'author': { '@id': 'https://rounakneema.in/#person' }
            },
            {
                '@type': 'SoftwareApplication',
                'name': 'SortMail',
                'url': 'https://sortmail.rounakneema.in',
                'description': 'AI Operating Layer for Professional Email',
                'author': { '@id': 'https://rounakneema.in/#person' }
            },
            {
                '@type': 'SoftwareApplication',
                'name': 'Klarity',
                'url': 'https://devcontext.rounakneema.in',
                'description': 'AI Repository Intelligence for Technical Recruiting',
                'author': { '@id': 'https://rounakneema.in/#person' }
            },
            {
                '@type': 'SoftwareApplication',
                'name': 'AXIOM OS',
                'url': 'https://axiom-os.rounakneema.in',
                'description': 'Local-First Personal AI Operating System',
                'author': { '@id': 'https://rounakneema.in/#person' }
            },
            {
                '@type': 'SoftwareApplication',
                'name': 'Dizzy',
                'url': 'https://dizzy.rounakneema.in',
                'description': 'Voice-to-Figma AI Interface Builder',
                'author': { '@id': 'https://rounakneema.in/#person' }
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': 'Who is Rounak Neema?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Rounak Neema is a Computer Science engineering student and software engineer focused on cybersecurity, cloud infrastructure, DevOps, AI systems, and backend engineering.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'What projects has Rounak Neema built?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Rounak Neema has built several technical projects including Revealr (Go network scanner), OSA (offline security auditor), MetroMind (AI document intelligence), PipelineForge (DevSecOps CI/CD), SortMail (AI email), Klarity (AI repository recruiting), AXIOM OS (local AI OS), and Dizzy (Voice-to-Figma).'
                        }
                    }
                ]
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
