import type { ReactNode } from 'react';

interface PageContainerProps {
    children: ReactNode;
    wide?: boolean;
    className?: string;
}

const PageContainer = ({ children, wide = false, className = '' }: PageContainerProps) => {
    const layout = wide
        ? 'max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8'
        : 'max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8';

    return (
        <div className={`${layout} ${className}`.trim()}>
            {children}
        </div>
    );
};

export default PageContainer;
