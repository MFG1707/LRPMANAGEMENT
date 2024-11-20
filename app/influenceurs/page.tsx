"use client";
import styles from './Influenceurs.module.css'; // Import styles for better organization
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Icon library

export default function Influenceurs() {
  const influenceurs = [
    {
      id: 1,
      name: 'John Doe',
      photos: ['/images/johndoe1.jpg', '/images/johndoe2.jpg'],
      atouts: ['Créatif', 'Engageant', 'Authentique'],
      stats: { abonnés: '150K', plateformes: ['Instagram', 'TikTok'] },
      force: 'Excellent storyteller, capable de captiver un large public.',
      reputation: 'Reconnu pour son professionnalisme et son originalité.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      photos: ['/images/janesmith1.jpg', '/images/janesmith2.jpg'],
      atouts: ['Énergique', 'Inspirante', 'Motivante'],
      stats: { abonnés: '200K', plateformes: ['YouTube', 'Twitter'] },
      force: 'Motivatrice avec une grande capacité à influencer les comportements positifs.',
      reputation: 'Aimée pour sa transparence et sa proximité avec ses fans.',
    },
    {
      id: 3,
      name: 'Alex Brown',
      photos: ['/images/alexbrown1.jpg', '/images/alexbrown2.jpg'],
      atouts: ['Drôle', 'Original', 'Spontané'],
      stats: { abonnés: '120K', plateformes: ['Facebook', 'Instagram'] },
      force: 'Spécialiste des contenus viraux.',
      reputation: 'Connu pour son humour et sa créativité.',
    },
    {
      id: 4,
      name: 'Sophia Lee',
      photos: ['/images/sophialee1.jpg', '/images/sophialee2.jpg'],
      atouts: ['Élégante', 'Visionnaire', 'Ambitieuse'],
      stats: { abonnés: '300K', plateformes: ['LinkedIn', 'Instagram'] },
      force: 'Expertise en communication de marque.',
      reputation: 'Admirée pour son style et son leadership.',
    },
    {
      id: 5,
      name: 'Mike Green',
      photos: ['/images/mikegreen1.jpg', '/images/mikegreen2.jpg'],
      atouts: ['Positif', 'Charismatique', 'Bienveillant'],
      stats: { abonnés: '180K', plateformes: ['YouTube', 'Snapchat'] },
      force: 'Capacité à engager les communautés.',
      reputation: 'Respecté pour sa générosité et son impact social.',
    },
    {
      id: 6,
      name: 'Olivia White',
      photos: ['/images/oliviawhite1.jpg', '/images/oliviawhite2.jpg'],
      atouts: ['Audacieuse', 'Créative', 'Tendance'],
      stats: { abonnés: '220K', plateformes: ['Pinterest', 'Instagram'] },
      force: 'Créatrice de tendances dans la mode.',
      reputation: 'Reconnue pour ses campagnes inspirantes.',
    },
    {
      id: 7,
      name: 'Liam Johnson',
      photos: ['/images/liamjohnson1.jpg', '/images/liamjohnson2.jpg'],
      atouts: ['Sportif', 'Motivé', 'Inspirant'],
      stats: { abonnés: '170K', plateformes: ['YouTube', 'TikTok'] },
      force: 'Promoteur d&#39;un mode de vie sain.',
      reputation: 'Apprécié pour son dynamisme et ses conseils fitness.',
    },
    {
      id: 8,
      name: 'Emma Wilson',
      photos: ['/images/emmawilson1.jpg', '/images/emmawilson2.jpg'],
      atouts: ['Artiste', 'Visionnaire', 'Innovante'],
      stats: { abonnés: '250K', plateformes: ['Instagram', 'Twitter'] },
      force: 'Productions artistiques captivantes.',
      reputation: 'Louée pour son originalité et sa passion.',
    },
    {
      id: 9,
      name: 'Noah Martinez',
      photos: ['/images/noahmartinez1.jpg', '/images/noahmartinez2.jpg'],
      atouts: ['Connecté', 'Énergique', 'Créatif'],
      stats: { abonnés: '140K', plateformes: ['Snapchat', 'Instagram'] },
      force: 'Maîtrise des interactions en direct.',
      reputation: 'Populaire pour son engagement avec ses abonnés.',
    },
    {
      id: 10,
      name: 'Isabella Carter',
      photos: ['/images/isabellacarter1.jpg', '/images/isabellacarter2.jpg'],
      atouts: ['Inspirante', 'Persuasive', 'Engagée'],
      stats: { abonnés: '280K', plateformes: ['Instagram', 'YouTube'] },
      force: 'Voix influente pour les causes sociales.',
      reputation: 'Respectée pour son authenticité.',
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
          succès. Faites confiance à leur créativité et leur impact pour atteindre
          vos objectifs.
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
                  <img
                    key={index}
                    src={photo}
                    alt={`${influenceur.name}`}
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
                    <li key={index} className={styles.atoutItem}>
                      ⭐ {atout}
                    </li>
                  ))}
                </ul>
                <p>
                  <strong>Force :</strong> {influenceur.force}
                </p>
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
