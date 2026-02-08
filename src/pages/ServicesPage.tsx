import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Servicio 1: Consultorias */}
      <section className="service-section">
        <div className="service-content">
          <h2>Consultorias</h2>
          <p>
            Tienes una idea, un proyecto o un desafío educativo/profesional pero no sabes exactamente por dónde empezar o cómo estructurarlo?
          </p>
          <p>
            Nuestro servicio de Asesorías Personalizadas está diseñado para ser tu brújula. No te ofrecemos cursos genéricos, sino sesiones uno a uno con expertos que se sumergen en tu situación específica. Juntos, analizamos tu punto de partida, definimos el objetivo claro y trazamos un plan de acción concreto, paso a paso.
          </p>
          <Link to="/contact">
            <button className="contact-button">Contactar</button>
          </Link>
        </div>
        <div className="service-image">
          <img src="/assets/asesoria.png" alt="Asesorías" />
        </div>
      </section>

      {/* Servicio 2: Mentorías */}
      <section className="service-section reverse">
        <div className="service-content">
          <h2>Mentorias</h2>
          <h3>Tu Éxito, Nuestra Meta Diaria</h3>
          <p>
            No te ofrecemos atajos milagrosos ni fórmulas secretas.
            Te ofrecemos algo más valioso en tiempos de incertidumbre: un proceso probado, un acompañamiento humano y la claridad para pasar de la parálisis a la acción. 
            Porque el camino más corto entre dos puntos no es siempre una línea recta, sino la ruta mejor guiada
          </p>
          <Link to="/contact">
            <button className="contact-button">Contactar</button>
          </Link>
        </div>
        <div className="service-image">
          <img src="/assets/mentorias.jpg" alt="Mentorías" />
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;