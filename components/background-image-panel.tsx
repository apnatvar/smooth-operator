import Image from "next/image"

import { cn } from "@/lib/utils"

type BackgroundImagePanelProps = {
  className?: string
  label?: string
  priority?: boolean
  tone?: "light" | "dark"
}

export function BackgroundImagePanel({
  className,
  label = "Private Infrastructure / Connected Operations",
  priority = false,
  tone = "light",
}: BackgroundImagePanelProps) {
  return (
    <div
      className={cn(
        "group relative isolate min-h-72 overflow-hidden border border-foreground/15",
        tone === "dark" ? "bg-foreground" : "bg-background",
        className
      )}
    >
      <div data-parallax className="absolute inset-0 scale-[1.08]">
        <Image
          src="/change-this.webp"
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-50 grayscale transition-[filter,opacity] duration-500 group-hover:opacity-70 group-hover:grayscale-0"
        />
      </div>
      <div
        className={cn(
          "absolute inset-0",
          tone === "dark"
            ? "bg-linear-to-r from-foreground via-foreground/55 to-transparent"
            : "bg-linear-to-r from-background via-background/25 to-transparent"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.09)_1px,transparent_1px)] bg-size-[48px_48px]",
          tone === "light" && "opacity-40"
        )}
      />
      <p
        className={cn(
          "absolute right-4 bottom-4 left-4 border-t pt-3 text-[0.63rem] tracking-[0.2em] uppercase",
          tone === "dark"
            ? "border-white/30 text-white/65"
            : "border-foreground/25 text-foreground/65"
        )}
      >
        {label}
      </p>
    </div>
  )
}
