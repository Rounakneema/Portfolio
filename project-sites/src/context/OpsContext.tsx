'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface OpsContextType {
    activeWidget: string | null;
    sourceRect: DOMRect | null;
    activateWidget: (widgetId: string, rect: DOMRect) => void;
    deactivateWidget: () => void;
}

const OpsContext = createContext<OpsContextType | undefined>(undefined);

export function OpsProvider({ children }: { children: ReactNode }) {
    const [activeWidget, setActiveWidget] = useState<string | null>(null);
    const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);

    const activateWidget = (widgetId: string, rect: DOMRect) => {
        setActiveWidget(widgetId);
        setSourceRect(rect);
    };

    const deactivateWidget = () => {
        setActiveWidget(null);
        setSourceRect(null);
    };

    return (
        <OpsContext.Provider value={{ activeWidget, sourceRect, activateWidget, deactivateWidget }}>
            {children}
        </OpsContext.Provider>
    );
}

export function useOps() {
    const context = useContext(OpsContext);
    if (context === undefined) {
        throw new Error('useOps must be used within an OpsProvider');
    }
    return context;
}
