/* DESTERRO — Artigo "Marketing não é Deus" */
const ArtigoMarketing = () => {
  return (
    <div style={{
      width: 1280,
      background: "var(--paper-warm)",
      color: "var(--ink)",
      fontFamily: "var(--sans)"
    }}>
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
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}></span>
        </nav>
        <div className="mono" style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--gray-2)" }}>04.05.2026</div>
      </header>

      {/* category strip */}
      <div style={{ padding: "16px 40px 0", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center" }}>
        <div className="kicker" style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ background: "var(--blue)", color: "var(--ink)", padding: "4px 10px" }}>● Marketing</span>
          <span className="mono" style={{ fontSize: 10, letterSpacing: ".18em", color: "var(--gray-2)" }}>· PUBLICADO 04 MAI 2026</span>
        </div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-2)" }}>
          Leitura · 9 min
        </div>
      </div>

      {/* TITLE BLOCK */}
      <section style={{ padding: "20px 40px 0", maxWidth: 1100 }}>
        <h1 style={{
          fontFamily: "var(--serif)", fontWeight: 800,
          fontSize: 96, lineHeight: .96, letterSpacing: "-.025em",
          margin: "0 0 18px"
        }}>
          Marketing <span style={{ fontStyle: "italic", fontWeight: 500 }}>não</span><br />
          é Deus.
        </h1>
        <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 26, lineHeight: 1.32, color: "var(--gray-1)", margin: "0 0 24px", maxWidth: 880 }}>Quando o produto não vende, a culpa nunca é do produto, é da campanha. Um manifesto sobre a parte que ninguém quer assumir.

        </p>

        <div style={{ display: "flex", gap: 0, alignItems: "stretch", padding: "14px 0", borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}>
          <div style={{ paddingRight: 24, borderRight: "1px solid var(--gray-4)" }}>
            <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 4 }}>Por</div>
            <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 22 }}>Catarina Desterro</div>
          </div>
          <div style={{ padding: "0 24px", borderRight: "1px solid var(--gray-4)" }}>
            <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 4 }}>CATEGORIA</div>
            <div className="sans" style={{ fontSize: 14, fontWeight: 500 }}>Marketing </div>
          </div>
          <div style={{ padding: "0 24px", borderRight: "1px solid var(--gray-4)" }}>
            <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 4 }}>Publicado</div>
            <div className="sans" style={{ fontSize: 14, fontWeight: 500 }}>04 mai 2026</div>
          </div>
          <div style={{ padding: "0 24px" }}>
            <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 4 }}>Tópicos</div>
            <div className="sans" style={{ fontSize: 14, fontWeight: 500 }}>Cultura corporativa · Estratégia</div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
            <button style={{ background: "var(--ink)", color: "var(--paper)", border: 0, padding: "8px 14px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", cursor: "pointer" }}>Salvar +</button>
            <button style={{ background: "transparent", color: "var(--ink)", border: "1px solid var(--ink)", padding: "8px 14px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", cursor: "pointer" }}>Compartilhar ↗</button>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section style={{ padding: "24px 40px 0" }}>
        <div style={{ height: 460, position: "relative", background: "#efe8d6", border: "1px solid var(--ink)", overflow: "hidden" }}>
          <img src="assets/ultima-ceia-marketing.png" alt="Última ceia do marketing — ilustração" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />

          <div style={{ position: "absolute", left: 32, bottom: 32, background: "var(--blue)", color: "var(--ink)", padding: "16px 20px", maxWidth: 340 }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--blue-ink)", marginBottom: 6 }}>Tese</div>
            <div style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 18, lineHeight: 1.25 }}>
              Marketing potencializa, encanta, acelera, amplifica. Mas não ressuscita o que desmorona no primeiro contato real.
            </div>
          </div>

          <div style={{ position: "absolute", right: 0, top: 0, background: "var(--paper)", color: "var(--ink)", padding: "8px 14px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", borderLeft: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}>
            ▮ Capa · Marketing
          </div>
        </div>
      </section>

      {/* BODY */}
      <section style={{ padding: "40px 40px 0", display: "grid", gridTemplateColumns: "60px 1fr 280px", gap: 36, alignItems: "start" }}>
        <aside style={{ position: "sticky", top: 20 }}>
          <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 10, writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: ".3em" }}>
            ensaio · marketing
          </div>
        </aside>

        <article style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.7, color: "var(--ink-2)" }}>
          <p style={{ margin: 0 }}>
            <span style={{ float: "left", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 86, lineHeight: .82, paddingRight: 12, paddingTop: 6, color: "var(--ink)" }}>E</span>
            xiste uma espécie de crença coletiva dentro das empresas de que o marketing funciona como uma entidade sobrenatural especializada em ressuscitar negócios mal administrados.
          </p>
          <p>
            A empresa não sabe quem ela é, o que vende, para quem vende, por quanto vende… Mas claramente o problema está na divulgação.
          </p>
          <p>
            Em algum momento, o marketing deixou de ser uma área estratégica para ser o corpo de bombeiros oficial de incêndios que ele mesmo não causou.
          </p>
          <p>
            Não estou dizendo que o marketing não erre. Erra. Uma copy ruim, campanhas mal estruturadas, funis bagunçados e uma comunicação inconsistente conseguem prejudicar qualquer resultado. Mas, curiosamente, quase nunca questionam se o atendimento demora demais, se o comercial simplesmente não responde, se a operação entrega errado ou se a empresa inteira parece não saber exatamente o que está fazendo.
          </p>

          <div style={{ background: "var(--paper)", padding: "24px 28px", margin: "28px 0", borderLeft: "4px solid var(--ink)" }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--gray-2)", marginBottom: 10 }}>A pergunta</div>
            <p style={{ margin: 0, fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 500, fontSize: 28, lineHeight: 1.25, color: "var(--ink)" }}>
              “E se o problema não estiver no topo do funil? Ou pior: e se estiver no próprio produto?”
            </p>
          </div>

          <p>
            Culpar o marketing é mais fácil. Afinal, existe uma pergunta que quase ninguém gosta de fazer.
          </p>
          <p>
            Talvez essa seja uma das coisas mais irritantes sobre trabalhar com comunicação: esperam que você transforme o caos operacional em percepção de valor. Como se um tráfego pago bem segmentado tivesse a capacidade mística de compensar um produto medíocre e uma empresa internamente desorganizada. Como se lead qualificado compensasse uma experiência ruim depois da conversão. Ou como se um novo branding com uma nova identidade visual “minimalista e elegante” fosse esconder o chiqueiro operacional por trás dela.
          </p>
          <p>
            Não estou dizendo também que o marketing não cria valor. O marketing cria valor, sim. Cria percepção, desejo, posicionamento, reconhecimento e significado. Ademais, marcas também são construídas pelo modo como se comunicam. Negar isso seria idiotice.
          </p>

          <div style={{ background: "var(--blue)", color: "var(--ink)", padding: "28px 28px", margin: "28px 0" }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--blue-ink)", marginBottom: 8 }}>Destaque</div>
            <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 700, fontSize: 30, lineHeight: 1.18, letterSpacing: "-.005em" }}>
              Mas existe uma diferença entre construir valor e tentar sustentar sozinho um valor que nunca existiu na prática.
            </p>
          </div>

          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 32, lineHeight: 1.1, margin: "32px 0 14px", letterSpacing: "-.01em" }}>
            Marketing não funciona isolado.
          </h2>
          <p>
            Porque uma empresa minimamente estruturada entende que marketing não funciona isolado. Ele depende do produto, do atendimento, da operação, do comercial, da cultura, da gestão, e de diversas outras áreas. Depende, inclusive, da capacidade da empresa de cumprir aquilo que promete.
          </p>
          <p>
            No entanto, o problema é que boa parte das empresas não quer exatamente construir algo consistente. Quer faturar rápido. Quer crescer rápido. Quer parecer relevante rápido.
          </p>
          <p>
            E, sinceramente, eu até entendo a pressa. São dias sombrios. Viver custa caro. Basta acompanhar os jornais ou até mesmo o seu TikTok para saber que todo mundo parece estar permanentemente a quinze minutos de um colapso financeiro e mental.
          </p>
          <p>
            Mas a urgência pelo dinheiro começou a substituir a necessidade de construir algo minimamente sólido. Então, surge a lógica corporativa mais comum dos últimos anos:
          </p>

          <p style={{
            fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 500,
            fontSize: 30, lineHeight: 1.25, textAlign: "center",
            margin: "28px 0", color: "var(--ink)",
            borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)",
            padding: "20px 0"
          }}>
            primeiro vende e depois descobre como entrega.
          </p>

          <p>
            E no meio desse circo, o marketing entra quase como o maquiador, em uma tentativa desesperada de, pelo menos à distância, fazer com que tudo pareça ser real.
          </p>
          <p>
            Porque construir algo realmente bom demora. Exige investimento, organização, visão de longo prazo e, pior ainda, exige aceitar que talvez o problema esteja mais perto de você do que do outro. E talvez seja exatamente por isso que tanta empresa trate o marketing como divindade: porque admitir falhas estruturais exige muito mais trabalho do que simplesmente pedir por <em>“mais divulgação”</em>.
          </p>

          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: 40, lineHeight: 1.05, margin: "40px 0 14px", letterSpacing: "-.01em" }}>
            Só que marketing não é Deus.
          </h2>
          <p>
            Não ressuscita empresas falidas conceitualmente, e definitivamente não multiplica valor onde ele não existe.
          </p>
          <p style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 22, lineHeight: 1.4 }}>
            Marketing potencializa, encanta, acelera, amplifica.
          </p>
          <p>
            Mas nenhuma estratégia é capaz de sustentar, por muito tempo, aquilo que desmorona no primeiro contato real com o cliente.
          </p>

          <div className="byline" style={{ marginTop: 32, paddingTop: 16, borderTop: "1px solid var(--gray-4)", color: "var(--gray-2)" }}>
            — Catarina Desterro, 04 de maio de 2026.
          </div>
        </article>

        {/* RIGHT RAIL */}
        <aside style={{ position: "sticky", top: 20 }}>
          <div style={{ background: "var(--paper)", padding: 18, marginBottom: 20 }}>
            <div className="kicker" style={{ marginBottom: 8 }}>Sobre a autora</div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <img src="assets/catarina.jpeg" alt="Catarina Desterro" style={{ width: 72, height: 88, flex: "0 0 72px", objectFit: "cover", filter: "grayscale(1) contrast(1.08)", border: "1px solid var(--ink)" }} />
              <div>
                <div style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 16, lineHeight: 1.2 }}>Catarina Desterro</div>
                <div className="byline" style={{ marginTop: 4, lineHeight: 1.4 }}>23 anos. Marketing, estratégia, conteúdo e SEO. Escreve sobre o que ninguém tem coragem de falar.</div>
              </div>
            </div>
          </div>

          <div style={{ border: "1px solid var(--ink)", padding: 18, marginBottom: 20 }}>
            <div className="kicker" style={{ marginBottom: 10 }}>Trechos do texto</div>
            {[
            "“Corpo de bombeiros oficial de incêndios que ele mesmo não causou.”",
            "“Esperam que você transforme caos operacional em percepção de valor.”",
            "“Primeiro vende e depois descobre como entrega.”"].
            map((t, i) =>
            <div key={i} style={{ padding: "10px 0", borderTop: i === 0 ? 0 : "1px solid var(--gray-5)", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14, lineHeight: 1.35, color: "var(--gray-1)" }}>
                {t}
              </div>
            )}
          </div>

        </aside>
      </section>

      {/* FULL-BLEED CLOSING QUOTE */}
      <section style={{ padding: "56px 40px 0" }}>
        <div style={{ background: "var(--ink)", color: "var(--paper)", padding: "56px 48px", display: "grid", gridTemplateColumns: "auto 1fr", gap: 36, alignItems: "center" }}>
          <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 180, lineHeight: .7, color: "var(--blue)" }}>“</div>
          <div>
            <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 500, fontSize: 38, lineHeight: 1.18, letterSpacing: "-.01em" }}>
              Nenhuma estratégia é capaz de sustentar, por muito tempo,<br />
              aquilo que <em>desmorona</em> no primeiro contato real com o cliente.
            </p>
            <div className="byline" style={{ marginTop: 16, color: "var(--gray-4)" }}>— pull quote · final</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: 56, padding: "24px 40px", background: "var(--ink)", color: "var(--paper)", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase" }}>
        <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", letterSpacing: 0, textTransform: "none", fontSize: 14, color: "var(--paper)" }}>desterro · um jornal de voz própria</span>
        <span>© 2026 catarina desterro</span>
      </footer>
    </div>);

};

window.ArtigoMarketing = ArtigoMarketing;