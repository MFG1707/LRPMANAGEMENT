"use client";
import styles from './Influenceurs.module.css'; // Import styles for better organization
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Icon library
import Image from 'next/image';

export default function Influenceurs() {
  const influenceurs = [
    {
      id: 1,
      name: 'Alain Kenneth',
      photos: ['/images/Alain1.jpg', '/images/Alain2.jpg'],
      atouts: ['Créatif', 'Engageant', 'Authentique'],
      stats: { abonnés: '150K', plateformes: ['Instagram', 'TikTok'] },
      force: 'Excellent storyteller, capable de captiver un large public.',
      reputation: 'Reconnu pour son professionnalisme et son originalité.',
    },
    {
      id: 2,
      name: 'Ery Ery',
      photos: ['/images/Ery1.jpg', '/images/Ery2.jpg'],
      atouts: ['Énergique', 'Inspirante', 'Motivante'],
      stats: { abonnés: '200K', plateformes: ['YouTube', 'Twitter'] },
      force: 'Motivatrice avec une grande capacité à influencer les comportements positifs.',
      reputation: 'Aimée pour sa transparence et sa proximité avec ses fans.',
    },
    {
      id: 3,
      name: 'Jules Citronné',
      photos: ['/images/Jules1.jpg', '/images/Jules2.jpg'],
      atouts: ['Drôle', 'Original', 'Spontané'],
      stats: { abonnés: '120K', plateformes: ['Facebook', 'Instagram'] },
      force: 'Spécialiste des contenus viraux.',
      reputation: 'Connu pour son humour et sa créativité.',
    },
    {
      id: 4,
      name: 'Reggie Boyzer',
      photos: ['/images/Regie1.jpg', '/images/Regie2.jpg'],
      atouts: ['Élégante', 'Visionnaire', 'Ambitieuse'],
      stats: { abonnés: '300K', plateformes: ['LinkedIn', 'Instagram'] },
      force: 'Expertise en communication de marque.',
      reputation: 'Admirée pour son style et son leadership.',
    },
    {
      id: 5,
      name: 'Edwige La Folle',
      photos: ['/images/Edwige1.jpg', '/images/Edwige2.jpg'],
      atouts: ['Positif', 'Charismatique', 'Bienveillant'],
      stats: { abonnés: '180K', plateformes: ['YouTube', 'Snapchat'] },
      force: 'Capacité à engager les communautés.',
      reputation: 'Respecté pour sa générosité et son impact social.',
    },
  ];

  // Explicitly type the reference to an HTMLElement that supports scrollBy
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Nos Influenceurs</h1>
        <p>
          Découvrez nos influenceurs talentueux qui transforment vos campagnes en
          succès.
        </p>
      </header>

      <div className={styles.sliderContainer}>
        <button className={styles.scrollButton} onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
        <div className={styles.slider} ref={sliderRef}>
          {influenceurs.map((influenceur) => (
            <div key={influenceur.id} className={styles.card}>
              <div className={styles.photos}>
                {influenceur.photos.map((photo, index) => (
                  <Image
                    key={index}
                    src={photo}
                    alt={influenceur.name}
                    width={300}
                    height={300}
                    className={styles.photo}
                  />
                ))}
              </div>
              <h3 className={styles.name}>{influenceur.name}</h3>
              <p className={styles.reputation}>{influenceur.reputation}</p>
              <div className={styles.details}>
                <div className={styles.stats}>
                  <span>👥 {influenceur.stats.abonnés}</span>
                  <span>📱 {influenceur.stats.plateformes.join(', ')}</span>
                </div>
                <h4>Atouts :</h4>
                <ul className={styles.atoutsList}>
                  {influenceur.atouts.map((atout, index) => (
                    <li key={index} className={styles.atoutItem}>⭐ {atout}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.scrollButton} onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 LE ROND POINT MANAGEMENT - Tous droits réservés.</p>
      </footer>
    </div>
  );
}
