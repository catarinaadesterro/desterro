/* DESTERRO — 404 */
const NotFoundPage = () => {
  return (
    <div style={{ width: 1280, background: "var(--paper-warm)", color: "var(--ink)", fontFamily: "var(--sans)", minHeight: 900 }}>
      {/* utility */}
      <div style={{ background: "var(--ink)", color: "var(--paper)", display: "flex", justifyContent: "space-between", padding: "8px 40px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase" }}>
        <span>Erro · 404</span>
        <span style={{ display: "flex", gap: 28 }}>
          <span>Sobre Catarina</span><span>Fale comigo</span><span>Buscar  ⌕</span>
        </span>
      </div>

      {/* mini masthead */}
      <header style={{ padding: "20px 40px 14px", borderBottom: "3px double var(--ink)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 38, letterSpacing: "-.02em", lineHeight: 1 }}>DESTERRO</div>
        <nav style={{ display: "flex", gap: 28, fontFamily: "var(--sans)", fontSize: 13 }}>
          <span>Marketing</span><span>Mercado</span><span>Carreira</span><span>Empreendedorismo</span>
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>Opinião</span>
        </nav>
        <div className="mono" style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--gray-2)" }}>Data de acesso</div>
      </header>

      {/* HERO */}
      <section style={{ padding: "120px 40px 0", display: "grid", gridTemplateColumns: "auto 1fr", gap: 80, alignItems: "center" }}>
        <div style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 360, lineHeight: .82, letterSpacing: "-.05em", color: "var(--ink)" }}>
          4<span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--blue-deep)" }}>0</span>4
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>FORA DE CIRCULAÇÃO</div>
          <h1 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: 72, lineHeight: .98, letterSpacing: "-.02em", margin: "0 0 24px" }}>
            Esta página<br />saiu de circulação.
          </h1>
          <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 22, lineHeight: 1.45, color: "var(--gray-1)", margin: "0 0 36px", maxWidth: 540 }}>
            Arquivo indisponível, endereço quebrado, ou simplesmente não existe.
          </p>

          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <a href="#" style={{
              background: "var(--ink)", color: "var(--paper)",
              padding: "16px 24px", fontFamily: "var(--mono)", fontSize: 11,
              letterSpacing: ".28em", textTransform: "uppercase", textDecoration: "none"
            }}>← Voltar para a home</a>
            <a href="#" style={{
              background: "transparent", color: "var(--ink)", border: "1px solid var(--ink)",
              padding: "16px 24px", fontFamily: "var(--mono)", fontSize: 11,
              letterSpacing: ".28em", textTransform: "uppercase", textDecoration: "none"
            }}>Buscar ⌕</a>
          </div>
        </div>
      </section>

      {/* OBSERVATION TILE */}
      <section style={{ padding: "100px 40px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "stretch" }}>
        <div style={{ background: "var(--paper)", padding: "40px 36px", borderRight: "1px solid var(--ink)" }}>
          <div className="kicker" style={{ marginBottom: 12, color: "var(--gray-2)" }}>NOTA</div>
          <p style={{ margin: 0, fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 500, fontSize: 26, lineHeight: 1.3, color: "var(--ink)" }}>Toda página tem o seu tempo de vida. Esta acabou ou nunca começou.

          </p>
        </div>
        <div style={{ background: "var(--blue)", padding: "40px 36px" }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--blue-ink)", marginBottom: 12 }}>Sugestões</div>
          <div style={{ display: "grid", gap: 10, fontFamily: "var(--serif)", fontSize: 18 }}>
            <a href="#" style={{ color: "var(--ink)", textDecoration: "none", borderBottom: "1px solid var(--ink)", paddingBottom: 4 }}>→ Ir para a home</a>
            <a href="#" style={{ color: "var(--ink)", textDecoration: "none", borderBottom: "1px solid var(--ink)", paddingBottom: 4 }}>→ Ler sobre a Desterro</a>
            <a href="#" style={{ color: "var(--ink)", textDecoration: "none", borderBottom: "1px solid var(--ink)", paddingBottom: 4 }}>→ Falar comigo</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: 80, padding: "24px 40px", background: "var(--ink)", color: "var(--paper)", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase" }}>
        <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", letterSpacing: 0, textTransform: "none", fontSize: 14, color: "var(--paper)" }}>desterro · um jornal de voz própria</span>
        <span>página não encontrada · 404</span>
      </footer>
    </div>);

};

window.NotFoundPage = NotFoundPage;