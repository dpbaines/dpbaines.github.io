import type { ReactNode } from 'react';

interface PageHeaderProps {
    children: ReactNode;
    as?: 'h1' | 'h2';
    bordered?: boolean;
    centered?: boolean;
    className?: string;
}

const PageHeader = ({
    children,
    as: Tag = 'h1',
    bordered = false,
    centered = false,
    className = '',
}: PageHeaderProps) => {
    const base = 'text-4xl font-bold text-slate-100 mb-10';
    const border = bordered ? 'border-b border-slate-800 pb-4' : '';
    const align = centered ? 'text-center' : '';

    return (
        <Tag className={`${base} ${border} ${align} ${className}`.trim()}>
            {children}
        </Tag>
    );
};

export default PageHeader;
