import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import AboutPage from "./components/AboutPage/AboutPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
);
