'use client';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Marketing', href: '/marketing' },
  { label: 'Mercado', href: '/mercado' },
  { label: 'Carreira', href: '/carreira' },
  { label: 'Empreendedorismo', href: '/empreendedorismo' },
  { label: 'Opinião', href: '/opiniao', italic: true },
];

export function UtilityBar() {
  const date = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  return (
    <div style={{
      background: 'var(--ink)', color: 'var(--paper)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '8px 40px',
      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase',
    }}>
      <span>{date}</span>
      <span style={{ display: 'flex', gap: 28 }}>
        <Link href="/sobre" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre Catarina</Link>
        <Link href="/fale-comigo" style={{ color: 'inherit', textDecoration: 'none' }}>Fale comigo</Link>
        <span>Buscar ⌕</span>
      </span>
    </div>
  );
}

export function FullHeader({ activeCategory }: { activeCategory?: string }) {
  return (
    <header style={{ padding: '28px 40px 10px', background: 'var(--paper-warm)' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'end', gap: 24, paddingBottom: 14, borderBottom: '1px solid var(--ink)',
      }}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--ink)' }}>
          Um jornal de voz própria
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 96, lineHeight: .9, letterSpacing: '-.02em' }}>DESTERRO</div>
          </Link>
          <div style={{ marginTop: 6, fontFamily: 'var(--sans)', fontWeight: 300, fontSize: 13, letterSpacing: '.32em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>
            por <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', textTransform: 'none', letterSpacing: 0, color: 'var(--ink)', fontSize: 15 }}>Catarina Desterro</span>
          </div>
        </div>
        <div className="mono" style={{ textAlign: 'right', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--ink)' }}>
          <Link href="/sobre-a-desterro" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre a Desterro →</Link>
        </div>
      </div>
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '12px 0', borderBottom: '3px double var(--ink)',
        fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500,
      }}>
        <div style={{ display: 'flex', gap: 32 }}>
          {NAV_ITEMS.map(item => (
            <Link key={item.href} href={item.href} style={{
              textDecoration: 'none', color: 'var(--ink)',
              fontStyle: item.italic ? 'italic' : 'normal',
              fontFamily: item.italic ? 'var(--serif)' : 'var(--sans)',
              borderBottom: activeCategory === item.label.toLowerCase() ? '2px solid var(--ink)' : 'none',
              paddingBottom: 2,
            }}>{item.label}</Link>
          ))}
        </div>
        <Link href="/fale-comigo" className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gray-2)', textDecoration: 'none' }}>
          Fale comigo →
        </Link>
      </nav>
    </header>
  );
}

export function MiniHeader() {
  const date = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  return (
    <header style={{
      padding: '20px 40px 14px', borderBottom: '3px double var(--ink)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: 'var(--paper-warm)',
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 38, letterSpacing: '-.02em', lineHeight: 1 }}>DESTERRO</div>
      </Link>
      <nav style={{ display: 'flex', gap: 28, fontFamily: 'var(--sans)', fontSize: 13 }}>
        {NAV_ITEMS.map(item => (
          <Link key={item.href} href={item.href} style={{
            textDecoration: 'none', color: 'var(--ink)',
            fontStyle: item.italic ? 'italic' : 'normal',
            fontFamily: item.italic ? 'var(--serif)' : 'var(--sans)',
          }}>{item.label}</Link>
        ))}
      </nav>
      <div className="mono" style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>{date}</div>
    </header>
  );
}
