import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RecordIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { ReactNode } from "react"

type Props = {
  title: string
  items: string[]
  icon: ReactNode
  description: string
}

export default function ResearchTrackCard({
  title,
  items,
  icon,
  description,
}: Props) {
  return (
    <Card className="transition-transform hover:-translate-y-1 hover:shadow-md">
      <CardHeader>
        <div className="mb-2">{icon}</div>

        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 opacity-75 transition-opacity hover:opacity-60"
            >
              <HugeiconsIcon
                icon={RecordIcon}
                size={16}
                className="shrink-0 text-red-400"
                color="currentColor"
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
