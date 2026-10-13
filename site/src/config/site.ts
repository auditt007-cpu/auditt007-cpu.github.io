export const LANGS = ['en', 'ru', 'ar'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'en';

export const SITE_NAME: string = import.meta.env.PUBLIC_SITE_NAME ?? 'Shun Sourcing';

export const SITE_URL: string = (
  import.meta.env.PUBLIC_SITE_URL ?? 'https://auditt007-cpu.github.io/'
).replace(/\/+$/, '');

export const INQUIRY_EMAIL: string = import.meta.env.PUBLIC_INQUIRY_EMAIL ?? '';

export const SITE_TAGLINE =
  'On-the-ground garment sourcing in Guangzhou: supplier vetting, sampling, tech packs and QC — written for buyers who ship real orders.';

/** Digits only, full international format — WhatsApp's wa.me links reject '+', spaces and dashes. */
export const WHATSAPP_NUMBER = '8618551214583';
export const WHATSAPP_DISPLAY = '+86 185 5121 4583';

export function whatsappUrl(prefill?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return prefill ? `${base}?text=${encodeURIComponent(prefill)}` : base;
}

/** City-level only: the office street address is deliberately not published. */
export const OFFICE = {
  locality: 'Guangzhou',
  region: 'Guangdong',
  country: 'China',
  countryIso: 'CN',
  lat: 23.1291,
  lng: 113.2644,
} as const;

export const AUTHOR = {
  name: 'Shun',
  image: '/img/author.jpg',
} as const;

/** Absolute URL for a file under public/ — SITE_URL carries no trailing slash. */
export function assetUrl(relPath: string): string {
  return `${SITE_URL}/${relPath.replace(/^\/+/, '')}`;
}

export function isLang(v: string): v is Lang {
  return (LANGS as readonly string[]).includes(v);
}

/** Localized root path for a logical page. `path` starts with '/' (page) or '/guides/<slug>' style. */
export function localizedPath(lang: Lang, path: string): string {
  const clean = path === '/' ? '' : path;
  if (lang === DEFAULT_LANG) return clean ? `/${clean.replace(/^\/+/, '')}/` : '/';
  return `/${lang}${clean ? '/' + clean.replace(/^\/+/, '') : ''}/`;
}

export function articlePath(lang: Lang, slug: string): string {
  return localizedPath(lang, `/guides/${slug}`);
}
