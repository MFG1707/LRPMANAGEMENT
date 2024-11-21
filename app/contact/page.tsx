"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const preWrittenMessage = `Bonjour, je souhaiterais obtenir des renseignements sur les influenceurs. Nom: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`;

    const whatsappLink = `https://wa.me/+22941120412?text=${encodeURIComponent(
      preWrittenMessage
    )}`;

    window.location.href = whatsappLink;
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      <header className="header">
        <h1>Contactez-Nous</h1>
        <p>
          Nous sommes à votre &eacute;coute pour r&eacute;pondre &agrave; toutes
          vos questions. Remplissez le formulaire ci-dessous et nous vous
          r&eacute;pondrons dans les plus brefs d&eacute;lais.
        </p>
      </header>

      <section className="form-section">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
              />
            </div>

            <div className="form-actions">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 LE ROND-POINT MANAGEMENT. Tous droits r&eacute;serv&eacute;s.</p>
      </footer>

      <style jsx>{`
        .header {
          text-align: center;
          padding: 4rem;
          background-color: #222;
          color: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .header h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .header p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          margin-bottom: 2rem;
        }

        .form-section {
          padding: 4rem 2rem;
          background-color: #f9f9f9;
          display: flex;
          justify-content: center;
        }

        .form-container {
          width: 100%;
          max-width: 600px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-size: 1.1rem;
          color: #222;
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          color: #555;
        }

        .form-actions {
          text-align: center;
        }

        .form-actions button {
          padding: 1rem 3rem;
          background-color: #ee2677;
          color: #fff;
          font-size: 1.1rem;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .form-actions button:hover {
          background-color: #d21b63;
        }

        .form-actions button:disabled {
          cursor: not-allowed;
          background-color: #888;
        }

        .footer {
          text-align: center;
          padding: 2rem;
          background-color: #222;
          color: #fff;
        }

        @media (max-width: 768px) {
          .header {
            padding: 2rem;
          }

          .header h1 {
            font-size: 2rem;
          }

          .form-section {
            padding: 2rem 1rem;
          }

          .form-container {
            padding: 1.5rem;
          }

          .form-group label {
            font-size: 1rem;
          }

          .form-group input,
          .form-group textarea {
            font-size: 0.9rem;
            padding: 0.8rem;
          }

          .form-actions button {
            font-size: 1rem;
            padding: 0.8rem 2rem;
          }
        }

        @media (max-width: 480px) {
          .header {
            padding: 1.5rem;
          }

          .header h1 {
            font-size: 1.5rem;
          }

          .form-section {
            padding: 1.5rem 0.5rem;
          }

          .form-group input,
          .form-group textarea {
            font-size: 0.85rem;
            padding: 0.6rem;
          }

          .form-actions button {
            font-size: 0.9rem;
            padding: 0.7rem 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
