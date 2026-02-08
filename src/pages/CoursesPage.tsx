import './CoursesPage.css';
import { Link } from 'react-router-dom';


const CoursesPage = () => {
  return (
    <div className="courses-page">
      {/* Header */}
      <section className="courses-header">
        <p className="header-subtitle">
          Desarrolla tu potencial con nuestros cursos profesionales<br />
          inscríbete y comienza tu camino al éxito
        </p>
        <h1>CATEGORIAS</h1>
        
        <div className="categories-grid">
          <a href="#ventas" className="category-card">
            <h3>Ventas<br />y<br />Marketing</h3>
          </a>
          <a href="#tecnologia" className="category-card">
            <h3>Tecnología</h3>
          </a>
          <a href="#sector-publico" className="category-card">
            <h3>Sector<br />Público</h3>
          </a>
          <a href="#finanzas" className="category-card">
            <h3>Finanzas</h3>
          </a>
          <a href="#recursos-humanos" className="category-card">
            <h3>Recursos<br />humanos</h3>
          </a>
          <a href="#habilidades" className="category-card">
            <h3>Habilidades<br />y<br />Desarrollo Personal</h3>
          </a>
          <a href="#emprendimiento" className="category-card">
            <h3>Emprendimiento</h3>
          </a>
          <a href="#programas" className="category-card">
            <h3>Programas</h3>
          </a>
        </div>
      </section>

      {/* Ventas y Marketing */}
      {/*
      <section id="ventas" className="course-category-section">
        
        <h2>Ventas y Marketing</h2>
        <div className="courses-list">
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Tecnología */}
      {/*}
      <section id="tecnologia" className="course-category-section">
        <h2>Tecnología</h2>
        <div className="courses-list">
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
        </div>
      </section>
*/}

      {/* Sector Público */}
      {/*}
      <section id="sector-publico" className="course-category-section">
        <h2>Sector Publico</h2>
        <div className="courses-list">
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Finanzas */}
      <section id="finanzas" className="course-category-section">
        <h2>Finanzas</h2>
        <div className="courses-list">
          {/* Curso 1: Asesor de Créditos */}
          <Link to="/course/asesor-creditos" className="course-item-link">
            <div className="course-item">
              <img src="/assets/ImagCourses/AsesorCreditos.jpg" alt="Asesor de créditos" className="course-image" />
              <div className="course-info">
                <h3>Asesor de créditos</h3>
                <p className="course-certificate">Titulo o Certificado:</p>
                <p className="certificate-name">Asesor de creditos</p>
              </div>
            </div>
          </Link>

          {/* Curso 2: Atención y Plataforma */}
          <Link to="/course/atencion-plataforma" className="course-item-link">
            <div className="course-item">
              <img src="/assets/ImagCourses/AtencionPlataforma.png" alt="Atención y plataforma" className="course-image" />
              <div className="course-info">
                <h3>Atención y plataforma</h3>
                <p className="course-certificate">Titulo o Certificado:</p>
                <p className="certificate-name">Atención y plataforma</p>
              </div>
            </div>
          </Link>

          {/* Curso 3: Cajero Bancario */}
          <Link to="/course/cajero-bancario" className="course-item-link">
            <div className="course-item">
              <img src="/assets/ImagCourses/CajeroBancario.jpg" alt="Cajero Bancario" className="course-image" />
              <div className="course-info">
                <h3>Cajero Bancario</h3>
                <p className="course-certificate">Titulo o Certificado:</p>
                <p className="certificate-name">Cajero Bancario</p>
              </div>
            </div>
          </Link>

          {/* Curso 4: Gestor de Cobranza */}
          <Link to="/course/gestor-cobranza" className="course-item-link">
            <div className="course-item">
              <img src="/assets/ImagCourses/GestorCobranza.jpg" alt="Gestor Cobranza" className="course-image" />
              <div className="course-info">
                <h3>Gestor de Cobranza y Recuperacion de cartera</h3>
                <p className="course-certificate">Titulo o Certificado:</p>
                <p className="certificate-name">Gestor de Cobranza y Recuperacion de cartera</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recursos Humanos */}
      {/*}
      <section id="recursos-humanos" className="course-category-section">
        <h2>Recursos humanos</h2>
        <div className="courses-list">
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
        </div>
      </section>
*/}
      {/* Habilidades y Desarrollo Personal */}
      {/*}
      <section id="habilidades" className="course-category-section">
        <h2>Habilidades y Desarrollo Personal</h2>
        <div className="courses-list">
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Emprendimiento */}
      {/*}
      <section id="emprendimiento" className="course-category-section">
        <h2>Emprendimiento</h2>
        <div className="courses-list">
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image-placeholder"></div>
            <div className="course-info">
              <h3>Nombre del Curso</h3>
              <p className="course-certificate">titulo o certificado:</p>
              <p className="certificate-name">Nombre del Certificado</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Programas */}
      <section id="programas" className="course-category-section">
        <h2>Programas</h2>
        <div className="courses-list">
          <div className="course-item">
            <img src="/assets/ImagCourses/VIATALENTOPNG2.png" alt="programa1" className="course-image" />
            <div className="course-info">
              <h3>ESPECIALIZACIÓN EN OPERACIONES BANCARIAS Y GESTIÓN FINANCIERA</h3>
              <p className="course-certificate">titulo</p>
              <p className="certificate-name">Especializacion en Operaciones bancarias y Gestion financiera</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona la Escuela de VIATALENTO */}
      <section className="how-it-works">
        <h2 className="how-title">
          Como funciona la<br />
          <span className="viatalento-highlight">Escuela de VIATALENTO</span>?
        </h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <p>Inscribite al curso de tu interes llenando el formulario y realiza el pago</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p>luego de realizar el formulario accede a nuestro campus virtual</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p>Completa el examen que hay al final de cada curso y obten tu certificado</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;