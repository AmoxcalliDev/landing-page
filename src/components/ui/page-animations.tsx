"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PageAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-section]").forEach((section) => {
        const targets = section.querySelectorAll("[data-reveal]");
        if (!targets.length) return;

        gsap.set(targets, { y: 24, opacity: 0 });

        gsap.fromTo(
          targets,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              end: "top 42%",
              scrub: 0.8,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}