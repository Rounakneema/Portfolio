const fs = require('fs');
const path = require('path');

const projectDirs = ['axiom-os', 'devcontext', 'dizzy', 'metromind', 'osa', 'pipelineforge', 'revealr', 'sortmail'];

function getIds(content) {
    const ids = new Set();
    const regex = /id=["']([^"']+)["']/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        ids.add(match[1]);
    }
    return ids;
}

function getHashes(content) {
    const hashes = new Set();
    // match href="#id" or href="/#id"
    const regex = /href=["']\/?#([^"']+)["']/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        hashes.add(match[1]);
    }
    return hashes;
}

for (const project of projectDirs) {
    const pagePath = `project-sites/src/app/${project}/page.tsx`;
    let pageIds = new Set();
    if (fs.existsSync(pagePath)) {
        pageIds = getIds(fs.readFileSync(pagePath, 'utf8'));
    }

    // Check nav components if any
    let hashesToCheck = new Set();
    
    // find all .tsx files in the project app dir
    function scanHashes(dir) {
        if (!fs.existsSync(dir)) return;
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const full = path.join(dir, file);
            if (fs.statSync(full).isDirectory()) scanHashes(full);
            else if (file.endsWith('.tsx')) {
                const h = getHashes(fs.readFileSync(full, 'utf8'));
                h.forEach(x => hashesToCheck.add(x));
            }
        }
    }

    scanHashes(`project-sites/src/app/${project}`);
    scanHashes(`project-sites/src/components/${project}`);
    
    // specific check for components
    if (project === 'devcontext') scanHashes('project-sites/src/components/devcontext');
    // ... we scanned components/${project} already.

    const broken = [...hashesToCheck].filter(h => !pageIds.has(h));
    
    if (broken.length > 0) {
        console.log(`[${project}] BROKEN HASHES: ${broken.join(', ')}`);
        console.log(`[${project}] AVAILABLE IDS: ${[...pageIds].join(', ')}`);
    } else {
        console.log(`[${project}] All hashes ok!`);
    }
}
