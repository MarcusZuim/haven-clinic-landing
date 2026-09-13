/** Soft settle — calmer than a sharp ease-out. */
export const ease = [0.22, 1, 0.36, 1] as const;
export const softEase = [0.16, 1, 0.28, 1] as const;

export function fadeUp(
  reduce: boolean | null,
  delay: number,
  distance = 16,
  duration = 0.55,
) {
  return {
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0.28 : duration,
      ease: softEase,
      delay: reduce ? 0 : delay,
    },
  };
}

/** Light float-in for hero copy — small travel, long breath. */
export function softIn(
  reduce: boolean | null,
  delay: number,
  options: { y?: number; duration?: number; x?: number } = {},
) {
  const y = options.y ?? 10;
  const x = options.x ?? 0;
  const duration = options.duration ?? 1.05;

  return {
    initial: reduce
      ? { opacity: 0 }
      : { opacity: 0, y, x, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, x: 0, filter: "blur(0px)" },
    transition: {
      duration: reduce ? 0.3 : duration,
      ease: softEase,
      delay: reduce ? 0 : delay,
    },
  };
}
