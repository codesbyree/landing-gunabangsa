import SpeakerCard, { type SpeakerTypes } from "./speaker-card"

const keynoteSpeakers: SpeakerTypes[] = [
  {
    name: "To be announced",
    affiliation: "To be announced",
    academic_background: "To be announced",
    image: "/assets/images/speakers/placeholder.jpg",
    topic: "To be announced",
    session: "To be announced",
    type: "keynote",
  },
]

const invitedSpeakers: SpeakerTypes[] = [
  {
    name: "Dr. Ikrimah Nafilata, S.K.M., M.Kes (Epid)",
    affiliation: "STIKES Guna Bangsa Yogyakarta, Indonesia",
    academic_background:
      "Dr. Ikrimah Nafilata is an expert in epidemiology and public health at STIKES Guna Bangsa Yogyakarta, with extensive experience in health management and epidemiological research.",
    topic: "Epidemiology & Public Health",
    session: "Nov 5–7, 2026",
    type: "invited" as const,
    image: "/assets/images/speakers/ikrimah-nafilata.jpeg",
  },
  {
    name: "Anita Nur Mayani, S.Tr.Rad., M.T.",
    affiliation: "STIKES Guna Bangsa Yogyakarta, Indonesia",
    academic_background:
      "Anita Nur Mayani specializes in radiological technology and medical imaging at STIKES Guna Bangsa Yogyakarta, with significant contributions to diagnostic imaging research.",
    topic: "Medical Imaging & Radiological Technology",
    session: "Nov 5–7, 2026",
    type: "invited" as const,
    image: "/assets/images/speakers/anita-nur-mayani.jpg",
  },
  {
    name: "Dr. Fitri Nadifah, S.Si., M.Sc.",
    affiliation: "STIKES Guna Bangsa Yogyakarta, Indonesia",
    academic_background:
      "Dr. Fitri Nadifah is a distinguished researcher and academic at STIKES Guna Bangsa Yogyakarta, contributing to advancements in biomedical and health sciences.",
    topic: "Healthcare Innovation & Life Sciences",
    session: "Nov 5–7, 2026",
    type: "invited" as const,
    image: "/assets/images/speakers/fitri-nadifah.jpg",
  },
]

export default function SpeakerCardRenderer() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-medium text-red-800 md:text-xl">
        Keynote Speakers
      </h2>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {keynoteSpeakers.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>

      <h2 className="text-lg font-medium text-red-800 md:text-xl">
        Invited Speakers
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {invitedSpeakers.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </div>
  )
}
