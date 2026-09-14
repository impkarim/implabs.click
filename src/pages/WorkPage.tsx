import { useLanguage } from "../i18n/LanguageContext";
import { ArrowLeft, Clock } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function WorkPage() {
  const { t } = useLanguage();

  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="min-h-screen pt-24 lg:pt-32 pb-24 lg:py-36">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        {/* Back button */}
        <ScrollReveal>
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            {t("nav.home")}
          </button>
        </ScrollReveal>

        {/* Coming Soon */}
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="w-20 h-20 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center mb-8">
              <Clock className="w-10 h-10 text-neutral-400 dark:text-neutral-500" />
            </div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              {t("projects.label")}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 dark:text-white">
              {t("projects.title")}
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md">
              {t("projects.comingSoon")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
