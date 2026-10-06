import os

app_dir = r'D:\Protfolio\project-sites\src\app'
subdirs = [f.path for f in os.scandir(app_dir) if f.is_dir() and not os.path.basename(f.path).startswith('.')]

for project_dir in subdirs:
    project_slug = os.path.basename(project_dir)
    if project_slug in ['api', 'ai', '[project]']: continue
    
    for subpage_dir in os.scandir(project_dir):
        if not subpage_dir.is_dir(): continue
        page_type = os.path.basename(subpage_dir.path)
        page_path = os.path.join(subpage_dir.path, 'page.tsx')
        
        if not os.path.exists(page_path): continue
        
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if 'ProjectJsonLd' in content: continue
        
        imports_end = content.rfind('import ')
        import_statement_end = content.find('\n', imports_end)
        content = content[:import_statement_end] + '\nimport { ProjectJsonLd } from \'@/components/ProjectJsonLd\';' + content[import_statement_end:]
        
        return_idx = content.find('return (')
        if return_idx != -1:
            tag = f'\n        <ProjectJsonLd slug="{project_slug}" pageType="{page_type.title()}" />'
            first_tag_idx = content.find('<', return_idx + 8)
            parent_open_end = content.find('>', first_tag_idx)
            
            if parent_open_end != -1:
                content = content[:parent_open_end+1] + tag + content[parent_open_end+1:]
                
                with open(page_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f'Updated {page_path}')
