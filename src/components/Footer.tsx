import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '36px var(--px, 40px) 28px' }}>
      <div className="footer-grid">
        <div>
          <div style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 38, letterSpacing: '-.02em', lineHeight: 1 }}>DESTERRO</div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gray-4)', marginTop: 6 }}>um jornal de voz própria</div>
          <div className="byline" style={{ color: 'var(--gray-4)', marginTop: 18 }}>Catarina Desterro</div>
        </div>
        <div>
          <div className="kicker" style={{ color: 'var(--blue)', marginBottom: 10 }}>Editorias</div>
          <div style={{ display: 'grid', gap: 6, fontFamily: 'var(--sans)', fontSize: 13 }}>
            {['Marketing','Mercado','Carreira','Empreendedorismo','Opinião'].map(e => (
              <Link key={e} href={`/${e.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none' }}>{e}</Link>
            ))}
          </div>
        </div>
        <div>
          <div className="kicker" style={{ color: 'var(--blue)', marginBottom: 10 }}>Navegar</div>
          <div style={{ display: 'grid', gap: 6, fontFamily: 'var(--sans)', fontSize: 13 }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Início</Link>
            <Link href="/sobre-o-desterro" style={{ color: 'inherit', textDecoration: 'none' }}>Todos os textos</Link>
          </div>
        </div>
        <div>
          <div className="kicker" style={{ color: 'var(--blue)', marginBottom: 10 }}>Catarina</div>
          <div style={{ display: 'grid', gap: 6, fontFamily: 'var(--sans)', fontSize: 13 }}>
            <Link href="/sobre-catarina" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre Catarina</Link>
            <Link href="/sobre-o-desterro" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre o Desterro</Link>
            <Link href="/fale-comigo" style={{ color: 'inherit', textDecoration: 'none' }}>Fale comigo</Link>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gray-4)' }}>
        <span>© 2026 desterro · todos os textos por catarina desterro</span>
      </div>
    </footer>
  );
}

export function MiniFooter() {
  return (
    <footer style={{ padding: '24px 40px', background: 'var(--ink)', color: 'var(--paper)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase' }}>
      <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', letterSpacing: 0, textTransform: 'none', fontSize: 14 }}>desterro · um jornal de voz própria</span>
      <span>© 2026 catarina desterro</span>
    </footer>
  );
}
