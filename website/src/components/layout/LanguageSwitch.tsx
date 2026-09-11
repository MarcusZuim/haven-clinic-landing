import { useEffect, useId, useRef, useState } from "react";
import { localeMeta, locales, type Locale } from "../../i18n/messages";
import { useLanguage } from "../../i18n/LanguageProvider";

export function LanguageSwitch() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const choose = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  return (
    <div className="lang-switch" ref={rootRef}>
      <button
        type="button"
        className="lang-switch__button"
        aria-label={t.a11y.language}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {localeMeta[locale].short}
      </button>
      {open ? (
        <ul id={menuId} className="lang-switch__menu" role="listbox">
          {locales.map((code) => (
            <li key={code} role="option" aria-selected={code === locale}>
              <button type="button" onClick={() => choose(code)}>
                {localeMeta[code].short}
                <span>{localeMeta[code].name}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
