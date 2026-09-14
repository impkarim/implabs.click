import { useDarkMode } from "../i18n/DarkModeContext";

export default function ThemeTransition() {
  const { themeTransitioning, dark } = useDarkMode();

  if (!themeTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Smooth circular reveal */}
      <div
        className={`absolute inset-0 ${dark ? "bg-white" : "bg-black"}`}
        style={{
          animation: "themeReveal 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        }}
      />
      {/* Icon with smooth scale */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`text-6xl animate-theme-icon ${dark ? "text-black" : "text-white"}`}>
          {dark ? (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
            </svg>
          ) : (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
