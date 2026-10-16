import { ProjectFooter } from '@/components/ProjectFooter';
import { SortMailNav } from '@/components/sortmail/SortMailNav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#faf9f6] text-neutral-900 selection:bg-blue-600 selection:text-white antialiased font-sans">
            <SortMailNav />
            <div className="flex-grow">
                {children}
            </div>
            <ProjectFooter slug="sortmail" />
        </div>
    );
}
