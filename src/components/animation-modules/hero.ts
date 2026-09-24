/**
 * hero.ts
 *
 * Orchestrates the full hero section animation sequence.
 * Composes text-split, scroll-fade, and parallax animation modules
 * into a coordinated GSAP timeline scoped to [data-app-hero].
 *
 * Animation sequence (desktop ≥1280px only):
 *   1. [data-split-title]  — words slide up and fade in
 *   2. [data-split-body]   — lines slide up and fade in (overlaps step 1)
 *   3. [data-animate-up]   — buttons/info blocks fade up
 *   4. [data-app-carousel] — parallax scrub on scroll
 */

import { gsap } from "@/lib/gsap"
import { animateSplitWords, animateSplitLines, addSplitResizeHandler } from "./text-split"
import { initParallax } from "./parallax"

export function initHeroAnimation(): gsap.Context | undefined {
  const container = document.querySelector("[data-app-hero]")
  if (!container) return

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    mm.add("(min-width: 1280px)", () => {
      const titleEl = container.querySelector("[data-split-title]")
      const bodyEl = container.querySelector("[data-split-body]")
      const carousel = container.querySelector("[data-app-carousel]")

      const tl = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: {
          duration: 0.5,
          ease: "power3.out",
        },
      })

      // 1. Animate title words
      const splitTitle = animateSplitWords(titleEl!, tl, undefined, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.06,
        filter: "blur(10px)",
      })

      // 2. Animate body lines (overlaps the title animation)
      const splitBody = animateSplitLines(bodyEl!, tl, "-=0.6", {
        yPercent: 100,
        opacity: 0,
        stagger: 0.06,
        filter: "blur(10px)",
      })

      // 3. Animate CTA / info blocks
      tl.from("[data-animate-up]", { y: 30, opacity: 0, filter: "blur(10px)", stagger: 0.2 }, 0.8)

      // 4. Carousel parallax
      if (carousel) {
        initParallax(carousel, { fromY: 0, toY: 500, scrubStart: 0, scrubEnd: 1000 })
      }

      // Revert SplitText instances on resize to avoid layout issues
      const cleanup = addSplitResizeHandler(splitTitle, splitBody)
      return cleanup
    })
  }, container)

  return ctx
}
