
import { useParams, Link, Navigate } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import './CourseDetailPage.css';

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  
  // Obtener los datos del curso
  const course = courseId ? coursesData[courseId as keyof typeof coursesData] : null;
  
  // Si el curso no existe, redirigir
  if (!course) {
    return <Navigate to="/courses" />;
  }

  return (
    <div className="course-detail-page">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="course-hero-content">
          <h1>{course.title}</h1>
          {course.description.map((paragraph, index) => (
            <p key={index} className="course-description">{paragraph}</p>
          ))}
        </div>
        <div className="course-hero-image">
          <img src={course.image} alt={course.title} />
          <Link to={`/register?course=${course.id}`}>
  <button className="enroll-button">Inscribirse</button>
</Link>
        </div>
      </section>

      {/* Features Cards */}
      <section className="course-features">
        <div className="feature-card">
          <img src="/assets/SignoCamara.png" alt="videos" className="info-icon-img" />
          <div className="feature-content">
            <h3>Modalidad 100% virtual</h3>
            <p>El contenido sera visto a la hora de la clase y luego se subira el video de la clase</p>
          </div>
        </div>
        <div className="feature-card">
          <img src="/assets/IconCV.png" alt="CV" className="info-icon-img" />
          <div className="feature-content">
            <h3>Certificado competitivo</h3>
            <p>Al finalizar este curso podras poner en tu CV para ser mas competitivo y con valor curricular nacional</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="course-main-content">
        {/* Left Column */}
        <div className="course-left-column">
          {/* Objetivos del curso */}
          <section className="course-objectives">
            <h2>Objetivos del curso</h2>
            <ul className="objectives-list">
              {course.objectives.map((objective, index) => (
                <li key={index}><span className="bullet">●</span> {objective}</li>
              ))}
            </ul>
            </section>
        </div>

        {/* Right Column */}
        <div className="course-right-column">
          {/* Course Info Box */}
          <div className="course-info-box">
            <div className="info-item">
              <img src="/assets/SignoReloj.png" alt="Reloj" className="info-icon-img" />
              <div>
                <p className="info-label">{course.duration}</p>
                <p className="info-detail">{course.hoursPerWeek}</p>
              </div>
            </div>
            <div className="info-item">
              <img src="/assets/SignoVideos.png" alt="video" className="info-icon-img" />
              <div>
                <p className="info-label">Video clases</p>
                <p className="info-detail">Aprende a través de videos explicativos y lecturas concretas</p>
              </div>
            </div>
            <div className="info-item">
               <img src="/assets/Graduacion.png" alt="Certificado" className="info-icon-img" />
              <div>
                <p className="info-label">Título a certificar</p>
                <p className="info-detail">{course.certificate} certificado por VIATALENTO</p>
              </div>
            </div>
          </div>

          {/* Related Courses */}
          <div className="related-courses">
            <h3>Más cursos de {course.category}</h3>
            {course.relatedCourses.map((relatedId) => {
              const relatedCourse = coursesData[relatedId as keyof typeof coursesData];
              return (
                <Link to={`/course/${relatedId}`} key={relatedId} className="related-course-link">
                  <div className="related-course-card">
                    <div className="related-course-image" style={{backgroundImage: `url(${relatedCourse.image})`}}></div>
                    <div className="related-course-info">
                      <p>{relatedCourse.title}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
            <Link to="/courses" className="see-more-link">Ver más cursos &gt;</Link>
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <section className="certificate-section">
        <div className="certificate-image">
          <img src="/assets/CertificateVT.png" alt="Certificado" />
          <p className="certificate-note">
            Puedes compartir tu Certificado en LinkedIn, en tu currículum impreso o en otros documentos.
          </p>
        </div>
        <div className="certificate-content">
          <h2>Obtenga un certificado de estudios</h2>
          <ul className="certificate-features">
            <li>✓ Validez nacional</li>
            <li className="feature-description">Evidencie su aprendizaje ante cualquier empleador o institución.</li>
            <li>✓ Tareas calificadas</li>
            <li className="feature-description">Reciba calificaciones y observaciones de todas sus actividades resueltas por expertos.</li>
            <li>✓ Asistencia académica</li>
            <li className="feature-description">Solicite asesoría sobre su proceso de certificación.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;