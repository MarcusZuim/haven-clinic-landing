import { useMemo, useState } from "react";
import { site } from "../../content/site";
import { buildWhatsAppUrl } from "../../config/whatsapp";
import { useLanguage } from "../../i18n/LanguageProvider";
import { WhatsAppButton } from "../cta/WhatsAppButton";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

export function Contact() {
  const { contact } = site;
  const { t } = useLanguage();
  const copy = t.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const leadMessage = useMemo(() => {
    const trimmedName = name.trim();
    if (!trimmedName) return t.whatsapp.message;

    const parts = [copy.leadMessage.replace("{name}", trimmedName)];
    const trimmedEmail = email.trim();
    if (trimmedEmail) {
      parts.push(copy.leadEmail.replace("{email}", trimmedEmail));
    }
    return parts.join(" ");
  }, [copy, email, name, t.whatsapp.message]);

  const whatsappHref = buildWhatsAppUrl(leadMessage);

  const openWhatsApp = () => {
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  };

  return (
    <SectionReveal as="section" id={contact.id} className="section closing">
      <div className="closing__layout">
        <RevealItem className="closing__copy">
          <h2 className="closing__title">
            {copy.titleLead}
            <span>{copy.titleAccent}</span>
          </h2>

          <dl className="closing__details">
            {copy.details.map((item) => (
              <div key={item.key}>
                <dt>{item.label}</dt>
                <dd>
                  {item.key === "whatsapp" ? (
                    <a href={buildWhatsAppUrl(t.whatsapp.message)} target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    item.value.split("\n").map((line) => (
                      <span key={line}>{line}</span>
                    ))
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </RevealItem>

        <RevealItem className="closing__panel">
          <div className="closing__social" aria-label={copy.social}>
            <a
              className="closing__social-link"
              href={buildWhatsAppUrl(t.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <span
              className="closing__social-link is-pending"
              title={copy.instagramPending}
              aria-label={copy.instagramPending}
            >
              <InstagramIcon />
            </span>
          </div>

          <p className="closing__hint">{copy.hint}</p>

          <form
            className="closing__form"
            onSubmit={(event) => {
              event.preventDefault();
              openWhatsApp();
            }}
          >
            <label className="closing__field">
              <span className="visually-hidden">{copy.nameLabel}</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder={copy.nameLabel}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label className="closing__field">
              <span className="visually-hidden">{copy.emailLabel}</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder={copy.emailLabel}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>

            <WhatsAppButton
              className="closing__cta"
              variant="solid"
              label={copy.cta}
              message={leadMessage}
            />
          </form>
        </RevealItem>
      </div>

      <RevealItem className="closing__foot">
        <p className="closing__wordmark">{site.name}</p>
        <p className="closing__legal">{t.footer.legalNote}</p>
      </RevealItem>
    </SectionReveal>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.43 1.33 4.93L2 22l5.4-1.42a10 10 0 0 0 4.64 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.75 13.94c-.24.67-1.18 1.23-1.93 1.4-.52.11-1.2.2-3.49-.75-2.93-1.2-4.82-4.14-4.97-4.33-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.4.27-.28.58-.35.77-.35h.56c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.14.31-.28.48-.14.16-.3.37-.42.5-.14.14-.28.29-.12.56.16.28.7 1.16 1.5 1.88 1.04.93 1.9 1.22 2.17 1.36.28.14.44.12.6-.07.16-.2.7-.81.88-1.09.18-.28.37-.23.62-.14.26.1 1.63.77 1.91.91.28.14.47.21.54.32.07.12.07.67-.17 1.34Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}
