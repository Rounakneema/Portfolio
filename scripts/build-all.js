const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const apiStaticDir = path.join(rootDir, 'api', 'static');

// Helper to run commands
const run = (cmd, cwd) => {
    console.log(`Running: ${cmd} in ${cwd}`);
    execSync(cmd, { cwd, stdio: 'inherit' });
};

// Clean api/static
if (fs.existsSync(apiStaticDir)) {
    fs.rmSync(apiStaticDir, { recursive: true, force: true });
}
fs.mkdirSync(apiStaticDir, { recursive: true });

// 1. Build Web (Root)
const webDir = path.join(rootDir, 'web');
if (fs.existsSync(webDir)) {
    run('npm install', webDir);
    run('npm run build', webDir);
    // Copy web/out content directly to api/static (Root)
    const webOut = path.join(webDir, 'out');
    fs.cpSync(webOut, apiStaticDir, { recursive: true });
}

// 2. Build Blog
const blogDir = path.join(rootDir, 'blog');
if (fs.existsSync(blogDir)) {
    run('npm install', blogDir);
    run('npm run build', blogDir); // This outputs to blog/out with basePath /blog baked in? 
    // Wait, next export with basePath usually puts assets under out/basePath or expects it.
    // If basePath is /blog, Next.js generates folder 'out' containing files. 
    // We should copy 'blog/out' to 'api/static/blog' OR 'api/static/' depending on internal structure.
    // Usually 'out' contains the static files. If basePath is set, assets are usually prefix-safe.
    // However, for filesystem routing, we physically need a 'blog' folder in static.

    // Let's create api/static/blog and copy 'blog/out' content there? 
    // OR if 'blog/out' already has 'blog' folder inside? 
    // Typically 'next export' with basePath doesn't create the folder inside 'out'.
    // So we manually copy to subfolder.
    const blogOut = path.join(blogDir, 'out');
    const destBlog = path.join(apiStaticDir, 'blog');
    fs.mkdirSync(destBlog, { recursive: true });
    fs.cpSync(blogOut, destBlog, { recursive: true });
}

// 3. Build Portfolio
const portfolioDir = path.join(rootDir, 'portfolio');
if (fs.existsSync(portfolioDir)) {
    run('npm install', portfolioDir);
    run('npm run build', portfolioDir);
    const portfolioOut = path.join(portfolioDir, 'out');
    const destPortfolio = path.join(apiStaticDir, 'portfolio');
    fs.mkdirSync(destPortfolio, { recursive: true });
    // Same logic as blog, copy content to subfolder
    fs.cpSync(portfolioOut, destPortfolio, { recursive: true });
}

console.log('All builds completed and merged into api/static');
