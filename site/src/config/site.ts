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
