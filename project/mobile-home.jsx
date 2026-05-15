/* DESTERRO — Mobile homepage */
const MobileHome = () => {
  const W = 390;
  const Eng = ({ h, label = "Imagem editorial" }) => (
    <div className="engraving" style={{ height: h, position: "relative" }}>
      <div className="eng-label"><span style={{ fontSize: 11 }}>{label}</span></div>
    </div>
  );

  return (
    <div style={{ width: W, background: "var(--paper-warm)", color: "var(--ink)", fontFamily: "var(--sans)", border: "1px solid var(--gray-4)" }}>
      {/* status bar */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 22px 6px", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".05em" }}>
        <span>9:41</span>
        <span>● ● ●  ▮▮▮</span>
      </div>

      {/* compact header */}
      <header style={{ padding: "8px 18px 10px", borderBottom: "1px solid var(--ink)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "32px 1fr 32px", alignItems: "center" }}>
          <button aria-label="menu" style={{ background: "transparent", border: 0, padding: 0, cursor: "pointer", display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ width: 22, height: 1.5, background: "var(--ink)" }}></span>
            <span style={{ width: 22, height: 1.5, background: "var(--ink)" }}></span>
            <span style={{ width: 14, height: 1.5, background: "var(--ink)" }}></span>
          </button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 38, lineHeight: .9, letterSpacing: "-.02em" }}>DESTERRO</div>
            <div style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: 9, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gray-2)", marginTop: 4 }}>
              por <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", textTransform: "none", letterSpacing: 0, color: "var(--ink)", fontSize: 11 }}>Catarina Desterro</span>
            </div>
          </div>
          <button aria-label="buscar" style={{ background: "transparent", border: 0, padding: 0, cursor: "pointer", fontFamily: "var(--mono)", fontSize: 16, color: "var(--ink)" }}>⌕</button>
        </div>
      </header>

      {/* date strip */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 18px", background: "var(--ink)", color: "var(--paper)", fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase" }}>
        <span>Data de acesso</span>
        <span>Sobre · Fale comigo</span>
      </div>

      {/* category pill scroller */}
      <div style={{ padding: "14px 18px 4px", display: "flex", gap: 8, overflow: "hidden" }}>
        {["Início", "Marketing", "Mercado", "Carreira", "Empreender", "Opinião"].map((c, i) =>
          <span key={i} style={{
            padding: "6px 12px", border: "1px solid var(--ink)",
            background: i === 0 ? "var(--ink)" : "transparent",
            color: i === 0 ? "var(--paper)" : "var(--ink)",
            fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", textTransform: "uppercase", whiteSpace: "nowrap"
          }}>{c}</span>
        )}
      </div>

      {/* HERO CARD */}
      <article style={{ padding: "20px 18px 0" }}>
        <div className="kicker" style={{ marginBottom: 10 }}>Nome da categoria</div>
        <h1 style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 44, lineHeight: .98, letterSpacing: "-.02em", margin: "0 0 10px" }}>
          Título do <span style={{ fontStyle: "italic", fontWeight: 400 }}>artigo</span> em duas linhas.
        </h1>
        <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 16, lineHeight: 1.35, color: "var(--gray-1)", margin: "0 0 12px" }}>
          Subtítulo do artigo. Trecho de apoio em duas linhas.
        </p>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
          <span className="byline" style={{ fontSize: 11 }}>por <em>Nome do autor</em></span>
          <span style={{ width: 3, height: 3, background: "var(--gray-3)", borderRadius: "50%" }}></span>
          <span className="byline" style={{ fontSize: 11 }}>Data de publicação</span>
        </div>

        <div className="engraving" style={{ height: 220, position: "relative" }}>
          <div className="eng-label"><span style={{ fontSize: 11 }}>Imagem editorial</span></div>
          <div style={{ position: "absolute", left: 14, bottom: 14, background: "var(--blue)", color: "var(--ink)", padding: "10px 12px", maxWidth: 220, fontFamily: "var(--serif)", fontWeight: 600, fontSize: 14, lineHeight: 1.25, border: "1px solid var(--ink)", zIndex: 3 }}>
            Pull quote aqui — trecho do artigo.
          </div>
        </div>

        <div style={{ marginTop: 10, display: "flex", justifyContent: "flex-end" }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: ".15em", textTransform: "uppercase", color: "var(--ink)", borderBottom: "1px solid var(--ink)", paddingBottom: 1 }}>Ler artigo →</span>
        </div>
      </article>

      {/* divider */}
      <div style={{ padding: "28px 18px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 12 }}>
          <span className="kicker" style={{ fontSize: 11 }}>EDIÇÃO ATUAL</span>
          <hr className="hr" />
          <span className="mono" style={{ fontSize: 9, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-2)" }}>Data</span>
        </div>
      </div>

      {/* STACKED CARDS */}
      <section style={{ padding: "16px 18px 0", display: "grid", gap: 22 }}>
        {[1,2,3].map((n, i) => (
          <article key={i}>
            <Eng h={200} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 12, marginBottom: 6 }}>
              <span className="kicker" style={{ fontSize: 10 }}>Nome da categoria</span>
              <span className="mono" style={{ fontSize: 9, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-3)" }}>Tempo de leitura</span>
            </div>
            <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 22, lineHeight: 1.12, margin: "0 0 8px", letterSpacing: "-.01em" }}>
              Título do artigo em duas linhas.
            </h3>
            <p style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.5, color: "var(--gray-1)", margin: 0 }}>
              Trecho do artigo em uma linha de apoio.
            </p>
            <div className="byline" style={{ marginTop: 10, fontSize: 11 }}>por <em>Nome do autor</em> · Data</div>
            {i < 2 && <hr className="hr-thin" style={{ marginTop: 22 }} />}
          </article>
        ))}
      </section>

      {/* OPINIÃO BLOCK */}
      <section style={{ marginTop: 32, background: "var(--paper)", padding: "24px 18px", position: "relative" }}>
        <div className="kicker" style={{ marginBottom: 10 }}>Opinião</div>
        <h2 style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 700, fontSize: 32, lineHeight: 1.02, margin: "0 0 10px", letterSpacing: "-.01em" }}>
          Título do artigo<br />em duas linhas.
        </h2>
        <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 15, lineHeight: 1.4, margin: "0 0 12px" }}>
          Trecho do artigo. Texto placeholder em duas linhas como apoio.
        </p>
        <div className="byline" style={{ fontSize: 11 }}>por <em>Nome do autor</em> · Data de publicação</div>
        <div style={{ position: "absolute", right: 14, top: 8, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 80, lineHeight: .8, color: "var(--gray-5)" }}>“</div>
      </section>

      {/* LIST */}
      <section style={{ padding: "28px 18px 0" }}>
        <div className="kicker" style={{ marginBottom: 10 }}>Lista</div>
        <div style={{ borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}>
          {[1,2,3,4].map((n, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: 8, padding: "10px 0", borderTop: i === 0 ? 0 : "1px solid var(--gray-5)" }}>
              <span className="mono" style={{ fontSize: 10, letterSpacing: ".15em", color: "var(--gray-2)" }}>{String(n).padStart(2, "0")}</span>
              <span style={{ fontFamily: "var(--serif)", fontSize: 15, lineHeight: 1.25 }}>Item da lista em uma linha.</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: 32, background: "var(--ink)", color: "var(--paper)", padding: "24px 18px" }}>
        <div style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 28, letterSpacing: "-.02em" }}>DESTERRO</div>
        <div className="mono" style={{ fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--gray-4)", marginTop: 4 }}>
          um jornal de voz própria
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 18, fontFamily: "var(--sans)", fontSize: 12 }}>
          <span>Marketing</span><span>Mercado</span>
          <span>Carreira</span><span>Empreendedorismo</span>
          <span>Opinião</span><span>Sobre Catarina</span>
          <span>Sobre a Desterro</span><span>Fale comigo</span>
        </div>
        <hr style={{ border: 0, borderTop: "1px solid var(--gray-2)", margin: "20px 0 12px" }} />
        <div className="mono" style={{ fontSize: 9, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-4)", lineHeight: 1.6 }}>
          © 2026 catarina desterro
        </div>
      </footer>

      {/* home indicator */}
      <div style={{ display: "flex", justifyContent: "center", padding: "8px 0 6px", background: "var(--ink)" }}>
        <span style={{ width: 120, height: 4, background: "var(--paper)", borderRadius: 2, opacity: .8 }}></span>
      </div>
    </div>);
};

window.MobileHome = MobileHome;
