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
};

export function ReviewConversation({
  review,
  source,
  starsLabel,
}: ReviewConversationProps) {
  const scale = reviewScale(review.text);

  return (
    <div className="quotes__conversation">
      <header className="quotes__identity">
        <p className="quotes__name">{reviewDisplayName(review.author)}</p>
        <div className="quotes__meta">
          <p className="quotes__origin">{source}</p>
          <p className="quotes__rating" aria-label={starsLabel}>
            <span aria-hidden="true">★★★★★</span>
          </p>
        </div>
      </header>
      <blockquote className={`quotes__bubble quotes__bubble--message quotes__bubble--${scale}`}>
        <p>{review.text}</p>
      </blockquote>
    </div>
  );
}
