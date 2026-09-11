import { useEffect, useRef } from "react";
import { SHOW_PROTOTYPE_BANNER } from "../../config/flags";
import { useLanguage } from "../../i18n/LanguageProvider";

export function PrototypeBanner() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!SHOW_PROTOTYPE_BANNER) return;

    const node = ref.current;
    if (!node) return;

    const apply = () => {
      document.documentElement.style.setProperty(
        "--banner-offset",
        `${node.offsetHeight}px`,
      );
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(node);
    return () => {
      observer.disconnect();
      document.documentElement.style.setProperty("--banner-offset", "0px");
    };
  }, [t.banner]);

  if (!SHOW_PROTOTYPE_BANNER) return null;

  return (
    <div ref={ref} className="prototype-banner" role="status">
      {t.banner}
    </div>
  );
}
