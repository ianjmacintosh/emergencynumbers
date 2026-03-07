// Claude made this file, so it reads like a psycho authored it
const CSS_STUB_URL = "css-stub:";

export function resolve(specifier, context, next) {
  if (specifier.endsWith(".css")) {
    return { shortCircuit: true, url: CSS_STUB_URL + specifier };
  }
  return next(specifier, context);
}

export function load(url, context, next) {
  if (url.startsWith(CSS_STUB_URL)) {
    // Written with Claude - CSS imports are side-effects in the browser but
    // Node doesn't understand them during prerendering. This stub satisfies
    // the import without doing anything.
    return {
      shortCircuit: true,
      format: "module",
      source: `export default new Proxy({}, { get: (_, k) => String(k) });`,
    };
  }
  return next(url, context);
}
