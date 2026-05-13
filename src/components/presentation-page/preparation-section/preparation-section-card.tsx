import type { ReactNode } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { RecordIcon } from "@hugeicons/core-free-icons"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Props {
  title: string
  items: string[]
  icon: ReactNode
  index: number
}

export default function PreparationSectionCard({
  title,
  items,
  icon,
  index,
}: Props) {
  return (
    <Card
      className={cn(
        "row-span-2 shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1",
        index === 1 && "lg:row-span-1",
        index === 2 && "lg:col-start-2 lg:row-span-1"
      )}
    >
      <CardHeader>
        <div className="mb-2">{icon}</div>

        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div
              key={item}
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
