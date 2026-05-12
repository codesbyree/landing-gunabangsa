import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

type Props = {
  name: string
  subtitle: string
  earlyBird: { date: string; price: string }
  regular: { date: string; price: string }
}

export default function RegistrationCard({
  name,
  subtitle,
  earlyBird,
  regular,
}: Props) {
  return (
    <Card className="shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="empty:hidden">
          {earlyBird.date && (
            <p className="text-sm text-red-800/50">
              Early bird: {earlyBird.date}
            </p>
          )}
          {earlyBird.price && (
            <p className="font-medium text-red-950">{earlyBird.price}</p>
          )}
        </div>

        <div>
          {regular.date && (
            <p className="text-sm text-red-800/50">Regular: {regular.date}</p>
          )}
          {regular.price && (
            <p className="font-medium text-red-950">{regular.price}</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
