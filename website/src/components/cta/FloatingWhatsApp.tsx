import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { WhatsAppButton } from "../cta/WhatsAppButton";

export function FloatingWhatsApp() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY >= window.innerHeight * 0.8);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <WhatsAppButton
      className={`wa-fab-wrap${visible ? " is-visible" : ""}`}
      variant="fab"
      label={t.cta.footer}
    />
  );
}
