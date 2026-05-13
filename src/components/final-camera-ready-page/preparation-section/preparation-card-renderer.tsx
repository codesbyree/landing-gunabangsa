import { LicenseDraftIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import PreparationSectionCard from "./preparation-section-card"

const cardContents = [
  {
    title: "Preparing Your Final Manuscript",
    items: [
      "The Final Camera-Ready Manuscript must include author names, affiliations, and email addresses (as required by the publisher's template).",
      "Strictly follow the writing instructions provided in the publisher's template (from title to references).",
      "Use clear and high-resolution figures; avoid or replace any blurred images.",
      "If figures are reproduced from other sources, the corresponding copyright permission form must be provided for each figure.",
      "Use a reference management tool (e.g., Mendeley, Zotero) to minimize formatting errors in the references section.",
      "The prepared Final Camera-Ready Manuscript, along with all required documents, must then be resubmitted through the IGERS system.",
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

      <div className="relative overflow-hidden rounded-2xl bg-red-900 p-6 text-white">
        <div className="pointer-events-none absolute right-0 bottom-0 p-10 opacity-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-user-check h-48 w-48"
            aria-hidden="true"
          >
            <path d="m16 11 2 2 4-4"></path>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between gap-12">
          <div className="max-w-2xl flex-1">
            <h4 className="mb-4 text-[10px] font-black tracking-[0.3em] text-red-300 uppercase">
              Assistance
            </h4>
            <p className="mb-4 text-base leading-tight font-bold">
              Manuscript Formatting and Editing Assistance
            </p>
            <p className="text-sm leading-relaxed font-medium text-slate-50/70">
              We understand that preparing the final camera-ready manuscript can
              be challenging. We offer a professional formatting and editing
              service through our trusted partner.
            </p>
          </div>

          <div className="flex w-full min-w-75 flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-8">
            <h5 className="mb-2 font-bold text-white">Our Partner Contact</h5>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-mail h-5 w-5 text-red-400"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <a
                href="mailto:nutral@nusaputra.ac.id"
                className="text-sm font-medium transition-colors hover:text-red-400"
              >
                nutral@nusaputra.ac.id
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-phone h-5 w-5 text-red-400"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              <span className="text-sm font-medium">+628 111 884 108</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
