import { useLanguage } from "../i18n/LanguageContext";
import { useDarkMode } from "../i18n/DarkModeContext";

export default function LanguageTransition() {
  const { transitioning, lang } = useLanguage();
  const { dark } = useDarkMode();

  if (!transitioning) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Wipe overlay */}
      <div className={`absolute inset-0 ${dark ? "bg-white" : "bg-black"} ${lang === "ar" ? "animate-wipe-rtl" : "animate-wipe-ltr"}`} />
      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="IMP Labs"
          className="w-16 h-16 rounded-xl object-contain animate-logo-pulse"
          style={{ filter: dark ? "invert(1)" : "invert(0)" }}
        />
      </div>
    </div>
  );
}
