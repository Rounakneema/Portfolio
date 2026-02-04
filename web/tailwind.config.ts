import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                cyan: {
                    DEFAULT: '#00F0FF',
                    500: '#00F0FF',
                },
                crimson: {
                    DEFAULT: '#FF2A2A',
                    500: '#FF2A2A',
                },
                purple: {
                    DEFAULT: '#9D4EDD',
                    500: '#9D4EDD',
                },
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'Courier New', 'monospace'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
