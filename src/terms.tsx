import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import TermsPage from "./pages/Terms";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TermsPage />
  </StrictMode>,
);
