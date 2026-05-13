import {
  AddToListIcon,
  PresentationPodiumIcon,
  RecordIcon,
  UserQuestion01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PreparationSectionCard from "./preparation-section-card"

const cardContents = [
  {
    title: "Visual Preparation",
    items: [
      "To ensure efficient use of time, please upload your PPT or PDF file using the provided link.",
      "To avoid software compatibility issues, speakers are strongly advised to embed all fonts in their PowerPoint file and bring a backup version in PDF format.",
      "Speakers must arrive in the session room 30 minutes before the session starts to report to the session chair.",
    ],
    icon: (
      <HugeiconsIcon
        icon={PresentationPodiumIcon}
        size={28}
        className="shrink-0 text-red-400"
        color="currentColor"
      />
    ),
  },
  {
    title: "General Considerations",
    items: [
      "Limit the number of words per visual to no more than 20 words.",
      "Provide spacing between lines of text, at least the height of a capital letter.",
      "All fonts, including those on graphics, should be 18-point size or larger.",
      "Graphs and charts should have bold lines and symbols with sharp contrast against the background.",
    ],
    icon: (
      <HugeiconsIcon
        icon={AddToListIcon}
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
      {cardContents.map((card) => (
        <PreparationSectionCard
          key={card.title}
          title={card.title}
          items={card.items}
          icon={card.icon}
        />
      ))}

      <Card className="relative rounded-2xl bg-red-900 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-1">
        <CardHeader>
          <div className="mb-2">
            <HugeiconsIcon
              icon={UserQuestion01Icon}
              size={28}
              className="shrink-0 text-red-100"
              color="currentColor"
            />
          </div>

          <CardTitle className="text-red-50">No Show Policy</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-2">
            <p className="text-red-50/70">
              All accepted papers must be presented at the conference by at
              least one of the authors. A paper will be considered a no-show if
              the author fails to present without prior approval.
            </p>

            <p className="text-red-50/70">Consequences of a no-show:</p>

            <ul className="text-red-50/70">
              <li className="flex gap-2">
                <HugeiconsIcon
                  icon={RecordIcon}
                  size={16}
                  className="mt-1 shrink-0 text-red-100"
                  color="currentColor"
                />
                <span>
                  The paper will be removed from the conference proceedings.
                </span>
              </li>
              <li className="flex gap-2">
                <HugeiconsIcon
                  icon={RecordIcon}
                  size={16}
                  className="mt-1 shrink-0 text-red-100"
                  color="currentColor"
                />
                <span>
                  The authors will not receive a presentation certificate.
                </span>
              </li>
              <li className="flex gap-2">
                <HugeiconsIcon
                  icon={RecordIcon}
                  size={16}
                  className="mt-1 shrink-0 text-red-100"
                  color="currentColor"
                />
                <span>Registration fees are non-refundable.</span>
              </li>
            </ul>

            <div className="mt-2 flex w-full min-w-75 flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-4 text-white">
              In case of emergency or force majeure: authors must inform the
              organizing committee in writing no later than 1 day before the
              conference date.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
