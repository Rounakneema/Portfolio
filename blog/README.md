# Personal Blog

A premium, SEO-optimized blog built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ Markdown-based content with frontmatter
- ✅ Syntax highlighting for code blocks
- ✅ Tag-based filtering
- ✅ SEO optimization (meta tags, OG images, sitemap)
- ✅ Reading time estimation
- ✅ Responsive design with glassmorphism UI
- ✅ Dark mode optimized

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create environment file**:
   ```bash
   # Copy the example and fill in your values
   cp .env.example .env.local
   ```

3. **Add your first blog post**:
   Create a `.md` file in `content/posts/`:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2025-01-15"
   tags: ["tag1", "tag2"]
   excerpt: "Brief description..."
   ---
   
   Your content here...
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## Posting Workflow

### Git-Based (Recommended)
1. Create/edit `.md` files in `content/posts/`
2. Commit and push to GitHub
3. Deploy automatically (Vercel/Netlify)

### Environment Variables
Set `ADMIN_PASSWORD` in your deployment environment for admin access.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import repository in Vercel
3. Set environment variables
4. Deploy

### Manual
```bash
npm run build
npm start
```

## File Structure
```
blog/
├── content/
│   └── posts/          # Blog posts (.md)
├── src/
│   ├── app/
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   ├── posts/      # Post pages
│   │   └── tags/       # Tag pages
│   ├── components/     # React components
│   └── lib/
│       └── posts.ts    # Post utilities
└── public/
    └── images/         # Static images
```

## Customization

- **Colors**: Edit `tailwind.config.ts`
- **Fonts**: Update `globals.css`
- **Metadata**: Modify `layout.tsx`
