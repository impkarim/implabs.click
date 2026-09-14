import { useLanguage } from "../i18n/LanguageContext";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function TermsPage() {
  const { t } = useLanguage();

  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="min-h-screen pt-24 lg:pt-32 pb-24 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
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

        {/* Header */}
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 dark:text-white">
            {t("terms.title")}
          </h1>
          <p className="text-sm text-neutral-400 mb-12">
            {t("terms.lastUpdated")}
          </p>
        </ScrollReveal>

        {/* Content */}
        <div className="space-y-10">
          <ScrollReveal delay={100}>
            <h2 className="text-xl font-semibold mb-3 dark:text-white">{t("terms.section1.title")}</h2>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">{t("terms.section1.content")}</p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h2 className="text-xl font-semibold mb-3 dark:text-white">{t("terms.section2.title")}</h2>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">{t("terms.section2.content")}</p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h2 className="text-xl font-semibold mb-3 dark:text-white">{t("terms.section3.title")}</h2>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">{t("terms.section3.content")}</p>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <h2 className="text-xl font-semibold mb-3 dark:text-white">{t("terms.section4.title")}</h2>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">{t("terms.section4.content")}</p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h2 className="text-xl font-semibold mb-3 dark:text-white">{t("terms.section5.title")}</h2>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">{t("terms.section5.content")}</p>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <h2 className="text-xl font-semibold mb-3 dark:text-white">{t("terms.section6.title")}</h2>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">{t("terms.section6.content")}</p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-xl font-semibold mb-3 dark:text-white">{t("terms.section7.title")}</h2>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {t("terms.section7.content")}{" "}
              <a href="mailto:implabs.dev@gmail.com" className="underline hover:text-black dark:hover:text-white transition-colors">
                implabs.dev@gmail.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
