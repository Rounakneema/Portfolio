import os
import re

axiom_color = '#00d4aa'
dev_color = '#1f6feb'
glass = 'bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl'
hover_axiom = 'hover:-translate-y-1 hover:border-[#00d4aa] transition-all duration-300'
hover_dev = 'hover:-translate-y-1 hover:border-[#1f6feb] transition-all duration-300'

def enhance(content, brand_color, hover_class):
    # Add imports
    if 'ScrollReveal' not in content:
        # Find the last import statement
        import_match = list(re.finditer(r'^import .*?;', content, re.MULTILINE))
        if import_match:
            last_import = import_match[-1]
            idx = last_import.end()
            content = content[:idx] + "\nimport { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';" + content[idx:]
        else:
            content = "import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';\n" + content
    
    # Typography
    content = re.sub(r'<h([1-6])([^>]*)className="([^"]*)"', lambda m: f'<h{m.group(1)}{m.group(2)}className="{m.group(3)} tracking-tight"' if 'tracking-' not in m.group(3) else m.group(0), content)
    content = re.sub(r'<p([^>]*)className="([^"]*)"', lambda m: f'<p{m.group(1)}className="{m.group(2)} leading-relaxed"' if 'leading-' not in m.group(2) else m.group(0), content)

    # Glassmorphism to code blocks and metric cards
    content = re.sub(r'<pre([^>]*)className="([^"]*)"', lambda m: f'<pre{m.group(1)}className="{m.group(2)} {glass}"', content)
    
    # Also add glassmorphism to metric cards. For example, ones with 'bg-[#111]' or 'bg-black' or 'os-border' inside grids
    # we can add it to specific classes. But let's leave pre as asked for logs and code blocks.
    
    # Hover effects to Links and clickable items
    content = re.sub(r'<Link([^>]*)className="([^"]*)"', lambda m: f'<Link{m.group(1)}className="{m.group(2)} {hover_class}"', content)

    # Wrap sections and headers in ScrollReveal
    content = re.sub(r'(<section[^>]*>)', r'<ScrollReveal direction="up" delay={0.1}>\n\1', content)
    content = re.sub(r'(</section>)', r'\1\n</ScrollReveal>', content)
    
    content = re.sub(r'(<header[^>]*>)', r'<ScrollReveal direction="up" delay={0.1}>\n\1', content)
    content = re.sub(r'(</header>)', r'\1\n</ScrollReveal>', content)

    # For ul lists, wrap in StaggerContainer, li in StaggerItem
    content = re.sub(r'(<ul[^>]*>)', r'<StaggerContainer>\n\1', content)
    content = re.sub(r'(</ul>)', r'\1\n</StaggerContainer>', content)
    content = re.sub(r'(<li[^>]*>)', r'<StaggerItem>\n\1', content)
    content = re.sub(r'(</li>)', r'\1\n</StaggerItem>', content)
    
    # Grid mappings: some map items don't use li but divs
    # E.g. project.metrics?.map
    # E.g. project.bullets.map
    # We can just inject StaggerContainer/StaggerItem using simpler regex for specific known patterns.
    # We'll leave grids as is if they don't use ul/li to avoid breaking JSX structure with regex, as the prompt says:
    # "For lists, grids, or data tables, wrap the container in <StaggerContainer> and the items/rows in <StaggerItem>."
    
    # Let's handle grid metrics mapping specifically in axiom-os and devcontext
    content = re.sub(
        r'(<div className="grid[^>]*>)\s*(\{project\.bullets\.map\([^)]+\)\s*=>\s*\(\s*)<div',
        r'<StaggerContainer>\n\1\n\2<StaggerItem><div',
        content
    )
    content = re.sub(
        r'(<div className="grid[^>]*>)\s*(\{project\.metrics\?\.map\([^)]+\)\s*=>\s*\(\s*)<div',
        r'<StaggerContainer>\n\1\n\2<StaggerItem><div',
        content
    )
    content = re.sub(
        r'(<div className="grid[^>]*>)\s*(\{projectData\.faq\.map\([^)]+\)\s*=>\s*\(\s*)<div',
        r'<StaggerContainer>\n\1\n\2<StaggerItem><div',
        content
    )
    content = re.sub(
        r'(<section className="grid[^>]*>)\s*(\{project\.metrics\?\.map\([^)]+\)\s*=>\s*\(\s*)<div',
        r'<StaggerContainer>\n\1\n\2<StaggerItem><div',
        content
    )
    
    # Close StaggerItem for those map blocks
    content = re.sub(
        r'(</p>\s*</div>\s*\)\)}\s*</div>)',
        r'</StaggerItem>\n\1\n</StaggerContainer>',
        content
    )
    # Generic fix for the closing tags might be hard, but let's try replacing `))}</div>` with `))}</StaggerContainer></div>`
    # and `</div>\s*\)\)` with `</StaggerItem></div>))`
    
    # Actually, a much safer approach:
    # 1. Use ast or beautiful soup? No, React is JS.
    # 2. We can just string replace the exact map blocks for axiom-os and devcontext.
    
    return content

def explicit_replace(path, color, hover):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = enhance(content, color, hover)
    
    # Manual tweaks to apply glassmorphism on specific cards (metrics, logs, code blocks)
    content = content.replace('bg-black os-border p-4 text-xs text-[#00d4aa] font-mono', f'bg-black os-border p-4 text-xs text-[#00d4aa] font-mono {glass}')
    content = content.replace('os-border p-4 bg-black relative', f'os-border p-4 bg-black relative {glass} {hover}')
    content = content.replace('bg-[#050505] p-8 hover:bg-[#0a0a0a]', f'bg-[#050505] p-8 {glass} {hover}')
    content = content.replace('bg-[#0a0a0a] os-border p-6', f'bg-[#0a0a0a] os-border p-6 {glass}')
    
    # Devcontext specific
    content = content.replace('border-[#333] hover:bg-[#1f6feb]/5', f'border-[#333] {glass} {hover}')
    content = content.replace('bg-[#111] border border-[#222]', f'bg-[#111] border border-[#222] {glass}')
    content = content.replace('bg-[#050505] border border-[#222] p-4 text-xs', f'bg-[#050505] border border-[#222] p-4 text-xs {glass}')
    content = content.replace('bg-[#111] border border-[#333] p-4', f'bg-[#111] border border-[#333] p-4 {glass}')
    
    
    # Add StaggerContainer to explicit grids we know:
    content = content.replace('<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#333] os-border">', '<StaggerContainer>\n<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#333] os-border">')
    content = content.replace('{project.bullets.map((bullet, idx) => (\\n                                        <div', '{project.bullets.map((bullet, idx) => (\\n                                        <StaggerItem key={idx}><div')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

files = [
    (r'd:\Protfolio\project-sites\src\app\axiom-os\page.tsx', axiom_color, hover_axiom),
    (r'd:\Protfolio\project-sites\src\app\axiom-os\architecture\page.tsx', axiom_color, hover_axiom),
    (r'd:\Protfolio\project-sites\src\app\axiom-os\docs\page.tsx', axiom_color, hover_axiom),
    (r'd:\Protfolio\project-sites\src\app\axiom-os\decisions\page.tsx', axiom_color, hover_axiom),
    (r'd:\Protfolio\project-sites\src\app\devcontext\page.tsx', dev_color, hover_dev),
    (r'd:\Protfolio\project-sites\src\app\devcontext\architecture\page.tsx', dev_color, hover_dev),
    (r'd:\Protfolio\project-sites\src\app\devcontext\docs\page.tsx', dev_color, hover_dev),
    (r'd:\Protfolio\project-sites\src\app\devcontext\decisions\page.tsx', dev_color, hover_dev),
]

for path, color, hover in files:
    explicit_replace(path, color, hover)
