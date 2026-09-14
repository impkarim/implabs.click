import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

interface DarkModeContextType {
  dark: boolean;
  toggleDark: () => void;
  themeTransitioning: boolean;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("implabs-theme");
      if (stored) return stored === "dark";
      document.documentElement.classList.add("dark");
      return true;
    }
    return true;
  });
  const [themeTransitioning, setThemeTransitioning] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("implabs-theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleDark = useCallback(() => {
    setThemeTransitioning(true);
    setTimeout(() => {
      setDark((prev) => !prev);
      setTimeout(() => setThemeTransitioning(false), 500);
    }, 300);
  }, []);

  return (
    <DarkModeContext.Provider value={{ dark, toggleDark, themeTransitioning }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const ctx = useContext(DarkModeContext);
  if (!ctx) throw new Error("useDarkMode must be used within DarkModeProvider");
  return ctx;
}
