import { articlePath, SITE_NAME, SITE_TAGLINE, SITE_URL } from '../config/site';
import type { Guide } from './guides';

/** SITE_URL has no trailing slash; `path` must start with one. */
export function absolute(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
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
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL + '/' },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL + '/',
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
