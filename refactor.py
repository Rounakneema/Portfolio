import os, re

files = [
    r'd:\Protfolio\project-sites\src\app\dizzy\page.tsx',
    r'd:\Protfolio\project-sites\src\app\dizzy\architecture\page.tsx',
    r'd:\Protfolio\project-sites\src\app\dizzy\docs\page.tsx',
    r'd:\Protfolio\project-sites\src\app\dizzy\decisions\page.tsx',
    r'd:\Protfolio\project-sites\src\app\metromind\page.tsx',
    r'd:\Protfolio\project-sites\src\app\metromind\architecture\page.tsx'
]

def process_file(path):
    if not os.path.exists(path):
        print(f'Missing: {path}')
        return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Imports
    if 'ScrollReveal' not in content:
        import_stmt = "import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';\n"
        imports = list(re.finditer(r'^import .*?;?\n', content, flags=re.MULTILINE))
        if imports:
            last_import = imports[-1]
            pos = last_import.end()
            content = content[:pos] + import_stmt + content[pos:]
        else:
            content = import_stmt + content

    # 2. Typography
    content = re.sub(r'<h1\s+className="([^"]+)"', r'<h1 className="\1 tracking-tighter"', content)
    content = re.sub(r'<h2\s+className="([^"]+)"', r'<h2 className="\1 tracking-tight"', content)
    content = re.sub(r'<h3\s+className="([^"]+)"', r'<h3 className="\1 tracking-tight"', content)
    content = re.sub(r'<p\s+className="([^"]+)"', r'<p className="\1 leading-relaxed"', content)

    # Hover effects
    # Find links and add hover effects, being careful not to match too greedily
    content = re.sub(r'(<Link[^>]+className="[^"]+)"', r'\1 hover:-translate-y-1 hover:border-current transition-all duration-300"', content)

    # 3. Wrapping with ScrollReveal
    content = re.sub(r'(<section[^>]*>)', r'<ScrollReveal direction="up" delay={0.1}>\n\1', content)
    content = re.sub(r'(</section>)', r'\1\n</ScrollReveal>', content)
    content = re.sub(r'(<header[^>]*>)', r'<ScrollReveal direction="up" delay={0.1}>\n\1', content)
    content = re.sub(r'(</header>)', r'\1\n</ScrollReveal>', content)
    content = re.sub(r'(<article[^>]*>)', r'<ScrollReveal direction="up" delay={0.1}>\n\1', content)
    content = re.sub(r'(</article>)', r'\1\n</ScrollReveal>', content)
    
    # Let's wrap lists / grids in StaggerContainer
    content = re.sub(r'(<ul[^>]*>)', r'<StaggerContainer>\n\1', content)
    content = re.sub(r'(</ul>)', r'\1\n</StaggerContainer>', content)
    content = re.sub(r'(<li[^>]*>)', r'<StaggerItem>\n\1', content)
    content = re.sub(r'(</li>)', r'\1\n</StaggerItem>', content)

    # Wrap <tr[^>]*> in StaggerItem (if there's a table)
    # Be careful not to wrap <thead> or something
    # I'll just wrap tbody trs: 
    # Actually, the user says "For lists, grids, or data tables, wrap the container in <StaggerContainer> and the items/rows in <StaggerItem>"
    # <tbody> wrapping might be safe.
    content = re.sub(r'(<tbody[^>]*>)', r'<StaggerContainer>\n\1', content)
    content = re.sub(r'(</tbody>)', r'\1\n</StaggerContainer>', content)
    content = re.sub(r'(<tr[^>]*>)', r'<StaggerItem>\n\1', content)
    content = re.sub(r'(</tr>)', r'\1\n</StaggerItem>', content)


    # 4. Glassmorphism for code blocks / pre / cards
    content = re.sub(r'bg-black p-8 brutalist-border', r'bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl', content)
    content = re.sub(r'bg-black p-6 brutalist-border', r'bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl', content)
    content = re.sub(r'bg-black border border-\[#ff3366\] p-6', r'bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl', content)
    content = re.sub(r'bg-\[\#f5f5f5\] text-black p-8 md:p-12 rounded-xl border-4', r'bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl', content)
    
    # Make sure we don't accidentally add use client
    content = re.sub(r"^'use client';?\n?", "", content, flags=re.MULTILINE)
    content = re.sub(r'^"use client";?\n?', "", content, flags=re.MULTILINE)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Processed {path}')

for f in files:
    process_file(f)
