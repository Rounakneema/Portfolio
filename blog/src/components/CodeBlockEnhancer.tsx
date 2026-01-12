'use client';

import { useEffect } from 'react';

export function CodeBlockEnhancer() {
    useEffect(() => {
        const preElements = document.querySelectorAll('pre');

        preElements.forEach((pre) => {
            // Check if already enhanced
            if (pre.parentElement?.classList.contains('code-wrapper')) return;

            // Create wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'code-wrapper relative group';

            // Insert wrapper before pre
            pre.parentNode?.insertBefore(wrapper, pre);

            // Move pre into wrapper
            wrapper.appendChild(pre);

            // Create Copy Button
            const button = document.createElement('button');
            button.className = 'absolute top-2 right-2 p-2 rounded bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 font-mono text-xs z-10';
            button.innerHTML = `
        <span class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          COPY
        </span>
      `;

            button.addEventListener('click', async () => {
                const code = pre.querySelector('code')?.innerText || pre.innerText;
                await navigator.clipboard.writeText(code);

                const originalContent = button.innerHTML;
                button.innerHTML = `
          <span class="flex items-center gap-2 text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            COPIED
          </span>
        `;

                setTimeout(() => {
                    button.innerHTML = originalContent;
                }, 2000);
            });

            wrapper.appendChild(button);
        });
    }, []);

    return null;
}
