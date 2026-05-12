import type { TimelineTypes } from "./timeline-card"
import TimelineCard from "./timeline-card"

const timelineData: TimelineTypes[] = [
  {
    title: "Paper Submission Deadline",
    description: "Submit your full papers via our online submission system.",
    date: "July 15, 2026",
    status: "Open",
    // Fixed: Added leading zero to day
    start_date: "2026-01-01T00:00:00.000Z",
    end_date: "2026-07-15T23:59:59.999Z",
  },
  {
    title: "Notification of Acceptance",
    description: "Authors will be notified of the review outcome.",
    date: "September 15, 2026",
    status: "Upcoming",
    start_date: "2026-07-16T00:00:00.000Z",
    end_date: "2026-09-15T23:59:59.999Z",
  },
  {
    title: "Early Bird Registration Deadline",
    description: "Take advantage of discounted registration fees.",
    date: "September 30, 2026",
    status: "Upcoming",
    start_date: "2026-09-16T00:00:00.000Z",
    end_date: "2026-09-30T23:59:59.999Z",
  },
  {
    title: "Final Camera-Ready Paper Submission",
    description:
      "Submit your final, revised papers formatted according to author guidelines.",
    date: "October 15, 2026",
    status: "Upcoming",
    // Logic Fix: Changed start to Oct 01 (leading zero) to bridge the gap from Sept 30
    start_date: "2026-10-01T00:00:00.000Z",
    end_date: "2026-10-15T23:59:59.999Z",
  },
  {
    title: "Regular Registration Deadline",
    description: "Final deadline for all presenters and participants.",
    date: "October 30, 2026",
    status: "Upcoming",
    start_date: "2026-10-16T00:00:00.000Z",
    end_date: "2026-10-30T23:59:59.999Z",
  },
  {
    title: "Conference Day",
    description:
      "Join us for three days of insightful presentations, discussions, and networking.",
    date: "November 5-7, 2026",
    status: "Event",
    // Fixed: Added leading zero to day
    start_date: "2026-11-05T00:00:00.000Z",
    end_date: "2026-11-07T23:59:59.999Z",
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
          start_date={item.start_date}
          end_date={item.end_date}
        />
      ))}
    </div>
  )
}
