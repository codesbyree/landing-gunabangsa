import { LicenseDraftIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import PreparationSectionCard from "./preparation-section-card"

const cardContents = [
  {
    title: "Preparing The Revised Manuscript",
    items: [
      "Two files must be submitted through the IGERS system: The Final Camera-Ready Manuscript (revised article) in .doc format and the Response to Reviewers document in .pdf format.",
      "Instructions for preparing the final camera-ready manuscript can be found in the Final Camera-Ready Guidelines.",
      "Respond directly to reviewer comments in the comment field of the IGERS system.",
      "Carefully proofread your manuscript for spelling, grammar, and formatting errors before submission.",
    ],
    icon: (
      <HugeiconsIcon
        icon={LicenseDraftIcon}
        size={28}
        className="shrink-0 text-red-400"
        color="currentColor"
      />
    ),
  },
]

export default function PreparationCardRenderer() {
  return (
    <div className="relative z-10 grid grid-cols-1 gap-2 bg-red-50/80 text-slate-600 lg:grid-cols-2 lg:grid-rows-2">
      {cardContents.map((card, i) => (
        <PreparationSectionCard
          key={card.title}
          title={card.title}
          items={card.items}
          icon={card.icon}
          index={i}
        />
      ))}
    </div>
  )
}
