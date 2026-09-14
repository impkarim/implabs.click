import { useLanguage } from "../i18n/LanguageContext";
import { Search, Palette, Hammer, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { key: "discover", Icon: Search, num: "01" },
  { key: "design", Icon: Palette, num: "02" },
  { key: "build", Icon: Hammer, num: "03" },
  { key: "launch", Icon: Rocket, num: "04" },
] as const;

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            {t("process.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 dark:text-white">
            {t("process.title")}
          </h2>
        </ScrollReveal>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-800" />
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => {
                const Icon = step.Icon;
                return (
                  <ScrollReveal key={step.key} delay={i * 120}>
                    <div className="relative flex flex-col items-start">
                      <div className="w-16 h-16 rounded-full bg-white dark:bg-neutral-950 border-2 border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-5 relative z-10">
                        <Icon className="w-5 h-5 text-black dark:text-white" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-mono text-neutral-400 mb-2">
                        {step.num}
                      </span>
                      <h3 className="text-base font-semibold mb-1.5 dark:text-white">
                        {t(`process.${step.key}.title`)}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {t(`process.${step.key}.desc`)}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden">
          <div className="relative">
            <div className="absolute top-0 bottom-0 start-8 w-px bg-neutral-200 dark:bg-neutral-800" />
            <div className="space-y-8">
              {steps.map((step, i) => {
                const Icon = step.Icon;
                return (
                  <ScrollReveal key={step.key} delay={i * 100}>
                    <div className="flex gap-4">
                      <div className="shrink-0 relative z-10">
                        <div className="w-16 h-16 rounded-full bg-white dark:bg-neutral-950 border-2 border-neutral-200 dark:border-neutral-700 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-black dark:text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="pt-2">
                        <span className="text-xs font-mono text-neutral-400 mb-1 block">
                          {step.num}
                        </span>
                        <h3 className="text-base font-semibold mb-1 dark:text-white">
                          {t(`process.${step.key}.title`)}
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {t(`process.${step.key}.desc`)}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
