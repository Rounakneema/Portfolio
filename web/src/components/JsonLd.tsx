export default function JsonLd() {
    const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://rounakneema.in/#website",
      "url": "https://rounakneema.in",
      "name": "Rounak Neema",
      "description": "Rounak Neema's personal engineering portfolio covering cybersecurity, DevSecOps, cloud infrastructure, AI systems, backend engineering, projects, and technical writing.",
      "publisher": {
        "@id": "https://rounakneema.in/#person"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://rounakneema.in/#webpage",
      "url": "https://rounakneema.in",
      "name": "Rounak Neema | Cybersecurity, DevSecOps & Cloud Engineering",
      "isPartOf": {
        "@id": "https://rounakneema.in/#website"
      },
      "about": {
        "@id": "https://rounakneema.in/#person"
      },
      "mainEntity": {
        "@id": "https://rounakneema.in/#person"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://rounakneema.in/portfolio#webpage",
      "url": "https://rounakneema.in/portfolio",
      "name": "Rounak Neema | Portfolio",
      "description": "Professional portfolio of Rounak Neema covering cybersecurity, DevSecOps, cloud infrastructure, security engineering, backend systems, and technical projects.",
      "isPartOf": {
        "@id": "https://rounakneema.in/#website"
      },
      "about": {
        "@id": "https://rounakneema.in/#person"
      },
      "mainEntity": {
        "@id": "https://rounakneema.in/#person"
      },
      "breadcrumb": {
        "@id": "https://rounakneema.in/portfolio#breadcrumb"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "Person",
      "@id": "https://rounakneema.in/#person",
      "name": "Rounak Neema",
      "url": "https://rounakneema.in",
      "image": "https://rounakneema.in/og-image.png",
      "description": "Computer Science engineering student and early-career Security & Infrastructure Engineer focused on cybersecurity, DevSecOps, cloud infrastructure, security automation, backend engineering, and AI systems.",
      "jobTitle": "Security & Infrastructure Engineer (Early Career)",
      "nationality": {
        "@type": "Country",
        "name": "India"
      },
      "alumniOf": {
        "@id": "https://rounakneema.in/#nmims"
      },
      "sameAs": [
        "https://github.com/rounakneema",
        "https://www.linkedin.com/in/Rnks23",
        "https://twitter.com/rounakneema"
      ],
      "knowsAbout": [
        "Cybersecurity",
        "Information Security",
        "DevSecOps",
        "Cloud Security",
        "Cloud Infrastructure",
        "DevOps",
        "Penetration Testing",
        "Red Teaming",
        "Network Security",
        "Network Scanning",
        "Vulnerability Testing",
        "Security Automation",
        "Threat Detection",
        "Linux",
        "Linux Internals",
        "TCP/IP",
        "Go",
        "Python",
        "Java",
        "Bash",
        "SQL",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "GitHub Actions",
        "PostgreSQL",
        "SQLite",
        "AI Engineering",
        "Artificial Intelligence",
        "AI Systems",
        "Backend Engineering",
        "Distributed Systems",
        "Microservices",
        "REST APIs",
        "Software Engineering"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Security & Infrastructure Engineer",
        "occupationLocation": {
          "@type": "Country",
          "name": "India"
        },
        "skills": [
          "Cybersecurity",
          "DevSecOps",
          "Cloud Security",
          "Penetration Testing",
          "Network Security",
          "Go",
          "Python",
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Security Automation"
        ]
      },
      "seeks": {
        "@type": "Demand",
        "name": "Internships and Entry-Level Engineering Opportunities",
        "description": "Open to internships, entry-level roles, and learning-focused opportunities in cybersecurity, security engineering, DevOps, DevSecOps, cloud infrastructure, and penetration testing."
      },
      "award": "1st Place \u2014 Techfest CTF Competition"
    },
    {
      "@type": "CollegeOrUniversity",
      "@id": "https://rounakneema.in/#nmims",
      "name": "NMIMS University",
      "url": "https://www.nmims.edu/",
      "sameAs": "https://en.wikipedia.org/wiki/Narsee_Monjee_Institute_of_Management_Studies"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "@id": "https://rounakneema.in/#education",
      "credentialCategory": "Bachelor of Technology in Computer Science",
      "educationalLevel": "Undergraduate",
      "recognizedBy": {
        "@id": "https://rounakneema.in/#nmims"
      },
      "holder": {
        "@id": "https://rounakneema.in/#person"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://rounakneema.in/#skills",
      "name": "Technical Skills",
      "itemListElement": [
        { "@type": "Thing", "name": "Go" },
        { "@type": "Thing", "name": "Java" },
        { "@type": "Thing", "name": "Python" },
        { "@type": "Thing", "name": "Bash / Shell" },
        { "@type": "Thing", "name": "SQL" },
        { "@type": "Thing", "name": "Linux Internals" },
        { "@type": "Thing", "name": "TCP/IP" },
        { "@type": "Thing", "name": "Vulnerability Testing" },
        { "@type": "Thing", "name": "Threat Detection" },
        { "@type": "Thing", "name": "Docker" },
        { "@type": "Thing", "name": "Kubernetes" },
        { "@type": "Thing", "name": "CI/CD" },
        { "@type": "Thing", "name": "Git" },
        { "@type": "Thing", "name": "Burp Suite" },
        { "@type": "Thing", "name": "Wireshark" },
        { "@type": "Thing", "name": "Nmap" },
        { "@type": "Thing", "name": "PostgreSQL" },
        { "@type": "Thing", "name": "SQLite" }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://rounakneema.in/#projects",
      "name": "Rounak Neema Projects",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@id": "https://revealr.rounakneema.in/#software" } },
        { "@type": "ListItem", "position": 2, "item": { "@id": "https://osa.rounakneema.in/#software" } },
        { "@type": "ListItem", "position": 3, "item": { "@id": "https://metromind.rounakneema.in/#software" } },
        { "@type": "ListItem", "position": 4, "item": { "@id": "https://pipelineforge.rounakneema.in/#software" } },
        { "@type": "ListItem", "position": 5, "item": { "@id": "https://sortmail.rounakneema.in/#software" } },
        { "@type": "ListItem", "position": 6, "item": { "@id": "https://devcontext.rounakneema.in/#software" } },
        { "@type": "ListItem", "position": 7, "item": { "@id": "https://axiom-os.rounakneema.in/#software" } },
        { "@type": "ListItem", "position": 8, "item": { "@id": "https://dizzy.rounakneema.in/#software" } }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://revealr.rounakneema.in/#software",
      "name": "Revealr",
      "url": "https://revealr.rounakneema.in",
      "description": "High-speed Go network scanner and vulnerability mapping tool.",
      "applicationCategory": "SecurityApplication",
      "applicationSubCategory": "Network Security",
      "operatingSystem": "Linux",
      "programmingLanguage": ["Go", "Python"],
      "author": { "@id": "https://rounakneema.in/#person" },
      "creator": { "@id": "https://rounakneema.in/#person" },
      "keywords": ["network scanner", "network security", "vulnerability mapping", "Go", "Python", "SQLite", "cybersecurity"],
      "featureList": ["High-concurrency network scanning", "Adaptive scanning", "Stateful tracking", "Vulnerability mapping"]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://osa.rounakneema.in/#software",
      "name": "OSA",
      "url": "https://osa.rounakneema.in",
      "description": "Offline Security Auditor for air-gapped environments using a single-binary architecture and statistical detection engines.",
      "applicationCategory": "SecurityApplication",
      "applicationSubCategory": "Security Analytics",
      "operatingSystem": "Linux",
      "programmingLanguage": "Go",
      "author": { "@id": "https://rounakneema.in/#person" },
      "creator": { "@id": "https://rounakneema.in/#person" },
      "keywords": ["offline security", "air-gapped security", "security auditor", "anomaly detection", "log analysis", "Go", "cybersecurity"],
      "featureList": ["Offline security analysis", "Statistical detection", "Anomaly detection", "Single-binary deployment"]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://metromind.rounakneema.in/#software",
      "name": "MetroMind",
      "url": "https://metromind.rounakneema.in",
      "description": "AI-powered document intelligence platform using microservices architecture for managing and searching large volumes of transit documents.",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Document Management",
      "author": { "@id": "https://rounakneema.in/#person" },
      "creator": { "@id": "https://rounakneema.in/#person" },
      "keywords": ["AI", "OCR", "document intelligence", "microservices", "Docker", "document search"],
      "featureList": ["AI-powered document intelligence", "Document search", "Microservices architecture", "OCR"]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://pipelineforge.rounakneema.in/#software",
      "name": "PipelineForge",
      "url": "https://pipelineforge.rounakneema.in",
      "description": "GitOps and DevSecOps CI/CD pipeline automation platform.",
      "applicationCategory": "DeveloperApplication",
      "applicationSubCategory": "DevOps",
      "author": { "@id": "https://rounakneema.in/#person" },
      "creator": { "@id": "https://rounakneema.in/#person" },
      "keywords": ["GitOps", "DevSecOps", "CI/CD", "pipeline automation", "DevOps", "security automation"]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://sortmail.rounakneema.in/#software",
      "name": "SortMail",
      "url": "https://sortmail.rounakneema.in",
      "description": "AI operating layer for professional email.",
      "applicationCategory": "BusinessApplication",
      "author": { "@id": "https://rounakneema.in/#person" },
      "creator": { "@id": "https://rounakneema.in/#person" },
      "keywords": ["AI email", "email automation", "email intelligence", "productivity", "AI"]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://devcontext.rounakneema.in/#software",
      "name": "Klarity",
      "url": "https://devcontext.rounakneema.in",
      "description": "AI repository intelligence platform for technical recruiting and project understanding.",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "DeveloperTools",
      "author": { "@id": "https://rounakneema.in/#person" },
      "creator": { "@id": "https://rounakneema.in/#person" },
      "keywords": ["AI", "repository intelligence", "technical recruiting", "software projects", "developer tools"]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://axiom-os.rounakneema.in/#software",
      "name": "AXIOM OS",
      "url": "https://axiom-os.rounakneema.in",
      "description": "Local-first personal AI operating system.",
      "applicationCategory": "ProductivityApplication",
      "applicationSubCategory": "Artificial Intelligence",
      "author": { "@id": "https://rounakneema.in/#person" },
      "creator": { "@id": "https://rounakneema.in/#person" },
      "keywords": ["local AI", "personal AI", "AI operating system", "offline-first", "Ollama", "automation"]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://dizzy.rounakneema.in/#software",
      "name": "Dizzy",
      "url": "https://dizzy.rounakneema.in",
      "description": "Voice-to-Figma AI interface builder.",
      "applicationCategory": "DesignApplication",
      "applicationSubCategory": "Artificial Intelligence",
      "author": { "@id": "https://rounakneema.in/#person" },
      "creator": { "@id": "https://rounakneema.in/#person" },
      "keywords": ["voice interface", "Figma", "AI design", "interface builder", "generative UI"]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://rounakneema.in/projects#webpage",
      "url": "https://rounakneema.in/projects",
      "name": "Projects | Rounak Neema",
      "description": "Engineering projects by Rounak Neema across cybersecurity, DevSecOps, AI, cloud infrastructure, backend engineering, and automation.",
      "isPartOf": { "@id": "https://rounakneema.in/#website" },
      "about": { "@id": "https://rounakneema.in/#person" },
      "mainEntity": { "@id": "https://rounakneema.in/#projects" },
      "breadcrumb": { "@id": "https://rounakneema.in/projects#breadcrumb" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "Blog",
      "@id": "https://rounakneema.in/blog#blog",
      "url": "https://rounakneema.in/blog",
      "name": "Rounak Neema \u2014 Engineering Blog",
      "description": "Technical writing covering cybersecurity, networking, Go, DevSecOps, cloud infrastructure, security engineering, and software development.",
      "publisher": { "@id": "https://rounakneema.in/#person" },
      "author": { "@id": "https://rounakneema.in/#person" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://rounakneema.in/blog/posts/go-raw-packet-scanner#article",
      "url": "https://rounakneema.in/blog/posts/go-raw-packet-scanner",
      "headline": "Go Raw Packet Scanner",
      "author": { "@id": "https://rounakneema.in/#person" },
      "publisher": { "@id": "https://rounakneema.in/#person" },
      "isPartOf": { "@id": "https://rounakneema.in/blog#blog" },
      "mainEntityOfPage": { "@id": "https://rounakneema.in/blog/posts/go-raw-packet-scanner#article" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rounakneema.in/portfolio#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rounakneema.in" },
        { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://rounakneema.in/portfolio" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rounakneema.in/projects#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rounakneema.in" },
        { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://rounakneema.in/projects" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://rounakneema.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Rounak Neema?",
          "acceptedAnswer": { "@type": "Answer", "text": "Rounak Neema is a Computer Science engineering student and early-career Security & Infrastructure Engineer focused on cybersecurity, cloud infrastructure, DevSecOps, AI systems, backend engineering, and security automation." }
        },
        {
          "@type": "Question",
          "name": "What does Rounak Neema specialize in?",
          "acceptedAnswer": { "@type": "Answer", "text": "Rounak Neema focuses on cybersecurity, DevSecOps, cloud infrastructure, penetration testing, network security, security automation, backend engineering, AI systems, and distributed systems." }
        },
        {
          "@type": "Question",
          "name": "What projects has Rounak Neema built?",
          "acceptedAnswer": { "@type": "Answer", "text": "Projects include Revealr, an adaptive Go network scanner and vulnerability mapping tool; OSA, an offline security auditor; MetroMind, an AI document intelligence platform; PipelineForge, a DevSecOps CI/CD automation platform; SortMail, an AI email operating layer; Klarity, an AI repository intelligence platform; AXIOM OS, a local-first personal AI operating system; and Dizzy, a voice-to-Figma AI interface builder." }
        },
        {
          "@type": "Question",
          "name": "What technologies does Rounak Neema work with?",
          "acceptedAnswer": { "@type": "Answer", "text": "Technologies include Go, Python, Java, Bash, SQL, Docker, Kubernetes, GitHub Actions, PostgreSQL, SQLite, Git, Burp Suite, Wireshark, Nmap, Linux, networking, AI engineering, DevSecOps, and cloud infrastructure." }
        },
        {
          "@type": "Question",
          "name": "Is Rounak Neema open to internships and entry-level roles?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Rounak Neema's portfolio states that he is open to internships, entry-level roles, and learning-focused opportunities." }
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

