import { motion, useReducedMotion, type Transition } from "framer-motion";
import type { CSSProperties } from "react";
import "./text-message.css";

export type TextMessageSender = "me" | "them";

export type TextMessageItem = {
  text: string;
  sender: TextMessageSender;
  timestamp?: string;
  /** Seconds. Falls back to the stagger sequence when omitted. */
  delay?: number;
  className?: string;
  label?: string;
  textColor?: string;
  bubbleColor?: string;
};

export type TextMessageMotion = {
  opacity: number;
  scale: number;
  y: number;
};

export type TextMessageTypingMotion = {
  travel?: number;
  duration?: number;
  stagger?: number;
  opacity?: [number, number, number];
};

export type TextMessageProps = {
  messages?: TextMessageItem[];
  font?: CSSProperties;
  sentBubbleColor?: string;
  sentTextColor?: string;
  receivedBubbleColor?: string;
  receivedTextColor?: string;
  showTimestamps?: boolean;
  showTyping?: boolean;
  typingSender?: TextMessageSender;
  typingLabel?: string;
  typingDotColor?: string;
  typingMotion?: TextMessageTypingMotion;
  animate?: boolean;
  staggerDelay?: number;
  transition?: Transition;
  enterFrom?: TextMessageMotion;
  enterTo?: TextMessageMotion;
  live?: boolean;
  className?: string;
  style?: CSSProperties;
};

const HIDDEN = { opacity: 0, scale: 0.85, y: 10 };
const SHOWN = { opacity: 1, scale: 1, y: 0 };

const DEFAULT_MESSAGES: TextMessageItem[] = [
  {
    text: "Hey! Are you coming to the Framer workshop?",
    sender: "them",
    timestamp: "10:14 AM",
  },
  {
    text: "Yeah, definitely! Just finishing up some code.",
    sender: "me",
    timestamp: "10:15 AM",
  },
  {
    text: "Awesome, see you there! 🚀",
    sender: "them",
    timestamp: "10:16 AM",
  },
];

const DEFAULT_TRANSITION: Transition = {
  type: "spring",
  stiffness: 450,
  damping: 28,
};

const DEFAULT_TYPING: Required<TextMessageTypingMotion> = {
  travel: 5,
  duration: 0.8,
  stagger: 0.18,
  opacity: [0.35, 1, 0.35],
};

function TypingBubble({
  bubbleColor,
  dotColor,
  isMe,
  label,
  playDots,
  motion: dotMotion,
}: {
  bubbleColor: string;
  dotColor: string;
  isMe: boolean;
  label: string;
  playDots: boolean;
  motion: Required<TextMessageTypingMotion>;
}) {
  return (
    <div
      className={`text-message__typing${isMe ? " text-message__typing--me" : " text-message__typing--them"}`}
      style={{ backgroundColor: bubbleColor }}
      role="status"
      aria-label={label}
    >
      {[0, 1, 2].map((index) => (
        <motion.span
          key={index}
          className="text-message__dot"
          aria-hidden="true"
          style={{ backgroundColor: dotColor }}
          animate={
            playDots
              ? { y: [0, -dotMotion.travel, 0], opacity: dotMotion.opacity }
              : { y: 0, opacity: 0.5 }
          }
          transition={
            playDots
              ? {
                  duration: dotMotion.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * dotMotion.stagger,
                }
              : { duration: 0 }
          }
        />
      ))}
    </div>
  );
}

export default function TextMessage({
  messages = DEFAULT_MESSAGES,
  font,
  sentBubbleColor = "#007AFF",
  sentTextColor = "#FFFFFF",
  receivedBubbleColor = "#E9E9EB",
  receivedTextColor = "#000000",
  showTimestamps = true,
  showTyping = true,
  typingSender = "them",
  typingLabel = "Typing",
  typingDotColor,
  typingMotion,
  animate: animateEntry = true,
  staggerDelay = 150,
  transition = DEFAULT_TRANSITION,
  enterFrom = HIDDEN,
  enterTo = SHOWN,
  live = true,
  className,
  style,
}: TextMessageProps) {
  const reduce = useReducedMotion();
  const playEntry = animateEntry && !reduce;
  const playDots = !reduce;
  const isTypingFromMe = typingSender === "me";
  const staggerSec = staggerDelay / 1000;
  const dots = { ...DEFAULT_TYPING, ...typingMotion };
  const sequenceKey = `${messages
    .map((message) => `${message.sender}\u0000${message.timestamp ?? ""}\u0000${message.text}\u0000${message.delay ?? ""}`)
    .join("\u0001")}|${showTyping ? typingSender : "off"}|${playEntry ? "play" : "still"}`;

  const enter = (index: number, delay?: number): Transition =>
    playEntry
      ? { ...transition, delay: delay ?? 0.05 + index * staggerSec }
      : { duration: 0 };

  return (
    <div
      key={sequenceKey}
      className={className ? `text-message ${className}` : "text-message"}
      role="log"
      aria-live={live ? "polite" : "off"}
      style={{ ...font, ...style }}
    >
      {messages.map((message, index) => {
        const isMe = message.sender === "me";

        return (
          <motion.div
            key={`${message.sender}-${index}`}
            className={`text-message__item${isMe ? " text-message__item--me" : " text-message__item--them"}`}
            initial={playEntry ? enterFrom : false}
            animate={enterTo}
            transition={enter(index, message.delay)}
          >
            {showTimestamps && message.timestamp ? (
              <span className="text-message__time">{message.timestamp}</span>
            ) : null}
            <div
              className={`text-message__bubble${isMe ? " text-message__bubble--me" : " text-message__bubble--them"}${message.className ? ` ${message.className}` : ""}`}
              style={{
                color: message.textColor ?? (isMe ? sentTextColor : receivedTextColor),
                backgroundColor:
                  message.bubbleColor ?? (isMe ? sentBubbleColor : receivedBubbleColor),
                ...(font?.lineHeight ? { lineHeight: font.lineHeight } : null),
              }}
              aria-label={message.label}
            >
              {message.label ? <span aria-hidden="true">{message.text}</span> : message.text}
            </div>
          </motion.div>
        );
      })}

      {showTyping ? (
        <motion.div
          className={`text-message__typing-row${isTypingFromMe ? " text-message__typing-row--me" : " text-message__typing-row--them"}`}
          initial={playEntry ? enterFrom : false}
          animate={enterTo}
          transition={enter(messages.length)}
        >
          <TypingBubble
            bubbleColor={isTypingFromMe ? sentBubbleColor : receivedBubbleColor}
            dotColor={
              typingDotColor ?? (isTypingFromMe ? "rgba(255, 255, 255, 0.85)" : "#8E8E93")
            }
            isMe={isTypingFromMe}
            label={typingLabel}
            playDots={playDots}
            motion={dots}
          />
        </motion.div>
      ) : null}
    </div>
  );
}
