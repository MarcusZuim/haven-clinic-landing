import { motion, useReducedMotion } from "framer-motion";
import TextMessage, {
  type TextMessageItem,
  type TextMessageMotion,
} from "../originkit/ui/text-message";

const settleEase = [0.22, 1, 0.36, 1] as const;

const enterFrom: TextMessageMotion = { opacity: 0.8, scale: 1, y: 6 };
const enterTo: TextMessageMotion = { opacity: 1, scale: 1, y: 0 };

const bubbleTransition = { duration: 0.92, ease: settleEase };

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
  animate?: boolean;
};

export function ReviewConversation({
  review,
  source,
  starsLabel,
  animate = true,
}: ReviewConversationProps) {
  const reduce = useReducedMotion();
  const play = animate && !reduce;
  const scale = reviewScale(review.text);
  const messages: TextMessageItem[] = [
    {
      text: review.text,
      sender: "them",
      delay: play ? 0.18 : 0,
      className: `quotes__bubble quotes__bubble--${scale}`,
    },
    {
      text: "★★★★★",
      sender: "them",
      delay: play ? 0.72 : 0,
      className: "quotes__bubble quotes__bubble--rating",
      label: starsLabel,
      textColor: "var(--color-puce)",
    },
  ];

  return (
    <div className="quotes__conversation">
      <motion.header
        className="quotes__identity"
        initial={play ? { opacity: 0.82, y: 6 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: play ? 0.85 : 0, ease: settleEase }}
      >
        <p className="quotes__name">{reviewDisplayName(review.author)}</p>
        <p className="quotes__origin">{source}</p>
      </motion.header>
      <TextMessage
        className="quotes__messages"
        messages={messages}
        showTimestamps={false}
        showTyping={false}
        animate={play}
        live={false}
        enterFrom={enterFrom}
        enterTo={enterTo}
        transition={bubbleTransition}
        receivedBubbleColor="var(--color-white)"
        receivedTextColor="var(--color-puce-dark)"
        style={{ minWidth: 0, minHeight: 0, height: "auto", padding: 0, gap: 12 }}
      />
    </div>
  );
}

export function ReviewTyping({ label }: { label: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="quotes__typing">
      <TextMessage
        className="quotes__messages"
        messages={[]}
        showTimestamps={false}
        showTyping
        typingSender="them"
        typingLabel={label}
        typingDotColor="var(--color-dusty-grey)"
        typingMotion={{
          travel: 3,
          duration: 1.45,
          stagger: 0.28,
          opacity: [0.45, 0.8, 0.45],
        }}
        animate={!reduce}
        live={false}
        enterFrom={enterFrom}
        enterTo={enterTo}
        transition={{ duration: 0.7, ease: settleEase }}
        receivedBubbleColor="var(--color-white)"
        receivedTextColor="var(--color-puce-dark)"
        style={{ minWidth: 0, minHeight: 0, height: "auto", padding: 0 }}
      />
    </div>
  );
}
