import { UtilityBar, FullHeader } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArticleCard } from '@/components/ArticleCard';
import { EngravedPlaceholder } from '@/components/EngravedPlaceholder';
import { getAllArticles, getFeaturedArticle } from '@/lib/articles';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const featured = getFeaturedArticle();
  const allArticles = getAllArticles();
  // Get non-featured published articles for grid
  const gridArticles = allArticles.filter(a => !a.featured).slice(0, 3);

  return (
    <div style={{ width: '100%', background: 'var(--paper-warm)', color: 'var(--ink)', fontFamily: 'var(--sans)' }}>
      <UtilityBar />
      <FullHeader />

      {/* HERO + RIGHT RAIL */}
      <section className="rg-hero sec" style={{ padding: '28px var(--px) 0' }}>
        {/* HERO */}
        <article>
          {featured ? (
            <Link href={`/${featured.category}/${featured.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                <span className="kicker">{featured.category}</span>
                <span className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>{featured.readTime}</span>
              </div>
              <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 'var(--fs-hero)', lineHeight: .98, letterSpacing: '-.02em', margin: '0 0 14px' }}>
                {featured.title}
              </h1>
              <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 22, lineHeight: 1.35, color: 'var(--gray-1)', margin: '0 0 16px', maxWidth: 760 }}>
                {featured.subtitle}
              </p>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
                <span className="byline">por <em>Catarina Desterro</em></span>
                <span style={{ width: 4, height: 4, background: 'var(--gray-3)', borderRadius: '50%' }} />
                <span className="byline">{featured.date}</span>
              </div>
              {/* Hero image */}
              <div style={{ height: 380, position: 'relative', border: '1px solid var(--ink)', overflow: 'hidden' }}>
                {featured.coverImage ? (
                  <>
                    <Image src={featured.coverImage} alt={featured.coverAlt ?? featured.title} fill style={{ objectFit: 'cover' }} />
                    {/* Blue overlay block */}
                    <div style={{ position: 'absolute', left: 32, top: 32, zIndex: 3, background: 'var(--blue)', color: 'var(--ink)', padding: '14px 18px', maxWidth: 280, fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 18, lineHeight: 1.3, border: '1px solid var(--ink)' }}>
                      Marketing potencializa, encanta, acelera, amplifica. Mas não ressuscita o que desmorona no primeiro contato real.
                      <div style={{ marginTop: 10, fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--blue-ink)', fontWeight: 400 }}>Tese · destaque</div>
                    </div>
                  </>
                ) : (
                  <EngravedPlaceholder height={380} corner="01" />
                )}
              </div>
            </Link>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                <span className="kicker" style={{ color: 'var(--gray-3)' }}>Em breve</span>
              </div>
              <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 72, lineHeight: .98, letterSpacing: '-.02em', margin: '0 0 14px', color: 'var(--gray-3)' }}>
                Primeira publicação em breve.
              </h1>
              <EngravedPlaceholder height={380} corner="01" />
            </div>
          )}
        </article>

        {/* RIGHT RAIL */}
        <aside className="hp-rail" style={{ borderLeft: '1px solid var(--gray-4)', paddingLeft: 24 }}>
          <div className="kicker" style={{ marginBottom: 12 }}>Em destaque</div>
          {[1,2,3,4].map((n, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 12, padding: '14px 0', borderTop: i === 0 ? '1px solid var(--ink)' : '1px solid var(--gray-5)' }}>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, lineHeight: 1, color: 'var(--gray-3)' }}>{String(n).padStart(2,'0')}</div>
              <div>
                <div className="kicker" style={{ color: 'var(--gray-3)', fontSize: 10, marginBottom: 4 }}>Em breve</div>
                <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 16, lineHeight: 1.25, color: 'var(--gray-3)' }}>Próxima publicação.</div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 28 }}>
            <EngravedPlaceholder height={180} label="Em breve" corner="—" />
            <div className="kicker" style={{ marginTop: 12, color: 'var(--gray-3)' }}>Em breve</div>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 18, lineHeight: 1.2, marginTop: 6, color: 'var(--gray-3)' }}>Próxima publicação.</div>
          </div>
        </aside>
      </section>

      {/* DIVIDER */}
      <div style={{ padding: '36px 40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 16 }}>
          <span className="kicker" style={{ fontSize: 12 }}>ÚLTIMOS TEXTOS</span>
          <hr className="hr" />
          <span className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>
            publicados em {new Date().getFullYear()}
          </span>
        </div>
      </div>

      {/* THREE-COLUMN GRID */}
      <section className="rg-3col sec" style={{ padding: '24px var(--px) 0' }}>
        {[0,1,2].map((i) => (
          <ArticleCard key={i} article={gridArticles[i]} corner={String(i+2).padStart(2,'0')} />
        ))}
      </section>

      {/* OPINIÃO + LISTA */}
      <section className="rg-2col sec" style={{ padding: '44px var(--px) 0' }}>
        <article style={{ background: 'var(--paper)', padding: 28, position: 'relative' }}>
          <div className="kicker" style={{ marginBottom: 12 }}>Opinião</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontStyle: 'italic', fontSize: 44, lineHeight: 1, margin: '0 0 14px', letterSpacing: '-.01em', color: 'var(--gray-3)' }}>
            Em breve.
          </h2>
          <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 18, lineHeight: 1.4, margin: '0 0 16px', maxWidth: 560, color: 'var(--gray-3)' }}>
            Próxima publicação de opinião.
          </p>
          <div style={{ position: 'absolute', right: 28, top: 28, fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 110, lineHeight: .8, color: 'var(--gray-5)' }}>&ldquo;</div>
        </article>
        <article>
          <div className="kicker" style={{ marginBottom: 10 }}>Lista</div>
          <div style={{ borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
            {[1,2,3,4,5].map((n, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '44px 1fr auto', gap: 12, padding: '12px 0', borderTop: i === 0 ? 0 : '1px solid var(--gray-5)', alignItems: 'center' }}>
                <span className="mono" style={{ fontSize: 11, letterSpacing: '.15em', color: 'var(--gray-4)' }}>{String(n).padStart(2,'0')}</span>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.25, color: 'var(--gray-3)' }}>Em breve.</span>
                <span className="mono" style={{ fontSize: 10, color: 'var(--gray-4)' }}>—</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* FOOTER */}
      <div style={{ marginTop: 48 }}>
        <Footer />
      </div>
    </div>
  );
}
