type SectionHeaderProps = {
  label: string;
  title?: string;
  intro?: string;
};

export function SectionHeader({ label, title, intro }: SectionHeaderProps) {
  return (
    <header className="section-header" data-aos>
      <h2 className="section-label mono">{label}</h2>
      {title && <p className="section-title">{title}</p>}
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  );
}
