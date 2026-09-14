import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffect from "./components/BackgroundEffect";
import ScrollToTop from "./components/ScrollToTop";
import LanguageTransition from "./components/LanguageTransition";
import ThemeTransition from "./components/ThemeTransition";
import WorkPage from "./pages/WorkPage";
import CertificationsPage from "./pages/CertificationsPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import NotFoundPage from "./pages/NotFoundPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <CTA />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <BackgroundEffect />
      <LanguageTransition />
      <ThemeTransition />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
