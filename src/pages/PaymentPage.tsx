import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Copy, Check, MessageCircle, Home } from 'lucide-react';
import './PaymentPage.css';

interface Registration {
  id: string;
  nombre: string;
  apellidos: string;
  ci: string;
  celular: string;
  email: string;
  curso_nombre: string;
  curso_precio: number;
}

const PaymentPage = () => {
  const { registrationId } = useParams<{ registrationId: string }>();
  const navigate = useNavigate();
  const [registration, setRegistration] = useState<Registration | null>(null);
  const [loading, setLoading] = useState(true);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegistration = async () => {
      if (!registrationId) {
        navigate('/courses');
        return;
      }

      try {
        const { data, error } = await supabase
          .from('inscripciones')
          .select('*')
          .eq('id', registrationId)
          .single();

        if (error) throw error;
        setRegistration(data);
      } catch (error) {
        console.error('Error:', error);
        navigate('/courses');
      } finally {
        setLoading(false);
      }
    };

    fetchRegistration();
  }, [registrationId, navigate]);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '59174800617'; // Tu número de WhatsApp
    const message = `Hola, acabo de realizar el pago para el curso: ${registration?.curso_nombre}
    
Datos de inscripción:
- Nombre: ${registration?.nombre} ${registration?.apellidos}
- CI: ${registration?.ci}
- Email: ${registration?.email}
- Monto: Bs. ${registration?.curso_precio}

Adjunto el comprobante de pago.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  if (loading) {
    return (
      <div className="payment-loading">
        <p>Cargando información del pago...</p>
      </div>
    );
  }

  if (!registration) return null;

  return (
    <div className="payment-page">
      <div className="payment-container">
        {/* Header */}
        <div className="payment-header">
          <h1 className="payment-title">Opciones de pago</h1>
          <p className="payment-subtitle">Pagos 100% seguros</p>
        </div>

        {/* Información del curso */}
        <div className="course-payment-info">
          <h3>Detalles de tu inscripción</h3>
          <div className="course-details">
            <p><strong>Curso:</strong> {registration.curso_nombre}</p>
            <p><strong>Estudiante:</strong> {registration.nombre} {registration.apellidos}</p>
            <p><strong>Monto a pagar:</strong> <span className="price">Bs. {registration.curso_precio}</span></p>
          </div>
        </div>

        {/* Grid principal */}
        <div className="payment-grid">
          {/* Sección 1: Depósitos Bancarios */}
          <div className="payment-card">
            <div className="payment-card-header">
              <h2>Depósitos</h2>
            </div>

            <div className="payment-method">
              <h3 className="payment-method-name">Via Talento SRL</h3>

              <div className="payment-fields">
                {/* Banco */}
                <div className="payment-field">
                  <label>Banco</label>
                  <div className="field-value">
                    <span className="field-text">BANCO UNION</span>
                  </div>
                </div>

                {/* Número de cuenta */}
                <div className="payment-field">
                  <label>N° cuenta</label>
                  <button 
                    className="copy-button"
                    onClick={() => handleCopy('100000049030238', 'account')}
                  >
                    <span className="account-number">100000049030238</span>
                    {copiedField === 'account' ? (
                      <Check className="icon-check" />
                    ) : (
                      <Copy className="icon-copy" />
                    )}
                  </button>
                </div>

                {/* Representante legal */}
                <div className="payment-field">
                  <label>Representante legal</label>
                  <div className="field-value">
                    <span className="field-text-small">Justo F. Romero Zambrana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección 2: Pago QR */}
          <div className="payment-card">
            <div className="qr-header">
              <h2>PAGO QR</h2>
              <p className="qr-subtitle">Escanea el código para realizar tu pago</p>
            </div>

            <div className="qr-container">
              <div className="qr-image">
                <img src="/assets/ImagCourses/QRCursos.jpg" alt="QR de Pago" />
              </div>

              <div className="qr-info">
                <p className="qr-bank"> Justo F. Romero Zambrana</p>
                <p> Asunto: Cursos VIATALENTO SRL</p>
                <div className="qr-details">
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner de advertencia */}
        <div className="warning-banner">
          <p className="warning-text">
            Una vez realizada la transacción favor de enviar el comprobante
            <br />
            <span className="warning-highlight">caso contrario este no sera válido</span>
          </p>
        </div>

        {/* Botones de acción */}
        <div className="action-buttons">
          <button className="whatsapp-button" onClick={handleWhatsApp}>
            <MessageCircle className="button-icon" />
            <span>Enviar Comprobante por WhatsApp</span>
          </button>

          <Link to="/" className="home-button-link">
            <button className="home-button">
              <Home className="button-icon" />
              <span>Volver al inicio</span>
            </button>
          </Link>
        </div>

        {/* Footer */}
        <div className="payment-footer">
          <p>Todas las transacciones están protegidas con seguridad de banco</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;