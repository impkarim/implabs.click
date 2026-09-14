import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-[120px] sm:text-[180px] font-bold leading-none tracking-tighter dark:text-white opacity-10">
          404
        </h1>
        <p className="text-xl sm:text-2xl font-semibold mb-2 dark:text-white -mt-16 sm:-mt-24">
          {t("notFound.title")}
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-md mx-auto">
          {t("notFound.subtitle")}
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
        >
          <Home className="w-4 h-4" />
          {t("notFound.backHome")}
        </button>
      </div>
    </section>
  );
}
