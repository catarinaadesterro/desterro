/* DESTERRO — Article page (template) */
const ArticlePage = () => {
  const Eng = ({ h, label = "Imagem editorial", corner }) =>
  <div className="engraving" style={{ height: h, position: "relative" }}>
      <div className="eng-label"><span>{label}</span></div>
      {corner ? <div className="eng-corner">{corner}</div> : null}
    </div>;


  return (
    <div style={{ width: 1280, background: "var(--paper-warm)", color: "var(--ink)", fontFamily: "var(--sans)" }}>
      {/* utility bar */}
      <div style={{ background: "var(--ink)", color: "var(--paper)", display: "flex", justifyContent: "space-between", padding: "8px 40px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase" }}>
        <span>← Voltar para a home</span>
        <span style={{ display: "flex", gap: 28 }}>
          <span>Compartilhar</span><span>Salvar</span><span>Imprimir</span><span>A−  A+</span>
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

      {/* breadcrumb */}
      <div style={{ padding: "16px 40px 0", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center" }}>
        <div className="kicker" style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ background: "var(--blue)", color: "var(--ink)", padding: "4px 10px" }}>● Nome da categoria</span>
          <span className="mono" style={{ fontSize: 10, letterSpacing: ".18em", color: "var(--gray-2)" }}>Publicado · Data de publicação</span>
        </div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-2)" }}>
          Tempo de leitura
        </div>
      </div>

      {/* TITLE BLOCK */}
      <section style={{ padding: "20px 40px 0", maxWidth: 1100 }}>
        <h1 style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 84, lineHeight: .98, letterSpacing: "-.025em", margin: "0 0 18px" }}>
          Título do artigo<br />
          <span style={{ fontStyle: "italic", fontWeight: 500 }}>em</span> até três linhas<br />
          de manchete.
        </h1>
        <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 26, lineHeight: 1.32, color: "var(--gray-1)", margin: "0 0 24px", maxWidth: 880 }}>
          Subtítulo do artigo. Texto placeholder em duas linhas para apoiar a manchete.
        </p>

        <div style={{ display: "flex", gap: 0, alignItems: "stretch", padding: "14px 0", borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}>
          <div style={{ paddingRight: 24, borderRight: "1px solid var(--gray-4)" }}>
            <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 4 }}>Por</div>
            <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 22 }}>Nome do autor</div>
          </div>
          <div style={{ padding: "0 24px", borderRight: "1px solid var(--gray-4)" }}>
            <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 4 }}>Categoria</div>
            <div className="sans" style={{ fontSize: 14, fontWeight: 500 }}>Nome da categoria</div>
          </div>
          <div style={{ padding: "0 24px", borderRight: "1px solid var(--gray-4)" }}>
            <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 4 }}>Publicado</div>
            <div className="sans" style={{ fontSize: 14, fontWeight: 500 }}>Data de publicação</div>
          </div>
          <div style={{ padding: "0 24px" }}>
            <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 4 }}>Leitura</div>
            <div className="sans" style={{ fontSize: 14, fontWeight: 500 }}>Tempo de leitura</div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
            <button style={{ background: "var(--ink)", color: "var(--paper)", border: 0, padding: "8px 14px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", cursor: "pointer" }}>Salvar +</button>
            <button style={{ background: "transparent", color: "var(--ink)", border: "1px solid var(--ink)", padding: "8px 14px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", cursor: "pointer" }}>Compartilhar ↗</button>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section style={{ padding: "24px 40px 0" }}>
        <div className="engraving" style={{ height: 460, position: "relative" }}>
          <div className="eng-label"><span>Imagem editorial</span></div>
          <div className="eng-corner">CAPA</div>
        </div>
        <div className="byline" style={{ marginTop: 8, color: "var(--gray-2)" }}>Descrição da imagem</div>
      </section>

      {/* BODY */}
      <section style={{ padding: "40px 40px 0", display: "grid", gridTemplateColumns: "60px 1fr 280px", gap: 36, alignItems: "start" }}>
        <aside style={{ position: "sticky", top: 20 }}>
          <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 10, writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: ".3em" }}>
            sumário
          </div>
        </aside>

        <article style={{ fontFamily: "var(--serif)", fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)" }}>
          <p style={{ margin: 0 }}>
            <span style={{ float: "left", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 84, lineHeight: .82, paddingRight: 12, paddingTop: 6, color: "var(--ink)" }}>C</span>
            Corpo do artigo. Texto placeholder em duas a quatro linhas para representar o primeiro parágrafo do artigo. Trecho de apoio para mostrar a tipografia, a entrelinha e o ritmo de leitura.
          </p>
          <p>
            Corpo do artigo. Parágrafo placeholder. Texto de apoio em três a cinco linhas para representar o desenvolvimento do raciocínio do artigo, sem conteúdo específico.
          </p>

          {/* INLINE PULL QUOTE — bege */}
          <div style={{ background: "var(--paper)", padding: "24px 28px", margin: "28px 0", borderLeft: "4px solid var(--ink)" }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--gray-2)", marginBottom: 10 }}>Pull quote</div>
            <p style={{ margin: 0, fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 500, fontSize: 28, lineHeight: 1.25, color: "var(--ink)" }}>
              Pull quote aqui. Trecho do artigo em duas ou três linhas, em destaque.
            </p>
          </div>

          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 32, lineHeight: 1.1, margin: "32px 0 14px", letterSpacing: "-.01em" }}>
            Subtítulo da seção.
          </h2>
          <p>
            Corpo do artigo. Parágrafo placeholder em três a cinco linhas. Texto de apoio para representar o desenvolvimento da seção.
          </p>
          <p>
            Corpo do artigo. Parágrafo placeholder em três a cinco linhas. Texto de apoio para representar o desenvolvimento da seção.
          </p>

          {/* AZUL pull quote */}
          <div style={{ background: "var(--blue)", color: "var(--ink)", padding: "28px 28px", margin: "28px 0", border: "1px solid var(--ink)" }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--blue-ink)", marginBottom: 8 }}>Pull quote</div>
            <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 700, fontSize: 30, lineHeight: 1.18, letterSpacing: "-.005em" }}>
              Pull quote em destaque. Trecho do artigo em duas ou três linhas.
            </p>
          </div>

          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 32, lineHeight: 1.1, margin: "32px 0 14px", letterSpacing: "-.01em" }}>
            Subtítulo da seção.
          </h2>
          <p>
            Corpo do artigo. Parágrafo placeholder em três a cinco linhas. Texto de apoio para representar o desenvolvimento da seção.
          </p>

          <ol style={{ paddingLeft: 22, margin: "12px 0 24px" }}>
            {[1, 2, 3, 4, 5].map((n) =>
            <li key={n} style={{ marginBottom: 8 }}>Item da lista. Texto placeholder em uma ou duas linhas.</li>
            )}
          </ol>
        </article>

        {/* RIGHT RAIL */}
        <aside style={{ position: "sticky", top: 20 }}>
          <div style={{ border: "1px solid var(--ink)", padding: 18, marginBottom: 20 }}>
            <div className="kicker" style={{ marginBottom: 8 }}>Sumário</div>
            {[1, 2, 3, 4, 5].map((n, i) =>
            <div key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 8, padding: "8px 0", borderTop: i === 0 ? 0 : "1px solid var(--gray-5)", alignItems: "baseline" }}>
                <span className="mono" style={{ fontSize: 10, letterSpacing: ".15em", color: i === 0 ? "var(--ink)" : "var(--gray-3)" }}>{String(n).padStart(2, "0")}</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 14, lineHeight: 1.3, color: i === 0 ? "var(--ink)" : "var(--gray-2)", fontWeight: i === 0 ? 600 : 400 }}>Subtítulo da seção.</span>
              </div>
            )}
          </div>

          <div style={{ background: "var(--paper)", padding: 18, marginBottom: 20 }}>
            <div className="kicker" style={{ marginBottom: 8 }}>Sobre o autor</div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div className="engraving" style={{ width: 64, height: 80, flex: "0 0 64px" }}>
                <div className="eng-label"><span style={{ fontSize: 9 }}>Foto</span></div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 16, lineHeight: 1.2 }}>Nome do autor</div>
                <div className="byline" style={{ marginTop: 4, lineHeight: 1.4 }}>Descrição. Bio em duas a três linhas.</div>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* full-bleed quote */}
      <section style={{ padding: "48px 40px 0" }}>
        <div style={{ background: "var(--ink)", color: "var(--paper)", padding: "56px 48px", display: "grid", gridTemplateColumns: "auto 1fr", gap: 36, alignItems: "center" }}>
          <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 180, lineHeight: .7, color: "var(--blue)" }}>“</div>
          <div>
            <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 500, fontSize: 38, lineHeight: 1.18, letterSpacing: "-.01em" }}>
              Pull quote aqui. Trecho do artigo em duas ou três linhas em destaque.
            </p>
            <div className="byline" style={{ marginTop: 16, color: "var(--gray-4)" }}>— Pull quote</div>
          </div>
        </div>
      </section>

      {/* LEIA TAMBÉM */}
      <section style={{ padding: "56px 40px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <span className="kicker" style={{ fontSize: 12 }}>Leia também</span>
          <hr className="hr" />
          <span className="mono" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-2)" }}>3 textos relacionados</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {[1, 2, 3].map((n, i) =>
          <article key={i}>
              <Eng h={180} corner={String(n).padStart(2, "0")} />
              <div className="kicker" style={{ marginTop: 12, marginBottom: 6 }}>Nome da categoria</div>
              <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 22, lineHeight: 1.15, margin: "0 0 8px", letterSpacing: "-.01em" }}>Título do artigo em duas linhas.</h3>
              <p style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.55, color: "var(--gray-1)", margin: 0 }}>Trecho do artigo. Texto placeholder em uma linha.</p>
              <div className="byline" style={{ marginTop: 10 }}>por <em>Nome do autor</em></div>
            </article>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: 48, padding: "24px 40px", background: "var(--ink)", color: "var(--paper)", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase" }}>
        <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", letterSpacing: 0, textTransform: "none", fontSize: 14, color: "var(--paper)" }}>desterro · um jornal de voz própria</span>
        <span>© 2026 catarina desterro</span>
      </footer>
    </div>);
};

window.ArticlePage = ArticlePage;