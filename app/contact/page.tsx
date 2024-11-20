"use client";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const preWrittenMessage = `Bonjour, je souhaiterais obtenir des renseignements sur les influenceurs. Nom: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`;

    const whatsappLink = `https://wa.me/+22941120412?text=${encodeURIComponent(preWrittenMessage)}`;

    window.location.href = whatsappLink;
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <header style={{ textAlign: 'center', padding: '4rem', backgroundColor: '#222', color: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contactez-Nous</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
          Nous sommes à votre &eacute;coute pour r&eacute;pondre &agrave; toutes vos questions. Remplissez le formulaire ci-dessous et nous vous r&eacute;pondrons dans les plus brefs d&eacute;lais.
        </p>
      </header>

      <section style={{ padding: '4rem 2rem', backgroundColor: '#f9f9f9', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '600px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', padding: '2rem' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="name" style={{ display: 'block', fontSize: '1.1rem', color: '#222', marginBottom: '0.5rem' }}>Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  color: '#555',
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="email" style={{ display: 'block', fontSize: '1.1rem', color: '#222', marginBottom: '0.5rem' }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  color: '#555',
                }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label htmlFor="message" style={{ display: 'block', fontSize: '1.1rem', color: '#222', marginBottom: '0.5rem' }}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  color: '#555',
                }}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '1rem 3rem',
                  backgroundColor: '#EE2677',
                  color: '#fff',
                  fontSize: '1.1rem',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#d21b63'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#EE2677'}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#222', color: '#fff' }}>
        <p>&copy; 2024 [Nom de l&apos;Agence]. Tous droits r&eacute;serv&eacute;s.</p>
      </footer>
    </div>
  );
}
