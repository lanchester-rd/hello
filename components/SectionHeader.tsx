interface SectionHeaderProps {
    label: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
}

export default function SectionHeader({ label, title, description, align = 'left' }: SectionHeaderProps) {
    return (
        <div className={`space-y-4 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
            <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
                <span className="h-px w-6 bg-accent/40" />
                <span className="analytical-label text-accent">{label}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tightest uppercase leading-none">
                {title}
            </h2>
            {description && (
                <p className="text-muted text-lg leading-relaxed max-w-2xl font-medium">
                    {description}
                </p>
            )}
        </div>
    )
}
