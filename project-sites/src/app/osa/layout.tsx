import { ProjectFooter } from '@/components/ProjectFooter';
import { ReactNode } from 'react';
import { OsaNav } from '@/components/osa/OsaNav';

export default function OsaLayout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-[#0a0a0a] min-h-screen">
            <OsaNav />
            {children}
        </div>
    );
}



