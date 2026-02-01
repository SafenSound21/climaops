import "./site.css";

const WHATSAPP_NUMBER_E164 = "34XXXXXXXXX"; // TODO: replace (no +). Example: 34600111222

function waLink() {
  const text = encodeURIComponent(
    [
      "Hola, soy instalador de aire acondicionado en Valencia.",
      "Quiero info para implementar el sistema ClimaOps.",
      "",
      "Empresa:",
      "Zona:",
      "Servicios (instalación/averías):",
      "Volumen de consultas/día aprox:",
    ].join("\n")
  );
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${text}`;
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function FAQ({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <details className="faq">
      <summary>{q}</summary>
      <div className="muted">{a}</div>
    </details>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="heroWrap">
        <div className="container">
          <nav className="nav">
            <div className="brand">
              <div className="logo" aria-hidden>
                <span>CO</span>
              </div>
              <div>
                <div className="brandName">ClimaOps</div>
                <div className="brandTag">Presupuestos + agenda + seguimiento · Instaladores A/A (Valencia)</div>
              </div>
            </div>
            <a className="btn" href={waLink()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </nav>

          <div className="hero">
            <div className="heroLeft">
              <div className="pills">
                <Pill>Instalación + averías</Pill>
                <Pill>Un solo objetivo: más cierres</Pill>
              </div>

              <h1>
                Más trabajos.
                <span className="grad"> Menos caos.</span>
              </h1>
              <p className="lead">
                Implementamos un sistema simple para <b>responder rápido</b>, <b>presupuestar</b>, <b>agendar</b> y <b>hacer seguimiento</b>.
                Sin “bots” pesados. Sin cambiar tu forma de trabajar.
              </p>

              <div className="heroCtas">
                <a className="btn lg" href={waLink()} target="_blank" rel="noreferrer">
                  Quiero el sistema
                </a>
              </div>

              <div className="micro">
                <div className="microItem">
                  <span className="dot" />
                  Respuesta en minutos (no horas)
                </div>
                <div className="microItem">
                  <span className="dot" />
                  Presupuestos claros + seguimiento automático
                </div>
                <div className="microItem">
                  <span className="dot" />
                  Agenda protegida (menos visitas inútiles)
                </div>
              </div>
            </div>

            <div className="heroRight">
              <div className="panel">
                <div className="panelTop">
                  <div>
                    <div className="panelTitle">Cómo se implementa</div>
                    <div className="muted">3 pasos. Sin fricción.</div>
                  </div>
                </div>

                <div className="steps compact">
                  <div className="step">
                    <div className="stepN">1</div>
                    <div>
                      <div className="stepTitle">Entrada ordenada</div>
                      <div className="muted">WhatsApp/web → calificación y registro (zona, urgencia, tipo, fotos).</div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="stepN">2</div>
                    <div>
                      <div className="stepTitle">Agenda y confirmaciones</div>
                      <div className="muted">Huecos, recordatorios y reglas para filtrar curiosos.</div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="stepN">3</div>
                    <div>
                      <div className="stepTitle">Seguimiento por estado</div>
                      <div className="muted">No responde / visita / presupuesto / cierre.</div>
                    </div>
                  </div>
                </div>

                <div className="panelCta">
                  <a className="btn full" href={waLink()} target="_blank" rel="noreferrer">
                    Hablar por WhatsApp
                  </a>
                  <div className="fine">Sin precios en web. Te digo si encaja en 2–3 minutos.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div className="kicker">Objeciones</div>
            <h2>Preguntas típicas</h2>
          </div>

          <div className="faqGrid">
            <FAQ
              q="Ya tengo WhatsApp Business / CRM"
              a={
                <>
                  Perfecto. No lo reemplazamos. Implementamos el sistema que casi siempre falta: reglas, agenda, seguimiento y medición.
                </>
              }
            />
            <FAQ
              q="¿Esto es un bot?"
              a={
                <>
                  No. Son flujos cortos y útiles para calificar y dar seguimiento. Cuando toca, pasa a humano.
                </>
              }
            />
            <FAQ
              q="¿Cuánto tiempo me quita?"
              a={
                <>
                  Una llamada inicial (30–45 min) y accesos básicos. El objetivo es que te quite trabajo desde la semana 1.
                </>
              }
            />
          </div>

          <div className="ctaBand" style={{ marginTop: 14 }}>
            <div>
              <div className="ctaTitle">Te digo si encaja en 2–3 minutos</div>
              <div className="muted">Mándanos un WhatsApp con tu zona y si haces instalación/averías.</div>
            </div>
            <a className="btn lg" href={waLink()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>

          <div className="fine" style={{ marginTop: 10 }}>
            * Número pendiente (O2). Cuando esté activo, lo reemplazamos.
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div className="muted">© {new Date().getFullYear()} ClimaOps · Valencia</div>
          <div className="muted">Una sola CTA. Sin precios en web.</div>
        </div>
      </footer>

      <a className="sticky" href={waLink()} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}
