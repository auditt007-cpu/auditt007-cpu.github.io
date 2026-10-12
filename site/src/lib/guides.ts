import { getCollection, type CollectionEntry } from 'astro:content';
import { articlePath, isLang, LANGS, type Lang } from '../config/site';

export type Guide = CollectionEntry<'guides'>;

/** Every guide in the collection, newest first. */
export async function allGuides(): Promise<Guide[]> {
  const all = await getCollection('guides');
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** All guides for one language, newest first. */
export async function guidesForLang(lang: string): Promise<Guide[]> {
  const all = await getCollection('guides', (e) => e.data.lang === lang);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Guides for a logical slug across all languages. */
export async function guidesBySlug(slug: string): Promise<Guide[]> {
  return getCollection('guides', (e) => e.data.slug === slug);
}

/** The version of `slug` written in `lang`, or undefined when that translation is missing. */
export async function guideInLang(slug: string, lang: Lang): Promise<Guide | undefined> {
  const versions = await guidesBySlug(slug);
  return versions.find((g) => g.data.lang === lang);
}

/** hreflang alternates for a slug: only the translations that actually exist. */
export function alternatesFor(versions: Guide[]): Array<{ lang: Lang; path: string }> {
  return LANGS.map((lang) => {
    const found = versions.find((g) => g.data.lang === lang && isLang(g.data.lang));
    return found ? { lang, path: articlePath(lang, found.data.slug) } : null;
  }).filter((a): a is { lang: Lang; path: string } => a !== null);
}

export const FUNNEL_ORDER = ['bottom', 'mid', 'top'] as const;

export function groupByFunnel(guides: Guide[]): Array<[string, Guide[]]> {
  return FUNNEL_ORDER.map((f) => [f, guides.filter((g) => g.data.funnel === f)] as [string, Guide[]]);
}

/** Every (lang, slug) pair present in the collection, for getStaticPaths. */
export async function slugLangPairs(): Promise<Array<{ lang: Lang; slug: string }>> {
  const seen = new Set<string>();
  const out: Array<{ lang: Lang; slug: string }> = [];
  for (const g of await getCollection('guides')) {
    if (!isLang(g.data.lang)) continue;
    const key = `${g.data.lang}:${g.data.slug}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ lang: g.data.lang, slug: g.data.slug });
  }
  return out;
}

