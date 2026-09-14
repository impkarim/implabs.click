import { useLanguage } from "../i18n/LanguageContext";
import { ArrowLeft, Calendar, Briefcase, Quote } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const certifications = [
  {
    id: 1,
    image: "/cert-slimi-rahal-seal-signature-blurred.jpg",
    client: "slimiRahal",
    year: "2025",
  },
  {
    id: 2,
    image: "/cert-ben-daoud-final.jpg",
    client: "benDaoud",
    year: "2026",
  },
];

export default function CertificationsPage() {
  const { t } = useLanguage();

  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="min-h-screen pt-24 lg:pt-32 pb-24 lg:py-36">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        <ScrollReveal>
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            {t("nav.home")}
          </button>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            {t("certifications.label")}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 dark:text-white">
            {t("certifications.title")}
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl mb-16">
            {t("certifications.subtitle")}
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.id}>
              <div className="bg-white dark:bg-neutral-950 rounded-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Image section - full width on mobile */}
                  <div className="w-full lg:w-1/2">
                    <img
                      src={cert.image}
                      alt={t(`certifications.${cert.client}.title`)}
                      className="w-full block"
                    />
                  </div>

                  {/* Content section */}
                  <div className="w-full lg:w-1/2 p-5 sm:p-6 lg:p-8 flex flex-col justify-center relative">
                    <div className="absolute top-4 right-4 lg:top-6 lg:right-6 opacity-[0.06] dark:opacity-[0.04]">
                      <Quote className="w-14 h-14" strokeWidth={1} />
                    </div>

                    <h3 className="font-bold dark:text-white text-lg sm:text-xl lg:text-2xl leading-tight mb-2">
                      {t(`certifications.${cert.client}.title`)}
                    </h3>

                    <div className="inline-flex items-center mb-4">
                      <span className="text-xs font-medium px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-600 dark:text-neutral-300">
                        {t(`certifications.${cert.client}.type`)}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
                      {t(`certifications.${cert.client}.description`)}
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{cert.year}</span>
                      </div>
                      <div className="w-px h-3 bg-neutral-200 dark:bg-neutral-700" />
                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{t(`certifications.${cert.client}.serviceValue`)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
