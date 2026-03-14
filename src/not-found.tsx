import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotFoundPage />
  </StrictMode>,
);
