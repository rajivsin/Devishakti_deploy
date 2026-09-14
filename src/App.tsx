import { devis } from './devis';
import panorama from './18-shakti-devis-divine-panorama-v6.webp';

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-om">ॐ</div>
        <h1 className="hero-title">Ashtadasha Shakti Peetha</h1>
        <p className="hero-subtitle">अष्टादश शक्ति पीठ</p>
        <p className="hero-tagline">
          The eighteen divine forms of Devi Shakti, manifest across the sacred Shakti Peethas of Bharat.
          Each goddess embodies a unique aspect of the Divine Mother's boundless power and grace.
        </p>
        <div className="hero-divider">
          <span className="line" />
          <span className="dot" />
          <span className="line" />
        </div>
        <a className="scroll-cue" href="#devis">Scroll to explore</a>
      </header>

      <section className="divine-image-section">
        <h2 className="section-heading">The Divine Panorama</h2>
        <p className="section-subheading">All 18 Forms of the Mother in One Sacred Vision</p>
        <div className="divine-image-frame">
          <img
            className="divine-image"
            src={panorama}
            alt="Divine panorama showing all 18 Shakti Peetha Devis with sacred background"
          />
        </div>
      </section>

      <section id="devis" className="devis-section">
        <h2 className="section-heading">The Eighteen Mothers</h2>
        <p className="section-subheading">Devi &amp; Their Associated Shakti Peethas</p>
        <div className="devis-grid">
          {devis.map((devi) => (
            <article
              key={devi.id}
              className="devi-card"
              style={{ ['--card-accent' as string]: devi.color }}
            >
              <div className="devi-card-header">
                <span className="devi-number">{devi.id}</span>
                <h3 className="devi-name">{devi.name}</h3>
              </div>
              <p className="devi-location">{devi.location}</p>
              <p className="devi-peetha">{devi.shaktiPeetha}</p>
              <p className="devi-description">{devi.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-om">ॐ शक्ति</div>
        <p className="footer-text">Jai Mata Di · Victory to the Divine Mother</p>
      </footer>
    </div>
  );
}
