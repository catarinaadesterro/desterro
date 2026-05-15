import { EngravedPlaceholder } from './EngravedPlaceholder';

interface ArticlePreviewPlaceholderProps {
  corner?: string;
  imageHeight?: number;
}

export function ArticlePreviewPlaceholder({ corner, imageHeight = 220 }: ArticlePreviewPlaceholderProps) {
  return (
    <article>
      <EngravedPlaceholder height={imageHeight} label="Em breve" corner={corner} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 14, marginBottom: 8 }}>
        <span className="kicker" style={{ color: 'var(--gray-3)' }}>Em breve</span>
      </div>
      <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 26, lineHeight: 1.1, margin: '0 0 10px', letterSpacing: '-.01em', color: 'var(--gray-3)' }}>
        Novo artigo em breve.
      </h3>
      <p style={{ fontFamily: 'var(--sans)', fontSize: 14, lineHeight: 1.55, color: 'var(--gray-4)', margin: 0 }}>
        Próxima publicação.
      </p>
    </article>
  );
}
