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

function Icon({ name }: { name: "clock" | "calendar" | "flow" | "check" | "alert" | "shield" | "sliders" }) {
  switch (name) {
    case "clock":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" strokeWidth="2" />
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
          <path d="M7 7h10v4H7V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M7 13h6v4H7v-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M17 9h2v8h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "check":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
          <path d="M12 2 20 6v7c0 5-3.4 9-8 9s-8-4-8-9V6l8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
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

function Bullet({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bullet">
      <span className="bulletIc" aria-hidden>
        {icon}
      </span>
      <div>{children}</div>
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

function TrustItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="trustItem">
      <div className="trustTop">
        <span className="trustIc" aria-hidden>
          {icon}
        </span>
        <div className="trustT">{title}</div>
      </div>
      <div className="muted">{desc}</div>
    </div>
  );
}

function FlowVisual() {
  return (
    <div className="visualCard" aria-hidden>
      <div className="visualTitle">De consulta a cierre, sin fricción</div>
      <div className="visualSub">Tú solo atiendes los leads buenos.</div>
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

        <rect x="40" y="34" width="180" height="54" rx="16" className="flowNode" />
        <text x="58" y="55" className="flowN">1</text>
        <text x="78" y="67" className="flowText">WhatsApp / web</text>

        <rect x="40" y="106" width="180" height="54" rx="16" className="flowNode" />
        <text x="58" y="127" className="flowN">2</text>
        <text x="78" y="139" className="flowText">Filtro (zona, fotos)</text>

        <rect x="40" y="178" width="180" height="54" rx="16" className="flowNode" />
        <text x="58" y="199" className="flowN">3</text>
        <text x="78" y="211" className="flowText">Agenda confirmada</text>

        <rect x="250" y="64" width="300" height="82" rx="20" className="flowNodeStrong" />
        <text x="272" y="98" className="flowText">Presupuesto claro</text>
        <text x="272" y="122" className="flowSub">+ seguimiento por estado</text>
        <circle cx="526" cy="91" r="12" fill="rgba(10,102,255,.10)" />
        <path d="M520 92l4 4 9-11" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

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
              <div className="badge">Para instaladores A/A · Valencia</div>

              <h1>
                Convierte WhatsApp en un
                <span className="grad"> sistema de ventas.</span>
              </h1>

              <p className="lead">
                Primer filtro (zona/fotos), agenda confirmada y seguimiento por estado.
                <span className="muted"> Sin contratar a nadie y sin estar pegado al móvil.</span>
              </p>

              <div className="heroCtas">
                <a className="btn lg" href={waLink()} target="_blank" rel="noreferrer">
                  Hablar por WhatsApp
                </a>
                <div className="fine">En 2–3 min te digo si encaja y qué costaría en tu caso. Si no encaja, te lo digo igual.</div>
              </div>

              <div className="bullets3">
                <Bullet icon={<Icon name="sliders" />}>
                  <b>Filtro en minutos</b>: zona + fotos + tipo de trabajo (atiendes menos curiosos).
                </Bullet>
                <Bullet icon={<Icon name="calendar" />}>
                  <b>Agenda confirmada</b>: recordatorios y reglas para evitar paseos inútiles.
                </Bullet>
                <Bullet icon={<Icon name="flow" />}>
                  <b>Seguimiento simple</b>: no responde → visita → presupuesto → cierre.
                </Bullet>
              </div>

              <section className="pain">
                <div className="kicker">El dolor</div>
                <div className="painTitle">
                  El problema no es la demanda.
                  <span className="grad"> Es la fuga.</span>
                </div>
                <div className="painList">
                  <Pain>Estás en obra y cuando contestas, ya eligieron a otro.</Pain>
                  <Pain>Envías presupuesto y se muere por falta de seguimiento.</Pain>
                  <Pain>Tu agenda se llena de visitas que no valen la pena.</Pain>
                </div>
              </section>

              <section className="trust">
                <TrustItem icon={<Icon name="check" />} title="Mensajes cortos y útiles" desc="Sin ‘chatbot raro’. Automatiza el primer filtro; el cierre lo haces tú." />
                <TrustItem icon={<Icon name="sliders" />} title="Tú apruebas reglas y horarios" desc="Decides qué se envía, cuándo, y a quién. Control total." />
                <TrustItem icon={<Icon name="shield" />} title="Seguimiento solo cuando toca" desc="Por estado, sin spam. Buscamos respuesta, no molestar." />
              </section>

              <div className="ctaStrip">
                <div>
                  <div className="ctaStripT">¿Encaja en tu empresa?</div>
                  <div className="muted">Mándame tu zona y si haces instalación/averías.</div>
                </div>
                <a className="btn" href={waLink()} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
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
