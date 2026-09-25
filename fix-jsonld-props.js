const fs = require('fs');
const path = require('path');

const slugs = ['revealr', 'osa', 'metromind', 'pipelineforge', 'sortmail', 'devcontext', 'axiom-os', 'dizzy'];

for (const slug of slugs) {
    const p = path.join('project-sites/src/app', slug, 'page.tsx');
    if (!fs.existsSync(p)) continue;
    
    let content = fs.readFileSync(p, 'utf8');
    
    // Some agents did <ProjectJsonLd /> and some did <ProjectJsonLd project={...} />
    content = content.replace(/<ProjectJsonLd\s*\/?>/, `<ProjectJsonLd slug="${slug}" />`);
    content = content.replace(/<ProjectJsonLd\s+project=\{[^\}]+\}\s*\/>/, `<ProjectJsonLd slug="${slug}" />`);
    
    fs.writeFileSync(p, content, 'utf8');
}
