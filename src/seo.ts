import type { Devi } from './devis';

const SITE_NAME = 'Ashtadasha Devi Shakti Sthanam';
const SITE_URL = 'https://bolt.new/Devishakti_deploy/';
const DEFAULT_DESCRIPTION =
  'Explore the 18 Maha Shakti Peethas of Bharat — the Ashtadasha Devi Shakti Sthanam. Discover the divine forms of Devi Shakti, their sacred temples, locations, and spiritual significance.';
const DEFAULT_KEYWORDS =
  'Shakti Peetha, Ashtadasha Shakti Peetha, 18 Shakti Peethas, Maha Shakti Pitha, Devi Shakti, Hindu Goddess, Shaktism, Devi temples India, Maa Kamakhya, Maa Vaishno Devi, Maa Mahalakshmi, Maa Mahakali, Maa Chamundeshwari, Maa Jwalamukhi, Maa Vishalakshi, Maa Biraja, Maa Ekaveerika, Maa Bamleshwari, Navratri, Divine Mother, Adi Shakti';

interface MetaConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

function setJsonLd(data: object) {
  let el = document.head.querySelector<HTMLScriptElement>('script[type="application/ld+json"][data-dynamic="true"]');
  if (el) {
    el.textContent = JSON.stringify(data);
  } else {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-dynamic', 'true');
    el.textContent = JSON.stringify(data);
    document.head.appendChild(el);
  }
}

export function updateMeta(config: MetaConfig) {
  const { title, description, keywords, image, url, type = 'website' } = config;
  const fullUrl = url || SITE_URL;
  const img = image || 'https://bolt.new/static/og_default.png';

  document.title = title;

  setMeta('name', 'description', description);
  setMeta('name', 'keywords', keywords || DEFAULT_KEYWORDS);
  setMeta('name', 'author', 'Ashtadasha Devi Shakti Sthanam');
  setMeta('name', 'robots', 'index, follow');
  setMeta('name', 'language', 'English');
  setMeta('name', 'revisit-after', '7 days');

  // Open Graph
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:type', type);
  setMeta('property', 'og:url', fullUrl);
  setMeta('property', 'og:site_name', SITE_NAME);
  setMeta('property', 'og:image', img);
  setMeta('property', 'og:locale', 'en_US');

  // Twitter Card
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', img);

  setCanonical(fullUrl);
}

export function setLandingPageMeta() {
  updateMeta({
    title: 'Ashtadasha Devi Shakti Sthanam · 18 Maha Shakti Peethas',
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    url: SITE_URL,
    type: 'website',
  });

  setJsonLd({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    inLanguage: 'en',
    about: {
      '@type': 'Thing',
      name: 'Ashtadasha Shakti Peethas',
      description: 'The 18 Maha Shakti Peethas of Hindu tradition',
    },
  });
}

export function setDeviMeta(devi: Devi) {
  const url = `${SITE_URL}${devi.slug}`;
  const description = `${devi.name} — ${devi.description} Located at ${devi.shaktiPeetha}. ${devi.longDescription.slice(0, 140)}`;
  const keywords = `${devi.name}, ${devi.slug}, ${devi.shaktiPeetha}, ${devi.location}, Shakti Peetha, 18 Shakti Peethas, Ashtadasha Devi Shakti Sthanam, Hindu Goddess, Devi, Adi Shakti`;

  updateMeta({
    title: `${devi.name} · ${devi.shaktiPeetha} · Ashtadasha Devi Shakti Sthanam`,
    description,
    keywords,
    image: devi.image,
    url,
    type: 'article',
  });

  setJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${devi.name} — ${devi.shaktiPeetha}`,
    description: devi.longDescription,
    image: devi.image,
    url,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    about: {
      '@type': 'Place',
      name: devi.shaktiPeetha,
      address: devi.location,
    },
    keywords,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  });
}
