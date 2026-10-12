import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { articlePath, SITE_NAME, SITE_TAGLINE, SITE_URL } from '../config/site';
import { guidesForLang } from '../lib/guides';
import { absolute } from '../lib/seo';

export const prerender = true;

const FEED_TITLE = `${SITE_NAME} — Guangzhou sourcing guides`;

/** English feed; translated posts live under /ru/ and /ar/ and are reachable from the listings. */
export async function GET(_context: APIContext) {
  const guides = await guidesForLang('en');
  return rss({
    title: FEED_TITLE,
    description: SITE_TAGLINE,
    site: `${SITE_URL}/`,
    customData: '<language>en</language>',
    items: guides.map((g) => {
      const link = absolute(articlePath('en', g.data.slug));
      return {
        title: g.data.title,
        description: g.data.description,
        pubDate: g.data.date,
        link,
        categories: [g.data.funnel, g.data.intent, ...g.data.keywords],
        author: SITE_NAME,
        commentsUrl: g.data.comment_url,
        source: { url: new URL(g.data.source_url).origin, title: 'YouTube' },
      };
    }),
  });
}
