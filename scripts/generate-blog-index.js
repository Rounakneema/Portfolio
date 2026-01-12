const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(__dirname, '../blog/content/posts'); // Adjusted to point to the restored blog's content
const outputDirectory = path.join(__dirname, '../blog/public');
const outputFile = path.join(outputDirectory, 'blogs.json');

// Ensure output directory exists
if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
}

// Helper to parse frontmatter (simple implementation)
function parseFrontmatter(content) {
    const normalized = content.replace(/\r\n/g, '\n');
    const match = normalized.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { metadata: {}, content: content };

    const metadata = {};
    const frontmatterLines = match[1].split('\n');

    frontmatterLines.forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
            let value = valueParts.join(':').trim();
            // Handle arrays (e.g., tags: [a, b, c])
            if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(s => s.trim().replace(/['"]/g, ''));
            }
            metadata[key.trim()] = value;
        }
    });

    return { metadata, content: match[2].trim() };
}

function generateBlogIndex() {
    if (!fs.existsSync(postsDirectory)) {
        console.log('No posts directory found, skipping blog generation.');
        fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
        return;
    }

    const files = fs.readdirSync(postsDirectory);
    const posts = files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const filePath = path.join(postsDirectory, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const { metadata, content } = parseFrontmatter(fileContent);

            return {
                id: file.replace('.md', ''),
                ...metadata,
                content: content, // In a real app, you might render markdown to HTML here
                snippet: content.slice(0, 200) + '...'
            };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
    console.log(`Generated ${posts.length} blog posts to ${outputFile}`);
}

generateBlogIndex();
