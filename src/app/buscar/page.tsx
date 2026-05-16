import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/articles';
import { UtilityBar, MiniHeader } from '@/components/Header';
import { MiniFooter } from '@/components/Footer';
import { ArticleCard } from '@/components/ArticleCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Buscar — DESTERRO',
};

export default function BuscarPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = (searchParams.q ?? '').trim();
  const all = getAllArticles();

  const results = q
    ? all.filter(a =>
        a.title.toLowerCase().includes(q.toLowerCase()) ||
        (a.subtitle ?? '').toLowerCase().includes(q.toLowerCase()) ||
        a.category.toLowerCase().includes(q.toLowerCase())
      )
    : [];

  return (
    <div style={{ background: 'var(--paper-warm)', color: 'var(--ink)', fontFamily: 'var(--sans)', minHeight: '100vh' }}>
      <UtilityBar />
      <MiniHeader />

      <section className="sec" style={{ padding: '60px var(--px) 0' }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>BUSCA</div>
        <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 'clamp(36px, 8vw, 72px)', lineHeight: .92, letterSpacing: '-.025em', margin: '0 0 14px' }}>
          {q
            ? <><em style={{ fontStyle: 'italic', fontWeight: 400 }}>&ldquo;{q}&rdquo;</em></>
            : 'O que você procura?'}
        </h1>
        {q && (
          <p className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gray-2)', margin: '0 0 48px' }}>
            {results.length} {results.length === 1 ? 'resultado' : 'resultados encontrados'}
          </p>
        )}
        {!q && (
          <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 20, color: 'var(--gray-1)', margin: '0 0 48px' }}>
            Use a barra de busca no topo da página.
          </p>
        )}
      </section>

      {results.length > 0 && (
        <section className="rg-3col sec" style={{ padding: '28px var(--px) 0' }}>
          {results.map((article, i) => (
            <ArticleCard key={article.slug} article={article} corner={String(i + 1).padStart(2, '0')} />
          ))}
        </section>
      )}

      {q && results.length === 0 && (
        <section className="sec" style={{ padding: '28px var(--px) 0' }}>
          <div style={{ borderTop: '1px solid var(--ink)', paddingTop: 28 }}>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--gray-2)', margin: '0 0 24px' }}>
              Nenhum texto encontrado para &ldquo;{q}&rdquo;.
            </p>
            <Link href="/" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: 2 }}>
              ← Voltar para a home
            </Link>
          </div>
        </section>
      )}

      <div style={{ marginTop: 80 }}><MiniFooter /></div>
    </div>
  );
}
