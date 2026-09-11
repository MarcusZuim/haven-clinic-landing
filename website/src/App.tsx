import { FloatingWhatsApp } from "./components/cta/FloatingWhatsApp";
import { Header } from "./components/layout/Header";
import { PrototypeBanner } from "./components/layout/PrototypeBanner";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Team } from "./components/sections/Team";
import { Testimonials } from "./components/sections/Testimonials";
import { WhyHaven } from "./components/sections/WhyHaven";
import { SHOW_PROTOTYPE_BANNER } from "./config/flags";
import { useLanguage } from "./i18n/LanguageProvider";
import { theme } from "./lib/theme";
import "./styles/tokens.css";
import "./styles/global.css";

export default function App() {
  const { t } = useLanguage();

  return (
    <div
      className={SHOW_PROTOTYPE_BANNER ? "has-banner" : undefined}
      style={{
        ["--color-white-rock" as string]: theme.whiteRock,
        ["--color-puce" as string]: theme.puce,
        ["--color-cashmere" as string]: theme.cashmere,
        ["--color-clam-shell" as string]: theme.clamShell,
        ["--color-dusty-grey" as string]: theme.dustyGrey,
        ["--color-puce-dark" as string]: theme.puceDark,
        ["--color-white" as string]: theme.white,
      }}
    >
      <a className="skip-link" href="#topo">
        {t.a11y.skip}
      </a>

      <PrototypeBanner />
      <Header />

      <main>
        <Hero />
        <WhyHaven />
        <Services />
        <Team />
        <Testimonials />
        <Contact />
      </main>

      <FloatingWhatsApp />
    </div>
  );
}
