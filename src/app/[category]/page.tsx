import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticlesByCategory } from '@/lib/articles';
import { UtilityBar, FullHeader } from '@/components/Header';
import { MiniFooter } from '@/components/Footer';
import { EngravedPlaceholder } from '@/components/EngravedPlaceholder';
import { CategorySearch } from '@/components/CategorySearch';
import Link from 'next/link';
import Image from 'next/image';

const VALID_CATEGORIES = ['marketing', 'mercado', 'carreira', 'empreendedorismo', 'guest-posts', 'opiniao'];

const CATEGORY_LABELS: Record<string, string> = {
  marketing: 'Marketing',
  mercado: 'Mercado',
  carreira: 'Carreira',
  empreendedorismo: 'Empreendedorismo',
  'guest-posts': 'Guest Posts',
  opiniao: 'Opinião',
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  marketing: 'O que as marcas fazem, por que fazem, e o que isso diz sobre o mundo que estamos construindo.',
  mercado: 'Economia, negócios, tendências e o que está mudando antes de você perceber.',
  carreira: 'Trabalho, ambição, burnout e o que realmente importa dentro de uma empresa.',
  empreendedorismo: 'Startups, founders, e a realidade que o LinkedIn não mostra.',
  'guest-posts': 'Vozes convidadas. Perspectivas que valem a leitura.',
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
  const archiveArticles = articles.slice(1);
  const isGuestPosts = params.category === 'guest-posts';

  return (
    <div style={{ width: '100%', background: 'var(--paper-warm)', color: 'var(--ink)', fontFamily: 'var(--sans)' }}>
      <UtilityBar />
      <FullHeader activeCategory={params.category} />

      {/* Category header */}
      <section className="sec" style={{ padding: '60px var(--px) 0' }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>EDITORIA</div>
        <div className="rg-cat-hdr">
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 'clamp(28px, 8vw, 96px)', lineHeight: .9, letterSpacing: '-.03em', margin: 0 }}>
            {isGuestPosts && <span style={{ marginRight: 12 }}>★</span>}
            {label}<span style={{ fontStyle: 'italic', fontWeight: 500 }}>.</span>
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
      <section className="rg-lead sec" style={{ padding: '44px var(--px) 0' }}>
        {lead?.coverImage ? (
          <div className="lead-img" style={{ position: 'relative', height: 420, border: '1px solid var(--ink)', overflow: 'hidden' }}>
            <Image src={lead.coverImage} alt={lead.coverAlt ?? lead.title} fill style={{ objectFit: 'cover' }} />
          </div>
        ) : (
          <EngravedPlaceholder height={520} corner="01" label={lead ? 'Imagem editorial' : 'Em breve'} />
        )}
        {lead ? (
          <div style={{ paddingTop: 8 }}>
            <div className="kicker" style={{ marginBottom: 12 }}>{lead.category}</div>
            <Link href={`/${lead.category}/${lead.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 'var(--fs-lead-card)', lineHeight: .98, letterSpacing: '-.02em', margin: '0 0 18px' }}>
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

      {/* Archive with search — always visible */}
      <CategorySearch articles={archiveArticles} />

      <div style={{ marginTop: 80 }}>
        <MiniFooter />
      </div>
    </div>
  );
}
