import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import CreditsPage from "./pages/Credits";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CreditsPage />
  </StrictMode>,
);
