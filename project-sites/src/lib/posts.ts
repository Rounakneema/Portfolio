import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMetadata {
    title: string;
    date: string;
    tags: string[];
    cover?: string;
    excerpt: string;
    author?: string;
}

export interface Post extends PostMetadata {
    slug: string;
    content: string;
    readingTime: string;
}

export function getAllPosts(): Post[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);
            const stats = readingTime(content);

            return {
                slug,
                ...(data as PostMetadata),
                content,
                readingTime: stats.text,
            };
        });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
        slug,
        ...(data as PostMetadata),
        content,
        readingTime: stats.text,
    };
}

export async function markdownToHtml(markdown: string) {
    const result = await unified()
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
        .use(rehypeHighlight)
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(markdown);

    return result.toString();
}

export function getAllTags(): string[] {
    const posts = getAllPosts();
    const tags = new Set<string>();

    posts.forEach((post) => {
        post.tags?.forEach((tag) => tags.add(tag));
    });

    return Array.from(tags).sort();
}

export function getPostsByTag(tag: string): Post[] {
    const posts = getAllPosts();
    return posts.filter((post) => post.tags?.includes(tag));
}
