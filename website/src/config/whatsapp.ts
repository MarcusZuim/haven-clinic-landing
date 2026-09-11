/**
 * Hipótese de trabalho — número extraído do PROJECT_BRIEF.md.
 * Confirmar com a Drª Nayara antes de publicar.
 */
export const WHATSAPP = {
  phone: "5517996293081",
} as const;

export function buildWhatsAppUrl(message: string, topic?: string): string {
  const text = topic ? `${message} ${topic}` : message;
  return `https://wa.me/${WHATSAPP.phone}?text=${encodeURIComponent(text)}`;
}
