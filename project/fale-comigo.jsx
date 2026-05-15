/* DESTERRO — Fale Comigo */
const FaleComigoPage = () => {
  return (
    <div style={{ width: 1280, background: "var(--paper-warm)", color: "var(--ink)", fontFamily: "var(--sans)" }}>
      {/* utility */}
      <div style={{ background: "var(--ink)", color: "var(--paper)", display: "flex", justifyContent: "space-between", padding: "8px 40px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase" }}>
        <span>← Voltar</span>
        <span style={{ display: "flex", gap: 28 }}>
          <span>Sobre Catarina</span><span>Sobre a Desterro</span><span>Buscar  ⌕</span>
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

      {/* HEADER */}
      <section style={{ padding: "100px 40px 0", maxWidth: 1100 }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}>CORRESPONDÊNCIA · DESTERRO</div>
        <h1 style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 168, lineHeight: .88, letterSpacing: "-.035em", margin: "0 0 28px" }}>
          Fale<br />
          <span style={{ fontStyle: "italic", fontWeight: 500 }}>comigo.</span>
        </h1>
        <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 26, lineHeight: 1.45, color: "var(--gray-1)", margin: 0, maxWidth: 720 }}>Se chegou até aqui, talvez já tenhamos assunto.

        </p>
      </section>

      {/* TWO-COLUMN: contacts | form */}
      <section style={{ padding: "80px 40px 0", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
        {/* CONTACTS */}
        <div>
          <div className="kicker" style={{ marginBottom: 24 }}>Canais diretos</div>

          <div style={{ display: "grid", gap: 0, borderTop: "1px solid var(--ink)" }}>
            {[
            ["E-mail", "catarinabaima123@gmail.com", "→"],
            ["Instagram", "@catarinaadesterro", "↗"],
            ["LinkedIn", "in/catarina-desterro-800b081b4/", "↗"]].
            map((row, i) =>
            <a key={i} href="#" style={{
              display: "grid", gridTemplateColumns: "120px 1fr auto", gap: 18, alignItems: "center",
              padding: "22px 0",
              borderBottom: "1px solid var(--gray-5)",
              textDecoration: "none", color: "var(--ink)"
            }}>
                <span className="kicker" style={{ color: "var(--gray-2)", fontSize: 10 }}>{row[0]}</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 22, fontStyle: "italic" }}>{row[1]}</span>
                <span className="mono" style={{ fontSize: 14 }}>{row[2]}</span>
              </a>
            )}
          </div>

          <div style={{ marginTop: 48 }}>
            <div className="kicker" style={{ marginBottom: 12, color: "var(--gray-2)" }}>Tempo de resposta</div>
            <p style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.5, color: "var(--gray-1)", margin: 0 }}>Pode levar alguns dias.

            </p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={(e) => e.preventDefault()} style={{ display: "grid", gap: 28 }}>
          <div className="kicker">Mensagem</div>
          <label style={{ display: "block", borderBottom: "1px solid var(--ink)", paddingBottom: 10 }}>
            <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 8, fontSize: 10 }}>Nome</div>
            <input type="text" placeholder="—" style={{ width: "100%", border: 0, background: "transparent", padding: 0, fontFamily: "var(--serif)", fontSize: 22, outline: "none", color: "var(--ink)" }} />
          </label>
          <label style={{ display: "block", borderBottom: "1px solid var(--ink)", paddingBottom: 10 }}>
            <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 8, fontSize: 10 }}>E-mail</div>
            <input type="email" placeholder="—" style={{ width: "100%", border: 0, background: "transparent", padding: 0, fontFamily: "var(--serif)", fontSize: 22, outline: "none", color: "var(--ink)" }} />
          </label>
          <label style={{ display: "block", borderBottom: "1px solid var(--ink)", paddingBottom: 10 }}>
            <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 8, fontSize: 10 }}>Assunto</div>
            <input type="text" placeholder="—" style={{ width: "100%", border: 0, background: "transparent", padding: 0, fontFamily: "var(--serif)", fontSize: 22, outline: "none", color: "var(--ink)" }} />
          </label>
          <label style={{ display: "block", borderBottom: "1px solid var(--ink)", paddingBottom: 10 }}>
            <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 8, fontSize: 10 }}>Mensagem</div>
            <textarea rows={6} placeholder="—" style={{ width: "100%", border: 0, background: "transparent", padding: 0, fontFamily: "var(--serif)", fontSize: 22, outline: "none", color: "var(--ink)", resize: "vertical", lineHeight: 1.5 }} />
          </label>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
            <button type="submit" style={{
              background: "var(--ink)", color: "var(--paper)", border: 0,
              padding: "18px 32px", fontFamily: "var(--mono)", fontSize: 11,
              letterSpacing: ".28em", textTransform: "uppercase", cursor: "pointer"
            }}>Enviar →</button>
          </div>
        </form>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: 120, padding: "24px 40px", background: "var(--ink)", color: "var(--paper)", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase" }}>
        <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", letterSpacing: 0, textTransform: "none", fontSize: 14, color: "var(--paper)" }}>desterro · um jornal de voz própria</span>
        <span>© 2026 catarina desterro</span>
      </footer>
    </div>);

};

window.FaleComigoPage = FaleComigoPage;