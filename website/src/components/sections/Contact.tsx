import { useMemo } from "react";
import { site } from "../../content/site";
import { buildWhatsAppUrl } from "../../config/whatsapp";
import { useLanguage } from "../../i18n/LanguageProvider";
import { WhatsAppButton } from "../cta/WhatsAppButton";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

const INSTAGRAM_URL = "https://www.instagram.com/havenclinicoficial/";
const TIKTOK_URL = "https://www.tiktok.com/@havenclinicoficial";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Luiz+Ant%C3%B4nio+da+Silveira,+334+-+Boa+Vista,+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP,+15025-020";

export function Contact() {
  const { contact } = site;
  const { t } = useLanguage();
  const copy = t.contact;

  const detailByKey = useMemo(() => {
    return Object.fromEntries(copy.details.map((item) => [item.key, item]));
  }, [copy.details]);

  const renderDetail = (key: string) => {
    const item = detailByKey[key];
    if (!item) return null;

    return (
      <div className="closing__detail" key={item.key}>
        <dt>{item.label}</dt>
        <dd>
          {item.key === "whatsapp" ? (
            <a
              href={buildWhatsAppUrl(t.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.value}
            </a>
          ) : item.key === "address" ? (
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              {item.value.split("\n").map((line) => (
                <span key={line}>{line}</span>
              ))}
            </a>
          ) : item.key === "email" ? (
            <a href={`mailto:${item.value}`}>{item.value}</a>
          ) : (
            item.value.split("\n").map((line) => <span key={line}>{line}</span>)
          )}
        </dd>
      </div>
    );
  };

  return (
    <SectionReveal as="section" id={contact.id} className="section closing">
      <div className="closing__layout">
        <RevealItem className="closing__copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="closing__title">
            {copy.titleLead}
            <span>{copy.titleAccent}</span>
          </h2>
          <p className="closing__intro">{copy.intro}</p>
          <WhatsAppButton variant="solid" label={copy.cta} />

          <div className="closing__details">
            <dl className="closing__details-col">
              {renderDetail("address")}
              {renderDetail("whatsapp")}
            </dl>

            <dl className="closing__details-col">
              {renderDetail("hours")}
              {renderDetail("email")}
            </dl>
          </div>

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
            <a
              className="closing__social-link"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              className="closing__social-link"
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
          </div>
        </RevealItem>
      </div>

      <RevealItem className="closing__foot">
        <p className="closing__brand">Haven Clinic</p>
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
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 3c.4 2.5 1.9 4.2 4.3 4.5v2.3c-1.5 0-2.8-.4-4-1.2v6.2c0 3.5-2.8 6.2-6.3 6.2S1.9 18.3 1.9 14.8 4.7 8.6 8.2 8.6c.3 0 .7 0 1 .1v2.5c-.3-.1-.6-.2-1-.2-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8 3.8-1.7 3.8-3.8V3h2.2Z"
      />
    </svg>
  );
}
