import re
import os

def update_revealr():
    path = r"d:\Protfolio\project-sites\src\app\revealr\page.tsx"
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update metadata
    old_metadata_regex = re.compile(r'export const metadata: Metadata = \{.*?\};', re.DOTALL)
    new_metadata = """export const metadata: Metadata = {
  title: 'Revealr — High-Speed Go Network Scanner & Vulnerability Mapping Tool',
  description: 'High-performance Go-based network scanner with stateful scan history, network drift detection, and modular Python vulnerability mapping.',
  keywords: ['Go network scanner', 'port scanner', 'vulnerability mapper', 'network security', 'network drift detection', 'SQLite stateful scanner'],
  alternates: { canonical: 'https://revealr.rounakneema.in' },
  openGraph: {
    title: 'Revealr — High-Speed Go Network Scanner & Vulnerability Mapping Tool',
    description: 'High-concurrency network visibility, with memory.',
    url: 'https://revealr.rounakneema.in',
    siteName: 'Revealr',
    type: 'website',
  },
};"""
    content = old_metadata_regex.sub(new_metadata, content)

    # 2. Add imports
    imports = """import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { EntityHeader } from '@/components/EntityHeader';
import { ProjectFacts, RelatedProjects } from '@/components/ProjectFacts';\n"""
    # Find last import
    last_import_idx = [m.end() for m in re.finditer(r"^import .*?;$", content, re.MULTILINE)][-1]
    content = content[:last_import_idx] + "\n" + imports + content[last_import_idx:]

    # 3. Replace main h1/header and inject ProjectFacts and ProjectJsonLd
    header_replacement = """
        <ProjectJsonLd project={{
            name: 'Revealr',
            url: 'https://revealr.rounakneema.in',
            description: 'High-Speed Go Network Scanner & Vulnerability Mapping Tool',
            programmingLanguage: 'Go',
            schemaCategory: 'SoftwareApplication',
            faq: [
                { question: "What is Revealr?", answer: "Revealr is a high-speed Go-based network scanner and vulnerability mapping tool designed to maintain stateful scan history across sessions." },
                { question: "What does Revealr scan?", answer: "It scans network ports up to the maximum 65535 range, identifying open services and fingerprinting them." },
                { question: "How does Revealr perform network scanning?", answer: "Revealr uses a highly concurrent Go engine with raw sockets for rapid discovery of network assets." },
                { question: "How does Revealr detect network changes?", answer: "It stores previous scan states in a local SQLite database and diffs current results against the baseline to detect drift." },
                { question: "Can Revealr be extended?", answer: "Yes, it features a Python plugin bridge that allows users to write custom vulnerability mapping and fingerprinting scripts." },
                { question: "How fast is Revealr?", answer: "Benchmarks show Revealr can achieve scan times of ~0.8s for local networks." },
                { question: "Who built Revealr?", answer: "Revealr was built by Rounak Neema for authorized network security assessments." }
            ]
        }} />
        <EntityHeader 
            title="Revealr" 
            subtitle="High-Speed Go Network Scanner & Vulnerability Mapping Tool" 
            category="Network Security" 
            status="Stable" 
            language="Go" 
            github="https://github.com/rounakneema/Revealr" 
            docs="/revealr/docs" 
            architecture="/revealr/architecture" 
        />
        <ProjectFacts facts={[
            { label: 'Built by', value: 'Rounak Neema' },
            { label: 'Primary Language', value: 'Go' },
            { label: 'Max Port Range', value: '65535' },
            { label: 'State Storage', value: 'SQLite' },
            { label: 'Scan Time', value: '~0.8s benchmark' }
        ]} />
"""
    start_header = content.find('<div className="mx-auto max-w-3xl text-center">')
    end_header = content.find('<div className="relative mx-auto mt-16 max-w-6xl')
    
    if start_header != -1 and end_header != -1:
        content = content[:start_header] + header_replacement + content[end_header:]
    
    # 4. Add FAQ block somewhere in content.
    faq_html = """
      <section className="mx-auto max-w-4xl px-6 py-24 md:px-10">
        <h2 className="text-2xl font-black text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group border border-white/10 bg-black/20 p-4 rounded-lg [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">01.</span> What is Revealr?<span className="transition group-open:rotate-180">▼</span></summary>
            <p className="mt-4 text-zinc-400 pl-8">Revealr is a high-speed Go-based network scanner and vulnerability mapping tool designed to maintain stateful scan history across sessions.</p>
          </details>
          <details className="group border border-white/10 bg-black/20 p-4 rounded-lg [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">02.</span> What does Revealr scan?<span className="transition group-open:rotate-180">▼</span></summary>
            <p className="mt-4 text-zinc-400 pl-8">It scans network ports up to the maximum 65535 range, identifying open services and fingerprinting them.</p>
          </details>
          <details className="group border border-white/10 bg-black/20 p-4 rounded-lg [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">03.</span> How does Revealr perform network scanning?<span className="transition group-open:rotate-180">▼</span></summary>
            <p className="mt-4 text-zinc-400 pl-8">Revealr uses a highly concurrent Go engine with raw sockets for rapid discovery of network assets.</p>
          </details>
          <details className="group border border-white/10 bg-black/20 p-4 rounded-lg [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">04.</span> How does Revealr detect network changes?<span className="transition group-open:rotate-180">▼</span></summary>
            <p className="mt-4 text-zinc-400 pl-8">It stores previous scan states in a local SQLite database and diffs current results against the baseline to detect drift.</p>
          </details>
          <details className="group border border-white/10 bg-black/20 p-4 rounded-lg [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">05.</span> Can Revealr be extended?<span className="transition group-open:rotate-180">▼</span></summary>
            <p className="mt-4 text-zinc-400 pl-8">Yes, it features a Python plugin bridge that allows users to write custom vulnerability mapping and fingerprinting scripts.</p>
          </details>
          <details className="group border border-white/10 bg-black/20 p-4 rounded-lg [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">06.</span> How fast is Revealr?<span className="transition group-open:rotate-180">▼</span></summary>
            <p className="mt-4 text-zinc-400 pl-8">Benchmarks show Revealr can achieve scan times of ~0.8s for local networks.</p>
          </details>
          <details className="group border border-white/10 bg-black/20 p-4 rounded-lg [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">07.</span> Who built Revealr?<span className="transition group-open:rotate-180">▼</span></summary>
            <p className="mt-4 text-zinc-400 pl-8">Revealr was built by Rounak Neema for authorized network security assessments.</p>
          </details>
        </div>
      </section>
"""

    # 5. Add RelatedProjects at bottom of main
    related = """
      <div className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <RelatedProjects links={[
              { name: 'OSA — Offline Security Auditor', url: '/osa' }
          ]} />
      </div>
"""
    insert_idx = content.rfind('</div>\n  );\n}')
    if insert_idx != -1:
        content = content[:insert_idx] + faq_html + related + content[insert_idx:]
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)


def update_osa():
    path = r"d:\Protfolio\project-sites\src\app\osa\page.tsx"
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update metadata
    old_metadata_regex = re.compile(r'export const metadata: Metadata = \{.*?\};', re.DOTALL)
    new_metadata = """export const metadata: Metadata = {
  title: 'OSA — Offline Security Auditor for Air-Gapped Environments',
  description: 'Single-binary offline security auditor for air-gapped security auditing. Features built-in statistical detection engines (Z-Score & Markov Chains).',
  keywords: ['air-gapped security auditing', 'offline security auditor', 'Go security tool', 'Z-Score analytics'],
  alternates: { canonical: 'https://osa.rounakneema.in' },
};"""
    content = old_metadata_regex.sub(new_metadata, content)

    # 2. Add imports
    imports = """import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { EntityHeader } from '@/components/EntityHeader';
import { ProjectFacts, RelatedProjects } from '@/components/ProjectFacts';\n"""
    last_import_idx = [m.end() for m in re.finditer(r"^import .*?;$", content, re.MULTILINE)][-1]
    content = content[:last_import_idx] + "\n" + imports + content[last_import_idx:]

    # 3. Replace main header and inject ProjectFacts and ProjectJsonLd
    header_replacement = """
            <ProjectJsonLd project={{
                name: 'OSA',
                url: 'https://osa.rounakneema.in',
                description: 'Offline Security Auditor for Air-Gapped Environments',
                programmingLanguage: 'Go',
                schemaCategory: 'SoftwareApplication',
                faq: [
                    { question: "What is OSA?", answer: "OSA is an Offline Security Auditor designed for air-gapped environments." },
                    { question: "What is an offline security auditor?", answer: "It's a tool that analyzes security logs without requiring an active internet connection or external APIs." },
                    { question: "How does OSA analyze security logs?", answer: "OSA uses statistical detection engines including Z-Score and Markov Chains." },
                    { question: "Can OSA run without internet?", answer: "Yes, OSA is a single-binary application that requires zero runtime dependencies and no internet access." },
                    { question: "What makes OSA suitable for air-gapped environments?", answer: "Its standalone nature, built-in analytics, and complete lack of external telemetry or API calls." },
                    { question: "Who created OSA?", answer: "OSA was developed by Rounak Neema for specialized security environments." },
                    { question: "What languages is OSA written in?", answer: "The primary language for OSA is Go." }
                ]
            }} />
            <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-16">
                <EntityHeader 
                    title="OSA" 
                    subtitle="Offline Security Auditor for Air-Gapped Environments" 
                    category="Security Auditing" 
                    status="Stable" 
                    language="Go" 
                    docs="/osa/docs" 
                    architecture="/osa/architecture" 
                />
                <ProjectFacts facts={[
                    { label: 'Built by', value: 'Rounak Neema' },
                    { label: 'Language', value: 'Go' },
                    { label: 'Target', value: 'Linux/Windows/Docker logs' },
                    { label: 'Analytics', value: 'Z-score & Markov Chains' },
                    { label: 'Key Focus', value: 'air-gapped security auditing' }
                ]} />
            </div>
"""

    start_header = content.find('<header className="px-6 py-12 md:py-16 border-b-4 border-[#333] grid-bg">')
    end_header = content.find('</header>') + len('</header>')
    
    if start_header != -1 and end_header != -1:
        content = content[:start_header] + header_replacement + content[end_header:]
        
    # 4. Add FAQ block somewhere in content.
    faq_html = """
                    <section className="brutalist-border p-8 bg-[#0a0a0a]">
                        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 border-b border-[#333] pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#333] pb-4">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#00fff9] mr-4">01.</span> What is OSA?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">OSA is an Offline Security Auditor designed for air-gapped environments.</p>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#333] pb-4">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#00fff9] mr-4">02.</span> What is an offline security auditor?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">It's a tool that analyzes security logs without requiring an active internet connection or external APIs.</p>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#333] pb-4">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#00fff9] mr-4">03.</span> How does OSA analyze security logs?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">OSA uses statistical detection engines including Z-Score and Markov Chains.</p>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#333] pb-4">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#00fff9] mr-4">04.</span> Can OSA run without internet?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">Yes, OSA is a single-binary application that requires zero runtime dependencies and no internet access.</p>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#333] pb-4">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#00fff9] mr-4">05.</span> What makes OSA suitable for air-gapped environments?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">Its standalone nature, built-in analytics, and complete lack of external telemetry or API calls.</p>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#333] pb-4">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#00fff9] mr-4">06.</span> Who created OSA?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">OSA was developed by Rounak Neema for specialized security environments.</p>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#00fff9] mr-4">07.</span> What languages is OSA written in?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">The primary language for OSA is Go.</p>
                            </details>
                        </div>
                    </section>
"""
    right_col_close = content.find('</div>\n            </div>\n        </main>')
    if right_col_close != -1:
        content = content[:right_col_close] + faq_html + content[right_col_close:]

    # 5. Add RelatedProjects at bottom of main
    related = """
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <RelatedProjects links={[
                    { name: 'Revealr — Adaptive Network Scanner', url: '/revealr' }
                ]} />
            </div>
"""
    main_close = content.find('</main>')
    if main_close != -1:
        content = content[:main_close] + related + content[main_close:]

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    update_revealr()
    update_osa()
