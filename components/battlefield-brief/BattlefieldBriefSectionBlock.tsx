type SectionValue = string | string[];

interface SectionBlockProps {
  title: string;
  fields: Array<{ label: string; value: SectionValue }>;
}

export default function BattlefieldBriefSectionBlock({
  title,
  fields,
}: SectionBlockProps) {
  return (
    <section className="lab-card p-6 space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-widest text-accent/80">
        {title}
      </h3>
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.label} className="space-y-1">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted/60">
              {field.label}
            </p>
            {Array.isArray(field.value) ? (
              <ul className="space-y-1 text-sm text-white/90 leading-relaxed">
                {field.value.map((entry, index) => (
                  <li key={`${field.label}-${index}`}>• {entry}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-white/90 leading-relaxed">
                {field.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
