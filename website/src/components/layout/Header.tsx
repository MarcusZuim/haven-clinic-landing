import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { ease, fadeUp } from "../../lib/motion";
import { BrandLogo } from "../brand/BrandLogo";
import { WhatsAppButton } from "../cta/WhatsAppButton";
import { LanguageSwitch } from "./LanguageSwitch";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const solid = scrolled || open;

  return (
    <header
      className={`site-header ${solid ? "is-solid" : ""} ${open ? "is-open" : ""}`}
    >
      <div className="site-header__inner">
        <a
          className="brand-lockup"
          href="#topo"
          aria-label={site.name}
          onClick={close}
        >
          <BrandLogo variant="isotipo" decorative />
          <span className="brand-lockup__name">{site.name}</span>
        </a>

        <nav className="site-nav" aria-label={t.a11y.nav}>
          {site.nav.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              {...fadeUp(reduce, 0.14 + index * 0.12, 8, 0.45)}
            >
              {t.nav[item.key]}
            </motion.a>
          ))}
        </nav>

        <div className="site-header__tools">
          <LanguageSwitch />
          <div className="site-header__cta">
            <WhatsAppButton variant="header" label={t.cta.evaluation} />
          </div>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="visually-hidden">
            {open ? t.a11y.closeMenu : t.a11y.openMenu}
          </span>
          <span className={`menu-toggle__bar ${open ? "is-open" : ""}`} />
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`mobile-drawer ${open ? "is-open" : ""}`}
      >
        <nav aria-label={t.a11y.nav}>
          {site.nav.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={close}
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: -16 }}
              animate={
                open
                  ? { opacity: 1, x: 0 }
                  : reduce
                    ? { opacity: 0 }
                    : { opacity: 0, x: -16 }
              }
              transition={{
                duration: reduce ? 0.2 : 0.4,
                ease,
                delay: open && !reduce ? 0.08 + index * 0.1 : 0,
              }}
            >
              {t.nav[item.key]}
            </motion.a>
          ))}
        </nav>
        <WhatsAppButton variant="solid" label={t.cta.whatsapp} />
      </div>
    </header>
  );
}
