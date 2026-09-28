import { Post } from '@/lib/posts';

interface BlogPostSchemaProps {
    post: Post;
    url: string;
}

export default function BlogPostSchema({ post, url }: BlogPostSchemaProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${url}/#blogposting`,
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': url
        },
        'headline': post.title,
        'description': post.excerpt,
        'datePublished': post.date,
        'dateModified': post.date, // Assuming no separate modified date for now
                'author': {
            '@id': 'https://rounakneema.in/#person'
        },
        
        'isPartOf': {
            '@id': 'https://rounakneema.in/blog/#blog'
        },
        
        'image': post.coverImage ? `https://rounakneema.in${post.coverImage}` : 'https://rounakneema.in/og-image.png',
        'url': url,
        'keywords': post.tags
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

