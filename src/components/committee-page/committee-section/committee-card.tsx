import { Badge } from "@/components/ui/badge"
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "@/components/ui/item"

export type CommitteeTypes = {
  role: string
  name: string
  affiliation?: string
}

export default function CommitteeCard({
  name,
  role,
  affiliation,
}: CommitteeTypes) {
  return (
    <Item
      variant="outline"
      className="bg-card transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <ItemContent>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>{affiliation}</ItemDescription>
      </ItemContent>

      <ItemActions>
        <Badge variant="outline">{role}</Badge>
      </ItemActions>
    </Item>
  )
}
