import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./i18n/LanguageContext";
import { DarkModeProvider } from "./i18n/DarkModeContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </DarkModeProvider>
  </StrictMode>
);
