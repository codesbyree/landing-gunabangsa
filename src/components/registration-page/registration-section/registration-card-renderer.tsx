import RegistrationCard from "./registration-card"

const generalOnsiteFees = [
  {
    name: "Presenter",
    subtitle: "(1 Presenter)",
    earlyBird: {
      date: "until Sep 30, 2026",
      price: "USD 125 / IDR 2.250.000",
    },
    regular: { date: "Oct 1–30, 2026", price: "USD 175 / IDR 3.000.000" },
  },
  {
    name: "Student Presenter",
    subtitle: "(1 Presenter)",
    earlyBird: {
      date: "until Sep 30, 2026",
      price: "USD 100 / IDR 1.750.000",
    },
    regular: { date: "Oct 1–30, 2026", price: "USD 125 / IDR 2.250.000" },
  },
  {
    name: "Participant",
    earlyBird: {
      date: "until Sep 30, 2026",
      price: "USD 100 / IDR 1.750.000",
    },
    regular: { date: "Oct 1–30, 2026", price: "USD 125 / IDR 2.250.000" },
  },
  {
    name: "Student Participant",
    earlyBird: {
      date: "until Sep 30, 2026",
      price: "USD 75 / IDR 1.250.000",
    },
    regular: { date: "Oct 1–30, 2026", price: "USD 100 / IDR 1.750.000" },
  },
]

const generalOnlineFees = [
  {
    name: "Presenter",
    subtitle: "(1 Presenter)",
    earlyBird: {
      date: "until Sep 30, 2026",
      price: "USD 75 / IDR 1.250.000",
    },
    regular: { date: "Oct 1–30, 2026", price: "USD 100 / IDR 1.750.000" },
  },
  {
    name: "Student Presenter",
    subtitle: "(1 Presenter)",
    earlyBird: {
      date: "until Sep 30, 2026",
      price: "USD 50 / IDR 850.000",
    },
    regular: { date: "Oct 1–30, 2026", price: "USD 75 / IDR 1.250.000" },
  },
  {
    name: "Participant",
    earlyBird: {
      date: "until Sep 30, 2026",
      price: "USD 50 / IDR 850.000",
    },
    regular: { date: "Oct 1–30, 2026", price: "USD 75 / IDR 1.250.000" },
  },
  {
    name: "Student Participant",
    earlyBird: {
      date: "until Sep 30, 2026",
      price: "USD 30 / IDR 500.000",
    },
    regular: { date: "Oct 1–30, 2026", price: "USD 50 / IDR 850.000" },
  },
]

const generalPublicationFees = [
  {
    name: "Journal",
    subtitle: "",
    earlyBird: {
      date: "",
      price: "",
    },
    regular: {
      date: "",
      price: "At cost, depending on the selected publisher",
    },
  },
]

export default function RegistrationCardRenderer() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-medium text-red-800 md:text-xl">
        Onsite Participants (Istanbul, Turkiye)
      </h2>

      <OnsiteParticipantCards />

      <h2 className="text-lg font-medium text-red-800 md:text-xl">
        Online Participants
      </h2>

      <OnlineParticipantCards />

      <h2 className="text-lg font-medium text-red-800 md:text-xl">
        Publication Fee
      </h2>

      <PublicationFeeCards />
    </div>
  )
}

function OnsiteParticipantCards() {
  return (
    <div className="mb-4 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
      {generalOnsiteFees.map((fee) => (
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

function OnlineParticipantCards() {
  return (
    <div className="mb-4 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
      {generalOnlineFees.map((fee) => (
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

function PublicationFeeCards() {
  return (
    <div className="mb-4 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
      {generalPublicationFees.map((fee) => (
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
