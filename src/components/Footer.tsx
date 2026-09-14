import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { key: "nav.home", href: "/", isRoute: true },
    { key: "nav.services", href: "#services", isRoute: false },
    { key: "nav.work", href: "/work", isRoute: true },
    { key: "nav.certifications", href: "/certifications", isRoute: true },
    { key: "nav.process", href: "#process", isRoute: false },
    { key: "nav.about", href: "#about", isRoute: false },
    { key: "nav.contact", href: "#contact", isRoute: false },
  ];

  const serviceLinks = [
    { key: "services.websites.title", href: "#services" },
    { key: "services.apps.title", href: "#services" },
    { key: "services.software.title", href: "#services" },
  ];

  const scrollTo = (href: string, isRoute?: boolean) => {
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
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="py-16 lg:py-20 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          <ScrollReveal className="col-span-2 md:col-span-1">
            <a href="/" onClick={(e) => { e.preventDefault(); scrollTo("/", true); }} className="inline-flex items-center gap-2 font-bold text-lg tracking-tight mb-4">
              <img src="/logo.png" alt="IMP Labs" className="w-8 h-8 rounded-md object-contain dark:filter-none filter invert" />
              <span lang="en"><span className="font-extrabold">IMP</span> <span className="font-semibold">Labs</span></span>
            </a>
            <p className="text-xs font-medium tracking-wide uppercase text-neutral-400 mb-2">
              {t("footer.tagline")}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 max-w-xs">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/implabs.click/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-black dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/implabs.click" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-black dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://wa.me/213550831406" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-black dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors">
                <WhatsAppIcon />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h4 className="text-sm font-semibold mb-4 dark:text-white">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href, link.isRoute); }} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h4 className="text-sm font-semibold mb-4 dark:text-white">{t("footer.services")}</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h4 className="text-sm font-semibold mb-4 dark:text-white">{t("footer.contactTitle")}</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:implabs.dev@gmail.com" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  {t("footer.contactEmail")}
                </a>
              </li>
              <li>
                <a href="https://wa.me/213550831406" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#25D366] dark:hover:text-[#25D366] transition-colors" dir="ltr">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  {t("footer.phone")}
                </a>
              </li>
              <li>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">{t("footer.location")}</span>
              </li>
              <li>
                <a href="https://implabs.click" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  {t("footer.website")}
                </a>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Payment logos — display only, NOT a live payment gateway integration */}
        <div className="py-8 border-t border-neutral-100 dark:border-neutral-800">
          <div className="flex flex-col items-center gap-5">
            <span className="text-xs font-medium tracking-wide uppercase text-neutral-400">{t("footer.securePayments")}</span>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <img src="/payments/baridimob.png" alt="BaridiMob" className="h-10 w-auto object-contain" />
              <img src="/payments/visa.png" alt="Visa" className="h-10 w-auto object-contain" />
              <img src="/payments/mastercard.png" alt="Mastercard" className="h-10 w-auto object-contain" />
            </div>
          </div>
        </div>

          <div className="py-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">{t("footer.copyright")}</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" onClick={(e) => { e.preventDefault(); navigate("/privacy"); }} className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="/terms" onClick={(e) => { e.preventDefault(); navigate("/terms"); }} className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
