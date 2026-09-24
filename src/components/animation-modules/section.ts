/**
 * section.ts
 *
 * Orchestrates scroll-triggered animations for all [data-container] sections
 * and the site navigation header.
 *
 * Each section can use the following data attributes on its child elements:
 *   [data-split-words]  — SplitText words reveal
 *   [data-split-lines]  — SplitText lines reveal
 *   [data-animate-up]   — Fade-up on scroll
 *   [data-animate-left] — Fade-in from the right on scroll
 *
 * The animation for each section plays once when the section enters the viewport.
 * Fonts must be loaded before calling this function to ensure correct SplitText layout.
 */

import { gsap } from "@/lib/gsap"
import { animateSplitWords, animateSplitLines } from "./text-split"
import { animateFadeUp, animateFadeLeft } from "./scroll-fade"

export function initSectionAnimations(): () => void {
  const header = document.querySelector("[data-app-navigation]")
  const containers = document.querySelectorAll("[data-container]")

  // Slide the navigation header into view on page load
  gsap.from(header, {
    delay: 1,
    yPercent: -100,
    ease: "power3.out",
  })

  const contexts: gsap.Context[] = []

  containers.forEach((container) => {
    const wordsSplitEl = container.querySelectorAll("[data-split-words]")
    const linesSplitEl = container.querySelectorAll("[data-split-lines]")
    const animateUpEl = container.querySelectorAll("[data-animate-up]")
    const animateLeftEl = container.querySelectorAll("[data-animate-left]")

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.3,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: {
          duration: 0.5,
          ease: "power3.out(1.5)",
        },
      })

      // 1. SplitText words
      if (wordsSplitEl.length > 0) {
        animateSplitWords(wordsSplitEl, tl, undefined, {
          y: 10,
          opacity: 0,
          stagger: 0.1,
          filter: "blur(4px)",
          duration: 0.5,
        })
      }

      // 2. SplitText lines (overlaps words animation)
      if (linesSplitEl.length > 0) {
        animateSplitLines(linesSplitEl, tl, "<0.3", {
          y: 10,
          opacity: 0,
          stagger: 0.1,
          filter: "blur(4px)",
          duration: 0.8,
        })
      }

      // 3. Fade-up elements
      if (animateUpEl.length > 0) {
        animateFadeUp(animateUpEl, tl, "<0.1", {
          y: 20,
          opacity: 0,
          filter: "blur(4px)",
          duration: 0.8,
          stagger: 0.1,
        })
      }

      // 4. Fade-left elements
      if (animateLeftEl.length > 0) {
        animateFadeLeft(animateLeftEl, tl, "<0.1", {
          x: 40,
          opacity: 0,
          filter: "blur(4px)",
          duration: 0.8,
          stagger: 0.1,
        })
      }
    }, container)

    contexts.push(ctx)
  })

  return () => contexts.forEach((ctx) => ctx.revert())
}
