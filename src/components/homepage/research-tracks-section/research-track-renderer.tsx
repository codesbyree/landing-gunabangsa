import ResearchTrackCard from "./research-track-card"
import {
  AiBrain03Icon,
  HealthIcon,
  Leaf01Icon,
  MedicineBottle01Icon,
  NanoTechnologyIcon,
  StethoscopeIcon,
  Baby01Icon,
  Brain01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const researchTracks = [
  {
    title: "Medical and Clinical Sciences",
    description: "",
    items: [
      "Internal medicine, surgery, pediatrics, obstetrics & gynecology",
      "Clinical case studies & clinical trials",
      "Diagnostics and therapeutic advancements",
      "Evidence-based medical practice",
      "Emergency & critical care medicine",
    ],
    icon: (
      <HugeiconsIcon
        icon={StethoscopeIcon}
        size={24}
        className="text-red-600"
        color="currentColor"
      />
    ),
  },
  {
    title: "Biomedical Engineering and Medical Technology",
    description: "",
    items: [
      "Biomedical devices and instrumentation",
      "Medical imaging (MRI, CT, ultrasound, X-ray, optical imaging)",
      "Biomechanics & biomaterials",
      "Rehabilitation engineering",
      "Wearable health monitoring devices",
      "Biomedical signal & image processing",
    ],
    icon: (
      <HugeiconsIcon
        icon={NanoTechnologyIcon}
        size={24}
        className="text-red-600"
        color="currentColor"
      />
    ),
  },
  {
    title: "Health Informatics and AI in Medicine",
    description: "",
    items: [
      "AI for diagnostics and early disease detection",
      "Machine learning in clinical decision support",
      "Electronic medical records (EMR) & health information systems",
      "Telemedicine & remote patient monitoring",
      "Medical data analytics and big data in health",
    ],
    icon: (
      <HugeiconsIcon
        icon={AiBrain03Icon}
        size={24}
        className="text-red-600"
        color="currentColor"
      />
    ),
  },
  {
    title: "Pharmaceutical Sciences and Clinical Pharmacy",
    description: "",
    items: [
      "Drug discovery & development",
      "Pharmacology & toxicology",
      "Pharmacokinetics and pharmacodynamics",
      "Pharmaceutical technology",
      "Herbal & traditional medicine evaluation",
    ],
    icon: (
      <HugeiconsIcon
        icon={MedicineBottle01Icon}
        size={24}
        className="text-red-600"
        color="currentColor"
      />
    ),
  },
  {
    title: "Environmental Health and Sustainable Health Systems",
    description: "",
    items: [
      "Climate change and health impact",
      "Water, air, and soil quality and health",
      "Waste management in healthcare facilities",
      "Sustainable medical practices",
      "Disaster medicine & health emergency management",
    ],
    icon: (
      <HugeiconsIcon
        icon={Leaf01Icon}
        size={24}
        className="text-red-600"
        color="currentColor"
      />
    ),
  },
  {
    title: "Nursing, Midwifery, and Allied Health Sciences",
    description: "",
    items: [
      "Nursing practice and innovation",
      "Midwifery practice & maternal health",
      "Physical therapy, occupational therapy, speech therapy",
      "Clinical education and training",
    ],
    icon: (
      <HugeiconsIcon
        icon={Baby01Icon}
        size={24}
        className="text-red-600"
        color="currentColor"
      />
    ),
  },
  {
    title: "Mental Health and Behavioral Sciences",
    description: "",
    items: [
      "Mental health disorders and therapy",
      "Psychology of health and illness",
      "Stress, resilience, and well-being",
      "Counseling strategies in healthcare",
    ],
    icon: (
      <HugeiconsIcon
        icon={Brain01Icon}
        size={24}
        className="text-red-600"
        color="currentColor"
      />
    ),
  },
  {
    title: "Public Health & Epidemiology",
    description: "",
    items: [
      "Disease surveillance & outbreak analysis",
      "Environmental and occupational health",
      "Epidemiological modeling",
      "Health promotion & disease prevention",
      "Community health and global health challenges",
      "Nutrition science and public wellness",
    ],
    icon: (
      <HugeiconsIcon
        icon={HealthIcon}
        size={24}
        className="text-red-600"
        color="currentColor"
      />
    ),
  },
]

export default function ResearchTrackRenderer() {
  return (
    <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {researchTracks.map((track) => (
        <ResearchTrackCard
          key={track.title}
          title={track.title}
          items={track.items}
          icon={track.icon}
          description={track.description}
        />
      ))}
    </div>
  )
}
