import { useState, useCallback } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  description?: string;
  budget?: string;
}

const defaultData: FormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  description: "",
};

export default function Contact() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const [form, setForm] = useState<FormData>(defaultData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [coinShake, setCoinShake] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; vx: number; vy: number; size: number; color: string }[]>([]);

  const handleCoinClick = useCallback(() => {
    setCoinShake(true);
    setTimeout(() => setCoinShake(false), 600);

    const colors = ["#DAA520", "#FFD700", "#B8860B", "#FFA500", "#FFCC00", "#F5DEB3"];
    const newParticles = Array.from({ length: 24 }).map((_, i) => ({
      id: Date.now() + i,
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 300,
      vy: (Math.random() - 0.5) * 300 - 100,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1000);
  }, []);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = t("contact.validation.nameRequired");
    if (!form.email.trim()) errs.email = t("contact.validation.emailRequired");
    else if (!validateEmail(form.email)) errs.email = t("contact.validation.emailInvalid");
    if (!form.phone.trim()) errs.phone = t("contact.validation.phoneRequired");
    if (!form.projectType) errs.projectType = t("contact.validation.typeRequired");
    if (!form.description.trim()) errs.description = t("contact.validation.descRequired");
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const typeLabel = t(`contact.types.${form.projectType}`) || form.projectType;
    const budgetLabel = form.budget ? t(`contact.budgets.${form.budget}`) || form.budget : "Not specified";

    const message = [
      `*Project Request*`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Project Type: ${typeLabel}`,
      `Budget: ${budgetLabel}`,
      ``,
      `Description:`,
      form.description,
    ].join("\n");

    const whatsappUrl = `https://wa.me/213550831406?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 bg-white dark:bg-neutral-950 border rounded-lg text-sm outline-none transition-colors placeholder:text-neutral-400 dark:text-white ${
      errors[field]
        ? "border-red-300 focus:border-red-400"
        : "border-neutral-200 dark:border-neutral-700 focus:border-neutral-400 dark:focus:border-neutral-500"
    }`;

  if (submitted) {
    return (
      <section id="contact" className="py-24 lg:py-36">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-lg mx-auto text-center py-16">
              <div className="w-14 h-14 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-5 h-5 text-white dark:text-black" />
              </div>
              <h2 className="text-2xl font-bold mb-3 dark:text-white">Thank you!</h2>
              <p className="text-neutral-500 dark:text-neutral-400">
                Your project request has been sent. We'll get back to you soon.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Spinning coin - desktop background */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden z-10">
        <div key={lang} className={`absolute top-1/2 -translate-y-1/2 animate-fade-in ${isAr ? "right-[10%]" : "left-[10%]"}`}>
          <div className="relative w-80 h-80 cursor-pointer" style={{ perspective: "800px" }} onClick={handleCoinClick}>
            {/* Particles */}
            {particles.map((p) => (
              <div
                key={p.id}
                className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  boxShadow: `0 0 ${p.size}px ${p.color}`,
                  animation: `particleFly 0.8s ease-out forwards`,
                  ["--tx" as string]: `${p.vx}px`,
                  ["--ty" as string]: `${p.vy}px`,
                }}
              />
            ))}
            {/* Golden glow underneath */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-amber-500/30 via-amber-600/20 to-amber-700/10 blur-2xl animate-pulse" />
            <div className={`relative w-full h-full animate-coin-spin ${coinShake ? "animate-shake" : ""}`} style={{ transformStyle: "preserve-3d" }}>
              {/* Edge - gold ring */}
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    inset: "4px",
                    transform: `translateZ(${(i - 10) * 1.2}px)`,
                    background: "linear-gradient(135deg, #DAA520, #B8860B, #8B6914, #B8860B, #DAA520)",
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3)",
                  }}
                />
              ))}
              {/* Front face */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{ backfaceVisibility: "hidden", transform: "translateZ(12px)" }}
              >
                <img
                  src="/coin-front.png"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover rounded-full mix-blend-screen brightness-50 contrast-150 opacity-70"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black/50 via-black/20 to-black/70" />
              </div>
              {/* Back face */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg) translateZ(12px)" }}
              >
                <img
                  src="/coin-back.png"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover rounded-full mix-blend-screen brightness-50 contrast-150 opacity-70"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black/50 via-black/20 to-black/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-[1360px] px-6 lg:px-10 pointer-events-none z-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="pointer-events-auto">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 dark:text-white">
                {t("contact.title")}
              </h2>
              <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md">
                {t("contact.subtitle")}
              </p>
            </ScrollReveal>
            {/* Mobile coin - centered below text */}
            <div key={lang} className="lg:hidden flex justify-center mt-8 pointer-events-auto">
              <div className="relative w-28 h-28 cursor-pointer" style={{ perspective: "600px" }} onClick={handleCoinClick}>
                {/* Golden glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-amber-500/30 via-amber-600/20 to-amber-700/10 blur-xl animate-pulse" />
                {/* Particles */}
                {particles.map((p) => (
                  <div
                    key={p.id}
                    className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
                    style={{
                      width: p.size,
                      height: p.size,
                      backgroundColor: p.color,
                      boxShadow: `0 0 ${p.size}px ${p.color}`,
                      animation: `particleFly 0.8s ease-out forwards`,
                      ["--tx" as string]: `${p.vx}px`,
                      ["--ty" as string]: `${p.vy}px`,
                    }}
                  />
                ))}
                <div className={`relative w-full h-full animate-coin-spin ${coinShake ? "animate-shake" : ""}`} style={{ transformStyle: "preserve-3d" }}>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="absolute rounded-full" style={{ inset: "2px", transform: `translateZ(${(i - 10) * 0.8}px)`, background: "linear-gradient(135deg, #DAA520, #B8860B, #8B6914, #B8860B, #DAA520)" }} />
                  ))}
                  <div className="absolute inset-0 rounded-full overflow-hidden" style={{ backfaceVisibility: "hidden", transform: "translateZ(8px)" }}>
                    <img src="/coin-front.png" alt="" aria-hidden="true" className="w-full h-full object-cover rounded-full mix-blend-screen brightness-50 contrast-150 opacity-70" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black/50 via-black/20 to-black/70" />
                  </div>
                  <div className="absolute inset-0 rounded-full overflow-hidden" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg) translateZ(8px)" }}>
                    <img src="/coin-back.png" alt="" aria-hidden="true" className="w-full h-full object-cover rounded-full mix-blend-screen brightness-50 contrast-150 opacity-70" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black/50 via-black/20 to-black/70" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-auto">
            <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  {t("contact.name")} <span className="text-red-400">*</span>
                </label>
                <input id="name" type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder={t("contact.placeholderName")} className={inputClass("name")} />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  {t("contact.email")} <span className="text-red-400">*</span>
                </label>
                <input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder={t("contact.placeholderEmail")} className={inputClass("email")} />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  {t("contact.phone")} <span className="text-red-400">*</span>
                </label>
                <input id="phone" type="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder={t("contact.placeholderPhone")} className={inputClass("phone")} dir="ltr" />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  {t("contact.projectType")} <span className="text-red-400">*</span>
                </label>
                <input id="projectType" type="text" value={form.projectType} onChange={(e) => handleChange("projectType", e.target.value)} placeholder={t("contact.placeholderProjectType")} className={inputClass("projectType")} />
                {errors.projectType && <p className="text-xs text-red-500 mt-1">{errors.projectType}</p>}
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  {t("contact.budget")} <span className="text-xs text-neutral-400">(DZD)</span>
                </label>
                <input id="budget" type="text" value={form.budget} onChange={(e) => handleChange("budget", e.target.value)} placeholder={t("contact.placeholderBudget")} className={inputClass("budget")} />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  {t("contact.description")} <span className="text-red-400">*</span>
                </label>
                <textarea id="description" rows={4} value={form.description} onChange={(e) => handleChange("description", e.target.value)} placeholder={t("contact.placeholderDesc")} className={`${inputClass("description")} resize-none`} />
                {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
              </div>

              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3.5 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                {t("contact.submit")}
                <Send className="w-4 h-4 rtl:rotate-180" />
              </button>
            </form>
          </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
