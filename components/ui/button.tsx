import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-600 rounded-3xl",
  {
    variants: {
      variant: {
        default:
          "border border-[var(--primary-foreground)] bg-[var(--primary-foreground)] text-white rounded-lg px-6 py-2 hover:bg-opacity-90",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
        outline:
          "border-2 border-[var(--primary-foreground)] bg-transparent text-[var(--primary-foreground)] rounded-lg px-6 py-2 hover:bg-[var(--primary-foreground)] hover:text-white",
        secondary:
          "bg-gray-100 text-black hover:bg-gray-200 rounded-lg",
        ghost:
          "bg-transparent hover:bg-gray-100 text-black rounded-lg",
        link: "text-blue-600 underline-offset-4 hover:underline",
        active:
          "border border-[var(--primary-foreground)] bg-[var(--primary-foreground)] text-white rounded-lg px-6 py-2",
        inactive:
          "border border-[var(--primary-foreground)] bg-transparent text-[var(--primary-foreground)] rounded-lg px-6 py-2",
      },
      size: {
        default: "",
        sm: "h-8 rounded-lg gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-lg px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
