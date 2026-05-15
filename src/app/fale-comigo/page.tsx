import type { Metadata } from 'next';
import { UtilityBar, MiniHeader } from '@/components/Header';
import { MiniFooter } from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fale comigo — DESTERRO',
  description: 'Se chegou até aqui, talvez já tenhamos assunto.',
};

export default function FaleComigoPage() {
  return (
    <div style={{ background: 'var(--paper-warm)', color: 'var(--ink)', fontFamily: 'var(--sans)', minHeight: '100vh' }}>
      <UtilityBar />
      <MiniHeader />

      {/* Header */}
      <section style={{ padding: '100px 40px 0', maxWidth: 1100 }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}>CORRESPONDÊNCIA · DESTERRO</div>
        <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 168, lineHeight: .88, letterSpacing: '-.035em', margin: '0 0 28px' }}>
          Fale<br /><span style={{ fontStyle: 'italic', fontWeight: 500 }}>comigo.</span>
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 26, lineHeight: 1.45, color: 'var(--gray-1)', margin: 0, maxWidth: 720 }}>
          Se chegou até aqui, talvez já tenhamos assunto.
        </p>
      </section>

      {/* Two-column: contacts | form */}
      <section style={{ padding: '80px 40px 0', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
        {/* Contacts */}
        <div>
          <div className="kicker" style={{ marginBottom: 24 }}>Canais diretos</div>
          <div style={{ display: 'grid', gap: 0, borderTop: '1px solid var(--ink)' }}>
            {[
              ['E-mail', 'catarinabaima123@gmail.com', '→', 'mailto:catarinabaima123@gmail.com'],
              ['Instagram', '@catarinaadesterro', '↗', 'https://instagram.com/catarinaadesterro'],
              ['LinkedIn', 'in/catarina-desterro-800b081b4/', '↗', 'https://linkedin.com/in/catarina-desterro-800b081b4/'],
            ].map(([label, value, arrow, href], i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{
                display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: 18, alignItems: 'center',
                padding: '22px 0', borderBottom: '1px solid var(--gray-5)',
                textDecoration: 'none', color: 'var(--ink)',
              }}>
                <span className="kicker" style={{ color: 'var(--gray-2)', fontSize: 10 }}>{label}</span>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 22, fontStyle: 'italic' }}>{value}</span>
                <span className="mono" style={{ fontSize: 14 }}>{arrow}</span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            <div className="kicker" style={{ marginBottom: 12, color: 'var(--gray-2)' }}>Tempo de resposta</div>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.5, color: 'var(--gray-1)', margin: 0 }}>
              Pode levar alguns dias.
            </p>
          </div>
        </div>

        {/* Form */}
        <form style={{ display: 'grid', gap: 28 }}>
          <div className="kicker">Mensagem</div>
          <label style={{ display: 'block', borderBottom: '1px solid var(--ink)', paddingBottom: 10 }}>
            <div className="kicker" style={{ color: 'var(--gray-2)', marginBottom: 8, fontSize: 10 }}>Nome</div>
            <input type="text" placeholder="—" style={{ width: '100%', border: 0, background: 'transparent', padding: 0, fontFamily: 'var(--serif)', fontSize: 22, outline: 'none', color: 'var(--ink)' }} />
          </label>
          <label style={{ display: 'block', borderBottom: '1px solid var(--ink)', paddingBottom: 10 }}>
            <div className="kicker" style={{ color: 'var(--gray-2)', marginBottom: 8, fontSize: 10 }}>E-mail</div>
            <input type="email" placeholder="—" style={{ width: '100%', border: 0, background: 'transparent', padding: 0, fontFamily: 'var(--serif)', fontSize: 22, outline: 'none', color: 'var(--ink)' }} />
          </label>
          <label style={{ display: 'block', borderBottom: '1px solid var(--ink)', paddingBottom: 10 }}>
            <div className="kicker" style={{ color: 'var(--gray-2)', marginBottom: 8, fontSize: 10 }}>Assunto</div>
            <input type="text" placeholder="—" style={{ width: '100%', border: 0, background: 'transparent', padding: 0, fontFamily: 'var(--serif)', fontSize: 22, outline: 'none', color: 'var(--ink)' }} />
          </label>
          <label style={{ display: 'block', borderBottom: '1px solid var(--ink)', paddingBottom: 10 }}>
            <div className="kicker" style={{ color: 'var(--gray-2)', marginBottom: 8, fontSize: 10 }}>Mensagem</div>
            <textarea rows={6} placeholder="—" style={{ width: '100%', border: 0, background: 'transparent', padding: 0, fontFamily: 'var(--serif)', fontSize: 22, outline: 'none', color: 'var(--ink)', resize: 'vertical', lineHeight: 1.5 }} />
          </label>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
            <button type="submit" style={{ background: 'var(--ink)', color: 'var(--paper)', border: 0, padding: '18px 32px', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', cursor: 'pointer' }}>Enviar →</button>
          </div>
        </form>
      </section>

      <div style={{ marginTop: 120 }}>
        <MiniFooter />
      </div>
    </div>
  );
}
