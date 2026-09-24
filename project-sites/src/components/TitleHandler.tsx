'use client';

import { useEffect, useRef } from 'react';

const FUNNY_TITLES = [
    "Hey! Come back! 😭",
    "I'm lonely here... 🥺",
    "Don't leave me! 💔",
    "System Breach Detected! ⚠️",
    "Your data is leaking... 💧",
    "Wait, you forgot this! 🎁",
    "404: User Not Found 🧐",
    "I'm scared of the dark 🌑"
];

export function TitleHandler() {
    const originalTitle = useRef<string>('');

    useEffect(() => {
        // Store the initial title
        originalTitle.current = document.title;

        const handleVisibilityChange = () => {
            if (document.hidden) {
                // User left the tab - pick a random funny title
                const randomTitle = FUNNY_TITLES[Math.floor(Math.random() * FUNNY_TITLES.length)];
                document.title = randomTitle;
            } else {
                // User came back - restore original
                document.title = originalTitle.current;
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return null;
}
