"use client";

import { useEffect } from "react";

const ROOT_MARGIN = "0px 0px -80px 0px";
const THRESHOLD = 0.1;

export default function SectionRevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-section-reveal]"
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: ROOT_MARGIN, threshold: THRESHOLD }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
