import { useLanguage } from "../i18n/LanguageContext";
import { useDarkMode } from "../i18n/DarkModeContext";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const { t } = useLanguage();
  const { dark } = useDarkMode();

  const scrollToPortfolio = () => {
    if (window.location.hash !== "#/work") {
      window.location.hash = "#/work";
    } else {
      document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden">
      <div className="mx-auto max-w-[1360px] w-full px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="order-2 lg:order-1">
            <ScrollReveal delay={0}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6">
                {t("hero.label")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-6 dark:text-white">
                {t("hero.title")}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg mb-8">
                {t("hero.subtitle")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 hover:shadow-lg hover:shadow-black/10"
                >
                  {t("hero.cta")}
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
                <button
                  onClick={scrollToPortfolio}
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-neutral-200 dark:border-neutral-700 text-black dark:text-white text-sm font-medium rounded-lg hover:border-neutral-300 dark:hover:border-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
                >
                  {t("hero.secondary")}
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-xs text-neutral-400 tracking-wide font-medium">
                {t("hero.tags")}
              </p>
            </ScrollReveal>
          </div>

          {/* Right — Atmospheric Dark Watermark Visual */}
          <div className="order-1 lg:order-2 relative">
            <ScrollReveal delay={200}>
              <div className="relative w-full">

                {/* Ambient dark glow from bottom-left */}
                <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-neutral-400/8 dark:bg-neutral-200/5 blur-[80px] pointer-events-none" />
                <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-neutral-500/5 blur-[60px] pointer-events-none" />

                {/* Film grain texture */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />



                {/* Large watermark logo — center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <img src="/logo.png" alt="" className={`w-32 sm:w-40 lg:w-48 mb-4 ${dark ? "opacity-[0.07]" : "opacity-[0.06] invert"}`} />
                  <span lang="en" className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.3em] ${dark ? "text-white/[0.06]" : "text-black/[0.05]"}`}>
                    IMP LABS
                  </span>
                </div>


              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
