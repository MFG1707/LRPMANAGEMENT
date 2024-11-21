"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style jsx>{`
        @media (max-width: 768px) {
          header {
            padding: 2rem 1rem;
          }
          header h1 {
            font-size: 2rem;
          }
          header p {
            font-size: 1rem;
          }
          header button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
          section h2 {
            font-size: 2rem;
          }
          section p {
            font-size: 1rem;
          }
          section div {
            flex-direction: column;
            align-items: center;
          }
          section div > div {
            width: 90%;
          }
        }

        @media (max-width: 480px) {
          header h1 {
            font-size: 1.8rem;
          }
          header p {
            font-size: 0.9rem;
          }
          section h2 {
            font-size: 1.8rem;
          }
          section p {
            font-size: 0.9rem;
          }
          section div > div {
            width: 100%;
          }
        }
      `}</style>

      {/* Header Section */}
      <header style={{
        textAlign: 'center',
        padding: '4rem',
        backgroundColor: '#222',
        color: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>
          Bienvenue chez LE ROND POINT MANAGEMENT
        </h1>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto',
          marginBottom: '2rem',
          color: '#ddd'
        }}>
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
            onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#f3f3f3'}
            onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#fff'}
          >
            Découvrez nos Influenceurs
          </button>
        </Link>
      </header>

      {/* About Section */}
      <section style={{
        textAlign: 'center',
        padding: '4rem 2rem',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#222'
        }}>
          Pourquoi Choisir Nos Influenceurs ?
        </h2>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '900px',
          margin: '0 auto',
          marginBottom: '3rem',
          color: '#333'
        }}>
          Nos influenceurs sont soigneusement sélectionnés pour leur capacité à engager et inspirer leurs audiences.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ width: '250px', textAlign: 'center' }}>
            <img src="/images/engagement.png" alt="Engagement" style={{ width: '80px', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#222' }}>Engagement Authentique</h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>Nos influenceurs stimulent des conversations authentiques.</p>
          </div>
          <div style={{ width: '250px', textAlign: 'center' }}>
            <img src="/images/créativité.png" alt="Créativité" style={{ width: '80px', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#222' }}>Créativité Sans Limites</h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>Collaboration sur mesure, créativité sans frontières.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
