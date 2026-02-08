import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Sección 1: Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="logo-title">VIATALENTO</h1>
          <h2 className="hero-headline">Impulsando el éxito de personas y organizaciones</h2>
          <p className="hero-description">
            Capacitaciones y servicios profesionales para el crecimiento continuo,
            con opciones tanto virtuales como presenciales.
          </p>
        </div>
        <div className="hero-image">
          <img src="/assets/HeroImagFF.png" alt="Graduada con diploma" />
        </div>
      </section>

      {/* Sección 2: Explora nuestros cursos */}
      <section className="courses-section">
        <div className="section-header">
          <h2>Explora Nuestros Cursos</h2>
          <p className="section-subtitle">Desarrolla tu potencial con nuestros cursos profesionales</p>
          <p className="section-quote">Inscríbete y comienza tu camino al éxito</p>
        </div>
        
        <div className="courses-grid">
          <Link to="/courses#ventas" className="course-card-link">
            <div className="course-card">
              <h3>Ventas<br />y<br />Marketing</h3>
            </div>
          </Link>
          
          <Link to="/courses#tecnologia" className="course-card-link">
            <div className="course-card">
              <h3>Tecnología</h3>
            </div>
          </Link>
          
          <Link to="/courses#sector-publico" className="course-card-link">
            <div className="course-card">
              <h3>Sector<br />Público</h3>
            </div>
          </Link>
          
          <Link to="/courses#recursos-humanos" className="course-card-link">
            <div className="course-card">
              <h3>Recursos<br />humanos</h3>
            </div>
          </Link>
          
          <Link to="/courses#finanzas" className="course-card-link">
            <div className="course-card">
              <h3>Finanzas</h3>
            </div>
          </Link>
          
          <Link to="/courses#emprendimiento" className="course-card-link">
            <div className="course-card">
              <h3>Emprendimiento</h3>
            </div>
          </Link>
          
          <Link to="/courses#habilidades" className="course-card-link">
            <div className="course-card">
              <h3>Habilidades<br />y<br />Desarrollo Personal</h3>
            </div>
          </Link>

          <Link to="/courses#programas" className="course-card-link">
             <div className="course-card">
              <h3>Programas</h3>
             </div>
        </Link>
        </div>

        <Link to="/courses">
          <button className="view-more-button">Ver más cursos</button>
        </Link>
      </section>

      

      {/* Sección 3: ¿Por qué estudiar en Via Talento? */}
      <section className="why-section">
        <div className="why-content">
          <h2>¿Por qué estudiar en VIATALENTO?</h2>
          <h3>Aprender de la mejor manera</h3>
          <p>
            Los cursos son impartidos por profesionales y expertos en el área
            dando información actualizada y con ejemplos de la vida real que te ayudaran a entender
            de mejor manera en el aprendizaje.
          </p>
        </div>
        <div className="why-image">
          <img src="/assets/PorqueNosotros.png" alt="Persona estudiando" />
        </div>
      </section>

      {/* Sección 4: Nuestros Servicios */}
      <section className="services-section">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <Link to="/services#asesorias" className="service-card-link">
            <div className="service-card">
              <img src="/assets/asesoria.png" alt="Asesorías" />
              <div className="service-overlay">
                <h3>CONSULTORIAS</h3>
              </div>
            </div>
          </Link>
          
          <Link to="/services#mentorias" className="service-card-link">
            <div className="service-card">
              <img src="/assets/mentorias.jpg" alt="Mentorías" />
              <div className="service-overlay">
                <h3>MENTORIAS</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;