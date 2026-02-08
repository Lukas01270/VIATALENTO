import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { coursesData } from '../data/coursesData';
import './RegisterPage.css';

const RegisterPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const courseId = searchParams.get('course');

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    ci: '',
    celular: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Obtener datos del curso
  const course = courseId ? coursesData[courseId as keyof typeof coursesData] : null;

  // Si no hay curso, redirigir
  useEffect(() => {
    if (!course) {
      navigate('/courses');
    }
  }, [course, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Guardar en Supabase
      const { data, error: supabaseError } = await supabase
        .from('inscripciones')
        .insert([
          {
            nombre: formData.nombre,
            apellidos: formData.apellidos,
            ci: formData.ci,
            celular: formData.celular,
            email: formData.email,
            curso_id: course?.id,
            curso_nombre: course?.title,
            curso_precio: course?.precio,
            estado_pago: 'pendiente'
          }
        ])
        .select();

      if (supabaseError) throw supabaseError;

      // Redirigir a página de pago con el ID de registro
      if (data && data[0]) {
        navigate(`/payment/${data[0].id}`);
      }
    } catch (err: any) {
      console.error('Error:', err);
      setError('Error al procesar el registro. Por favor, intenta nuevamente.');
      setIsSubmitting(false);
    }
  };

  if (!course) return null;

  return (
    <div className="register-page">
      <div className="register-container">
        {/* Logo lado izquierdo */}
        <div className="register-logo">
          <img src="/assets/VIATALENTOPNG2.png" alt="Via Talento Logo" />
        </div>

        {/* Formulario lado derecho */}
        <div className="register-form-container">
          <div className="register-alert">
            ⚠️ Asegúrese de que todos los datos estén bien escritos
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="apellidos">Apellidos</label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="ci">CI</label>
              <input
                type="text"
                id="ci"
                name="ci"
                value={formData.ci}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="celular">Celular</label>
              <div className="phone-input">
                <span className="phone-prefix">+591</span>
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                  placeholder="70123456"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="pay-button" disabled={isSubmitting}>
              <img src="/assets/SignoDolar.png" alt="$" className="dollar-icon" />
              {isSubmitting ? 'Procesando...' : 'Pagar ahora'}
            </button>
          </form>

          {/* Info del curso */}
          <div className="course-info-summary">
            <p><strong>Curso:</strong> {course.title}</p>
            <p><strong>Precio:</strong> Bs. {course.precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;