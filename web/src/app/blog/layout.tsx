import { UnifiedFooter } from '@/components/UnifiedFooter';
import { PortfolioLink } from '@/components/PortfolioLink';

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <PortfolioLink />
            {children}
            <UnifiedFooter />
        </>
    );
}
