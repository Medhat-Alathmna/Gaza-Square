'use client';

import { useEffect, useRef, useState } from "react";

type UseSectionInViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useSectionInView({ threshold = 0.35, rootMargin = "0px 0px -10% 0px" }: UseSectionInViewOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === "undefined" || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, threshold, rootMargin]);

  return { ref, isVisible };
}

