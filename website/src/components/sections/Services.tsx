import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { WhatsAppButton } from "../cta/WhatsAppButton";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

const icons = {
  "saude-bucal": LeafArc,
  estetica: SoftBloom,
  integrado: InfiniteCurve,
} as const;

export function Services() {
  const { services } = site;
  const { t } = useLanguage();
  const copy = t.services;

  return (
    <SectionReveal as="section" id={services.id} className="section services">
      <RevealItem className="section-intro">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 className="section-title">
          {copy.titleLead}
          <span className="weight-semibold">{copy.titleAccent}</span>
        </h2>
        <p className="status-note">{copy.note}</p>
      </RevealItem>

      <ul className="services__grid">
        {copy.items.map((item) => {
          const Icon = icons[item.id];
          return (
            <RevealItem as="li" key={item.id} className="service-card">
              <Icon />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <WhatsAppButton
                variant="card"
                label={item.cta}
                topic={item.topic}
              />
            </RevealItem>
          );
        })}
      </ul>
    </SectionReveal>
  );
}

function LeafArc() {
  return (
    <svg className="line-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M16 44c8-2 18-10 22-22 8 6 12 16 8 26-8 2-18-2-30-4Z" />
      <path d="M28 30c4 6 8 14 8 22" />
    </svg>
  );
}

function SoftBloom() {
  return (
    <svg className="line-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 14c6 8 6 16 0 24-6-8-6-16 0-24Z" />
      <path d="M18 28c10 2 18 8 22 18" />
      <path d="M46 28c-10 2-18 8-22 18" />
    </svg>
  );
}

function InfiniteCurve() {
  return (
    <svg className="line-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M14 32c0-8 6-14 14-14 10 0 12 14 18 14s10-8 10-14" />
      <path d="M50 32c0 8-6 14-14 14-10 0-12-14-18-14s-10 8-10 14" />
    </svg>
  );
}
