import {
  Users,
  ClipboardList,
  FlaskConical,
  BookOpen,
  Megaphone,
  MonitorDot,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { ReactNode } from "react"

import CommitteeCard, { type CommitteeTypes } from "./committee-card"

type CommitteeSectionTypes = {
  title: string
  icon: ReactNode
  data: CommitteeTypes[]
}

const steering: CommitteeTypes[] = [
  {
    role: "Chair",
    name: "Dr. dr. R. Soerdjo Hadijono, SpOG(K), DTRM & B(Ch).",
    affiliation: "",
  },
  { role: "Member", name: "Dr. Wiwik Suryandartiwi, MM", affiliation: "" },
]

const conferenceChair: CommitteeTypes[] = [
  {
    role: "Conference Chair",
    name: "Dr. Dian Wuri Astuti, S.Si., M.Sc., CIRR",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Co-Chair",
    name: "Ir. Okka Adiyanto, S.T.P., M.Sc., Ph.D.",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Co-Chair",
    name: "Gravinda Widyaswara, S.Si., M.Sc.",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Co-Chair",
    name: "Wisnu Budi Waluyo",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  { role: "Secretary", name: "Dian Monalisa", affiliation: "" },
  { role: "Treasurer", name: "Ayu Wita Sari, S.Si., M.Sc.", affiliation: "" },
  {
    role: "Treasurer",
    name: "Maryudella Afrida, S.Kep., Ns., M.Kep",
    affiliation: "",
  },
]

const scientific: CommitteeTypes[] = [
  {
    role: "Member",
    name: "Asst. Prof. Dr. Kamolrat Turner",
    affiliation: "Boromarajonani",
  },
  {
    role: "Member",
    name: "Asst. Prof. Dr. Boonsurb Sosome",
    affiliation: "Boromarajonani",
  },
  {
    role: "Member",
    name: "Assoc. Prof. Ts. Dr. Wan I. Ismail",
    affiliation: "Universiti Teknologi Mara",
  },
]

const publication: CommitteeTypes[] = [
  {
    role: "Member",
    name: "Prof. Abdul Ghofur Anshori, SH., MH",
    affiliation: "",
  },
  { role: "Member", name: "Aulia Rahman, S.Si., M.Biotech", affiliation: "" },
]

const pr: CommitteeTypes[] = [
  {
    role: "Public Relations & Partnership",
    name: "Sarika Setya Putri, S.Tr.Kes (Rad), M.Eng.",
    affiliation: "",
  },
  {
    role: "Registration & Secretariat",
    name: "Shandy Wigya, M.Tr.Keb",
    affiliation: "",
  },
]

const itLogistics: CommitteeTypes[] = [
  { role: "IT & Documentation", name: "Bimantoro", affiliation: "" },
  {
    role: "Logistics & Event Management",
    name: "Mia Dwi Agustiani, S.S.T., M.Tr.Keb",
    affiliation: "",
  },
]

const sections: CommitteeSectionTypes[] = [
  {
    title: "Steering Committee",
    icon: <HugeiconsIcon icon={Users} color="currentColor" />,
    data: steering,
  },
  {
    title: "Conference Chair & Administration",
    icon: <HugeiconsIcon icon={ClipboardList} color="currentColor" />,
    data: conferenceChair,
  },
  {
    title: "Scientific / Technical Program Committee",
    icon: <HugeiconsIcon icon={FlaskConical} color="currentColor" />,
    data: scientific,
  },
  {
    title: "Publication & Proceedings Committee",
    icon: <HugeiconsIcon icon={BookOpen} color="currentColor" />,
    data: publication,
  },
  {
    title: "Public Relations, Registry & Secretariat",
    icon: <HugeiconsIcon icon={Megaphone} color="currentColor" />,
    data: pr,
  },
  {
    title: "IT, Documentation & Logistics",
    icon: <HugeiconsIcon icon={MonitorDot} color="currentColor" />,
    data: itLogistics,
  },
]

export default function CommitteeCardRenderer() {
  return (
    <div className="flex flex-col gap-8">
      {sections.map((section) => (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="text-red-800">{section.icon}</div>

            <h2 className="text-lg font-medium text-red-800 md:text-xl">
              {section.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {section.data.map((speaker, index) => (
              <CommitteeCard key={index} {...speaker} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
