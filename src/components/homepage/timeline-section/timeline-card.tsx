import { isWithinInterval, parseISO } from "date-fns"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export type TimelineTypes = {
  title: string
  description: string
  date: string
  status: string
  start_date: string
  end_date: string
}

type Props = TimelineTypes & {
  index: number
}

export default function TimelineCard({
  title,
  description,
  date,
  index,
  start_date,
  end_date,
}: Props) {
  const isLive = isCurrentDateInWindow(start_date, end_date)
  console.log({ isLive })

  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <CardAction>
          <Badge variant={isLive ? "default" : "outline"}>
            {isLive ? "Open" : "Upcoming"}
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent>
        <p className="font-medium text-red-900">{date}</p>

        <p className="absolute right-4 bottom-4 text-7xl font-black text-red-400/10">
          {index + 1}
        </p>
      </CardContent>
    </Card>
  )
}

const isCurrentDateInWindow = (start: string, end: string): boolean => {
  const now = new Date()

  try {
    return isWithinInterval(now, {
      start: parseISO(start),
      end: parseISO(end),
    })
  } catch (error: unknown) {
    const err = error as Error
    console.log(err.message)
    return false
  }
}
