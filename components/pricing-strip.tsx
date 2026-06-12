import { pricingNote } from "@/lib/site"

type PricingStripProps = {
  price: string
}

export function PricingStrip({ price }: PricingStripProps) {
  return (
    <div
      data-animate
      className="grid border-t border-foreground/15 sm:grid-cols-[minmax(15rem,0.7fr)_1.3fr]"
    >
      <p className="bg-accent px-5 py-5 text-sm font-semibold sm:px-7">
        {price}
      </p>
      <p className="border-t border-foreground/15 px-5 py-5 text-xs leading-5 text-muted-foreground sm:border-t-0 sm:border-l sm:px-7">
        {pricingNote}
      </p>
    </div>
  )
}
