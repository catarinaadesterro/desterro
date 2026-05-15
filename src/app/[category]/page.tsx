import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticlesByCategory } from '@/lib/articles';
import { UtilityBar, FullHeader } from '@/components/Header';
import { MiniFooter } from '@/components/Footer';
import { ArticleCard } from '@/components/ArticleCard';
import { EngravedPlaceholder } from '@/components/EngravedPlaceholder';
import Link from 'next/link';
import Image from 'next/image';

const VALID_CATEGORIES = ['marketing', 'mercado', 'carreira', 'empreendedorismo', 'opiniao'];

const CATEGORY_LABELS: Record<string, string> = {
  marketing: 'Marketing',
  mercado: 'Mercado',
  carreira: 'Carreira',
  empreendedorismo: 'Empreendedorismo',
  opiniao: 'Opinião',
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  marketing: 'O que as marcas fazem, por que fazem, e o que isso diz sobre o mundo que estamos construindo.',
  mercado: 'Economia, negócios, tendências e o que está mudando antes de você perceber.',
  carreira: 'Trabalho, ambição, burnout e o que realmente importa dentro de uma empresa.',
  empreendedorismo: 'Startups, founders, e a realidade que o LinkedIn não mostra.',
  opiniao: 'O que eu penso, sem filtro, sem pedido de licença.',
};

export async function generateStaticParams() {
  return VALID_CATEGORIES.map(c => ({ category: c }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const label = CATEGORY_LABELS[params.category];
  if (!label) return {};
  return { title: `${label} — DESTERRO` };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  if (!VALID_CATEGORIES.includes(params.category)) notFound();

  const label = CATEGORY_LABELS[params.category];
  const description = CATEGORY_DESCRIPTIONS[params.category];
  const articles = getArticlesByCategory(params.category);
  const lead = articles[0];
  const grid = articles.slice(1, 4);

  return (
    <div style={{ width: '100%', background: 'var(--paper-warm)', color: 'var(--ink)', fontFamily: 'var(--sans)' }}>
      <UtilityBar />
      <FullHeader activeCategory={params.category} />

      {/* Category header */}
      <section style={{ padding: '60px 40px 0' }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>EDITORIA</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, alignItems: 'end' }}>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 168, lineHeight: .88, letterSpacing: '-.035em', margin: 0 }}>
            {label.includes('ã') ? label.split('ã')[0] : label.slice(0, -1)}<br />
            <span style={{ fontStyle: 'italic', fontWeight: 500 }}>{label.endsWith('ão') ? 'ão.' : label.slice(-1) + '.'}</span>
          </h1>
          <div>
            <div className="kicker" style={{ marginBottom: 10 }}>Sobre esta editoria</div>
            <p style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 19, lineHeight: 1.5, color: 'var(--gray-1)', margin: 0 }}>
              {description}
            </p>
          </div>
        </div>
        <div style={{ marginTop: 40, paddingTop: 14, borderTop: '1px solid var(--ink)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>
          <span>Total de textos · {String(articles.length).padStart(2,'0')}</span>
        </div>
      </section>

      {/* Lead item or placeholder */}
      <section style={{ padding: '44px 40px 0', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 44, alignItems: 'start' }}>
        {lead?.coverImage ? (
          <div style={{ position: 'relative', height: 520, border: '1px solid var(--ink)', overflow: 'hidden' }}>
            <Image src={lead.coverImage} alt={lead.coverAlt ?? lead.title} fill style={{ objectFit: 'cover' }} />
          </div>
        ) : (
          <EngravedPlaceholder height={520} corner="01" label={lead ? 'Imagem editorial' : 'Em breve'} />
        )}
        {lead ? (
          <div style={{ paddingTop: 8 }}>
            <div className="kicker" style={{ marginBottom: 12 }}>{lead.category}</div>
            <Link href={`/${lead.category}/${lead.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 64, lineHeight: .98, letterSpacing: '-.02em', margin: '0 0 18px' }}>
                {lead.title}
              </h2>
            </Link>
            <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 22, lineHeight: 1.4, color: 'var(--gray-1)', margin: '0 0 24px', maxWidth: 540 }}>
              {lead.subtitle}
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--ink)', fontFamily: 'var(--sans)', fontSize: 13 }}>
              <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic' }}>Catarina Desterro</span>
              <span style={{ width: 4, height: 4, background: 'var(--gray-3)', borderRadius: '50%' }} />
              <span style={{ color: 'var(--gray-2)' }}>{lead.date}</span>
            </div>
          </div>
        ) : (
          <div style={{ paddingTop: 8 }}>
            <div className="kicker" style={{ marginBottom: 12, color: 'var(--gray-3)' }}>Em breve</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 64, lineHeight: .98, letterSpacing: '-.02em', margin: '0 0 18px', color: 'var(--gray-3)' }}>
              Próxima publicação.
            </h2>
            <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 22, lineHeight: 1.4, color: 'var(--gray-3)', margin: 0 }}>
              Novos textos em breve nesta editoria.
            </p>
          </div>
        )}
      </section>

      {/* Grid */}
      {(grid.length > 0 || articles.length === 0) && (
        <>
          <div style={{ padding: '72px 40px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center', gap: 16 }}>
              <span className="kicker" style={{ fontSize: 12 }}>ARQUIVO DA EDITORIA</span>
              <hr className="hr" />
            </div>
          </div>
          <section style={{ padding: '28px 40px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[0,1,2].map(i => (
              <ArticleCard key={i} article={grid[i]} corner={String(i+2).padStart(2,'0')} imageHeight={260} />
            ))}
          </section>
        </>
      )}

      <div style={{ marginTop: 80 }}>
        <MiniFooter />
      </div>
    </div>
  );
}
