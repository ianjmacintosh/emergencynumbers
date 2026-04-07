// Window mock must precede app imports
type WindowMock = {
  location: { pathname: string };
  addEventListener: () => void;
  removeEventListener: () => void;
  dispatchEvent: () => void;
};
type HistoryMock = { pushState: () => void };
(globalThis as unknown as { window: WindowMock }).window = {
  location: { pathname: "/" },
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => {},
};
(globalThis as unknown as { history: HistoryMock }).history = {
  pushState: () => {},
};
(globalThis as unknown as { document: { cookie: string } }).document = {
  cookie: "",
};

const { renderToStaticMarkup } = await import("react-dom/server");
const { createElement, StrictMode } = await import("react");
const { default: App } = await import("../src/components/App/App.tsx");
const { COUNTRY_NAMES } = await import("../src/constants/index.ts");
import fs from "fs";
import path from "path";

await import("./validate-phone-numbers.ts");

const distDir = path.resolve("dist/client");
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

const BASE_URL = "https://emergencynumbers.info";

for (const [code] of Object.entries(COUNTRY_NAMES)) {
  const lc = code.toLowerCase();
  (globalThis as unknown as { window: WindowMock }).window.location.pathname =
    `/${lc}/`;
  const html = renderToStaticMarkup(
    createElement(StrictMode, null, createElement(App)),
  );
  const countryName = COUNTRY_NAMES[code as keyof typeof COUNTRY_NAMES];
  const page = template
    .replaceAll("%COUNTRY_NAME%", countryName)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  fs.mkdirSync(path.join(distDir, lc), { recursive: true });
  fs.writeFileSync(path.join(distDir, lc, "index.html"), page);
}
console.log(`Prerendered ${Object.keys(COUNTRY_NAMES).length} pages.`);

const staticUrls = [
  `${BASE_URL}/`,
  `${BASE_URL}/about/`,
  `${BASE_URL}/terms/`,
  `${BASE_URL}/credits/`,
];
const countryUrls = Object.keys(COUNTRY_NAMES).map(
  (code) => `${BASE_URL}/${code.toLowerCase()}/`,
);
const allUrls = [...staticUrls, ...countryUrls];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
console.log(`Generated sitemap.xml with ${allUrls.length} URLs.`);
