/**
 * text-split.ts
 *
 * Handles all SplitText-based text animations.
 * - animateSplitWords: Splits text into words and animates them into view.
 * - animateSplitLines: Splits text into lines and animates them into view.
 * - addSplitResizeHandler: Registers a resize listener that reverts splits and refreshes ScrollTrigger.
 */

import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap"

type DOMTarget = string | Element | Element[] | NodeListOf<Element>

export interface SplitWordsOptions {
  y?: number
  yPercent?: number
  opacity?: number
  stagger?: number
  filter?: string
  duration?: number
  ease?: string
}

export interface SplitLinesOptions {
  y?: number
  yPercent?: number
  opacity?: number
  stagger?: number
  filter?: string
  duration?: number
  ease?: string
}

/**
 * Splits target elements into words, adds the animation to the given timeline,
 * and returns the SplitText instance for later cleanup/revert.
 */
export function animateSplitWords(
  target: DOMTarget,
  timeline: gsap.core.Timeline,
  position?: string | number,
  options: SplitWordsOptions = {}
): SplitText {
  const { y, yPercent, opacity = 0, stagger = 0.1, filter = "blur(4px)", duration = 0.5, ease = "power3.out" } = options

  const split = new SplitText(target, {
    type: "lines,words",
    linesClass: "overflow-hidden",
  })

  const vars: gsap.TweenVars = { opacity, stagger, filter, duration, ease }
  if (y !== undefined) vars.y = y
  if (yPercent !== undefined) vars.yPercent = yPercent

  if (position !== undefined) {
    timeline.from(split.words, vars, position)
  } else {
    timeline.from(split.words, vars)
  }

  return split
}

/**
 * Splits target elements into lines, adds the animation to the given timeline,
 * and returns the SplitText instance for later cleanup/revert.
 */
export function animateSplitLines(
  target: DOMTarget,
  timeline: gsap.core.Timeline,
  position?: string | number,
  options: SplitLinesOptions = {}
): SplitText {
  const { y, yPercent, opacity = 0, stagger = 0.1, filter = "blur(4px)", duration = 0.5, ease = "power3.out" } = options

  const split = new SplitText(target, {
    type: "lines",
    linesClass: "overflow-hidden",
  })

  const vars: gsap.TweenVars = { opacity, stagger, filter, duration, ease }
  if (y !== undefined) vars.y = y
  if (yPercent !== undefined) vars.yPercent = yPercent

  if (position !== undefined) {
    timeline.from(split.lines, vars, position)
  } else {
    timeline.from(split.lines, vars)
  }

  return split
}

/**
 * Registers a window resize listener that reverts all provided SplitText instances
 * and refreshes ScrollTrigger. Returns a cleanup function to remove the listener.
 */
export function addSplitResizeHandler(...splits: SplitText[]): () => void {
  const handle = () => {
    splits.forEach((s) => s.revert())
    ScrollTrigger.refresh()
  }
  window.addEventListener("resize", handle)
  return () => window.removeEventListener("resize", handle)
}
