export default function RunningText() {
  return (
    <div className="overflow-hidden border-y border-red-800 bg-red-500 py-2 shadow-[inset_0_0_4px_rgba(0,0,0,.4)]">
      <div className="animate-marquee flex items-center gap-16 whitespace-nowrap will-change-transform">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex items-center gap-20 text-xl font-black tracking-wide text-red-50 uppercase"
          >
            <span className="block rounded-full bg-red-600 px-2 shadow-sm">
              HEALTHMED-IC
            </span>
            <Pill />
            <span className="block rounded-full bg-red-600 px-2 shadow-sm">
              2026
            </span>
            <Pill />
            <span className="block rounded-full bg-red-600 px-2 shadow-sm">
              HEALTHMED-IC
            </span>
            <Pill />
            <span className="block rounded-full bg-red-600 px-2 shadow-sm">
              2026
            </span>
            <Pill />
          </div>
        ))}
      </div>
    </div>
  )
}

const Pill = () => {
  return (
    <div className="rounded-full shadow-sm">
      <div className="grid h-8 w-8 place-items-center rounded-full border border-red-200 bg-radial from-red-50 to-red-200 shadow-[inset_0_0_4px_rgba(0,0,0,.4)]">
        <div className="absolute flex h-7 w-7 items-center overflow-hidden rounded-full bg-linear-to-tl from-red-200 to-red-50">
          <div className="h-1 w-7 bg-red-100 shadow-[inset_0_0_4px_rgba(0,0,0,.3)]"></div>
        </div>
      </div>
    </div>
  )
}
