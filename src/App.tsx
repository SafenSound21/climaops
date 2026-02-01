import "./site.css";

const WHATSAPP_NUMBER_E164 = "34XXXXXXXXX"; // TODO: replace (no +). Example: 34600111222

function waLink() {
  const text = encodeURIComponent(
    [
      "Hola, soy instalador de aire acondicionado en Valencia.",
      "Quiero info para implementar ClimaOps.",
      "",
      "Empresa:",
      "Zona:",
      "Servicios (instalación/averías):",
      "Volumen de consultas/día aprox:",
    ].join("\n")
  );
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${text}`;
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
                <div className="brandTag">Instaladores A/A · Valencia</div>
              </div>
            </div>
            <a className="btn" href={waLink()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </nav>

          <div className="hero single">
            <h1>
              Si tardas en contestar,
              <span className="grad"> pierdes la instalación.</span>
            </h1>
            <p className="lead">
              Mientras estás en obra, el cliente pide 3 presupuestos. Nosotros montamos un sistema para <b>responder</b>, <b>filtrar</b> y <b>hacer seguimiento</b>
              hasta que el trabajo se cierra.
            </p>

            <div className="heroCtas">
              <a className="btn lg" href={waLink()} target="_blank" rel="noreferrer">
                Quiero más cierres
              </a>
            </div>

            <div className="micro">
              <div className="microItem">
                <span className="dot" />
                Respuesta en minutos (aunque estés ocupado)
              </div>
              <div className="microItem">
                <span className="dot" />
                Presupuestos claros + recordatorios
              </div>
              <div className="microItem">
                <span className="dot" />
                Agenda protegida (menos visitas inútiles)
              </div>
            </div>

            <div className="fine" style={{ marginTop: 10 }}>
              Sin precios en web. Te decimos en 2–3 minutos si encaja.
            </div>

            <div className="panel" style={{ marginTop: 14 }}>
              <div className="panelTop">
                <div>
                  <div className="panelTitle">Cómo funciona</div>
                  <div className="muted">3 pasos. Sin lío.</div>
                </div>
              </div>

              <div className="steps compact">
                <div className="step">
                  <div className="stepN">1</div>
                  <div>
                    <div className="stepTitle">Entrada ordenada</div>
                    <div className="muted">Calificamos (zona/urgencia/fotos) y respondemos al instante.</div>
                  </div>
                </div>
                <div className="step">
                  <div className="stepN">2</div>
                  <div>
                    <div className="stepTitle">Agenda + confirmación</div>
                    <div className="muted">Huecos, recordatorios y reglas para filtrar curiosos.</div>
                  </div>
                </div>
                <div className="step">
                  <div className="stepN">3</div>
                  <div>
                    <div className="stepTitle">Seguimiento hasta cierre</div>
                    <div className="muted">No responde / visita / presupuesto / cierre.</div>
                  </div>
                </div>
              </div>

              <div className="panelCta">
                <a className="btn full" href={waLink()} target="_blank" rel="noreferrer">
                  Hablar por WhatsApp
                </a>
                <div className="fine">* Número pendiente (O2). Cuando esté activo, lo reemplazamos.</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div className="kicker">FAQ</div>
            <h2>Sin humo</h2>
          </div>

          <div className="faqGrid">
            <FAQ
              q="¿Esto es un bot?"
              a={<>No. Son flujos cortos para calificar y dar seguimiento. Cuando toca, pasa a humano.</>}
            />
            <FAQ
              q="¿Cuánto tiempo me quita?"
              a={<>Una llamada inicial (30–45 min) y accesos básicos. El objetivo es quitarte trabajo desde la semana 1.</>}
            />
          </div>

          <div className="ctaBand" style={{ marginTop: 14 }}>
            <div>
              <div className="ctaTitle">¿Encaja en tu empresa?</div>
              <div className="muted">WhatsApp con tu zona y si haces instalación/averías.</div>
            </div>
            <a className="btn lg" href={waLink()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div className="muted">© {new Date().getFullYear()} ClimaOps</div>
          <div className="muted">Valencia · Una sola CTA</div>
        </div>
      </footer>

      <a className="sticky" href={waLink()} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}
