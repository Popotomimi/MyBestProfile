import { useEffect, RefObject } from "react";

export const useHorizontalAutoScroll = (
  containerRef: RefObject<HTMLDivElement | null>,
  step: number = 105,
  delay: number = 4000
) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft + step >= maxScroll) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    }, delay);

    return () => clearInterval(interval);
  }, [containerRef, step, delay]);
};
