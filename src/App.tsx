import "./site.css";

const WHATSAPP_NUMBER_E164 = "34XXXXXXXXX"; // TODO: replace (no +). Example: 34600111222

function waLink() {
  const text = encodeURIComponent(
    [
      "Hola, soy instalador de aire acondicionado en Valencia.",
      "Quiero implementar ClimaOps.",
      "",
      "Empresa:",
      "Zona:",
      "Servicios (instalación/averías):",
      "Volumen de consultas/día aprox:",
    ].join("\n")
  );
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${text}`;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="bullet">
      <span className="check" aria-hidden />
      <div>{children}</div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="metric">
      <div className="metricV">{value}</div>
      <div className="metricL">{label}</div>
    </div>
  );
}

function Pain({ children }: { children: React.ReactNode }) {
  return <div className="painItem">{children}</div>;
}

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="step2">
      <div className="step2n">{n}</div>
      <div>
        <div className="step2t">{title}</div>
        <div className="muted">{desc}</div>
      </div>
    </div>
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

          <div className="heroSingle">
            <div className="badge">B2C · Instalación + averías</div>

            <h1>
              Sistema comercial para instaladores de A/A
              <span className="grad"> en Valencia.</span>
            </h1>

            <p className="lead">
              Respuesta rápida + presupuesto + seguimiento.
              <span className="muted"> Para cerrar más sin contratar a nadie.</span>
            </p>

            <div className="heroCtas">
              <a className="btn lg" href={waLink()} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </a>
              <div className="fine">Te digo si encaja en 2–3 min. Sin precios en web.</div>
            </div>

            <div className="metrics">
              <Metric value="< 15 min" label="respuesta (objetivo)" />
              <Metric value="por estado" label="seguimiento" />
              <Metric value="menos visitas" label="filtro + confirmación" />
            </div>

            <div className="bullets3">
              <Bullet>
                <b>Más cierres</b> porque el lead no se enfría.
              </Bullet>
              <Bullet>
                <b>Más orden</b> (y menos estrés) en el día a día.
              </Bullet>
              <Bullet>
                <b>Más control</b>: reglas, horarios y qué se envía.
              </Bullet>
            </div>

            <section className="pain">
              <div className="kicker">El dolor real</div>
              <div className="painTitle">
                El problema no es la demanda.
                <span className="grad"> Es la fuga.</span>
              </div>
              <div className="painList">
                <Pain>Estás en obra y cuando contestas, ya eligieron a otro.</Pain>
                <Pain>Envías presupuesto y se muere por falta de seguimiento.</Pain>
                <Pain>Se te acumulan chats y se te olvidan respuestas.</Pain>
                <Pain>Tu agenda se llena de visitas que no valen la pena.</Pain>
                <Pain>Acabas trabajando más… y cerrando lo mismo.</Pain>
              </div>
              <div className="painClose">Nosotros lo arreglamos con sistema, no con fuerza de voluntad.</div>
            </section>

            <div className="divider" />

            <div className="how">
              <div className="howHead">
                <div className="kicker">Cómo funciona</div>
                <div className="howTitle">Sistema simple. Sin lío.</div>
              </div>

              <div className="howGrid">
                <Step n={1} title="Entrada ordenada" desc="Zona, urgencia, tipo y fotos. Respuesta inicial en minutos." />
                <Step n={2} title="Agenda + confirmación" desc="Huecos, recordatorios y reglas para evitar perder el tiempo." />
                <Step n={3} title="Seguimiento" desc="No responde / visita / presupuesto / cierre. Todo por estado." />
              </div>

              <div className="trust">
                <div className="trustItem">
                  <div className="trustT">No bot pesado</div>
                  <div className="muted">Mensajes cortos y útiles. Cuando toca, pasa a humano.</div>
                </div>
                <div className="trustItem">
                  <div className="trustT">Control total</div>
                  <div className="muted">Tú decides reglas, horarios y qué se envía.</div>
                </div>
                <div className="trustItem">
                  <div className="trustT">Sin spam</div>
                  <div className="muted">Seguimiento por estado, no mensajes a lo loco.</div>
                </div>
              </div>

              <div className="ctaStrip">
                <div>
                  <div className="ctaStripT">¿Encaja en tu empresa?</div>
                  <div className="muted">Mándame tu zona y si haces instalación/averías.</div>
                </div>
                <a className="btn" href={waLink()} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>

              <div className="fine" style={{ marginTop: 10 }}>
                * Número pendiente (O2). Cuando esté activo, lo reemplazamos.
              </div>
            </div>
          </div>
        </div>
      </header>

      <footer className="footer">
        <div className="container footerInner">
          <div className="muted">© {new Date().getFullYear()} ClimaOps</div>
          <div className="muted">Una sola CTA · Valencia</div>
        </div>
      </footer>

      <a className="sticky" href={waLink()} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}
