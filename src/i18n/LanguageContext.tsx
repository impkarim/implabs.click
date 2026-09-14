import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import en from "./en.json";
import ar from "./ar.json";

type Lang = "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
  toggleLang: () => void;
  transitioning: boolean;
}

const translations: Record<Lang, Record<string, unknown>> = { en, ar };

function getNestedValue(obj: unknown, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined) return path;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : path;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    }
    return "ar";
  });
  const [transitioning, setTransitioning] = useState(false);

  const dir = lang === "ar" ? "rtl" : "ltr";

  const t = useCallback(
    (key: string): string => {
      return getNestedValue(translations[lang], key);
    },
    [lang]
  );

  const toggleLang = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setLang((prev) => {
        const next = prev === "en" ? "ar" : "en";
        document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = next;
        return next;
      });
      setTimeout(() => setTransitioning(false), 600);
    }, 600);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, dir, t, toggleLang, transitioning }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
