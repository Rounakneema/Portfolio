'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface IgnitionContextType {
    activeWidget: string | null;
    sourceRect: DOMRect | null;
    ignite: (widgetId: string, rect: DOMRect) => void;
    reset: () => void;
}

const IgnitionContext = createContext<IgnitionContextType | undefined>(undefined);

export function IgnitionProvider({ children }: { children: ReactNode }) {
    const [activeWidget, setActiveWidget] = useState<string | null>(null);
    const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);

    const ignite = (widgetId: string, rect: DOMRect) => {
        // Reset first to allow re-triggering animation
        setActiveWidget(null);
        setSourceRect(null);

        // Small timeout to ensure state reset triggers re-render/animation restart
        setTimeout(() => {
            setActiveWidget(widgetId);
            setSourceRect(rect);
        }, 10);
    };

    const reset = () => {
        setActiveWidget(null);
        setSourceRect(null);
    };

    return (
        <IgnitionContext.Provider value={{ activeWidget, sourceRect, ignite, reset }}>
            {children}
        </IgnitionContext.Provider>
    );
}

export function useIgnition() {
    const context = useContext(IgnitionContext);
    if (context === undefined) {
        throw new Error('useIgnition must be used within an IgnitionProvider');
    }
    return context;
}
