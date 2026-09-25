const fs = require('fs');
const path = require('path');

function processDir(dir, cb) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
            processDir(full, cb);
        } else if (file === 'page.tsx') {
            let content = fs.readFileSync(full, 'utf8');
            const newContent = cb(full, content);
            if (newContent !== content) {
                fs.writeFileSync(full, newContent, 'utf8');
                console.log(`Updated ${full}`);
            }
        }
    }
}

// 1. AXIOM OS & Dizzy - remove `<nav>` and back links since layout.tsx handles it
processDir('project-sites/src/app/axiom-os', (file, content) => {
    if (file.includes('architecture') || file.includes('decisions')) {
        // AXIOM OS had a left sidebar indexing things. That's fine, no top nav to remove.
        return content;
    }
    return content;
});

processDir('project-sites/src/app/dizzy', (file, content) => {
    if (file.includes('architecture') || file.includes('decisions') || file.includes('docs')) {
        return content.replace(/<Link href="\/dizzy"[\s\S]*?<\/Link>/g, '');
    }
    return content;
});

// 2. SortMail - switch red-600 to amber-500, remove brackets from nav in subpages
processDir('project-sites/src/app/sortmail', (file, content) => {
    if (file.includes('architecture') || file.includes('decisions') || file.includes('docs')) {
        let c = content.replace(/text-red-600/g, 'text-amber-500')
                       .replace(/border-red-600/g, 'border-amber-500')
                       .replace(/bg-red-600/g, 'bg-amber-500')
                       .replace(/bg-red-900/g, 'bg-amber-900')
                       .replace(/text-red-400/g, 'text-amber-400');
        
        // Remove brackets from nav items (e.g. [Overview] -> Overview)
        c = c.replace(/\[Overview\]/g, 'Overview')
             .replace(/\[Architecture\]/g, 'Architecture')
             .replace(/\[Decisions\]/g, 'Decisions')
             .replace(/\[Docs\]/g, 'Docs');
             
        return c;
    }
    return content;
});

// 3. DevContext - update subpages to use blue accents and the new nav
processDir('project-sites/src/app/devcontext', (file, content) => {
    if (file.includes('architecture') || file.includes('decisions') || file.includes('docs')) {
        let c = content.replace(/border-white/g, 'border-[#1f6feb]')
                       .replace(/text-white/g, 'text-[#58a6ff]')
                       .replace(/bg-\[\#fff\]/g, 'bg-[#1f6feb]')
                       .replace(/text-\[\#000\]/g, 'text-[#fff]')
                       .replace(/border-b border-\[\#333\]/g, 'border-b border-[#1f6feb]/30');
                       
        // Replace the old nav block with the new one
        const navRegex = /<nav className="flex gap-6 border-l border-\[\#333\] pl-6">[\s\S]*?<\/nav>/g;
        const newNav = `<nav className="flex gap-6 border-l border-[#1f6feb]/30 pl-6 text-sm">
                    <Link href="/devcontext" className="text-[#666] hover:text-[#58a6ff] transition-colors">Analysis Pipeline</Link>
                    <Link href="/devcontext/architecture" className="text-[#666] hover:text-[#58a6ff] transition-colors">Architecture</Link>
                    <Link href="/devcontext/decisions" className="text-[#666] hover:text-[#58a6ff] transition-colors">Interview Engine</Link>
                    <Link href="/devcontext/docs" className="text-[#666] hover:text-[#58a6ff] transition-colors">Docs</Link>
                </nav>`;
        c = c.replace(navRegex, newNav);
        return c;
    }
    return content;
});

