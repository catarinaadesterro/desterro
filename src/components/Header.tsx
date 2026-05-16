'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const NAV_ITEMS: { label: string; href: string; italic?: boolean; star?: boolean }[] = [
  { label: 'Marketing', href: '/marketing' },
  { label: 'Mercado', href: '/mercado' },
  { label: 'Carreira', href: '/carreira' },
  { label: 'Empreendedorismo', href: '/empreendedorismo' },
  { label: 'Guest Posts', href: '/guest-posts', star: true },
  { label: 'Opinião', href: '/opiniao', italic: true },
];

// Barra preta mobile com links secundários — oculta no desktop
function MobileSecondaryNav() {
  return (
    <div className="mobile-secondary-nav">
      <Link href="/sobre-a-desterro">Sobre o Jornal</Link>
      <Link href="/sobre">Sobre Catarina</Link>
      <Link href="/fale-comigo">Fale Comigo</Link>
    </div>
  );
}

export function UtilityBar() {
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();
  const date = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(query.trim())}`);
      setSearching(false);
      setQuery('');
    }
  };

  const barStyle = {
    background: 'var(--ink)', color: 'var(--paper)',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '8px var(--px, 40px)',
    fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase' as const,
  };

  if (searching) {
    return (
      <div className="util-bar" style={barStyle}>
        <form onSubmit={handleSearch} style={{ display: 'flex', width: '100%', gap: 14, alignItems: 'center' }}>
          <input
            autoFocus
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="buscar no desterro..."
            style={{ flex: 1, background: 'transparent', border: 0, borderBottom: '1px solid var(--gray-2)', color: 'inherit', fontFamily: 'var(--serif)', fontSize: 14, outline: 'none', padding: '2px 0', letterSpacing: 0 }}
          />
          <button type="submit" style={{ background: 'none', border: 0, cursor: 'pointer', color: 'inherit', fontFamily: 'var(--mono)', fontSize: 12, padding: 0 }}>⌕</button>
          <button type="button" onClick={() => { setSearching(false); setQuery(''); }} style={{ background: 'none', border: 0, cursor: 'pointer', color: 'inherit', fontFamily: 'var(--mono)', fontSize: 12, padding: 0 }}>✕</button>
        </form>
      </div>
    );
  }

  return (
    <div className="util-bar" style={barStyle}>
      <span>{date}</span>
      <span style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        <Link href="/sobre" className="util-sec-link" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre Catarina</Link>
        <Link href="/fale-comigo" className="util-sec-link" style={{ color: 'inherit', textDecoration: 'none' }}>Fale comigo</Link>
        <button
          onClick={() => setSearching(true)}
          style={{ background: 'none', border: 0, cursor: 'pointer', color: 'inherit', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', padding: 0, display: 'flex', alignItems: 'center', gap: 4 }}
        >
          Buscar ⌕
        </button>
      </span>
    </div>
  );
}

export function FullHeader({ activeCategory }: { activeCategory?: string }) {
  return (
    <>
      <div className="sticky-header-wrap">
        <MobileSecondaryNav />
        <header style={{ padding: 'clamp(16px, 2.5vw, 28px) var(--px, 40px) 10px', background: 'var(--paper-warm)' }}>
          <div className="fh-inner" style={{
            display: 'grid', gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'end', gap: 24, paddingBottom: 14, borderBottom: '1px solid var(--ink)',
          }}>
            <div className="fh-left mono" style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--ink)' }}>
              Um jornal de voz própria
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="fh-wordmark" style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 'clamp(48px, 8vw, 96px)', lineHeight: .9, letterSpacing: '-.02em' }}>DESTERRO</div>
              </Link>
              <div style={{ marginTop: 6, fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 13, letterSpacing: '.32em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>
                por <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', textTransform: 'none', letterSpacing: 0, color: 'var(--ink)', fontSize: 15 }}>Catarina Desterro</span>
              </div>
            </div>
            <div className="fh-right mono" style={{ textAlign: 'right', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--ink)' }}>
              <Link href="/sobre-a-desterro" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre a Desterro →</Link>
            </div>
          </div>
          <nav style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '12px 0', borderBottom: '3px double var(--ink)',
            fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500,
          }}>
            <div className="fh-nav" style={{ display: 'flex', gap: 32 }}>
              {NAV_ITEMS.map(item => (
                <Link key={item.href} href={item.href} style={{
                  textDecoration: 'none', color: 'var(--ink)',
                  fontStyle: item.italic ? 'italic' : 'normal',
                  fontFamily: item.italic ? 'var(--serif)' : 'var(--sans)',
                  borderBottom: activeCategory === item.href.slice(1) ? '2px solid var(--ink)' : 'none',
                  paddingBottom: 2, whiteSpace: 'nowrap',
                }}>
                  {item.star ? `★ ${item.label}` : item.label}
                </Link>
              ))}
            </div>
            <Link href="/fale-comigo" className="fh-nav-right mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gray-2)', textDecoration: 'none' }}>
              Fale comigo →
            </Link>
          </nav>
        </header>
      </div>
    </>
  );
}

export function MiniHeader() {
  const date = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  return (
    <div className="sticky-header-wrap">
      <MobileSecondaryNav />
      <header style={{
        padding: '20px var(--px, 40px) 14px', borderBottom: '3px double var(--ink)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: 16, background: 'var(--paper-warm)',
      }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit', flexShrink: 0 }}>
          <div style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 38, letterSpacing: '-.02em', lineHeight: 1 }}>DESTERRO</div>
        </Link>
        <nav className="mini-header-nav" style={{ display: 'flex', gap: 24, fontFamily: 'var(--sans)', fontSize: 13, overflowX: 'auto' }}>
          {NAV_ITEMS.map(item => (
            <Link key={item.href} href={item.href} style={{
              textDecoration: 'none', color: 'var(--ink)',
              fontStyle: item.italic ? 'italic' : 'normal',
              fontFamily: item.italic ? 'var(--serif)' : 'var(--sans)',
              whiteSpace: 'nowrap',
            }}>
              {item.star ? `★ ${item.label}` : item.label}
            </Link>
          ))}
        </nav>
        <div className="mini-header-date mono" style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gray-2)', flexShrink: 0 }}>{date}</div>
      </header>
    </div>
  );
}
