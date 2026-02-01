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

function Section({ id, title, kicker, children }: { id?: string; title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="sectionHead">
          {kicker ? <div className="kicker">{kicker}</div> : null}
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="muted">{children}</div>
    </div>
  );
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
                <div className="brandTag">Sistema comercial para instaladores de A/A · Valencia</div>
              </div>
            </div>
            <div className="navCtas">
              <a className="btn ghost" href="#como">Cómo funciona</a>
              <a className="btn" href={waLink()} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </nav>

          <div className="hero">
            <div className="heroLeft">
              <div className="pills">
                <Pill>Instalación + averías</Pill>
                <Pill>Setup rápido (días, no meses)</Pill>
                <Pill>Enfocado a Valencia</Pill>
              </div>

              <h1>
                No pierdas trabajos por tardar en contestar
                <span className="grad"> (y por no hacer seguimiento).</span>
              </h1>
              <p className="lead">
                ClimaOps implementa un sistema para que tus solicitudes entren ordenadas, se filtren, se agenden y se sigan automáticamente.
                Sin cambiar tu operativa ni meter más caos.
              </p>

              <div className="heroCtas">
                <a className="btn lg" href={waLink()} target="_blank" rel="noreferrer">
                  Escríbenos por WhatsApp
                </a>
                <a className="btn lg ghost" href="#para-quien">
                  Ver si encaja
                </a>
              </div>

              <div className="micro">
                <div className="microItem">
                  <span className="dot" />
                  Respuesta y seguimiento medibles (semanal)
                </div>
                <div className="microItem">
                  <span className="dot" />
                  Filtra curiosos y protege tu agenda
                </div>
                <div className="microItem">
                  <span className="dot" />
                  En 14 días deberías notar orden y más cierres
                </div>
              </div>
            </div>

            <div className="heroRight">
              <div className="panel">
                <div className="panelTop">
                  <div>
                    <div className="panelTitle">Qué problema resolvemos</div>
                    <div className="muted">El “agujero” típico en instaladores que ya tienen WhatsApp Business/CRM.</div>
                  </div>
                </div>

                <div className="metricGrid">
                  <div className="metric">
                    <div className="metricLabel">Respuesta</div>
                    <div className="metricValue">minutos</div>
                    <div className="muted">no horas</div>
                  </div>
                  <div className="metric">
                    <div className="metricLabel">Agenda</div>
                    <div className="metricValue">orden</div>
                    <div className="muted">sin no-shows</div>
                  </div>
                  <div className="metric">
                    <div className="metricLabel">Presupuestos</div>
                    <div className="metricValue">rápidos</div>
                    <div className="muted">y claros</div>
                  </div>
                  <div className="metric">
                    <div className="metricLabel">Seguimiento</div>
                    <div className="metricValue">automático</div>
                    <div className="muted">por estado</div>
                  </div>
                </div>

                <div className="panelCta">
                  <a className="btn full" href={waLink()} target="_blank" rel="noreferrer">
                    Quiero ver si encaja
                  </a>
                  <div className="fine">Sin precios en web. Se valida por WhatsApp en 2–3 minutos.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section
        id="para-quien"
        title="Para quién es (y para quién no)"
        kicker="Filtro rápido"
      >
        <div className="grid">
          <Card title="Encaja si…">
            <ul className="bullets">
              <li>Recibes consultas por WhatsApp/web y algunas se pierden.</li>
              <li>Tu agenda se llena de “curiosos” o se desordena.</li>
              <li>Enviáis presupuestos y una parte no recibe seguimiento.</li>
            </ul>
          </Card>
          <Card title="No encaja si…">
            <ul className="bullets">
              <li>No tienes flujo de consultas (primero habría que generar demanda).</li>
              <li>Solo compites por precio ultra-low-cost.</li>
              <li>No quieres medir nada ni cambiar mínimos hábitos (accesos, etiquetas, etc.).</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section
        id="como"
        title="Cómo funciona (sin humo)"
        kicker="Implementación"
      >
        <div className="steps">
          <div className="step">
            <div className="stepN">1</div>
            <div>
              <div className="stepTitle">Ordenamos la entrada</div>
              <div className="muted">WhatsApp / formulario / llamada → registro + respuesta inicial + calificación (zona, urgencia, tipo, presupuesto mínimo).</div>
            </div>
          </div>
          <div className="step">
            <div className="stepN">2</div>
            <div>
              <div className="stepTitle">Protegemos tu agenda</div>
              <div className="muted">Agenda, confirmaciones, recordatorios y reglas para evitar visitas inútiles.</div>
            </div>
          </div>
          <div className="step">
            <div className="stepN">3</div>
            <div>
              <div className="stepTitle">Seguimiento por estado</div>
              <div className="muted">Secuencias automáticas según: no responde / pide visita / recibió presupuesto / comparar opciones.</div>
            </div>
          </div>
        </div>

        <div className="callout">
          <div className="calloutTitle">KPIs (los que importan)</div>
          <div className="muted">
            Tiempo medio de respuesta · % leads con seguimiento completo · citas/semana · presupuestos/semana · oportunidades reactivadas.
          </div>
        </div>
      </Section>

      <Section title="Preguntas típicas" kicker="Objeciones">
        <div className="faqGrid">
          <FAQ
            q="Ya tengo WhatsApp Business / CRM"
            a={
              <>
                Perfecto: no lo reemplazamos. Lo que falta casi siempre es la ejecución constante: reglas, agenda, seguimiento y medición.
                Nosotros implementamos ese sistema encima de lo que ya usas.
              </>
            }
          />
          <FAQ
            q="No quiero un bot que moleste"
            a={
              <>
                Esto no es “un bot”. Son flujos cortos y útiles (preguntas de calificación y seguimiento). Y cuando toca, se pasa a atención humana.
              </>
            }
          />
          <FAQ
            q="¿Cuánto tiempo me quita?"
            a={
              <>
                Una llamada inicial (30–45 min) y accesos básicos. El resto lo hacemos nosotros. El objetivo es que te quite tiempo, no que te lo robe.
              </>
            }
          />
        </div>
      </Section>

      <Section title="¿Hablamos?" kicker="Contacto">
        <div className="ctaBand">
          <div>
            <div className="ctaTitle">Te digo en 2–3 minutos si encaja</div>
            <div className="muted">Mándanos un WhatsApp. Te haremos 3 preguntas y, si encaja, agendamos 10 min.</div>
          </div>
          <a className="btn lg" href={waLink()} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
        <div className="fine" style={{ marginTop: 10 }}>
          * Número pendiente (O2). Cuando esté activo, lo reemplazamos y desplegamos en Vercel.
        </div>
      </Section>

      <footer className="footer">
        <div className="container footerInner">
          <div className="muted">© {new Date().getFullYear()} ClimaOps · Valencia</div>
          <div className="muted">Hecho para convertir en móvil. Sin precios en web.</div>
        </div>
      </footer>

      <a className="sticky" href={waLink()} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}
