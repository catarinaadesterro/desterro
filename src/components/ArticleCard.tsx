import Link from 'next/link';
import Image from 'next/image';
import { EngravedPlaceholder } from './EngravedPlaceholder';
import type { ArticleMeta } from '@/lib/types';

interface ArticleCardProps {
  article?: ArticleMeta;
  corner?: string;
  imageHeight?: number;
}

export function ArticleCard({ article, corner, imageHeight = 220 }: ArticleCardProps) {
  if (!article) {
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

  return (
    <article>
      <Link href={`/${article.category}/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        {article.coverImage ? (
          <div style={{ position: 'relative', height: imageHeight, overflow: 'hidden', border: '1px solid var(--ink)' }}>
            <Image src={article.coverImage} alt={article.coverAlt ?? article.title} fill style={{ objectFit: 'cover' }} />
          </div>
        ) : (
          <EngravedPlaceholder height={imageHeight} corner={corner} />
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 14, marginBottom: 8 }}>
          <span className="kicker">{article.category}</span>
          <span className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gray-3)' }}>{article.readTime}</span>
        </div>
        <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 26, lineHeight: 1.1, margin: '0 0 10px', letterSpacing: '-.01em' }}>
          {article.title}
        </h3>
        <p style={{ fontFamily: 'var(--sans)', fontSize: 14, lineHeight: 1.55, color: 'var(--gray-1)', margin: 0 }}>
          {article.subtitle}
        </p>
        <div className="byline" style={{ marginTop: 12 }}>por <em>Catarina Desterro</em> · {article.date}</div>
      </Link>
    </article>
  );
}
