const fs = require('fs');
const path = require('path');

function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
            processDir(full);
        } else if (file.endsWith('Nav.tsx')) {
            let content = fs.readFileSync(full, 'utf8');
            let orig = content;

            if (!content.includes("import { motion } from 'framer-motion'")) {
                content = content.replace(/import Link from 'next\/link';/g, "import Link from 'next/link';\nimport { motion } from 'framer-motion';");
            }
            
            content = content.replace(/<nav\s+className="/g, `<motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="`);
            content = content.replace(/<\/nav>/g, '</motion.nav>');

            if (content !== orig) {
                fs.writeFileSync(full, content, 'utf8');
                console.log(`Animated nav ${full}`);
            }
        }
    }
}

processDir('project-sites/src/components');
