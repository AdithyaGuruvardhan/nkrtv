export const SITE_NAME = 'NKR TV Kannada';
export const SITE_SHORT_NAME = 'NKR TV';
export const SITE_URL = 'https://nkrtv.in';
export const SITE_DESCRIPTION =
  'NKR TV Kannada celebrates Karnataka with entertainment, culture, fiction, devotion, blogs, and community-focused programming.';
export const SITE_LOGO_URL = 'https://nkrtv.in/wp-content/uploads/2024/12/cropped-NKR_Logo-3.png';

export function getPageTitle(pageTitle?: string) {
  return pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
}

