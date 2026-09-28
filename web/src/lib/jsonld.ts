export const coreNodes = {
    website: {
      "@type": "WebSite",
      "@id": "https://rounakneema.in/#website",
      "url": "https://rounakneema.in",
      "name": "Rounak Neema",
      "description": "Rounak Neema's personal engineering portfolio covering cybersecurity, DevSecOps, cloud infrastructure, AI systems, backend engineering, projects, and technical writing.",
      "publisher": { "@id": "https://rounakneema.in/#person" },
      "inLanguage": "en-IN"
    },
    person: {
      "@type": "Person",
      "@id": "https://rounakneema.in/#person",
      "name": "Rounak Neema",
      "url": "https://rounakneema.in",
      "image": "https://rounakneema.in/og-image.png",
      "description": "Computer Science engineering student and early-career Security & Infrastructure Engineer focused on cybersecurity, DevSecOps, cloud infrastructure, security automation, backend engineering, and AI systems.",
      "jobTitle": "Security & Infrastructure Engineer (Early Career)",
      "nationality": { "@type": "Country", "name": "India" },
      "alumniOf": { "@id": "https://rounakneema.in/#nmims" },
      "sameAs": [
        "https://github.com/rounakneema",
        "https://www.linkedin.com/in/Rnks23",
        "https://twitter.com/rounakneema"
      ],
      "knowsAbout": ["Cybersecurity", "DevSecOps", "Cloud Security", "DevOps", "Go", "Python", "Docker", "Kubernetes", "AI Systems"]
    },
    nmims: {
      "@type": "CollegeOrUniversity",
      "@id": "https://rounakneema.in/#nmims",
      "name": "NMIMS University",
      "url": "https://www.nmims.edu/"
    },
    education: {
      "@type": "EducationalOccupationalCredential",
      "@id": "https://rounakneema.in/#education",
      "credentialCategory": "Bachelor of Technology in Computer Science",
      "educationalLevel": "Undergraduate",
      "recognizedBy": { "@id": "https://rounakneema.in/#nmims" },
      "holder": { "@id": "https://rounakneema.in/#person" }
    },
    projectsItemList: {
      "@type": "ItemList",
      "@id": "https://rounakneema.in/#projects",
      "name": "Rounak Neema Projects",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@id": "https://revealr.rounakneema.in/#software" } },
        { "@type": "ListItem", "position": 2, "item": { "@id": "https://osa.rounakneema.in/#software" } },
        { "@type": "ListItem", "position": 3, "item": { "@id": "https://metromind.rounakneema.in/#software" } },
        { "@type": "ListItem", "position": 4, "item": { "@id": "https://pipelineforge.rounakneema.in/#software" } }
      ]
    },
    faq: {
      "@type": "FAQPage",
      "@id": "https://rounakneema.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Rounak Neema?",
          "acceptedAnswer": { "@type": "Answer", "text": "Rounak Neema is a Computer Science engineering student and early-career Security & Infrastructure Engineer." }
        }
      ]
    }
};
