import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import { UtilityBar, MiniHeader } from '@/components/Header';
import { MiniFooter } from '@/components/Footer';
import { PullQuote, CenteredQuote, ClosingQuote } from '@/components/PullQuote';
import { EngravedPlaceholder } from '@/components/EngravedPlaceholder';
import { ArticleCard } from '@/components/ArticleCard';

const MDX_COMPONENTS = {
  PullQuote,
  CenteredQuote,
  ClosingQuote,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 32, lineHeight: 1.1, margin: '32px 0 14px', letterSpacing: '-.01em' }} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p style={{ margin: '0 0 18px' }} {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => <em {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol style={{ paddingLeft: 22, margin: '12px 0 24px' }} {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li style={{ marginBottom: 8 }} {...props} />
  ),
};

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map(a => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.seo?.title ?? article.title,
    description: article.seo?.description ?? article.subtitle,
    openGraph: {
      title: article.seo?.title ?? article.title,
      description: article.seo?.description ?? article.subtitle,
      images: article.coverImage ? [article.coverImage] : [],
    },
  };
}

export default async function ArticleSlugPage({ params }: { params: { category: string; slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article || article.category !== params.category) notFound();

  const relatedArticles = getAllArticles().filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <div style={{ width: '100%', background: 'var(--paper-warm)', color: 'var(--ink)', fontFamily: 'var(--sans)' }}>
      {/* Utility bar */}
      <div style={{ background: 'var(--ink)', color: 'var(--paper)', display: 'flex', justifyContent: 'space-between', padding: '8px 40px', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase' }}>
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>← Voltar para a home</Link>
        <span style={{ display: 'flex', gap: 28 }}>
          <span>Compartilhar</span><span>A− A+</span>
        </span>
      </div>

      <MiniHeader />

      {/* Category strip */}
      <div style={{ padding: '16px 40px 0', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center' }}>
        <div className="kicker" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ background: 'var(--blue)', color: 'var(--ink)', padding: '4px 10px' }}>● {article.category}</span>
          <span className="mono" style={{ fontSize: 10, letterSpacing: '.18em', color: 'var(--gray-2)' }}>· PUBLICADO {article.date.toUpperCase()}</span>
        </div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>
          Leitura · {article.readTime}
        </div>
      </div>

      {/* Title block */}
      <section className="sec" style={{ padding: '20px var(--px) 0', maxWidth: 1100 }}>
        <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 'var(--fs-article-title)', lineHeight: .96, letterSpacing: '-.025em', margin: '0 0 18px' }}>
          {article.title}
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 26, lineHeight: 1.32, color: 'var(--gray-1)', margin: '0 0 24px', maxWidth: 880 }}>
          {article.subtitle}
        </p>
        <div style={{ display: 'flex', gap: 0, alignItems: 'stretch', padding: '14px 0', borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
          <div style={{ paddingRight: 24, borderRight: '1px solid var(--gray-4)' }}>
            <div className="kicker" style={{ color: 'var(--gray-2)', marginBottom: 4 }}>Por</div>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22 }}>Catarina Desterro</div>
          </div>
          <div style={{ padding: '0 24px', borderRight: '1px solid var(--gray-4)' }}>
            <div className="kicker" style={{ color: 'var(--gray-2)', marginBottom: 4 }}>Categoria</div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 500 }}>{article.category}</div>
          </div>
          <div style={{ padding: '0 24px', borderRight: '1px solid var(--gray-4)' }}>
            <div className="kicker" style={{ color: 'var(--gray-2)', marginBottom: 4 }}>Publicado</div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 500 }}>{article.date}</div>
          </div>
          {article.topics && (
            <div style={{ padding: '0 24px' }}>
              <div className="kicker" style={{ color: 'var(--gray-2)', marginBottom: 4 }}>Tópicos</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 500 }}>{article.topics}</div>
            </div>
          )}
        </div>
      </section>

      {/* Hero image */}
      <section className="sec" style={{ padding: '24px var(--px) 0' }}>
        <div className="hero-img" style={{ height: 460, position: 'relative', background: '#efe8d6', border: '1px solid var(--ink)', overflow: 'hidden' }}>
          {article.coverImage ? (
            <>
              <Image src={article.coverImage} alt={article.coverAlt ?? article.title} fill style={{ objectFit: 'cover' }} />
              {/* Blue tese overlay */}
              <div style={{ position: 'absolute', left: 32, bottom: 32, background: 'var(--blue)', color: 'var(--ink)', padding: '16px 20px', maxWidth: 340, zIndex: 2 }}>
                <div className="mono" style={{ fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--blue-ink)', marginBottom: 6 }}>Tese</div>
                <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 18, lineHeight: 1.25 }}>
                  Marketing potencializa, encanta, acelera, amplifica. Mas não ressuscita o que desmorona no primeiro contato real.
                </div>
              </div>
              <div style={{ position: 'absolute', right: 0, top: 0, background: 'var(--paper)', color: 'var(--ink)', padding: '8px 14px', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', borderLeft: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
                ▮ {article.coverCaption}
              </div>
            </>
          ) : (
            <EngravedPlaceholder height={460} label="Imagem editorial" corner="CAPA" />
          )}
        </div>
      </section>

      {/* Body */}
      <section className="rg-article sec" style={{ padding: '40px var(--px) 0' }}>
        {/* Left label */}
        <aside className="art-label" style={{ position: 'sticky', top: 20 }}>
          <div className="kicker" style={{ color: 'var(--gray-2)', marginBottom: 10, writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '.3em' }}>
            ensaio · {article.category}
          </div>
        </aside>

        {/* Article content */}
        <article style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          <MDXRemote source={article.content} components={MDX_COMPONENTS} />
          <div className="byline" style={{ marginTop: 32, paddingTop: 16, borderTop: '1px solid var(--gray-4)', color: 'var(--gray-2)' }}>
            — Catarina Desterro, {article.date}.
          </div>
        </article>

        {/* Right sidebar */}
        <aside className="art-sidebar" style={{ position: 'sticky', top: 20 }}>
          <div style={{ background: 'var(--paper)', padding: 18, marginBottom: 20 }}>
            <div className="kicker" style={{ marginBottom: 8 }}>Sobre a autora</div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <Image
                src="/images/catarina.jpeg"
                alt="Catarina Desterro"
                width={72} height={88}
                style={{ objectFit: 'cover', filter: 'grayscale(1) contrast(1.08)', border: '1px solid var(--ink)', flexShrink: 0 }}
              />
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 16, lineHeight: 1.2 }}>Catarina Desterro</div>
                <div className="byline" style={{ marginTop: 4, lineHeight: 1.4 }}>23 anos. Marketing, estratégia, conteúdo e SEO. Escreve o que ninguém tem coragem de falar.</div>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Leia também */}
      <section className="sec" style={{ padding: '56px var(--px) 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <span className="kicker" style={{ fontSize: 12 }}>Leia também</span>
          <hr className="hr" />
          <span className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>textos relacionados</span>
        </div>
        <div className="rg-3col">
          {[0,1,2].map(i => (
            <ArticleCard key={i} article={relatedArticles[i]} corner={String(i+1).padStart(2,'0')} imageHeight={180} />
          ))}
        </div>
      </section>

      <div style={{ marginTop: 48 }}>
        <MiniFooter />
      </div>
    </div>
  );
}
