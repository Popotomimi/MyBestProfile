import { useEffect, useRef } from "react";

export const useVerticalAutoScroll = (
  length: number,
  setPosition: React.Dispatch<React.SetStateAction<number>>,
  delay: number = 3000
) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScroll = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setPosition((prev) => (prev + 1 >= length ? 0 : prev + 1));
    }, delay);
  };

  const stopScroll = () => {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startScroll();
    return () => stopScroll();
  }, []);

  return { startScroll, stopScroll };
};
