export const ease = [0.22, 1, 0.36, 1] as const;

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
      ease,
      delay: reduce ? 0 : delay,
    },
  };
}
