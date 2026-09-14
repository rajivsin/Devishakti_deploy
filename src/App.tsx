import { useState, useEffect, useCallback } from 'react';
import { devis, getDeviBySlug } from './devis';
import DeviDetail from './DeviDetail';
import { setLandingPageMeta, setDeviMeta } from './seo';

const BASE = '/Devishakti_deploy/';

function getCurrentSlug(): string | null {
  if (window.location.hash && window.location.hash.length > 1) {
    return window.location.hash.slice(1);
  }
  const path = window.location.pathname;
  const prefix = BASE.endsWith('/') ? BASE : BASE + '/';
  if (!path.startsWith(prefix)) return null;
  const rest = path.slice(prefix.length).replace(/\/+$/, '');
  if (!rest) return null;
  return rest;
}

function navigateToSlug(slug: string | null) {
  const url = slug ? `${BASE}${slug}` : BASE;
  if (window.location.hash) {
    window.history.replaceState({}, '', BASE);
  }
  window.history.pushState({}, '', url);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export default function App() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  useEffect(() => {
    setSelectedSlug(getCurrentSlug());
  }, []);

  useEffect(() => {
    const onPop = () => setSelectedSlug(getCurrentSlug());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const selectedDevi = selectedSlug
    ? getDeviBySlug(selectedSlug) ?? null
    : null;

  const handleSelect = useCallback((slug: string) => {
    navigateToSlug(slug);
  }, []);

  const handleBack = useCallback(() => {
    navigateToSlug(null);
  }, []);

  useEffect(() => {
    if (selectedDevi) {
      setDeviMeta(selectedDevi);
    } else {
      setLandingPageMeta();
    }
  }, [selectedDevi]);

  if (selectedDevi) {
    return <DeviDetail devi={selectedDevi} onBack={handleBack} />;
  }

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-om">ॐ</div>
        <h1 className="hero-title">Ashtadasha Devi Shakti Sthanam</h1>
        <p className="hero-subtitle">अष्टादश देवी शक्ति स्थानम्</p>
        <p className="hero-tagline">
          The eighteen divine forms of Devi Shakti, manifest across the sacred Shakti Sthanam of Bharat.
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
        <div className="divine-grid">
          {devis.map((devi) => (
            <button
              key={devi.id}
              className="divine-tile"
              style={{ ['--card-accent' as string]: devi.color }}
              onClick={() => handleSelect(devi.slug)}
              aria-label={`View ${devi.name}`}
            >
              <div className="divine-tile-image-frame">
                <img
                  className="divine-tile-image"
                  src={devi.image}
                  alt={`Image of ${devi.name}`}
                />
              </div>
              <div className="divine-tile-label">
                <span className="divine-tile-number">{devi.id}</span>
                <span className="divine-tile-name">{devi.name}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="devis" className="devis-section">
        <h2 className="section-heading">The Eighteen Mothers</h2>
        <p className="section-subheading">Click any Devi to learn more · Devi &amp; Their Associated Shakti Peethas</p>
        <div className="devis-grid">
          {devis.map((devi) => (
            <article
              key={devi.id}
              className="devi-card"
              style={{ ['--card-accent' as string]: devi.color }}
              onClick={() => handleSelect(devi.slug)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelect(devi.slug);
                }
              }}
            >
              <div className="devi-card-header">
                <span className="devi-number">{devi.id}</span>
                <h3 className="devi-name">{devi.name}</h3>
              </div>
              <p className="devi-location">{devi.location}</p>
              <p className="devi-peetha">{devi.shaktiPeetha}</p>
              <p className="devi-description">{devi.description}</p>
              <span className="devi-card-cta">Read more →</span>
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
