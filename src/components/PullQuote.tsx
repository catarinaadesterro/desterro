interface PullQuoteProps {
  children: React.ReactNode;
  variant?: 'beige' | 'blue';
  label?: string;
}

export function PullQuote({ children, variant = 'beige', label }: PullQuoteProps) {
  if (variant === 'blue') {
    return (
      <div style={{ background: 'var(--blue)', color: 'var(--ink)', padding: '28px 28px', margin: '28px 0', border: '1px solid var(--ink)' }}>
        {label && <div className="mono" style={{ fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--blue-ink)', marginBottom: 8 }}>{label}</div>}
        <p style={{ margin: 0, fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 30, lineHeight: 1.18, letterSpacing: '-.005em' }}>{children}</p>
      </div>
    );
  }
  return (
    <div style={{ background: 'var(--paper)', padding: '24px 28px', margin: '28px 0', borderLeft: '4px solid var(--ink)' }}>
      {label && <div className="mono" style={{ fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gray-2)', marginBottom: 10 }}>{label}</div>}
      <p style={{ margin: 0, fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 500, fontSize: 28, lineHeight: 1.25, color: 'var(--ink)' }}>{children}</p>
    </div>
  );
}

export function CenteredQuote({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 500,
      fontSize: 30, lineHeight: 1.25, textAlign: 'center',
      margin: '28px 0', color: 'var(--ink)',
      borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)',
      padding: '20px 0',
    }}>{children}</p>
  );
}

export function ClosingQuote({ children, attribution }: { children: React.ReactNode; attribution?: string }) {
  return (
    <section className="closing-quote">
      <div className="closing-quote-inner">
        <div className="closing-quote-mark">&ldquo;</div>
        <div>
          <p className="closing-quote-text">{children}</p>
          {attribution && <div className="byline" style={{ marginTop: 16, color: 'var(--gray-4)' }}>— {attribution}</div>}
        </div>
      </div>
    </section>
  );
}
