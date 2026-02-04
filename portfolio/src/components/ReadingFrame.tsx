'use client';

import { ReactNode } from 'react';

interface ReadingFrameProps {
    children: ReactNode;
}

export function ReadingFrame({ children }: ReadingFrameProps) {
    return (
        <div className="relative z-10">
            {/* Main Content Container */}
            <div className="relative bg-white border border-gray-200 rounded-xl p-8 md:p-16 shadow-lg">
                {/* Decorative Corner Brackets (Subtle/Engineering Style) */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-gray-300 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-gray-300 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-gray-300 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-gray-300 rounded-br-lg"></div>

                {/* Inner Content */}
                {children}
            </div>
        </div>
    );
}
