export type ReviewCopy = {
  author: string;
  text: string;
};

export function reviewDisplayName(author: string) {
  const parts = author.trim().split(/\s+/);
  if (parts.length <= 2) return parts.join(" ");
  return `${parts[0]} ${parts[1]}`;
}

export function reviewScale(text: string) {
  const length = [...text.trim()].length;
  if (length <= 90) return "short";
  if (length <= 150) return "medium";
  return "long";
}

type ReviewConversationProps = {
  review: ReviewCopy;
  source: string;
  starsLabel: string;
  hidden?: boolean;
};

export function ReviewConversation({
  review,
  source,
  starsLabel,
  hidden = false,
}: ReviewConversationProps) {
  const scale = reviewScale(review.text);

  return (
    <div className="quotes__conversation" aria-hidden={hidden}>
      <header className="quotes__identity">
        <p className="quotes__name">{reviewDisplayName(review.author)}</p>
        <p className="quotes__origin">{source}</p>
      </header>
      <blockquote className={`quotes__bubble quotes__bubble--message quotes__bubble--${scale}`}>
        <p>{review.text}</p>
      </blockquote>
      <p className="quotes__bubble quotes__bubble--rating" aria-label={starsLabel}>
        <span aria-hidden="true">★★★★★</span>
      </p>
    </div>
  );
}
