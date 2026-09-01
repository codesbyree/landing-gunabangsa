import { Users, ClipboardList, FlaskConical, BookOpen, MonitorDot, UserGroup02Icon, Package } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { ReactNode } from "react"

import CommitteeCard, { type CommitteeTypes } from "./committee-card"

type CommitteeSectionTypes = {
  title: string
  icon: ReactNode
  data: CommitteeTypes[]
}

const organizingCommittee: CommitteeTypes[] = [
  {
    role: "Person in Charge",
    name: "Dr. dr. R. Soerdjo Hadijono, SpOG(K), DTRM & B(Ch).",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "General Chair",
    name: "Dr. Dian Wuri Astuti, S.Si., M.Sc., CIRR",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Program Co-Chair",
    name: "Ir. Okka Adiyanto, S.T.P., M.Sc., Ph.D.",
    affiliation: "Universitas Ahmad Dahlan",
  },
  {
    role: "Program Co-Chair",
    name: "Gravinda Widyaswara, S.Si., M.Sc.",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Program Co-Chair",
    name: "Wisnu Budi Waluyo, S.I.P., M.Sc",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Technical Program Committee Chairs",
    name: "Ayu Wita Sari, S.Si., M.Sc",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Administrative Officer",
    name: "Dian Monalisa Rusliani, S.Tr.Keb., M.Keb",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Administrative Officer",
    name: "Sarika Setya Putri, S.Tr.Kes (Rad)., M.Eng",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Payment and Billing Officer",
    name: "Maryudella Afrida, S.Kep., Ns., M.Kep",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Payment and Billing Officer",
    name: "Candra Febriyan, S.E",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
]

const internationalAdvisory: CommitteeTypes[] = [
  {
    role: "Committee Member",
    name: "Dr. Wiwik Suryandartiwi, MM",
    affiliation: "Universitas Awal Bros",
  },
  {
    role: "Committee Member",
    name: "Dr. Agus Hendriyanto, M.Pd",
    affiliation: "Nusa Putra University",
  },
  {
    role: "Committee Member",
    name: "Alfyn Abdan Nurahman, M.Pd",
    affiliation: "Nusa Putra University",
  },
]

const scientificCommittee: CommitteeTypes[] = [
  {
    role: "Committee Member",
    name: "Asst. Prof. Dr. Kamolrat Turner",
    affiliation: "Boromarajonani Collge of Nursing Sawanpracharak",
  },
  {
    role: "Committee Member",
    name: "Asst. Prof. Dr. Boonsurb Sosome",
    affiliation: "Boromarajonani Collge of Nursing Sawanpracharak",
  },
  {
    role: "Committee Member",
    name: "Assoc. Prof. Ts. Dr. Wan I. Ismail",
    affiliation: "Universiti Teknologi Mara",
  },
  {
    role: "Committee Member",
    name: "Dr. Titin Aryani, S.Si., M.Sc",
    affiliation: "Universitas 'Aisyiyah Yogyakarta",
  },
  {
    role: "Committee Member",
    name: "Dr. Hani Tuasikal, S.Kep.,Ns., M.Kep",
    affiliation: "STIKES Prof Dr. J.A.Latumeten",
  },
  {
    role: "Committee Member",
    name: "Dr. Hasnah, S.Kep, Ns, M.Kes",
    affiliation: "Universitas Islam Negeri Alauddin Makassar",
  },
  {
    role: "Committee Member",
    name: "Zaldy Rusli, M.Farm",
    affiliation: "Universitas Pakuan",
  },
  {
    role: "Committee Member",
    name: "Dr. apt. Mohammad Rizki Fadhil Pratama, S.Farm., M.Si",
    affiliation: "Universitas Muhammadiyah Palangkaraya",
  },
  {
    role: "Committee Member",
    name: "Hardani, M.Si",
    affiliation: "Universitas Bima Internasional MFH",
  },
]

const editorialPublication: CommitteeTypes[] = [
  {
    role: "Chief Editor and Publication Chair",
    name: "Prof. Abdul Ghofur Anshori, SH., MH",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Associate Editor",
    name: "Aulia Rahman, S.Si., M.Biotech",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Associate Editor",
    name: "Shandy Wigya Mahanani, M.Tr.Keb",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Associate Editor",
    name: "Dr. Muhammad Evy Prasetyanto",
    affiliation: "Universitas Muhammadiyah Semarang",
  },
  {
    role: "Associate Editor",
    name: "Ilham Fathurrahman, S.Pd., M.Biotech",
    affiliation: "Universitas Muhammadiyah Metro",
  },
]

const itSupport: CommitteeTypes[] = [
  {
    role: "Committee Member",
    name: "Bimantoro Adiputro, S.Psi",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Committee Member",
    name: "Muhammad Thoif Junaidi, A.Md.Kom",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Committee Member",
    name: "Satriya Dwi Putra, S.Pd., M.Kom",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Committee Member",
    name: "Muhammad Fauzan Sidik, S.Pd",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
]

const volunteerManagement: CommitteeTypes[] = [
  {
    role: "Committee Member",
    name: "Arum Nuryati, S.K.M., M.K.M",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "External Students",
    name: "To be Confirmed",
    affiliation: "",
  },
  {
    role: "Guna Bangsa Health College Internal Students",
    name: "Edwin Yeremia",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Guna Bangsa Health College Internal Students",
    name: "Theresia Wulandari",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Guna Bangsa Health College Internal Students",
    name: "Anisa Handayani",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
  {
    role: "Guna Bangsa Health College Internal Students",
    name: "Angelia Bria",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
]

const logistics: CommitteeTypes[] = [
  {
    role: "Logistics Coordinator",
    name: "Mia Dwi Agustiani, S. S. T., M.Tr. Keb",
    affiliation: "STIKES Guna Bangsa Yogyakarta",
  },
]

const sections: CommitteeSectionTypes[] = [
  {
    title: "Organizing Committee",
    icon: <HugeiconsIcon icon={ClipboardList} color="currentColor" />,
    data: organizingCommittee,
  },
  {
    title: "International Advisory Committee",
    icon: <HugeiconsIcon icon={Users} color="currentColor" />,
    data: internationalAdvisory,
  },
  {
    title: "Scientific / Program Committee",
    icon: <HugeiconsIcon icon={FlaskConical} color="currentColor" />,
    data: scientificCommittee,
  },
  {
    title: "Editorial and Publication Committees",
    icon: <HugeiconsIcon icon={BookOpen} color="currentColor" />,
    data: editorialPublication,
  },
  {
    title: "IT and Technical Support Committee",
    icon: <HugeiconsIcon icon={MonitorDot} color="currentColor" />,
    data: itSupport,
  },
  {
    title: "Volunteer Management Committee",
    icon: <HugeiconsIcon icon={UserGroup02Icon} color="currentColor" />,
    data: volunteerManagement,
  },
  {
    title: "Logistics Committee",
    icon: <HugeiconsIcon icon={Package} color="currentColor" />,
    data: logistics,
  },
]

export default function CommitteeCardRenderer() {
  return (
    <div className="flex flex-col gap-10">
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="text-red-800">{section.icon}</div>

            <h2 className="text-lg font-medium text-red-800 md:text-xl">{section.title}</h2>
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
