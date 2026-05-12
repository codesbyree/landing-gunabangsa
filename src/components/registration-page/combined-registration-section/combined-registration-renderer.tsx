import RegistrationCard from "../registration-section/registration-card"

const combinedOnsiteFees = [
  {
    name: "Presenter",
    subtitle: "(1 Presenter)",
    earlyBird: {
      date: "until Sep 30, 2026",
      price: "USD 500 / IDR 8.250.000",
    },
    regular: { date: "Oct 1–30, 2026", price: "USD 525 / IDR 8.750.000" },
  },
  {
    name: "Student Presenter",
    subtitle: "(1 Presenter)",
    earlyBird: {
      date: "until Sep 30, 2026",
      price: "USD 475 / IDR 7.850.000",
    },
    regular: { date: "Oct 1–30, 2026", price: "USD 500 / IDR 8.250.000" },
  },
]

const combinedOnlineFees = [
  {
    name: "Presenter",
    subtitle: "(1 Presenter)",
    earlyBird: {
      date: "until Sep 30, 2026",
      price: "USD 450 / IDR 7.500.000",
    },
    regular: { date: "Oct 1–30, 2026", price: "USD 475 / IDR 7.850.000" },
  },
  {
    name: "Student Presenter",
    subtitle: "(1 Presenter)",
    earlyBird: {
      date: "until Sep 30, 2026",
      price: "USD 425 / IDR 7.050.000",
    },
    regular: { date: "Oct 1–30, 2026", price: "USD 450 / IDR 7.500.000" },
  },
]

export default function CombinedRegistrationRenderer() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-medium text-red-800 md:text-xl">
        Onsite Participants (Istanbul, Turkiye)
      </h2>

      <CombinedOnsiteParticipantCards />

      <h2 className="text-lg font-medium text-red-800 md:text-xl">
        Online Participants
      </h2>

      <CombinedOnlineParticipantCards />
    </div>
  )
}

function CombinedOnsiteParticipantCards() {
  return (
    <div className="mb-4 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
      {combinedOnsiteFees.map((fee) => (
        <RegistrationCard
          key={fee.name}
          name={fee.name}
          subtitle={fee.subtitle ?? ""}
          earlyBird={fee.earlyBird}
          regular={fee.regular}
        />
      ))}
    </div>
  )
}

function CombinedOnlineParticipantCards() {
  return (
    <div className="mb-4 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
      {combinedOnlineFees.map((fee) => (
        <RegistrationCard
          key={fee.name}
          name={fee.name}
          subtitle={fee.subtitle ?? ""}
          earlyBird={fee.earlyBird}
          regular={fee.regular}
        />
      ))}
    </div>
  )
}
