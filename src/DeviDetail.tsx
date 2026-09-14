import type { Devi } from './devis';

interface DeviDetailProps {
  devi: Devi;
  onBack: () => void;
}

export default function DeviDetail({ devi, onBack }: DeviDetailProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${devi.name} — ${devi.shaktiPeetha}`,
    description: devi.longDescription,
    image: devi.image,
    author: { '@type': 'Organization', name: 'Ashtadasha Devi Shakti Sthanam' },
    publisher: { '@type': 'Organization', name: 'Ashtadasha Devi Shakti Sthanam' },
    about: {
      '@type': 'Place',
      name: devi.shaktiPeetha,
      address: devi.location,
    },
    inLanguage: 'en',
  };

  return (
    <div className="app">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="detail-header" style={{ ['--card-accent' as string]: devi.color }}>
        <button className="back-button" onClick={onBack} aria-label="Back to all Devis">
          <span className="back-arrow">←</span>
          <span>Back to All Devis</span>
        </button>
      </header>

      <section className="detail-content">
        <div className="detail-image-frame">
          <img
            className="detail-image"
            src={devi.image}
            alt={`Image of ${devi.name}`}
          />
        </div>

        <div className="detail-info" style={{ ['--card-accent' as string]: devi.color }}>
          <div className="detail-header-row">
            <span className="detail-number">{devi.id}</span>
            <h1 className="detail-name">{devi.name}</h1>
          </div>
          <p className="detail-location">{devi.location}</p>
          <p className="detail-peetha">{devi.shaktiPeetha}</p>
          <div className="detail-divider" />
          <p className="detail-long-description">{devi.longDescription}</p>
          <a
            className="detail-source-link"
            href={devi.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source: {devi.sourceName}
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-om">ॐ शक्ति</div>
        <p className="footer-text">Jai Mata Di · Victory to the Divine Mother</p>
      </footer>
    </div>
  );
}
