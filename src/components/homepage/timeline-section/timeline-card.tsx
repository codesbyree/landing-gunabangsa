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
}

type Props = TimelineTypes & {
  index: number
}

export default function TimelineCard({
  title,
  description,
  date,
  status,
  index,
}: Props) {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <CardAction>
          <Badge variant="default">{status}</Badge>
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
