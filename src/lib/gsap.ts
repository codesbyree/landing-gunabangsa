import { gsap } from "gsap"

import { Draggable } from "gsap/Draggable"
import { InertiaPlugin } from "gsap/InertiaPlugin"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { SplitText } from "gsap/SplitText"
import { TextPlugin } from "gsap/TextPlugin"

gsap.registerPlugin(Draggable, InertiaPlugin, ScrambleTextPlugin, ScrollTrigger, ScrollSmoother, SplitText, TextPlugin)

export { gsap, Draggable, InertiaPlugin, ScrambleTextPlugin, ScrollTrigger, ScrollSmoother, SplitText, TextPlugin }
