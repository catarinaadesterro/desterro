import Image from 'next/image';
import { EngravedPlaceholder } from './EngravedPlaceholder';
import type { ArticleMeta } from '@/lib/types';

interface ArticleHeroProps {
  article: ArticleMeta;
}

export function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <div style={{ height: 460, position: 'relative', background: '#efe8d6', border: '1px solid var(--ink)', overflow: 'hidden' }}>
      {article.coverImage ? (
        <>
          <Image
            src={article.coverImage}
            alt={article.coverAlt ?? article.title}
            fill
            style={{ objectFit: 'cover' }}
          />
          {article.coverCaption && (
            <div style={{
              position: 'absolute', right: 0, top: 0,
              background: 'var(--paper)', color: 'var(--ink)',
              padding: '8px 14px', fontFamily: 'var(--mono)', fontSize: 10,
              letterSpacing: '.18em', textTransform: 'uppercase',
              borderLeft: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)',
            }}>
              ▮ {article.coverCaption}
            </div>
          )}
        </>
      ) : (
        <EngravedPlaceholder height={460} label="Imagem editorial" corner="CAPA" />
      )}
    </div>
  );
}
