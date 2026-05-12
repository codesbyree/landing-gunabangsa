export default function RunningText() {
  return (
    <div className="overflow-hidden border-y border-red-800 bg-red-600 py-3">
      <div className="animate-marquee flex items-center gap-16 whitespace-nowrap will-change-transform">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex items-center gap-16 text-sm font-black tracking-wide text-red-50 uppercase"
          >
            <span>HEALTHMED-IC</span>
            <span className="inline-block h-2 w-2 rounded-full bg-red-50" />
            <span>2026</span>
            <span className="inline-block h-2 w-2 rounded-full bg-red-50" />
            <span>HEALTHMED-IC</span>
            <span className="inline-block h-2 w-2 rounded-full bg-red-50" />
            <span>2026</span>
            <span className="inline-block h-2 w-2 rounded-full bg-red-50" />
          </div>
        ))}
      </div>
    </div>
  )
}
