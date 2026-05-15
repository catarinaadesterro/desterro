/* Desktop homepage — DESTERRO */
const DesktopHome = () => {
  const Eng = ({ h, label = "Imagem editorial", corner }) => (
    <div className="engraving" style={{ height: h, position: "relative" }}>
      <div className="eng-label"><span>{label}</span></div>
      {corner ? <div className="eng-corner">{corner}</div> : null}
    </div>
  );

  return (
    <div style={{ width: 1280, background: "var(--paper-warm)", color: "var(--ink)", fontFamily: "var(--sans)" }}>
      {/* TOP UTILITY BAR */}
      <div style={{ background: "var(--ink)", color: "var(--paper)", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 40px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase" }}>
        <span>Data de acesso</span>
        <span style={{ display: "flex", gap: 28 }}>
          <span>Sobre Catarina</span><span>Fale comigo</span><span>Buscar  ⌕</span>
        </span>
      </div>

      {/* MASTHEAD */}
      <header style={{ padding: "28px 40px 10px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "end", gap: 24, paddingBottom: 14, borderBottom: "1px solid var(--ink)" }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ink)" }}>Um jornal de voz própria</div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 96, lineHeight: .9, letterSpacing: "-.02em" }}>DESTERRO</div>
            <div style={{ marginTop: 6, fontFamily: "var(--sans)", fontWeight: 300, fontSize: 13, letterSpacing: ".32em", textTransform: "uppercase", color: "var(--gray-2)" }}>
              por <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", textTransform: "none", letterSpacing: 0, color: "var(--ink)", fontSize: 15 }}>Catarina Desterro</span>
            </div>
          </div>
          <div className="mono" style={{ textAlign: "right", fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ink)" }}>Sobre a Desterro →</div>
        </div>

        {/* NAV */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "3px double var(--ink)", fontFamily: "var(--sans)", fontSize: 13, fontWeight: 500 }}>
          <div style={{ display: "flex", gap: 32 }}>
            <span style={{ borderBottom: "2px solid var(--ink)", paddingBottom: 2 }}>Marketing</span>
            <span>Mercado</span><span>Carreira</span><span>Empreendedorismo</span>
            <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>Opinião</span>
          </div>
          <span className="mono" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-2)" }}>Fale comigo →</span>
        </nav>
      </header>

      {/* HERO + RAIL */}
      <section style={{ padding: "28px 40px 0", display: "grid", gridTemplateColumns: "1fr 320px", gap: 32 }}>
        {/* HERO */}
        <article>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
            <span className="kicker">Nome da categoria</span>
            <span className="mono" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-2)" }}>Tempo de leitura</span>
          </div>

          <h1 style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 72, lineHeight: .98, letterSpacing: "-.02em", margin: "0 0 14px" }}>
            Título do artigo<br/>
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>em</span> duas linhas.
          </h1>
          <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 22, lineHeight: 1.35, color: "var(--gray-1)", margin: "0 0 16px", maxWidth: 760 }}>
            Subtítulo do artigo. Texto placeholder em uma ou duas linhas como apoio à manchete.
          </p>

          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
            <span className="byline">por <em>Nome do autor</em></span>
            <span style={{ width: 4, height: 4, background: "var(--gray-3)", borderRadius: "50%" }}></span>
            <span className="byline">Data de publicação</span>
          </div>

          <div className="engraving" style={{ height: 380, position: "relative" }}>
            <div className="eng-label"><span>Imagem editorial</span></div>
            <div className="eng-corner">01</div>

            {/* azul clarinho overlay block */}
            <div style={{
              position: "absolute", left: 32, top: 32, zIndex: 3,
              background: "var(--blue)", color: "var(--ink)",
              padding: "14px 18px", maxWidth: 280,
              fontFamily: "var(--serif)", fontWeight: 600, fontSize: 18, lineHeight: 1.3,
              border: "1px solid var(--ink)"
            }}>
              Pull quote aqui — trecho do artigo em duas ou três linhas.
              <div style={{ marginTop: 10, fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--blue-ink)", fontWeight: 400 }}>Trecho · página</div>
            </div>
          </div>
        </article>

        {/* RIGHT RAIL */}
        <aside style={{ borderLeft: "1px solid var(--gray-4)", paddingLeft: 24 }}>
          <div className="kicker" style={{ marginBottom: 12 }}>Em destaque</div>

          {[1,2,3,4].map((n, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: 12, padding: "14px 0", borderTop: i === 0 ? "1px solid var(--ink)" : "1px solid var(--gray-5)" }}>
              <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, fontSize: 28, lineHeight: 1, color: "var(--gray-3)" }}>{String(n).padStart(2, "0")}</div>
              <div>
                <div className="kicker" style={{ color: "var(--gray-2)", fontSize: 10, marginBottom: 4 }}>Nome da categoria</div>
                <div style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 16, lineHeight: 1.25 }}>Título do artigo em duas linhas.</div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 28 }}>
            <Eng h={180} label="Imagem editorial" corner="—"/>
            <div className="kicker" style={{ marginTop: 12, color: "var(--gray-2)" }}>Nome da categoria</div>
            <div style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 18, lineHeight: 1.2, marginTop: 6 }}>Título do artigo em duas linhas.</div>
          </div>
        </aside>
      </section>

      {/* DIVIDER */}
      <div style={{ padding: "36px 40px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 16 }}>
          <span className="kicker" style={{ fontSize: 12 }}>EDIÇÃO ATUAL</span>
          <hr className="hr" />
          <span className="mono" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-2)" }}>Data de publicação</span>
        </div>
      </div>

      {/* THREE-COLUMN GRID */}
      <section style={{ padding: "24px 40px 0", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28 }}>
        {[1,2,3].map((n, i) => (
          <article key={i}>
            <Eng h={220} corner={String(n+1).padStart(2,"0")} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 14, marginBottom: 8 }}>
              <span className="kicker">Nome da categoria</span>
              <span className="mono" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-3)" }}>Tempo de leitura</span>
            </div>
            <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 26, lineHeight: 1.1, margin: "0 0 10px", letterSpacing: "-.01em" }}>
              Título do artigo em duas ou três linhas.
            </h3>
            <p style={{ fontFamily: "var(--sans)", fontSize: 14, lineHeight: 1.55, color: "var(--gray-1)", margin: 0 }}>
              Trecho do artigo. Texto placeholder de duas a três linhas como descrição.
            </p>
            <div className="byline" style={{ marginTop: 12 }}>por <em>Nome do autor</em> · Data de publicação</div>
          </article>
        ))}
      </section>

      {/* SECONDARY ROW — wide piece with quote tile */}
      <section style={{ padding: "44px 40px 0", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, alignItems: "stretch" }}>
        <article style={{ background: "var(--paper)", padding: 28, position: "relative" }}>
          <div className="kicker" style={{ marginBottom: 12 }}>Opinião</div>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: 44, lineHeight: 1, margin: "0 0 14px", letterSpacing: "-.01em" }}>
            Título do artigo<br />em duas linhas.
          </h2>
          <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 18, lineHeight: 1.4, margin: "0 0 16px", maxWidth: 560 }}>
            Trecho do artigo. Texto placeholder em duas a três linhas para apresentar a coluna.
          </p>
          <div className="byline">por <em>Nome do autor</em> · Data de publicação</div>
          <div style={{ position: "absolute", right: 28, top: 28, fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, fontSize: 110, lineHeight: .8, color: "var(--gray-5)" }}>“</div>
        </article>

        <article>
          <div className="kicker" style={{ marginBottom: 10 }}>Lista</div>
          <div style={{ borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}>
            {[1,2,3,4,5].map((n, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "44px 1fr auto", gap: 12, padding: "12px 0", borderTop: i === 0 ? 0 : "1px solid var(--gray-5)", alignItems: "center" }}>
                <span className="mono" style={{ fontSize: 11, letterSpacing: ".15em", color: "var(--gray-2)" }}>{String(n).padStart(2, "0")}</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.25 }}>Item da lista em uma linha.</span>
                <span className="mono" style={{ fontSize: 10, letterSpacing: ".15em", textTransform: "uppercase", color: "var(--gray-3)" }}>—</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* COLOPHON / FOOTER */}
      <footer style={{ marginTop: 48, background: "var(--ink)", color: "var(--paper)", padding: "36px 40px 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 32, paddingBottom: 24, borderBottom: "1px solid var(--gray-2)" }}>
          <div>
            <div style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 38, letterSpacing: "-.02em", lineHeight: 1 }}>DESTERRO</div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--gray-4)", marginTop: 6 }}>
              um jornal de voz própria
            </div>
            <div className="byline" style={{ color: "var(--gray-4)", marginTop: 18 }}>Catarina Desterro</div>
          </div>
          <div>
            <div className="kicker" style={{ color: "var(--blue)", marginBottom: 10 }}>Editorias</div>
            <div style={{ display: "grid", gap: 6, fontFamily: "var(--sans)", fontSize: 13 }}>
              <span>Marketing</span><span>Mercado</span><span>Carreira</span><span>Empreendedorismo</span><span>Opinião</span>
            </div>
          </div>
          <div>
            <div className="kicker" style={{ color: "var(--blue)", marginBottom: 10 }}>Navegar</div>
            <div style={{ display: "grid", gap: 6, fontFamily: "var(--sans)", fontSize: 13 }}>
              <span>Início</span><span>Todos os textos</span><span>Buscar</span>
            </div>
          </div>
          <div>
            <div className="kicker" style={{ color: "var(--blue)", marginBottom: 10 }}>Catarina</div>
            <div style={{ display: "grid", gap: 6, fontFamily: "var(--sans)", fontSize: 13 }}>
              <span>Sobre Catarina</span><span>Sobre a Desterro</span><span>Fale comigo</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-4)" }}>
          <span>© 2026 desterro · todos os textos por catarina desterro</span>
          <span>Data de acesso</span>
        </div>
      </footer>
    </div>);
};

window.DesktopHome = DesktopHome;
