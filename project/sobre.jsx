/* DESTERRO — Sobre Catarina */
const SobrePage = () => {
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
          <span>Sobre Catarina</span><span>Contato</span><span>Buscar  ⌕</span>
        </span>
      </div>

      {/* mini masthead */}
      <header style={{ padding: "20px 40px 14px", borderBottom: "3px double var(--ink)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 38, letterSpacing: "-.02em", lineHeight: 1 }}>DESTERRO</div>
        <nav style={{ display: "flex", gap: 28, fontFamily: "var(--sans)", fontSize: 13 }}>
          <span>Marketing</span><span>Mercado</span><span>Carreira</span><span>Empreendedorismo</span>
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>Opinião</span>
        </nav>
        <div className="mono" style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--gray-2)" }}>04.05.2026</div>
      </header>

      {/* CATEGORY STRIP */}
      <div style={{ padding: "16px 40px 0", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center" }}>
        <div className="kicker" style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ background: "var(--blue)", color: "var(--ink)", padding: "4px 10px" }}>● Sobre</span>
          <span className="mono" style={{ fontSize: 10, letterSpacing: ".18em", color: "var(--gray-2)" }}>uma apresentação · sem pressa</span>
        </div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-2)" }}>
          Leitura · 4 min
        </div>
      </div>

      {/* TITLE BLOCK */}
      <section style={{ padding: "20px 40px 0", maxWidth: 1100 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>QUEM ESCREVE</div>
        <h1 style={{
          fontFamily: "var(--serif)", fontWeight: 800,
          fontSize: 96, lineHeight: .95, letterSpacing: "-.025em",
          margin: "0 0 18px"
        }}>
          Catarina<br />
          <span style={{ fontStyle: "italic", fontWeight: 500 }}>Desterro.</span>
        </h1>
        <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 26, lineHeight: 1.32, color: "var(--gray-1)", margin: "0 0 24px", maxWidth: 880 }}>23 anos. Brasiliense de nascimento, maranhense de sangue, paulistana por orientação profissional. Trabalho com marketing, escrevo o que sobra disso.

        </p>
      </section>

      {/* PHOTO + INTRO TWO-COL */}
      <section style={{ padding: "32px 40px 0", display: "grid", gridTemplateColumns: "520px 1fr", gap: 40, alignItems: "start" }}>
        {/* photo */}
        <div>
          <div style={{ position: "relative" }}>
            <img
              src="assets/catarina.jpeg"
              alt="Catarina Desterro"
              style={{
                width: "100%",
                height: 640,
                objectFit: "cover",
                display: "block",
                filter: "grayscale(1) contrast(1.05)"
              }} />
            
            {/* grain overlay */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              backgroundImage:
              "radial-gradient(rgba(255,255,255,.06) 1px, transparent 1.4px), radial-gradient(rgba(0,0,0,.18) 1px, transparent 1.4px)",
              backgroundSize: "3px 3px, 5px 5px",
              backgroundPosition: "0 0, 1px 2px",
              mixBlendMode: "overlay"
            }}></div>

            {/* caption tile */}
            <div style={{
              position: "absolute", left: 20, bottom: 20,
              background: "var(--paper)", color: "var(--ink)",
              padding: "10px 14px",
              fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase",
              border: "1px solid var(--ink)"
            }}>
              ▮ Catarina · São Paulo, 2026
            </div>

            {/* azul tile top-right */}
            <div style={{
              position: "absolute", right: 0, top: 0,
              background: "var(--blue)", color: "var(--ink)",
              padding: "8px 14px",
              fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase"
            }}>
              Foto pessoal
            </div>
          </div>
          <div className="byline" style={{ marginTop: 8, color: "var(--gray-2)" }}>
            Arquivo pessoal · São Paulo, abril de 2026.
          </div>

          {/* SOCIAL LINKS BLOCK */}
          <div style={{ marginTop: 28, border: "1px solid var(--ink)" }}>
            <div style={{ background: "var(--ink)", color: "var(--paper)", padding: "10px 16px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase" }}>
              Onde me encontrar
            </div>
            {[
            ["Instagram", "@catarinaadesterro", "↗"],
            ["LinkedIn", "in/catarina-desterro", "↗"],
            ["E-mail", "catarinabaima123@gmail.com", "→"]].
            map((row, i) =>
            <a key={i} href="#" style={{
              display: "grid", gridTemplateColumns: "120px 1fr auto",
              gap: 14, alignItems: "center",
              padding: "14px 16px",
              borderTop: "1px solid var(--gray-5)",
              textDecoration: "none", color: "var(--ink)",
              background: "var(--paper-warm)"
            }}>
                <span className="kicker">{row[0]}</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 17 }}>{row[1]}</span>
                <span className="mono" style={{ fontSize: 14 }}>{row[2]}</span>
              </a>
            )}
          </div>
        </div>

        {/* TEXT BODY */}
        <article style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.65, color: "var(--ink-2)" }}>
          <p style={{ margin: "0 0 18px" }}>
            <span style={{ float: "left", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 86, lineHeight: .82, paddingRight: 12, paddingTop: 6, color: "var(--ink)" }}>M</span>
            eu nome é Catarina Desterro. Nasci em Brasília (DF) e fui criada em São Luís do Maranhão durante quase toda a minha vida. O que, por si só, já explica boa parte do meu deboche.
          </p>
          <p style={{ margin: "0 0 18px" }}>
            Em 2021, me mudei para São Paulo para cursar Publicidade e Propaganda na ESPM. Vou poupar você dos detalhes sobre os desafios por aqui. Qualquer pessoa minimamente lúcida entende que São Paulo funciona mais como um teste de resistência do que como uma cidade de fato, apesar de que, hoje, eu até gosto desse caos.
          </p>
          <p style={{ margin: "0 0 18px" }}>Mas piadas à parte, ou não, porque aqui isso não é exatamente uma regra, criei este espaço como uma espécie de jornal pessoal. Um lugar para organizar ideias, provocar reflexões e, principalmente, não deixar que meu cérebro se desintegre ou terceirize a própria função de pensar para a inteligência artificial. Se isso também servir como incentivo para quem estiver lendo, melhor ainda.

          </p>

          {/* AZUL pull quote */}
          <div style={{ background: "var(--blue)", color: "var(--ink)", padding: "24px 26px", margin: "24px 0" }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--blue-ink)", marginBottom: 8 }}>Manifesto curto</div>
            <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 600, fontSize: 26, lineHeight: 1.2, letterSpacing: "-.005em" }}>
              Não deixar que meu cérebro<br />
              terceirize a própria função<br />
              de pensar.
            </p>
          </div>

          <p style={{ margin: "0 0 18px" }}>Aqui, escrevo sobre marketing, mas não só isso. Falo sobre comportamento, cultura, tendências, mercado e tudo aquilo que, de alguma forma, atravessa a comunicação.
E, em alguns momentos, simplesmente escrevo porque quero.
          </p>
          <p style={{ margin: "0 0 18px" }}>
            Hoje, trabalho com marketing, transitando entre estratégia, conteúdo e SEO, tentando entender não só o que as pessoas consomem, mas <em>porquê</em>, e o que isso diz sobre o mundo que a gente está construindo, ou aceitando.
          </p>
          <p style={{ margin: "0 0 18px" }}>
            Se você chegou até aqui, talvez esteja procurando conteúdo. Talvez esteja procurando respostas. Ou talvez só esteja passando o tempo.
          </p>

          {/* BEGE pull quote — closing */}
          <div style={{ background: "var(--paper)", padding: "24px 28px", margin: "24px 0", borderLeft: "4px solid var(--ink)" }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--gray-2)", marginBottom: 8 }}>Aviso</div>
            <p style={{ margin: 0, fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 500, fontSize: 26, lineHeight: 1.25 }}>
              De qualquer forma, fica o aviso: se tudo fizer sentido de primeira, provavelmente eu fiz errado.
            </p>
          </div>

          {/* FACT STRIP */}
          <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}>
            {[
            ["Idade", "23"],
            ["Origem", "Brasília → SLZ → SP"],
            ["Formação", "Publicidade · ESPM"],
            ["Hoje", "Marketing · SEO"]].
            map((f, i) =>
            <div key={i} style={{ padding: "14px 16px", borderRight: i < 3 ? "1px solid var(--gray-4)" : 0 }}>
                <div className="kicker" style={{ color: "var(--gray-2)", marginBottom: 4, fontSize: 10 }}>{f[0]}</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 17, fontWeight: 500 }}>{f[1]}</div>
              </div>
            )}
          </div>
        </article>
      </section>

      {/* CONTACT FORM */}
      <section style={{ padding: "72px 40px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <span className="kicker" style={{ fontSize: 12 }}>FALE COMIGO</span>
          <hr className="hr" />
          <span className="mono" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-2)" }}>respostas em até 3 dias úteis</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 40, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: 48, lineHeight: 1, margin: "0 0 16px", letterSpacing: "-.01em" }}>
              Manda uma<br />mensagem.
            </h2>
            <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 18, lineHeight: 1.45, color: "var(--gray-1)", margin: "0 0 16px", maxWidth: 420 }}>Pra falar de pauta, parceria, um trabalho, ou só pra discordar, a caixa abaixo chega no meu e-mail. Sem formulário enrolado, sem auto-resposta.

            </p>
            <div className="byline" style={{ color: "var(--gray-2)" }}>
              Prefere e-mail direto? <em>catarinabaima123@gmail.com</em>
            </div>
          </div>

          <form style={{ border: "1px solid var(--ink)", background: "var(--paper)", padding: 24 }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <label style={{ display: "block" }}>
                <div className="kicker" style={{ marginBottom: 6, fontSize: 10 }}>Seu nome</div>
                <input type="text" placeholder="como devo te chamar" style={{
                  width: "100%", border: 0, borderBottom: "1px solid var(--ink)",
                  background: "transparent", padding: "8px 0",
                  fontFamily: "var(--serif)", fontSize: 16, outline: "none", color: "var(--ink)"
                }} />
              </label>
              <label style={{ display: "block" }}>
                <div className="kicker" style={{ marginBottom: 6, fontSize: 10 }}>Seu e-mail</div>
                <input type="email" placeholder="seu@email.com" style={{
                  width: "100%", border: 0, borderBottom: "1px solid var(--ink)",
                  background: "transparent", padding: "8px 0",
                  fontFamily: "var(--serif)", fontSize: 16, outline: "none", color: "var(--ink)"
                }} />
              </label>
            </div>
            <label style={{ display: "block", marginBottom: 14 }}>
              <div className="kicker" style={{ marginBottom: 6, fontSize: 10 }}>Assunto</div>
              <input type="text" placeholder="sobre o que é" style={{
                width: "100%", border: 0, borderBottom: "1px solid var(--ink)",
                background: "transparent", padding: "8px 0",
                fontFamily: "var(--serif)", fontSize: 16, outline: "none", color: "var(--ink)"
              }} />
            </label>
            <label style={{ display: "block", marginBottom: 18 }}>
              <div className="kicker" style={{ marginBottom: 6, fontSize: 10 }}>Mensagem</div>
              <textarea rows={5} placeholder="escreva sem pressa." style={{
                width: "100%", border: "1px solid var(--ink)",
                background: "var(--paper-warm)", padding: "12px 14px",
                fontFamily: "var(--serif)", fontSize: 16, outline: "none", color: "var(--ink)",
                resize: "vertical", lineHeight: 1.5
              }} />
            </label>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="mono" style={{ fontSize: 9, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gray-2)" }}>
                ▮ vai direto pro meu e-mail
              </span>
              <button type="submit" style={{
                background: "var(--ink)", color: "var(--paper)", border: 0,
                padding: "12px 22px", fontFamily: "var(--mono)", fontSize: 11,
                letterSpacing: ".22em", textTransform: "uppercase", cursor: "pointer"
              }}>Enviar →</button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER mini */}
      <footer style={{ marginTop: 64, padding: "24px 40px", background: "var(--ink)", color: "var(--paper)", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase" }}>
        <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", letterSpacing: 0, textTransform: "none", fontSize: 14, color: "var(--paper)" }}>desterro · um jornal de voz própria</span>
        <span>© 2026 catarina desterro</span>
      </footer>
    </div>);

};

window.SobrePage = SobrePage;
