import { LicenseDraftIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import PreparationSectionCard from "./preparation-section-card"

const cardContents = [
  {
    title: "Visual Preparation",
    items: [
      "To ensure efficient use of time, please upload your PPT or PDF file using the provided link.",
      "To avoid software compatibility issues (MS PowerPoint), speakers are strongly advised to embed all fonts in their PowerPoint file and bring a backup version in PDF format.",
      "Speakers must arrive in the session room 30 minutes before the session starts to report to the session chair.If another session is taking place prior to your scheduled time, please wait until your session begins so as not to disturb ongoing presentations.",
    ],
    icon: <HugeiconsIcon icon={LicenseDraftIcon} size={28} className="shrink-0 text-red-400" color="currentColor" />,
  },
  {
    title: "General Consideration",
    items: [
      "Limit the number of words per visual to no more than 20 words.",
      "Provide spacing between lines of text, at least the height of a capital letter.",
      "All fonts, including those on graphics, should be 18 point size or larger.",
      "Graphs and charts should have bold lines and symbols with sharp contrast against the background.",
    ],
    icon: <HugeiconsIcon icon={LicenseDraftIcon} size={28} className="shrink-0 text-red-400" color="currentColor" />,
  },
]

export default function PreparationCardRenderer() {
  return (
    <div className="relative z-10 grid grid-cols-1 gap-2 text-slate-700 lg:grid-cols-2">
      {cardContents.map((card, i) => (
        <PreparationSectionCard key={card.title} title={card.title} items={card.items} icon={card.icon} index={i} />
      ))}
    </div>
  )
}
