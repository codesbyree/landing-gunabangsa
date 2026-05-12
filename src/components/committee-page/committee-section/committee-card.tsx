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
      className="bg-card shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1"
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
