const stubUrl = new URL("./css-module-stub.js", import.meta.url).href;

export function resolve(specifier, context, next) {
  if (specifier.endsWith(".css")) {
    return { shortCircuit: true, url: stubUrl };
  }
  return next(specifier, context);
}
