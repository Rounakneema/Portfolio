import { ProjectFooter } from '@/components/ProjectFooter';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                {children}
            </div>
            <ProjectFooter slug="devcontext" />
        </div>
    );
}

