import {
  articlePath,
  assetUrl,
  AUTHOR,
  INQUIRY_EMAIL,
  localizedPath,
  OFFICE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  WHATSAPP_DISPLAY,
  type Lang,
} from '../config/site';
import { ABOUT, ABOUT_EN } from '../config/about';
import type { Guide } from './guides';

/** SITE_URL has no trailing slash; `path` must start with one. */
export function absolute(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Stable graph id so Home / About / articles resolve to one commercial entity. */
export const BUSINESS_ID = `${SITE_URL}/#sourcing-office`;

export function personJsonLd(lang: Lang): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${absolute(localizedPath(lang, '/about'))}#founder`,
    name: AUTHOR.name,
    image: assetUrl(AUTHOR.image),
    jobTitle: ABOUT[lang].author_role,
    description: ABOUT[lang].author_bio,
    worksFor: { '@id': BUSINESS_ID },
  };
}

/** The entity AI engines and Google's E-E-A-T evaluation look for on a sourcing site. */
export function businessJsonLd(): object {
  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: SITE_TAGLINE,
    image: assetUrl(AUTHOR.image),
    telephone: WHATSAPP_DISPLAY,
    address: {
      '@type': 'PostalAddress',
      addressLocality: OFFICE.locality,
      addressRegion: OFFICE.region,
      addressCountry: OFFICE.countryIso,
    },
    geo: { '@type': 'GeoCoordinates', latitude: OFFICE.lat, longitude: OFFICE.lng },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: WHATSAPP_DISPLAY,
      availableLanguage: ['English', 'Russian', 'Arabic'],
    },
    founder: {
      '@type': 'Person',
      name: AUTHOR.name,
      jobTitle: ABOUT_EN.author_role,
      image: assetUrl(AUTHOR.image),
    },
    knowsAbout: [
      'Apparel sourcing agent',
      'Garment quality control',
      'AQL 2.5 inspection',
      'Tech pack development',
      'NNN agreement for manufacturers',
      'CMT factories',
      'MOQ negotiation',
      'Shisanhang wholesale market',
      'Zhongda fabric market',
      'Guangzhou',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sourcing services',
      itemListElement: ABOUT_EN.services.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: { '@type': 'Service', name: s.name, description: s.body },
      })),
    },
  };
  const email = INQUIRY_EMAIL.trim();
  if (email) node.email = email;
  return node;
}

/** AboutPage node: declares the page's main entity to be the business above. */
export function aboutJsonLd(lang: Lang, path: string): object {
  const about = ABOUT[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: absolute(path),
    name: about.meta_title,
    description: about.meta_description,
    inLanguage: lang,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: `${SITE_URL}/` },
    mainEntity: { '@id': BUSINESS_ID },
    about: { '@id': `${absolute(localizedPath(lang, '/about'))}#founder` },
  };
}

export function heroUrl(guide: Guide): string | null {
  const file = guide.data.hero_image;
  return file ? absolute(`/img/articles/${file}`) : null;
}

/** schema.org Article for one guide. */
export function articleJsonLd(guide: Guide, canonicalPath: string): object {
  const { title, description, date, intent, word_count } = guide.data;
  const iso = date.toISOString();
  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: guide.data.lang,
    datePublished: iso,
    dateModified: iso,
    wordCount: word_count,
    articleSection: intent,
    url: absolute(canonicalPath),
    mainEntityOfPage: { '@type': 'WebPage', '@id': absolute(canonicalPath) },
    author: personJsonLd(guide.data.lang),
    publisher: {
      '@type': 'Organization',
      '@id': BUSINESS_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      description: SITE_TAGLINE,
    },
  };
  const image = heroUrl(guide);
  if (image) node.image = [image];
  return node;
}

/** schema.org FAQPage built from the frontmatter `faq` array. */
export function faqJsonLd(guide: Guide): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.data.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/** schema.org CollectionPage for a guides listing. */
export function collectionJsonLd(name: string, path: string, guides: Guide[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    url: absolute(path),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: guides.length,
      itemListElement: guides.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: absolute(articlePath(g.data.lang, g.data.slug)),
      })),
    },
  };
}
