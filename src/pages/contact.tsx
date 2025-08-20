import React, { useRef, type FormEvent, useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import emailjs from 'emailjs-com';
import "../styles/globale.css"
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        "service_ok54hzf", // ID de votre service EmailJS
        "template_5dusnd7", // ID de votre template EmailJS  
        form.current,
        "yrsI1m5TlJc9hDMr2" // Clé publique EmailJS
      );
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="hero-section py-5 bg-light">
        <Container>
          <div className="text-center" data-aos="fade-up">
            <h1 className="display-4 fw-bold mb-4">
               <span >Contactez-nous</span>
            </h1>
            <p className="lead mb-4">
               Rejoignez notre école de danse et découvrez votre passion .
              </p>
            <div className="hero-line mx-auto mb-4"></div>
          </div>
        </Container>
      </div>
  
      {/* Main Contact Section */}
      <><div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 1.5rem'
  }}>
    <div style={{
      backgroundColor: 'white',
      borderRadius: '1.5rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '0'
      }}>

        {/* Contact Form */}
        <div style={{ padding: '3rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Remplissez ce formulaire
            </h2>
          </div>

          {submitStatus === 'success' && (
            <div style={{
              marginBottom: '1.5rem',
              padding: '1rem',
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <CheckCircle style={{ width: '1.25rem', height: '1.25rem', color: '#16a34a' }} />
              <span style={{ color: '#166534' }}>Votre message a été envoyé avec succès !</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div style={{
              marginBottom: '1.5rem',
              padding: '1rem',
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <AlertCircle style={{ width: '1.25rem', height: '1.25rem', color: '#dc2626' }} />
              <span style={{ color: '#991b1b' }}>Une erreur est survenue, veuillez réessayer.</span>
            </div>
          )}

          <form ref={form} onSubmit={sendEmail}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      transition: 'all 0.2s',
                      outline: 'none'
                    }}
                    placeholder="Votre nom"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#9333ea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)';
                    } }
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    } } />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      transition: 'all 0.2s',
                      outline: 'none'
                    }}
                    placeholder="Votre prénom"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#9333ea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)';
                    } }
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    } } />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      transition: 'all 0.2s',
                      outline: 'none'
                    }}
                    placeholder="votre@email.com"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#9333ea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)';
                    } }
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    } } />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      transition: 'all 0.2s',
                      outline: 'none'
                    }}
                    placeholder="+241 "
                    onFocus={(e) => {
                      e.target.style.borderColor = '#9333ea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)';
                    } }
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    } } />
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Style de danse qui vous intéresse
                </label>
                <select
                  name="subject"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                    outline: 'none',
                    backgroundColor: 'white'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#9333ea';
                    e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)';
                  } }
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  } }
                >
                  <option value="">Sélectionnez un style</option>
                  <option value="Danse Classique">Gymnastique</option>
                  <option value="Danse Moderne">Danse </option>
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  placeholder="Parlez-nous de votre expérience en danse, vos objectifs, ou toute question que vous pourriez avoir..."
                  onFocus={(e) => {
                    e.target.style.borderColor = '#9333ea';
                    e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)';
                  } }
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  } }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting ? '#9ca3af' : '#D20F45',
                  color: 'white',
                  padding: '1rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}

              >
                {isSubmitting ? (
                  <>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send style={{ width: '1.25rem', height: '1.25rem' }} />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div style={{
          background: "linear-gradient(90deg,#D20F45,#EFBF04)",
          padding: '3rem',
          color: 'white'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Zéro à Héro 
            </h3>
            <p style={{ color: '#e9d5ff' }}>
              Nous sommes ravis de vous accueillir à Zéro A Héro Libreville et de vous offrir une expérience inoubliable dans cet univers qui est le nôtre. 
              Explorer notre site web pour en savoir plus sur nos programmes, nos installations et nos réalisations. Rejoignez-nous et faites partie de la grande famille des Héros, 
              où la croissance et l’innovation sont notre partage.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '0.75rem',
                borderRadius: '0.5rem'
              }}>
                <MapPin style={{ width: '1.5rem', height: '1.5rem' }} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Notre Adresse</h4>
                <p style={{ color: '#e9d5ff', margin: 0 }}>
                  Loc1<br />
                  Libreville, Gabon
                </p>
                <p style={{ color: '#e9d5ff', margin: 0 }}>
                  Loc2<br />
                  Libreville, Gabon
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '0.75rem',
                borderRadius: '0.5rem'
              }}>
                <Phone style={{ width: '1.5rem', height: '1.5rem' }} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Téléphone</h4>
                <p style={{ color: '#e9d5ff', margin: 0 }}>
                  +241 NUM 1<br />
                  +241 NUM 2
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '0.75rem',
                borderRadius: '0.5rem'
              }}>
                <Mail style={{ width: '1.5rem', height: '1.5rem' }} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Email</h4>
                <p style={{ color: '#e9d5ff', margin: 0 }}>mail</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* HORAIRES */}
    <section className="text-center">
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body p-4">
          <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
            <div className="rounded-3 p-2" style={{ background: "linear-gradient(90deg,#D20F45,#EFBF04)" }}>
              <Clock size={28} color="#fff" />
            </div>
            <h3 className="h4 fw-bold mb-0">Horaires d'ouverture</h3>
          </div>

          <div className="rounded-4 p-4" style={{ background: "linear-gradient(90deg,#D20F45,#EFBF04)" }}>
            <div className="display-6 fw-bold mb-1" style={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}>
              08h00 - 20h30
            </div>
            <div className="text-muted">Tous les jours de la semaine</div>
          </div>
        </div>
      </div>
    </section>
  </div><style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
          
          .grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style></>
    </div>
  )
}

export default Contact;