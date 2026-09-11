/** Prefix public asset paths with Vite `base` (needed on GitHub Pages). */
export function assetUrl(path: string): string {
  const normalized = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}
