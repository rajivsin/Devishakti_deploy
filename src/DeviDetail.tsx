import type { Devi } from './devis';
import panorama from './18-shakti-devis-divine-panorama-v6.webp';

interface DeviDetailProps {
  devi: Devi;
  onBack: () => void;
}

export default function DeviDetail({ devi, onBack }: DeviDetailProps) {
  const cellWidth = 100 / 6;
  const cellHeight = 100 / 3;
  const left = (devi.gridPosition.col - 1) * cellWidth;
  const top = (devi.gridPosition.row - 1) * cellHeight;

  return (
    <div className="app">
      <header className="detail-header" style={{ ['--card-accent' as string]: devi.color }}>
        <button className="back-button" onClick={onBack} aria-label="Back to all Devis">
          <span className="back-arrow">←</span>
          <span>Back to All Devis</span>
        </button>
      </header>

      <section className="detail-content">
        <div className="detail-image-frame">
          <div
            className="detail-image-crop"
            style={{
              backgroundImage: `url(${panorama})`,
              backgroundPosition: `${left}% ${top}%`,
              backgroundSize: `${6 * 100}% ${3 * 100}%`,
            }}
            aria-label={`Image of ${devi.name}`}
            role="img"
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
