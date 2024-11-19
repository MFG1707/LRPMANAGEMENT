"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      {/* Header Section */}
      <header style={{ textAlign: 'center', padding: '4rem', backgroundColor: '#222', color: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>Bienvenue chez LE ROND POINT MANAGEMENT</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem', color: '#ddd' }}>
          Nous connectons des marques de renom avec des influenceurs talentueux pour créer des campagnes percutantes et mémorables.
        </p>
        <Link href="/influenceurs">
          <button
            style={{
              padding: '1rem 3rem',
              backgroundColor: '#fff',
              color: '#222',
              fontSize: '1.1rem',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f3f3'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'}
          >
            Découvrez nos Influenceurs
          </button>
        </Link>
      </header>

      {/* About Section */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#222' }}>Pourquoi Choisir Nos Influenceurs ?</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '900px', margin: '0 auto', marginBottom: '3rem', color: '#333' }}>
          Nos influenceurs sont soigneusement sélectionnés pour leur capacité à engager et inspirer leurs audiences. Grâce à des histoires authentiques, une créativité débordante et une connexion unique avec leurs communautés, ils transforment chaque campagne en un succès viral.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ width: '250px', textAlign: 'center' }}>
            <img src="/images/engagement.png" alt="Engagement" style={{ width: '80px', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#222' }}>Engagement Authentique</h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>Nos influenceurs sont des leaders d'opinion passionnés, capables de stimuler des conversations authentiques et d'engager des communautés.</p>
          </div>
          <div style={{ width: '250px', textAlign: 'center' }}>
            <img src="/images/créativité.png" alt="Créativité" style={{ width: '80px', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#222' }}>Créativité Sans Limites</h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>De la conception de contenus visuels captivants à des collaborations sur mesure, nous offrons une créativité sans frontières.</p>
          </div>
          <div style={{ width: '250px', textAlign: 'center' }}>
            <img src="/images/résultats.png" alt="Résultats" style={{ width: '80px', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#222' }}>Résultats Concrets</h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>Chaque campagne menée par nos influenceurs génère des résultats mesurables et tangibles, que ce soit en termes d'engagement ou de conversion.</p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#222' }}>Nos Succès</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '900px', margin: '0 auto', marginBottom: '3rem', color: '#333' }}>
          Découvrez quelques-unes des campagnes les plus réussies que nous avons menées en collaboration avec nos influenceurs.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
          <div style={{ width: '300px', textAlign: 'center' }}>
            <img src="/images/campagne1.jpg" alt="Campagne 1" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} />
            <h3 style={{ fontSize: '1.5rem', marginTop: '1rem', color: '#222' }}>Campagne X</h3>
            <p style={{ fontSize: '1rem', color: '#888' }}>Une collaboration avec des influenceurs du domaine de la mode, atteignant plus de 500K impressions.</p>
          </div>
          <div style={{ width: '300px', textAlign: 'center' }}>
            <img src="/images/campagne2.jpg" alt="Campagne 2" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} />
            <h3 style={{ fontSize: '1.5rem', marginTop: '1rem', color: '#222' }}>Campagne Y</h3>
            <p style={{ fontSize: '1rem', color: '#888' }}>Une campagne réussie dans le secteur du bien-être, générant un taux de conversion de 15%.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#222', color: '#fff' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Prêt à lancer votre prochaine campagne ?</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#ddd' }}>
          Contactez-nous dès aujourd'hui pour collaborer avec nos influenceurs et faire grandir votre marque.
        </p>
        <Link href="/contact">
          <button
            style={{
              padding: '1rem 3rem',
              backgroundColor: '#fff',
              color: '#222',
              fontSize: '1.1rem',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f3f3'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'}
          >
            Contactez-nous
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#222', color: '#fff' }}>
        <p>&copy; 2024 LE ROND POINT. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
