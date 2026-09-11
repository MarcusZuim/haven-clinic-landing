import RadialRevealButton from "../originkit/ui/radial-reveal-button";
import { buildWhatsAppUrl } from "../../config/whatsapp";
import { useLanguage } from "../../i18n/LanguageProvider";
import { theme } from "../../lib/theme";

type WhatsAppButtonProps = {
  label: string;
  variant?: "reveal" | "solid" | "ghost" | "header" | "hero" | "fab" | "card";
  topic?: string;
  message?: string;
  className?: string;
};

const FONT = {
  fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
  fontWeight: 600,
  lineHeight: "1.2",
  letterSpacing: "0.02em",
} as const;

export function WhatsAppButton({
  label,
  variant = "solid",
  topic,
  message,
  className = "",
}: WhatsAppButtonProps) {
  const { t } = useLanguage();
  const topicText = topic
    ? t.whatsapp.topicSuffix.replace("{topic}", topic)
    : undefined;
  const href = buildWhatsAppUrl(message ?? t.whatsapp.message, topicText);
  const usesReveal =
    variant === "reveal" ||
    variant === "header" ||
    variant === "hero" ||
    variant === "fab";

  if (!usesReveal) {
    return (
      <a
        className={["wa-btn", `wa-btn--${variant}`, className]
          .filter(Boolean)
          .join(" ")}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  const isFab = variant === "fab";
  const isHeader = variant === "header";
  const isHero = variant === "hero";
  const isOnDark = isHeader;

  return (
    <span className={["wa-reveal", `wa-reveal--${variant}`, className].join(" ")}>
      <RadialRevealButton
        label={label}
        link={href}
        newTab
        showText
        addIcon={false}
        rounded={isFab || isOnDark || isHero ? 100 : 14}
        padding={isFab ? "12px 18px" : isHeader ? "10px 20px" : "14px 28px"}
        font={{
          ...FONT,
          fontSize: isHeader || isFab ? 14 : 15,
        }}
        colors={{
          fill: isHero ? theme.puceDark : isOnDark ? theme.white : theme.cashmere,
          textColor: isHero ? theme.white : theme.puce,
          hoverFill: isHero ? theme.puce : isOnDark ? theme.cashmere : theme.puceDark,
          hoverTextColor: isHero ? theme.white : isOnDark ? theme.puce : theme.white,
        }}
        hover={{
          fill: isHero ? theme.puce : isOnDark ? theme.cashmere : theme.puceDark,
          textColor: isHero ? theme.white : isOnDark ? theme.puce : theme.white,
        }}
        border={{
          borderWidth: 0,
          borderStyle: "solid",
          borderColor: "transparent",
        }}
      />
    </span>
  );
}
