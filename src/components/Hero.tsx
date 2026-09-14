import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [clickActive, setClickActive] = useState(false);
  const [clickRipple, setClickRipple] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setClickActive(true);
      setClickRipple(true);
      setTimeout(() => setClickActive(false), 200);
      setTimeout(() => setClickRipple(false), 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    navigate("/work");
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 dark:text-white">
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
                  onClick={scrollToWork}
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

          {/* Right — Elegant visual */}
          <div className="order-1 lg:order-2 relative">
            <ScrollReveal delay={200}>
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Background shape */}
                <div className="absolute inset-0 bg-neutral-50 dark:bg-neutral-900 rounded-2xl transition-all duration-500 hover:bg-neutral-100 dark:hover:bg-neutral-800" />

                {/* Browser mockup */}
                <div className="absolute inset-4 sm:inset-8 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden animate-mockup-float">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                    </div>
                    <div className="flex-1 mx-4 relative">
                      <div dir="ltr" className="h-6 bg-white dark:bg-neutral-800 rounded-md border border-neutral-100 dark:border-neutral-700 flex items-center px-3">
                        <span className="relative inline-block">
                          <span className={`text-[10px] text-neutral-400 select-none transition-all duration-150 ${clickActive ? "text-neutral-900 dark:text-white font-bold" : ""}`}>implabs.click</span>
                          {/* Click ripple */}
                          {clickRipple && (
                            <span className="absolute inset-0 rounded bg-neutral-400/20 dark:bg-neutral-500/20 animate-ping pointer-events-none" />
                          )}
                          {/* Fake cursor */}
                          <div className={`absolute -bottom-3 right-0 pointer-events-none transition-all duration-200 z-10 ${clickActive ? "scale-[0.85] translate-y-[1px]" : ""}`}>
                            <svg width="14" height="18" viewBox="0 0 16 20" fill="none" className="drop-shadow-lg">
                              <path d="M1 1L1 15.5L5.5 11.5L10.5 18.5L13 17L8 10L14 9L1 1Z" fill="black" stroke="white" strokeWidth="1.5"/>
                            </svg>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mockup content */}
                  <div className="p-4 sm:p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <img src="/logo.png" alt="IMP Labs" className="w-8 h-8 rounded-md object-contain dark:filter-none filter invert" />
                      <div className="h-2.5 bg-neutral-200 dark:bg-neutral-700 rounded-full w-20" />
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="h-3 bg-neutral-100 dark:bg-neutral-800 rounded-full w-3/4" />
                      <div className="h-3 bg-neutral-100 dark:bg-neutral-800 rounded-full w-1/2" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 rounded-lg" />
                      <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 rounded-lg" />
                      <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 rounded-lg" />
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-2 bg-neutral-50 dark:bg-neutral-800 rounded-full w-full" />
                      <div className="h-2 bg-neutral-50 dark:bg-neutral-800 rounded-full w-4/5" />
                      <div className="h-2 bg-neutral-50 dark:bg-neutral-800 rounded-full w-3/5" />
                    </div>
                  </div>
                </div>

                {/* Faint background shapes */}
                <div className="absolute -top-4 -end-4 w-24 h-24 border border-neutral-100 dark:border-neutral-800 rounded-full opacity-30 animate-pulse" />
                <div className="absolute -bottom-6 -start-6 w-32 h-32 border border-neutral-100 dark:border-neutral-800 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
