import type { Metadata } from 'next';
import { UtilityBar, MiniHeader } from '@/components/Header';
import { MiniFooter } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sobre a Desterro',
  description: 'Um jornal de ideias e reflexões. Não é para quem busca respostas, é para quem ainda insiste em pensar no meio do caos.',
};

export default function SobreJornalPage() {
  return (
    <div style={{ background: 'var(--paper-warm)', color: 'var(--ink)', fontFamily: 'var(--sans)', minHeight: '100vh' }}>
      <UtilityBar />
      <MiniHeader />

      {/* Category strip */}
      <div style={{ padding: '16px 40px 0', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center' }}>
        <div className="kicker" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ background: 'var(--blue)', color: 'var(--ink)', padding: '4px 10px' }}>● Sobre a Desterro</span>
          <span className="mono" style={{ fontSize: 10, letterSpacing: '.18em', color: 'var(--gray-2)' }}>o que é este lugar</span>
        </div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>Leitura · 5 min</div>
      </div>

      {/* Title — verbete style */}
      <section className="sec" style={{ padding: '20px var(--px) 0' }}>
        <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 'clamp(40px, 12vw, 132px)', lineHeight: .92, letterSpacing: '-.03em', margin: '0 0 18px' }}>
          des·<span style={{ fontStyle: 'italic', fontWeight: 500 }}>ter·ro</span>
        </h1>
        <div style={{ display: 'flex', gap: 20, alignItems: 'baseline', flexWrap: 'wrap', marginBottom: 18 }}>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>substantivo masculino</span>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>· deslocamento, exílio</span>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>· tb. sobrenome</span>
        </div>
        <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 26, lineHeight: 1.32, color: 'var(--gray-1)', margin: 0, maxWidth: 880 }}>
          Um jornal de ideias e reflexões. Não é para quem busca respostas, é para quem ainda insiste em pensar no meio do caos.
        </p>
      </section>

      {/* Body: margin | article | sidebar */}
      <section className="rg-sobre-body sec" style={{ padding: '44px var(--px) 0' }}>
        <aside className="sobre-margin" style={{ position: 'sticky', top: 20 }} />

        {/* Article body */}
        <article style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.7, color: 'var(--ink-2)', minWidth: 0 }}>
          <p style={{ margin: '0 0 18px' }}>
            <span style={{ float: 'left', fontFamily: 'var(--serif)', fontWeight: 800, fontSize: 86, lineHeight: .82, paddingRight: 12, paddingTop: 6, color: 'var(--ink)' }}>D</span>
            esterro é, por si só, segundo o velho Google, o ato ou o efeito de desterrar, de expulsar alguém, de exilar.
          </p>
          <p style={{ margin: '0 0 18px' }}>
            É também um termo que, isolado, parece quase impessoal. Uma ideia de perda de lugar, de afastamento, de um processo de deslocamento.
          </p>

          <div style={{ background: 'var(--blue)', color: 'var(--ink)', padding: '28px 28px', margin: '28px 0' }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--blue-ink)', marginBottom: 8 }}>Mas</div>
            <p style={{ margin: 0, fontFamily: 'var(--serif)', fontWeight: 700, fontStyle: 'italic', fontSize: 36, lineHeight: 1.1, letterSpacing: '-.01em' }}>
              também é meu sobrenome.
            </p>
          </div>

          <p style={{ margin: '0 0 18px' }}>
            O nome não é só uma referência familiar ou falta de criatividade. Ele fala sobre movimento, ruptura e reinvenção. Sobre sair de um lugar e, inevitavelmente, não caber mais no anterior. E talvez seja exatamente isso que une minha trajetória pessoal ao que eu escolhi estudar e trabalhar: <em>marketing</em>.
          </p>
          <p style={{ margin: '0 0 18px' }}>
            O mercado também vive em desterro constante. Mudam as plataformas, os comportamentos, as estratégias, os desejos, as regras, os preços. O que funciona hoje pode parecer obsoleto amanhã. E o profissional que insiste em permanecer no mesmo lugar, mais cedo ou mais tarde, também se torna deslocado.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 32, lineHeight: 1.1, margin: '32px 0 14px', letterSpacing: '-.01em' }}>
            E esta espécie de jornal pessoal existe nesse intervalo.
          </h2>
          <p style={{ margin: '0 0 18px' }}>
            Entre o que eu observo e o que eu tento entender. Entre o mercado e as pessoas. Entre o ruído das mudanças e a tentativa de organizar algum sentido nisso tudo.
          </p>
          <p style={{ margin: '0 0 18px' }}>
            Aqui, escrevo sobre marketing, cultura e comportamento, mas também sobre transformação — a minha e do mundo ao redor.
          </p>

          <div style={{ background: 'var(--paper)', padding: '28px 32px', margin: '28px 0', borderLeft: '4px solid var(--ink)' }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gray-2)', marginBottom: 10 }}>Editorial</div>
            <p style={{ margin: 0, fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 28, lineHeight: 1.2, letterSpacing: '-.005em' }}>
              Este é um jornal de ideias e reflexões. Não é para quem busca respostas. Para isso, você pode continuar com o seu ChatGPT.
            </p>
            <p style={{ margin: '14px 0 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.3, color: 'var(--gray-1)' }}>
              Aqui é para quem ainda insiste em pensar no meio do caos.
            </p>
          </div>

          <p style={{ margin: '0 0 18px' }}>
            Assim, se tudo está sempre mudando, isso aqui pode ser visto como uma recusa em ser só levada pelo movimento ou, no mínimo, uma tentativa de escolher para onde ir no meio dele.
          </p>
          <p style={{ margin: '0 0 8px', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--ink)' }}>
            Ou veja como quiser.
          </p>

          <div className="byline" style={{ marginTop: 24, color: 'var(--gray-2)' }}>— Catarina Desterro.</div>
        </article>

        {/* Right rail */}
        <aside className="sobre-rail" style={{ position: 'sticky', top: 20 }}>
          <div style={{ border: '1px solid var(--ink)' }}>
            <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '10px 14px', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase' }}>
              Sobre o jornal
            </div>
            <div style={{ padding: 16, background: 'var(--paper)' }}>
              {[
                ['Fundado em', '2026'],
                ['Edita e escreve', 'Catarina Desterro'],
                ['Periodicidade', 'quando há o que dizer'],
                ['Editorias', 'Marketing, Mercado, Carreira, Empreendedorismo, Opinião'],
                ['Voz', 'primeira pessoa, sem pedido de licença'],
              ].map(([label, value], i) => (
                <div key={i} style={{ padding: '10px 0', borderTop: i === 0 ? 0 : '1px solid var(--gray-5)' }}>
                  <div className="kicker" style={{ color: 'var(--gray-2)', marginBottom: 4, fontSize: 10 }}>{label}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 15, lineHeight: 1.3 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 20, background: 'var(--blue)', padding: 18, color: 'var(--ink)' }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--blue-ink)', marginBottom: 8 }}>Princípio</div>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 18, lineHeight: 1.25 }}>
              Escolher para onde ir no meio do movimento.
            </div>
          </div>
        </aside>
      </section>

      {/* Contact section */}
      <section className="sec" style={{ padding: '72px var(--px) 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <span className="kicker" style={{ fontSize: 12 }}>FALE COMIGO</span>
          <hr className="hr" />
        </div>
        <div className="rg-form-2">
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontStyle: 'italic', fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, margin: '0 0 16px', letterSpacing: '-.01em' }}>
              Manda uma<br />mensagem.
            </h2>
            <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 18, lineHeight: 1.45, color: 'var(--gray-1)', margin: '0 0 16px' }}>
              Pra falar de pauta, parceria, um trabalho, ou só pra discordar, a caixa abaixo chega no meu e-mail. Sem formulário enrolado, sem auto-resposta.
            </p>
            <div className="byline" style={{ color: 'var(--gray-2)' }}>
              Prefere e-mail direto? <em>catarinabaima123@gmail.com</em>
            </div>
          </div>
          <form style={{ border: '1px solid var(--ink)', background: 'var(--paper)', padding: 24 }}>
            <div className="form-2col">
              <label style={{ display: 'block' }}>
                <div className="kicker" style={{ marginBottom: 6, fontSize: 10 }}>Seu nome</div>
                <input type="text" placeholder="como devo te chamar" style={{ width: '100%', border: 0, borderBottom: '1px solid var(--ink)', background: 'transparent', padding: '8px 0', fontFamily: 'var(--serif)', fontSize: 16, outline: 'none', color: 'var(--ink)' }} />
              </label>
              <label style={{ display: 'block' }}>
                <div className="kicker" style={{ marginBottom: 6, fontSize: 10 }}>Seu e-mail</div>
                <input type="email" placeholder="seu@email.com" style={{ width: '100%', border: 0, borderBottom: '1px solid var(--ink)', background: 'transparent', padding: '8px 0', fontFamily: 'var(--serif)', fontSize: 16, outline: 'none', color: 'var(--ink)' }} />
              </label>
            </div>
            <label style={{ display: 'block', marginBottom: 14 }}>
              <div className="kicker" style={{ marginBottom: 6, fontSize: 10 }}>Assunto</div>
              <input type="text" placeholder="sobre o que é" style={{ width: '100%', border: 0, borderBottom: '1px solid var(--ink)', background: 'transparent', padding: '8px 0', fontFamily: 'var(--serif)', fontSize: 16, outline: 'none', color: 'var(--ink)' }} />
            </label>
            <label style={{ display: 'block', marginBottom: 18 }}>
              <div className="kicker" style={{ marginBottom: 6, fontSize: 10 }}>Mensagem</div>
              <textarea rows={5} placeholder="escreva sem pressa." style={{ width: '100%', border: '1px solid var(--ink)', background: 'var(--paper-warm)', padding: '12px 14px', fontFamily: 'var(--serif)', fontSize: 16, outline: 'none', color: 'var(--ink)', resize: 'vertical', lineHeight: 1.5 }} />
            </label>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="mono" style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gray-2)' }}>▮ vai direto pro meu e-mail</span>
              <button type="submit" style={{ background: 'var(--ink)', color: 'var(--paper)', border: 0, padding: '12px 22px', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', cursor: 'pointer' }}>Enviar →</button>
            </div>
          </form>
        </div>
      </section>

      <div style={{ marginTop: 64 }}>
        <MiniFooter />
      </div>
    </div>
  );
}
