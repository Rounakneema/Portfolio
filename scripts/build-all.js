const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd, cwd) {
    console.log(`[EXEC] ${cmd} in ${cwd}`);
    execSync(cmd, { stdio: 'inherit', cwd });
}

const ROOT = path.resolve(__dirname, '..');
const BACKEND_STATIC = path.join(ROOT, 'backend', 'static');

// 1. Clean
console.log('Cleaning backend/static...');
if (fs.existsSync(BACKEND_STATIC)) {
    fs.rmSync(BACKEND_STATIC, { recursive: true, force: true });
}
fs.mkdirSync(path.join(BACKEND_STATIC, 'portfolio'), { recursive: true });
fs.mkdirSync(path.join(BACKEND_STATIC, 'blog'), { recursive: true });

// 2. Build Portfolio
console.log('Building Portfolio...');
run('npm run build', path.join(ROOT, 'professional_portfolio'));

// 2.5 Generate Blog Index
console.log('Generating Blog Index...');
run('node scripts/generate-blog-index.js', ROOT);

// 3. Build Blog
console.log('Building Blog...');
run('npm run build', path.join(ROOT, 'blog'));

// 4. Move Assets
console.log('Moving Portfolio Assets...');
// Move contents of professional_portfolio/dist to backend/static/portfolio
fs.cpSync(path.join(ROOT, 'professional_portfolio', 'dist'), path.join(BACKEND_STATIC, 'portfolio'), { recursive: true });

console.log('Moving Blog Assets...');
// Move contents of blog/out to backend/static/blog
fs.cpSync(path.join(ROOT, 'blog', 'out'), path.join(BACKEND_STATIC, 'blog'), { recursive: true });

console.log('Build Complete. Run "go run main.go" in backend directory.');
