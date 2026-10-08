/**
 * Prefixes root-relative paths with Astro's configured `base`, so the site
 * works both at a domain root ("/") and under a sub-path such as
 * GitHub Pages' "/quark/".
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  return path.startsWith('/') ? `${base}${path}` : path;
}
