import Link from 'next/link';
import { UtilityBar, MiniHeader } from '@/components/Header';
import { MiniFooter } from '@/components/Footer';

export default function NotFound() {
  return (
    <div style={{ width: '100%', background: 'var(--paper-warm)', color: 'var(--ink)', fontFamily: 'var(--sans)', minHeight: '100vh' }}>
      <UtilityBar />
      <MiniHeader />

      <section style={{ padding: '120px 40px 0', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 80, alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 360, lineHeight: .82, letterSpacing: '-.05em' }}>
          4<span style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--blue-deep)' }}>0</span>4
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>FORA DE CIRCULAÇÃO</div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontStyle: 'italic', fontSize: 72, lineHeight: .98, letterSpacing: '-.02em', margin: '0 0 24px' }}>
            Esta página<br />saiu de circulação.
          </h1>
          <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 22, lineHeight: 1.45, color: 'var(--gray-1)', margin: '0 0 36px', maxWidth: 540 }}>
            Arquivo indisponível, endereço quebrado, ou simplesmente não existe.
          </p>
          <div style={{ display: 'flex', gap: 14 }}>
            <Link href="/" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '16px 24px', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', textDecoration: 'none' }}>← Voltar para a home</Link>
            <Link href="/fale-comigo" style={{ background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)', padding: '16px 24px', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', textDecoration: 'none' }}>Falar comigo ↗</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 40px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
        <div style={{ background: 'var(--paper)', padding: '40px 36px', borderRight: '1px solid var(--ink)' }}>
          <div className="kicker" style={{ marginBottom: 12, color: 'var(--gray-2)' }}>NOTA</div>
          <p style={{ margin: 0, fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 500, fontSize: 26, lineHeight: 1.3 }}>
            Toda página tem o seu tempo de vida. Esta acabou ou nunca começou.
          </p>
        </div>
        <div style={{ background: 'var(--blue)', padding: '40px 36px' }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--blue-ink)', marginBottom: 12 }}>Sugestões</div>
          <div style={{ display: 'grid', gap: 10, fontFamily: 'var(--serif)', fontSize: 18 }}>
            <Link href="/" style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: 4 }}>→ Ir para a home</Link>
            <Link href="/sobre-a-desterro" style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: 4 }}>→ Ler sobre a Desterro</Link>
            <Link href="/fale-comigo" style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: 4 }}>→ Falar comigo</Link>
          </div>
        </div>
      </section>

      <div style={{ marginTop: 80 }}><MiniFooter /></div>
    </div>
  );
}
