// Window mock must precede app imports
(globalThis as any).window = {
  location: { pathname: "/" },
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => {},
};
(globalThis as any).history = { pushState: () => {} };

const { renderToStaticMarkup } = await import("react-dom/server");
const { createElement, StrictMode } = await import("react");
const { default: App } = await import("../src/components/App/App.tsx");
const { COUNTRY_NAMES } = await import("../src/constants/index.ts");
import fs from "fs";
import path from "path";

const distDir = path.resolve("dist/client");
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

for (const [code] of Object.entries(COUNTRY_NAMES)) {
  const lc = code.toLowerCase();
  (globalThis as any).window.location.pathname = `/${lc}/`;
  const html = renderToStaticMarkup(
    createElement(StrictMode, null, createElement(App)),
  );
  const page = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`,
  );
  fs.mkdirSync(path.join(distDir, lc), { recursive: true });
  fs.writeFileSync(path.join(distDir, lc, "index.html"), page);
}
console.log(`Prerendered ${Object.keys(COUNTRY_NAMES).length} pages.`);
