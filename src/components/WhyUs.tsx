import { useLanguage } from "../i18n/LanguageContext";
import { Pen, Code2, LifeBuoy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const icons = [Pen, Code2, LifeBuoy];
const points = ["design", "dev", "support"] as const;

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 lg:py-36 bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <ScrollReveal>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                {t("whyUs.label")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 dark:text-white">
                {t("whyUs.title")}
              </h2>
              <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg">
                {t("whyUs.description")}
              </p>
            </ScrollReveal>
          </div>

          {/* Right — stacked points */}
          <div className="flex flex-col">
            {points.map((key, i) => {
              const Icon = icons[i];
              return (
                <ScrollReveal key={key} delay={i * 100}>
                  <div
                    className={`flex gap-4 py-6 ${
                      i < points.length - 1 ? "border-b border-neutral-200 dark:border-neutral-800" : ""
                    }`}
                  >
                    <div className="shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-neutral-400 dark:text-neutral-500" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1.5 dark:text-white">
                        {t(`whyUs.${key}.title`)}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {t(`whyUs.${key}.desc`)}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
