import { HugeiconsIcon } from "@hugeicons/react"
import { MapsLocation01Icon, PresentationOnlineIcon } from "@hugeicons/core-free-icons"

import ModeCard from "./participant-mode-card"

const cardContents = [
  {
    title: "Onsite Program (Istanbul, Turkiye)",
    subtitle: "Participants attending onsite will benefit from the full immersive conference experience, including:",
    items: [
      "Opening & Closing Ceremonies (onsite & live streamed)",
      "Keynote speeches delivered in person (some may also be broadcast online)",
      "Parallel onsite sessions for paper presentations",
      "Invited sessions/workshops with interactive participation",
      "Networking luncheons, coffee breaks, and cultural activities",
      "Award ceremony (Best Paper & Best Presenter awards)",
    ],
    icon: <HugeiconsIcon icon={MapsLocation01Icon} size={28} className="shrink-0 text-red-400" color="currentColor" />,
  },
  {
    title: "Online Program (Virtual)",
    subtitle: "For participants attending online, we provides:",
    items: [
      "Live streaming of all keynote addresses and selected plenary sessions",
      "Access to virtual parallel sessions via video conferencing platform (Zoom link will be provided)",
      "Opportunity for Q&A and interactive discussions in real-time",
      "Virtual networking sessions with fellow presenters and participants",
      "E-Certificate of Presentation/Participation",
    ],
    icon: <HugeiconsIcon icon={PresentationOnlineIcon} size={28} className="shrink-0 text-red-400" color="currentColor" />,
  },
]

export default function ModeCardRenderer() {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {cardContents.map((card) => (
        <ModeCard key={card.title} title={card.title} items={card.items} icon={card.icon} subtitle={card.subtitle} />
      ))}
    </div>
  )
}
