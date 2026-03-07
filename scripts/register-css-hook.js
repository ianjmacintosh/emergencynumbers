import { register } from "node:module";
register(new URL("./css-hook.js", import.meta.url).href, import.meta.url);
