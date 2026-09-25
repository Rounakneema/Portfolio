const fs = require('fs');
const path = require('path');

function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
            processDir(full);
        } else if (file.endsWith('.tsx')) {
            let content = fs.readFileSync(full, 'utf8');
            let orig = content;

            // Fix empty hrefs in Link components
            content = content.replace(/href=""/g, 'href="/"');
            content = content.replace(/href=''/g, 'href="/"');

            // Fix relative hash links inside page navigation if they appear in subpages
            // e.g. href="#intelligence" should ideally be href="/#intelligence" IF it's in a shared nav.
            // But if it's only in page.tsx, href="#intelligence" is fine.
            // Since the user is asking to find broken hashes for all pages, I will check if SortMail has id="intelligence" and id="security".

            if (content !== orig) {
                fs.writeFileSync(full, content, 'utf8');
                console.log(`Fixed empty hrefs in ${full}`);
            }
        }
    }
}

processDir('project-sites/src/app');
