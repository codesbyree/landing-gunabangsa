/**
 * scroll-fade.ts
 *
 * Handles scroll-triggered fade animations.
 * - animateFadeUp:   Fades elements in while sliding them upward (y-axis).
 * - animateFadeLeft: Fades elements in while sliding them from the right (x-axis).
 */

import { gsap } from "@/lib/gsap"

export interface FadeUpOptions {
  y?: number
  opacity?: number
  filter?: string
  duration?: number
  stagger?: number
  ease?: string
}

export interface FadeLeftOptions {
  x?: number
  opacity?: number
  filter?: string
  duration?: number
  stagger?: number
  ease?: string
}

/**
 * Adds a fade-up animation to the provided timeline.
 * Elements slide upward from `y` offset while fading in.
 */
export function animateFadeUp(
  target: gsap.TweenTarget,
  timeline: gsap.core.Timeline,
  position?: string | number,
  options: FadeUpOptions = {}
): void {
  const { y = 20, opacity = 0, filter = "blur(4px)", duration = 0.8, stagger = 0.1, ease = "power3.out" } = options

  const vars: gsap.TweenVars = { y, opacity, filter, duration, stagger, ease }

  if (position !== undefined) {
    timeline.from(target, vars, position)
  } else {
    timeline.from(target, vars)
  }
}

/**
 * Adds a fade-left animation to the provided timeline.
 * Elements slide in from the right (positive x) while fading in.
 */
export function animateFadeLeft(
  target: gsap.TweenTarget,
  timeline: gsap.core.Timeline,
  position?: string | number,
  options: FadeLeftOptions = {}
): void {
  const { x = 40, opacity = 0, filter = "blur(4px)", duration = 0.8, stagger = 0.1, ease = "power3.out" } = options

  const vars: gsap.TweenVars = { x, opacity, filter, duration, stagger, ease }

  if (position !== undefined) {
    timeline.from(target, vars, position)
  } else {
    timeline.from(target, vars)
  }
}
