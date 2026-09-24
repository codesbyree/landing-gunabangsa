/**
 * parallax.ts
 *
 * Handles scroll-scrub parallax animations.
 * - initParallax: Moves an element along the Y axis in sync with scroll progress.
 */

import { gsap } from "@/lib/gsap"

export interface ParallaxOptions {
  /** Starting Y position in pixels. Default: 0 */
  fromY?: number
  /** Ending Y position in pixels. Default: 500 */
  toY?: number
  /** ScrollTrigger start position. Default: 0 */
  scrubStart?: number | string
  /** ScrollTrigger end position. Default: 1000 */
  scrubEnd?: number | string
  /** GSAP easing. Default: "none" */
  ease?: string
}

/**
 * Applies a scrub-based parallax effect to the given element,
 * translating it along the Y axis as the user scrolls.
 */
export function initParallax(element: Element, options: ParallaxOptions = {}): void {
  const { fromY = 0, toY = 500, scrubStart = 0, scrubEnd = 1000, ease = "none" } = options

  gsap.fromTo(
    element,
    { y: fromY },
    {
      y: toY,
      ease,
      scrollTrigger: {
        start: scrubStart,
        end: scrubEnd,
        scrub: true,
      },
    }
  )
}
