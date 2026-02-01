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

function Icon({ name }: { name: "clock" | "flow" | "calendar" | "check" | "alert" | "shield" | "sliders" }) {
  switch (name) {
    case "clock":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "calendar":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 3v3M17 3v3M4 8h16M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "flow":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 7h10v4H7V7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M7 13h6v4H7v-4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M17 9h2v8h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "check":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M20 6 9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "alert":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 9v4m0 4h.01M10.3 4.9 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.9a2 2 0 0 0-3.4 0Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2 20 6v7c0 5-3.4 9-8 9s-8-4-8-9V6l8-4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "sliders":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 21v-7m0-4V3m10 18v-9m0-4V3m10 18v-5m0-4V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 14h0m10-2h0m10 4h0" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
  }
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="bullet">
      <span className="check" aria-hidden />
      <div>{children}</div>
    </div>
  );
}

function Metric({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="metric">
      <div className="metricTop">
        <div className="metricIc">{icon}</div>
        <div className="metricV">{value}</div>
      </div>
      <div className="metricL">{label}</div>
    </div>
  );
}

function Pain({ children }: { children: React.ReactNode }) {
  return (
    <div className="painItem">
      <span className="painIc" aria-hidden>
        <Icon name="alert" />
      </span>
      <div>{children}</div>
    </div>
  );
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

function FlowVisual() {
  return (
    <div className="visualCard" aria-hidden>
      <div className="visualTitle">De consulta a cierre, sin fricción</div>
      <svg className="flowSvg" viewBox="0 0 560 260" fill="none">
        <defs>
          <linearGradient id="g" x1="40" y1="30" x2="520" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--brand)" />
            <stop offset="1" stopColor="var(--brand2)" />
          </linearGradient>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="url(#g)" />
          </marker>
        </defs>

        {/* nodes (1-2-3) */}
        <rect x="40" y="34" width="180" height="54" rx="16" className="flowNode" />
        <text x="58" y="55" className="flowN">1</text>
        <text x="78" y="67" className="flowText">WhatsApp / web</text>

        <rect x="40" y="106" width="180" height="54" rx="16" className="flowNode" />
        <text x="58" y="127" className="flowN">2</text>
        <text x="78" y="139" className="flowText">Filtro (zona, fotos)</text>

        <rect x="40" y="178" width="180" height="54" rx="16" className="flowNode" />
        <text x="58" y="199" className="flowN">3</text>
        <text x="78" y="211" className="flowText">Agenda + confirmación</text>

        {/* outcome */}
        <rect x="250" y="64" width="300" height="82" rx="20" className="flowNodeStrong" />
        <text x="272" y="98" className="flowText">Presupuesto claro</text>
        <text x="272" y="122" className="flowSub">+ seguimiento por estado</text>
        <circle cx="526" cy="91" r="12" fill="rgba(10,102,255,.10)" />
        <path d="M520 92l4 4 9-11" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* connectors */}
        <path d="M220 61h30" className="flowLine" />
        <path d="M220 133h30" className="flowLine" />
        <path d="M220 205h30" className="flowLine" />
        <path d="M250 105H548" className="flowLineStrong" markerEnd="url(#arrow)" />

        <circle cx="250" cy="61" r="4" fill="url(#g)" />
        <circle cx="250" cy="133" r="4" fill="url(#g)" />
        <circle cx="250" cy="205" r="4" fill="url(#g)" />
      </svg>
      <div className="visualFoot">Proceso visual (sin stock). Se entiende en 5–10s.</div>
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

          <div className="heroGrid">
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
                <Metric icon={<Icon name="clock" />} value="< 15 min" label="respuesta (objetivo)" />
                <Metric icon={<Icon name="flow" />} value="por estado" label="seguimiento" />
                <Metric icon={<Icon name="calendar" />} value="menos visitas" label="filtro + confirmación" />
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

              <section className="timeline">
                <div className="kicker">Paso a paso</div>
                <div className="timelineTitle">Así se cierra un trabajo (sin llamadas eternas)</div>

                <div className="tl">
                  <div className="tlStep">
                    <div className="tlHead">
                      <span className="tlIc" aria-hidden>
                        <Icon name="sliders" />
                      </span>
                      <div>
                        <div className="tlT">1) Consulta rápida</div>
                        <div className="muted">WhatsApp/web con fotos y zona.</div>
                      </div>
                    </div>
                    <div className="mock">
                      <div className="mockTop">WhatsApp</div>
                      <div className="mockMsg">“Necesito instalación esta semana.”</div>
                      <div className="mockRow">
                        <div className="mockP" />
                        <div className="mockP" />
                        <div className="mockP" />
                      </div>
                      <div className="mockMeta">Zona: Valencia · Fotos: 3</div>
                    </div>
                  </div>

                  <div className="tlLine" aria-hidden />

                  <div className="tlStep">
                    <div className="tlHead">
                      <span className="tlIc" aria-hidden>
                        <Icon name="calendar" />
                      </span>
                      <div>
                        <div className="tlT">2) Agenda confirmada</div>
                        <div className="muted">Filtramos y confirmamos fecha en minutos.</div>
                      </div>
                    </div>
                    <div className="mock">
                      <div className="mockTop">Agenda</div>
                      <div className="mockCal">
                        <div className="mockDate">Jue 18</div>
                        <div className="mockTime">10:30</div>
                        <div className="mockBadge">Confirmado</div>
                      </div>
                      <div className="mockMeta">Recordatorio automático · Sin no-shows</div>
                    </div>
                  </div>

                  <div className="tlLine" aria-hidden />

                  <div className="tlStep tlFinal">
                    <div className="tlHead">
                      <span className="tlIc" aria-hidden>
                        <Icon name="check" />
                      </span>
                      <div>
                        <div className="tlT">3) Presupuesto claro</div>
                        <div className="muted">+ seguimiento por estado hasta el “sí”.</div>
                      </div>
                    </div>
                    <div className="mock final">
                      <div className="mockTop">Presupuesto</div>
                      <div className="mockPrice">790 €</div>
                      <div className="mockRow2">
                        <div className="mockK">Instalación</div>
                        <div className="mockV">incluida</div>
                      </div>
                      <div className="mockRow2">
                        <div className="mockK">Material</div>
                        <div className="mockV">incluido</div>
                      </div>
                      <div className="mockBadge ok">Aprobado</div>
                    </div>
                  </div>
                </div>

                <div className="fine" style={{ marginTop: 10 }}>
                  Sin llamadas eternas. Sin bots. Sin spam.
                </div>
              </section>

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
                    <div className="trustTop">
                      <span className="trustIc" aria-hidden>
                        <Icon name="check" />
                      </span>
                      <div className="trustT">No bot pesado</div>
                    </div>
                    <div className="muted">Mensajes cortos y útiles. Cuando toca, pasa a humano.</div>
                  </div>
                  <div className="trustItem">
                    <div className="trustTop">
                      <span className="trustIc" aria-hidden>
                        <Icon name="sliders" />
                      </span>
                      <div className="trustT">Control total</div>
                    </div>
                    <div className="muted">Tú decides reglas, horarios y qué se envía.</div>
                  </div>
                  <div className="trustItem">
                    <div className="trustTop">
                      <span className="trustIc" aria-hidden>
                        <Icon name="shield" />
                      </span>
                      <div className="trustT">Sin spam</div>
                    </div>
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

            <FlowVisual />
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
