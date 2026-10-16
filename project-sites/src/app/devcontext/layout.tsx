import { ProjectFooter } from '@/components/ProjectFooter';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#f7f5ee] text-[#18181b] selection:bg-[#1d4ed8] selection:text-white font-sans overflow-x-hidden">
            <div className="flex-grow">
                {children}
            </div>
            <ProjectFooter slug="devcontext" />
        </div>
    );
}

