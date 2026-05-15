/* DESTERRO — Página de Editoria / Categoria */
const CategoriaPage = () => {
  const Eng = ({ h, label = "Imagem editorial", corner }) => (
    <div className="engraving" style={{ height: h, position: "relative" }}>
      <div className="eng-label"><span>{label}</span></div>
      {corner ? <div className="eng-corner">{corner}</div> : null}
    </div>
  );

  return (
    <div style={{ width: 1280, background: "var(--paper-warm)", color: "var(--ink)", fontFamily: "var(--sans)" }}>
      {/* utility */}
      <div style={{ background: "var(--ink)", color: "var(--paper)", display: "flex", justifyContent: "space-between", padding: "8px 40px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase" }}>
        <span>Data de acesso</span>
        <span style={{ display: "flex", gap: 28 }}>
          <span>Sobre Catarina</span><span>Fale comigo</span><span>Buscar  ⌕</span>
        </span>
      </div>

      {/* masthead */}
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
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "3px double var(--ink)", fontFamily: "var(--sans)", fontSize: 13, fontWeight: 500 }}>
          <div style={{ display: "flex", gap: 32 }}>
            <span style={{ borderBottom: "2px solid var(--ink)", paddingBottom: 2 }}>Marketing</span>
            <span>Mercado</span><span>Carreira</span><span>Empreendedorismo</span>
            <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>Opinião</span>
          </div>
          <span className="mono" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-2)" }}>Fale comigo →</span>
        </nav>
      </header>

      {/* CATEGORY HEADER */}
      <section style={{ padding: "60px 40px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>EDITORIA · 01 / 05</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 60, alignItems: "end" }}>
          <h1 style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 168, lineHeight: .88, letterSpacing: "-.035em", margin: 0 }}>
            Nome da<br/>
            <span style={{ fontStyle: "italic", fontWeight: 500 }}>categoria.</span>
          </h1>
          <div>
            <div className="kicker" style={{ marginBottom: 10 }}>Descrição da editoria</div>
            <p style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 19, lineHeight: 1.5, color: "var(--gray-1)", margin: 0 }}>
              Texto placeholder. Descrição da editoria em duas ou três linhas para situar o leitor sobre o recorte e o ponto de vista da seção.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 40, paddingTop: 14, borderTop: "1px solid var(--ink)", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--gray-2)" }}>
          <span>Total de textos · 00</span>
          <div style={{ display: "flex", gap: 18 }}>
            <span style={{ color: "var(--ink)", borderBottom: "2px solid var(--ink)", paddingBottom: 2 }}>Mais recentes</span>
            <span>Mais lidos</span>
            <span>Por data</span>
          </div>
          <span>Filtrar ⌕</span>
        </div>
      </section>

      {/* LEAD ITEM — full bleed style */}
      <section style={{ padding: "44px 40px 0", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 44, alignItems: "start" }}>
        <Eng h={520} corner="01" />
        <div style={{ paddingTop: 8 }}>
          <div className="kicker" style={{ marginBottom: 12 }}>Nome da categoria</div>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 64, lineHeight: .98, letterSpacing: "-.02em", margin: "0 0 18px" }}>
            Título do<br/>artigo<span style={{ fontStyle: "italic", fontWeight: 500 }}>.</span>
          </h2>
          <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 22, lineHeight: 1.4, color: "var(--gray-1)", margin: "0 0 24px", maxWidth: 540 }}>
            Trecho do artigo. Subtítulo placeholder em duas linhas, em peso leve, para descansar a manchete.
          </p>
          <div style={{ display: "flex", gap: 14, alignItems: "center", paddingTop: 16, borderTop: "1px solid var(--ink)", fontFamily: "var(--sans)", fontSize: 13 }}>
            <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>Nome do autor</span>
            <span style={{ width: 4, height: 4, background: "var(--gray-3)", borderRadius: "50%" }}></span>
            <span style={{ color: "var(--gray-2)" }}>Data de publicação</span>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ padding: "72px 40px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 16 }}>
          <span className="kicker" style={{ fontSize: 12 }}>ARQUIVO DA EDITORIA</span>
          <hr className="hr" />
          <span className="mono" style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--gray-2)" }}>02 — 07</span>
        </div>
      </div>

      {/* GRID — 3 cols */}
      <section style={{ padding: "28px 40px 0", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
        {[2,3,4].map(n => (
          <article key={n}>
            <Eng h={260} corner={String(n).padStart(2,"0")} />
            <div className="kicker" style={{ marginTop: 16, marginBottom: 8, color: "var(--gray-2)" }}>Nome da categoria</div>
            <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 26, lineHeight: 1.12, margin: "0 0 12px", letterSpacing: "-.005em" }}>
              Título do artigo em duas ou três linhas.
            </h3>
            <p style={{ fontFamily: "var(--sans)", fontSize: 14, lineHeight: 1.55, color: "var(--gray-1)", margin: "0 0 14px" }}>
              Trecho do artigo. Texto placeholder de duas a três linhas para apresentar o conteúdo.
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 10, borderTop: "1px solid var(--gray-5)", fontFamily: "var(--sans)", fontSize: 12, color: "var(--gray-2)" }}>
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--ink)" }}>Nome do autor</span>
              <span>Data de publicação</span>
            </div>
          </article>
        ))}
      </section>

      {/* HORIZONTAL LIST — list view */}
      <section style={{ padding: "60px 40px 0" }}>
        <div className="kicker" style={{ marginBottom: 16 }}>Continuar lendo</div>
        <div style={{ borderTop: "1px solid var(--ink)" }}>
          {[5,6,7].map(n => (
            <article key={n} style={{ display: "grid", gridTemplateColumns: "70px 200px 1fr 200px", gap: 28, padding: "22px 0", borderBottom: "1px solid var(--gray-5)", alignItems: "center" }}>
              <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, fontSize: 42, lineHeight: 1, color: "var(--gray-3)" }}>{String(n).padStart(2,"0")}</div>
              <Eng h={120} label="Imagem" />
              <div>
                <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 6, fontSize: 10 }}>Nome da categoria</div>
                <h4 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 24, lineHeight: 1.15, margin: "0 0 6px", letterSpacing: "-.005em" }}>Título do artigo em uma linha.</h4>
                <p style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.5, color: "var(--gray-1)", margin: 0, maxWidth: 520 }}>Trecho do artigo em uma linha de apoio.</p>
              </div>
              <div style={{ textAlign: "right", fontFamily: "var(--sans)", fontSize: 12, color: "var(--gray-2)" }}>
                <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--ink)", fontSize: 14, marginBottom: 4 }}>Nome do autor</div>
                <div>Data de publicação</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PAGINATION */}
      <section style={{ padding: "44px 40px 0", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--gray-2)" }}>
        <span>← Página anterior</span>
        <span>página 01 · 0X</span>
        <span style={{ color: "var(--ink)" }}>Próxima página →</span>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: 56, padding: "24px 40px", background: "var(--ink)", color: "var(--paper)", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase" }}>
        <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", letterSpacing: 0, textTransform: "none", fontSize: 14, color: "var(--paper)" }}>desterro · um jornal de voz própria</span>
        <span>© 2026 catarina desterro</span>
      </footer>
    </div>
  );
};

window.CategoriaPage = CategoriaPage;
