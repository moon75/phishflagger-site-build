// Prefixes a root-absolute public-folder path (e.g. "/assets/images/foo.png")
// with the app's deploy base path (import.meta.env.BASE_URL — "/" at the
// domain root, "/phishflaggercopy/" when deployed to that subfolder via
// `vite build --base=/phishflaggercopy/`). Vite already does this
// automatically for imported assets; this is only needed for hardcoded
// absolute path STRINGS (src="/assets/...") that bypass Vite's asset
// pipeline entirely.
export function publicPath(path) {
  const base = import.meta.env.BASE_URL; // e.g. "/" or "/phishflaggercopy/"
  return base.replace(/\/$/, "") + path;
}
