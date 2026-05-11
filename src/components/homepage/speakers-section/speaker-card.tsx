import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Add02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export type SpeakerTypes = {
  name: string
  affiliation: string
  academic_background: string
  image: string
  topic: string
  session: string
  type: "invited" | "keynote"
}

export default function SpeakerCard({
  name,
  affiliation,
  academic_background,
  image,
  topic,
  session,
  type,
}: SpeakerTypes) {
  return (
    <AspectRatio ratio={9 / 11}>
      <div className="group relative h-full w-full overflow-hidden rounded-xl border border-border bg-card">
        <p className="absolute top-6 left-6 z-10 rounded-xs border border-red-950/50 bg-red-950/30 px-1 text-xs text-red-50 uppercase">
          {type === "invited" ? "Invited Speaker" : "Keynote Speaker"}
        </p>

        <img
          src={image}
          alt={name}
          className="absolute top-0 left-0 h-full w-full object-cover grayscale"
        />

        <div className="absolute bottom-0 left-0 flex h-full w-full items-end bg-linear-to-t from-red-950/90 via-red-950/20 to-transparent p-4">
          <div className="relative w-full rounded-lg bg-red-800 p-6 transition-all group-hover:translate-y-10 group-hover:opacity-0">
            <h3 className="relative z-5 font-semibold text-red-50">{name}</h3>
            <p className="relative z-5 text-sm text-red-50/80">{affiliation}</p>

            <HugeiconsIcon
              icon={Add02Icon}
              size={24}
              color="currentColor"
              className="absolute top-2 right-2 text-red-50/30 opacity-70"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 flex h-full w-full flex-col bg-red-950/0 pt-20 transition-all duration-700 group-hover:bg-red-950/70">
          <div className="flex-1 translate-y-full space-y-4 bg-card p-4 transition-transform duration-500 group-hover:translate-y-0">
            <div className="space-y-4">
              <h3 className="font-semibold text-red-900 uppercase">
                Acedemic Background
              </h3>
              <p className="font-semibold text-slate-600 italic">
                "{academic_background}"
              </p>
            </div>

            <div className="border-l-2 border-red-600 bg-red-50 p-3 py-1">
              <h3 className="font-semibold text-red-900/80">Topic</h3>
              <p className="text-slate-950">{topic}</p>
            </div>

            <div className="border-l-2 border-red-600 bg-red-50 p-3 py-1">
              <h3 className="font-semibold text-red-900/80">Session</h3>
              <p className="text-slate-950">{session}</p>
            </div>
          </div>
        </div>
      </div>
    </AspectRatio>
  )
}
