import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { useDarkMode } from "../i18n/DarkModeContext";
import { Menu, X, ArrowRight, Moon, Sun } from "lucide-react";

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const { dark, toggleDark } = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = lang === "ar" ? [
    { key: "nav.contact", href: "#contact", isRoute: false },
    { key: "nav.about", href: "#about", isRoute: false },
    { key: "nav.process", href: "#process", isRoute: false },
    { key: "nav.certifications", href: "/certifications", isRoute: true },
    { key: "nav.work", href: "/work", isRoute: true },
    { key: "nav.services", href: "#services", isRoute: false },
    { key: "nav.home", href: "/", isRoute: true },
  ] : [
    { key: "nav.home", href: "/", isRoute: true },
    { key: "nav.services", href: "#services", isRoute: false },
    { key: "nav.work", href: "/work", isRoute: true },
    { key: "nav.certifications", href: "/certifications", isRoute: true },
    { key: "nav.process", href: "#process", isRoute: false },
    { key: "nav.about", href: "#about", isRoute: false },
    { key: "nav.contact", href: "#contact", isRoute: false },
  ];

  const scrollTo = (href: string, isRoute?: boolean) => {
    setMobileOpen(false);
    if (isRoute) {
      if (location.pathname === href) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(href);
      }
    } else {
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-white/80 dark:bg-neutral-950/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10" dir="ltr">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="/"
            dir="ltr"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("/", true);
            }}
            className="flex items-center gap-2 font-bold text-lg tracking-tight shrink-0"
          >
            <img src="/logo.png" alt="IMP Labs" className="w-8 h-8 rounded-md object-contain dark:filter-none filter invert" />
            <span lang="en" className="dark:text-white"><span className="font-extrabold">IMP</span> <span className="font-semibold">Labs</span></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href, item.isRoute);
                }}
                className="px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors rounded-md border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"
              aria-label="Toggle language"
            >
              <span className={lang === "en" ? "font-semibold text-black dark:text-white" : ""}>
                EN
              </span>
              <span className="text-neutral-300 dark:text-neutral-600">|</span>
              <span className={lang === "ar" ? "font-semibold text-black dark:text-white" : ""}>
                العربية
              </span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              {t("nav.startProject")}
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-neutral-700 dark:text-neutral-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute left-0 right-0 top-full bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800 shadow-lg z-50 overflow-y-auto max-h-[80vh] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
          <nav className="flex flex-col p-6 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href, item.isRoute);
                }}
                className="px-4 py-3 text-base text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              >
                {t(item.key)}
              </a>
            ))}

            <hr className="my-4 border-neutral-100 dark:border-neutral-800" />

            <div className="flex items-center gap-2 px-4">
              <button
                onClick={toggleDark}
                className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors rounded-md"
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => {
                  toggleLang();
                  setMobileOpen(false);
                }}
                className="px-4 py-3 text-base text-left text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              >
                {lang === "en" ? "العربية" : "English"}
              </button>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-black dark:bg-white text-white dark:text-black text-base font-medium rounded-lg"
            >
              {t("nav.startProject")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
          </nav>
        </div>
    </header>
  );
}
