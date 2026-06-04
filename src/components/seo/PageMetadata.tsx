import { useEffect } from 'react';
import {
  SITE_DESCRIPTION,
  SITE_LOGO_URL,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL,
  getPageTitle,
} from '../../config/site';

type PageMetadataProps = {
  title?: string;
  description?: string;
  path?: string;
};

function upsertMeta(selector: string, key: 'name' | 'property', value: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(key, value);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute('href', href);
}

export default function PageMetadata({
  title = SITE_NAME,
  description = SITE_DESCRIPTION,
  path = '/',
}: PageMetadataProps) {
  useEffect(() => {
    const fullTitle = getPageTitle(title === SITE_NAME || title === 'Home' ? undefined : title);
    const canonicalUrl = new URL(path, SITE_URL).toString();

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_SHORT_NAME);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', SITE_LOGO_URL);
    upsertMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', `${SITE_NAME} logo`);
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', SITE_LOGO_URL);
    upsertMeta('meta[name="theme-color"]', 'name', 'theme-color', '#b90d0d');
    upsertLink('canonical', canonicalUrl);
    upsertLink('icon', SITE_LOGO_URL);
    upsertLink('apple-touch-icon', SITE_LOGO_URL);
  }, [description, path, title]);

  return null;
}
