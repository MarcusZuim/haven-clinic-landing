/** Soft settle — calmer than a sharp ease-out. */
export const ease = [0.22, 1, 0.36, 1] as const;
export const softEase = [0.16, 1, 0.28, 1] as const;

export function fadeUp(
  reduce: boolean | null,
  delay: number,
  distance = 10,
  duration = 0.95,
) {
  return {
    initial: reduce ? { opacity: 1 } : { opacity: 0.82, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0.01 : duration,
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
  const y = options.y ?? 8;
  const x = options.x ?? 0;
  const duration = options.duration ?? 1.15;

  return {
    initial: reduce ? { opacity: 1 } : { opacity: 0.78, y, x },
    animate: { opacity: 1, y: 0, x: 0 },
    transition: {
      duration: reduce ? 0.01 : duration,
      ease: softEase,
      delay: reduce ? 0 : delay,
    },
  };
}
