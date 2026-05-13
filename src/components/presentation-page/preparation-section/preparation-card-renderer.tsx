import {
  LicenseDraftIcon,
  Login01Icon,
  UserAdd01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import PreparationSectionCard from "./preparation-section-card"

const cardContents = [
  {
    title: "Preparing Article Submission",
    items: [
      "Ensure that the manuscript aligns with the scope and topics of the conference.",
      "Titles must be representative of the article content and should not exceed 18 words.",
      "Abstracts should be between 150 and 250 words.",
      "The manuscript should include: Introduction, Methods, Results, Discussion, Conclusion, and References.",
      "Submissions must be anonymous for the blind review process (no author names, email addresses, or institutional affiliations in the manuscript).",
      "No specific template format is required for the initial submission. However, files must be prepared and submitted in .doc format.",
      "Manuscripts will be evaluated based on technical rigor, methodology soundness, clarity of results, and validity of conclusions.",
      "Submissions must present original research not previously published. Plagiarism is strictly prohibited. All manuscripts must have a similarity index of no more than 20% as verified by Turnitin or equivalent.",
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
  {
    title: "Creating an Account",
    items: [
      "Go to the portal login page or click the 'Login' button in the top-right corner of the homepage.",
      "On the login page, click the 'Create Account' button to proceed.",
      "Fill out the required registration fields, then click 'Continue'.",
      "After creating your account, you will be prompted to verify your email address.",
    ],
    icon: (
      <HugeiconsIcon
        icon={UserAdd01Icon}
        size={28}
        className="shrink-0 text-red-400"
        color="currentColor"
      />
    ),
  },
  {
    title: "Login to Your Account",
    items: [
      "Navigate to the official submission portal login page.",
      "Enter your registered email address and password in the respective fields, then click 'Login'.",
      "If your credentials are valid, you will be redirected to your dashboard; otherwise, an error message will appear.",
    ],
    icon: (
      <HugeiconsIcon
        icon={Login01Icon}
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
