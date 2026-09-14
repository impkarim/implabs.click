import { useLanguage } from "../i18n/LanguageContext";
import { Globe, Smartphone, Code, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const serviceIcons = [Globe, Smartphone, Code];

const serviceKeys = ["websites", "apps", "software"] as const;

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            {t("services.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 max-w-xl dark:text-white">
            {t("services.title")}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[i];
            return (
              <ScrollReveal key={key} delay={i * 100}>
                <div className="group p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-all duration-300 h-full flex flex-col bg-white dark:bg-neutral-950">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center mb-6 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-colors">
                    <Icon className="w-5 h-5 text-black dark:text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 dark:text-white">
                    {t(`services.${key}.title`)}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 flex-1">
                    {t(`services.${key}.desc`)}
                  </p>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-black dark:text-white hover:gap-2.5 transition-all duration-200"
                  >
                    {t(`services.${key}.link`)}
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
