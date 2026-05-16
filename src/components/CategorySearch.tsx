'use client';
import { useState } from 'react';
import { ArticleCard } from './ArticleCard';
import type { ArticleMeta } from '@/lib/types';

interface Props {
  articles: ArticleMeta[];
}

export function CategorySearch({ articles }: Props) {
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? articles.filter(a =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        (a.subtitle ?? '').toLowerCase().includes(query.toLowerCase())
      )
    : articles;

  return (
    <>
      <div className="sec" style={{ padding: '72px var(--px) 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 16 }}>
          <span className="kicker" style={{ fontSize: 12 }}>ARQUIVO DA EDITORIA</span>
          <hr className="hr" />
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="mono" style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>⌕</span>
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="buscar artigo..."
              style={{
                border: 0,
                borderBottom: '1px solid var(--gray-4)',
                background: 'transparent',
                fontFamily: 'var(--serif)',
                fontSize: 14,
                padding: '2px 0',
                outline: 'none',
                color: 'var(--ink)',
                width: 160,
              }}
            />
          </label>
        </div>
      </div>
      <section className="rg-3col sec" style={{ padding: '28px var(--px) 0' }}>
        {query && filtered.length === 0 ? (
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--gray-2)', gridColumn: '1/-1', margin: 0 }}>
            Nenhum texto encontrado para &ldquo;{query}&rdquo;.
          </p>
        ) : (
          [0, 1, 2].map(i => (
            <ArticleCard key={i} article={filtered[i]} corner={String(i + 2).padStart(2, '0')} imageHeight={260} />
          ))
        )}
      </section>
    </>
  );
}
