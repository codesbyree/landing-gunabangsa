import type { TimelineTypes } from "./timeline-card"
import TimelineCard from "./timeline-card"

const timelineData: TimelineTypes[] = [
  {
    title: "Paper Submission Deadline",
    description: "Submit your full papers via our online submission system.",
    date: "July 15, 2026",
    status: "Open",
  },
  {
    title: "Notification of Acceptance",
    description: "Authors will be notified of the review outcome.",
    date: "September 15, 2026",
    status: "Upcoming",
  },
  {
    title: "Early Bird Registration Deadline",
    description: "Take advantage of discounted registration fees.",
    date: "September 30, 2026",
    status: "Upcoming",
  },
  {
    title: "Final Camera-Ready Paper Submission",
    description:
      "Submit your final, revised papers formatted according to author guidelines.",
    date: "October 15, 2026",
    status: "Upcoming",
  },
  {
    title: "Regular Registration Deadline",
    description: "Final deadline for all presenters and participants.",
    date: "October 30, 2026",
    status: "Upcoming",
  },
  {
    title: "Conference Day",
    description:
      "Join us for three days of insightful presentations, discussions, and networking.",
    date: "November 5-7, 2026",
    status: "Event",
  },
]

export default function TimelineCardRenderer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {timelineData.map((item, index) => (
        <TimelineCard
          key={item.title}
          title={item.title}
          description={item.description}
          date={item.date}
          status={item.status}
          index={index}
        />
      ))}
    </div>
  )
}
