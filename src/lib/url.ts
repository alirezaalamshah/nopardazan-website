/**
 * Prefixes a root-relative internal path with the configured Astro `base`.
 * Needed because Astro does not rewrite manually-typed "/x" strings — only
 * `Astro.url`/`astro:assets` output gets the base automatically.
 * Leaves external URLs (http, mailto, tel, //) untouched.
 */
export function withBase(path: string): string {
  if (/^(https?:)?\/\/|^mailto:|^tel:|^#/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
