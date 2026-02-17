import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Sección 1: Hero + Introducción */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">VIATALENTO</h1>
          <h2 className="hero-subtitle">Transformando organizaciones y potenciando talento</h2>
          <p className="hero-description">
            En VIATALENTO, nos dedicamos a impulsar el desarrollo integral de organizaciones y personas a través de soluciones personalizadas en consultoría, capacitación y formación.
          </p>
          <p className="hero-description">
            Cada proyecto es abordado con compromiso, adaptabilidad e innovación, asegurando resultados que marcan la diferencia.
          </p>
          <ul className="features-list">
            <li>Soluciones personalizadas</li>
            <li>Expertos en gestión de talento y finanzas</li>
            <li>Compromiso con el desarrollo integral</li>
            <li>Innovación y actualización constante</li>
          </ul>
        </div>
        <div className="hero-image">
          <img src="/assets/imagen5.png" alt="Ilustración sobre nosotros" />
        </div>
      </section>

      {/* Sección 2: Misión y Visión */}
      <section className="mission-vision-section">
        <div className="mission">
          <h2>Nuestra <span className="highlight">Misión</span></h2>
          <blockquote>
            "Impulsar el desarrollo integral de organizaciones y personas a través de servicios especializados en consultoría, capacitación y formación, asesorías individuales y elaboración de productos. Nos comprometemos a ofrecer soluciones personalizadas, fomentando la eficiencia, la innovación y el crecimiento sostenible."
          </blockquote>
        </div>
        <div className="vision">
          <h2>Nuestra <span className="highlight">Visión</span></h2>
          <blockquote>
            "Nos visualizamos como líderes reconocidos en la gestión de talento y las finanzas, siendo referentes en la transformación y desarrollo de organizaciones. Aspiramos a ser la elección preferida de empresas, instituciones y emprendedores que buscan excelencia, contribuyendo de manera significativa al progreso y bienestar en Bolivia."
          </blockquote>
        </div>
      </section>

      {/* Sección 3: Objetivos Estratégicos - Layout mejorado */}
      <section className="objectives-section">
        <div className="objectives-image">
          <img src="/assets/bannerviatalentoe.png" alt="Objetivos estratégicos" />
        </div>
        <div className="objectives-content">
          <h2 className="section-title">Objetivos Estratégicos</h2>
          <ul className="objectives-list">
            <li className="objective-item">
              <span className="objective-bullet"></span>
              <div className="objective-text">
                <strong>Excelencia en Consultoría</strong>
                <span className="objective-separator">:</span>
                <span>Consolidar nuestra posición como líderes en consultoría, proporcionando soluciones innovadoras y estratégicas que optimicen procesos y promuevan la eficiencia operativa en organizaciones.</span>
              </div>
            </li>
            <li className="objective-item">
              <span className="objective-bullet"></span>
              <div className="objective-text">
                <strong>Desarrollo Integral</strong>
                <span className="objective-separator">:</span>
                <span>Contribuir al desarrollo integral de personas y empresas mediante programas de capacitación y formación adaptados al contexto boliviano, abarcando desde habilidades personales hasta áreas técnicas y profesionales.</span>
              </div>
            </li>
            <li className="objective-item">
              <span className="objective-bullet"></span>
              <div className="objective-text">
                <strong>Compromiso Social</strong>
                <span className="objective-separator">:</span>
                <span>Mantener y fortalecer nuestro compromiso social, participando activamente en proyectos significativos que contribuyan al desarrollo educativo y social de Bolivia.</span>
              </div>
            </li>
            <li className="objective-item">
              <span className="objective-bullet"></span>
              <div className="objective-text">
                <strong>Crecimiento Sostenible</strong>
                <span className="objective-separator">:</span>
                <span>Buscar un crecimiento sostenible y rentable, expandiendo nuestras áreas de influencia y consolidándonos como un referente confiable en la gestión de talento y el desarrollo organizacional.</span>
              </div>
            </li>
            <li className="objective-item">
              <span className="objective-bullet"></span>
              <div className="objective-text">
                <strong>Innovación Continua</strong>
                <span className="objective-separator">:</span>
                <span>Fomentar la innovación constante en nuestros servicios, adoptando tecnologías, metodologías y herramientas actualizadas para ofrecer soluciones vanguardistas que respondan a las cambiantes necesidades del mercado.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Sección 4: Valores Institucionales */}
      <section className="values-section">
        <div className="values-image">
          <img src="/assets/bannerviatalento2.png" alt="Valores institucionales" />
        </div>
        <div className="values-content">
          <h2 className="section-title">Valores Institucionales</h2>
          <ul className="values-list">
            <li className="value-item">
              <span className="value-bullet"></span>
              <div className="value-text">
                <strong>Compromiso</strong>
                <span className="value-separator">:</span>
                <span>Nos comprometemos a brindar servicios de calidad, demostrando dedicación y responsabilidad en cada proyecto que emprendemos.</span>
              </div>
            </li>
            <li className="value-item">
              <span className="value-bullet"></span>
              <div className="value-text">
                <strong>Colaboración</strong>
                <span className="value-separator">:</span>
                <span>Fomentamos un ambiente de colaboración y trabajo en equipo, reconociendo la importancia de la sinergia para alcanzar objetivos comunes.</span>
              </div>
            </li>
            <li className="value-item">
              <span className="value-bullet"></span>
              <div className="value-text">
                <strong>Innovación</strong>
                <span className="value-separator">:</span>
                <span>Buscamos constantemente nuevas formas de abordar desafíos, promoviendo la creatividad y la búsqueda de soluciones innovadoras.</span>
              </div>
            </li>
            <li className="value-item">
              <span className="value-bullet"></span>
              <div className="value-text">
                <strong>Ética Profesional</strong>
                <span className="value-separator">:</span>
                <span>Actuamos con integridad, transparencia y ética en todas nuestras operaciones, manteniendo la confianza y el respeto en todas nuestras relaciones.</span>
              </div>
            </li>
            <li className="value-item">
              <span className="value-bullet"></span>
              <div className="value-text">
                <strong>Adaptabilidad</strong>
                <span className="value-separator">:</span>
                <span>Nos adaptamos ágilmente a los cambios del mercado y las necesidades de nuestros clientes, demostrando flexibilidad y capacidad de respuesta ante cualquier situación.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;