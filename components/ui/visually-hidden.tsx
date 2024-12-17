import * as React from "react"
import { cn } from "@/lib/utils"

const VisuallyHidden = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "absolute h-px w-px p-0 overflow-hidden whitespace-nowrap border-0",
        "clip-[rect(0,0,0,0)] max-w-[1px] max-h-[1px]",
        className
      )}
      {...props}
    />
  )
})
VisuallyHidden.displayName = "VisuallyHidden"

export { VisuallyHidden }