"use client";
import styles from './Influenceurs.module.css';
import Image from 'next/image';

export default function Influenceurs() {
  const influenceurs = [
    {
      id: 1,
      name: 'Alain Kenneth',
      photos: ['/images/Alain1.jpg', '/images/Alain2.jpg'],
      atouts: ['Créatif', 'Engageant', 'Authentique'],
      stats: { abonnés: '150K', plateformes: ['Instagram', 'TikTok'] },
      reputation: 'Reconnu pour son professionnalisme et son originalité.',
    },
    {
      id: 2,
      name: 'Ery Ery',
      photos: ['/images/Ery2.jpg', '/images/Ery2.jpg'],
      atouts: ['Énergique', 'Inspirante', 'Motivante'],
      stats: { abonnés: '200K', plateformes: ['YouTube', 'Twitter'] },
      reputation: 'Aimée pour sa transparence et sa proximité avec ses fans.',
    },
    {
      id: 3,
      name: 'Jules Citronné',
      photos: ['/images/Jules1.jpg', '/images/Jules2.jpg'],
      atouts: ['Drôle', 'Original', 'Spontané'],
      stats: { abonnés: '120K', plateformes: ['Facebook', 'Instagram'] },
      reputation: 'Connu pour son humour et sa créativité.',
    },
    {
        id: 4,
        name: 'Eden Food',
        photos: ['/images/EDEN1.jpeg'],
        atouts: ['Drôle', 'Original', 'Spontané'],
        stats: { abonnés: '120K', plateformes: ['Facebook', 'Instagram'] },
        reputation: 'Connu pour son humour et sa créativité.',
      },
      {
        id: 5,
        name: 'OYONO',
        photos: ['/images/OYONO1.jpg', '/images/OYONO2.jpeg'],
        atouts: ['Drôle', 'Original', 'Spontané'],
        stats: { abonnés: '120K', plateformes: ['Facebook', 'Instagram'] },
        reputation: 'Connu pour son humour et sa créativité.',
      },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Nos Influenceurs</h1>
        <p>Découvrez nos influenceurs talentueux qui transforment vos campagnes en succès.</p>
      </header>

      <div className={styles.slider}>
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

      <footer className={styles.footer}>
        <p>&copy; 2024 LE ROND POINT MANAGEMENT - Tous droits réservés.</p>
      </footer>
    </div>
  );
}
