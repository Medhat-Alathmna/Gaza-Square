'use client';

import { useEffect, useState } from "react";

export function useScrollGate(targetId: string) {
  const [isPastTarget, setIsPastTarget] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsPastTarget(!entry.isIntersecting && entry.boundingClientRect.top < 0);
        });
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [targetId]);

  return isPastTarget;
}

