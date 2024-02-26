import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps } from "class-variance-authority"
import { tv } from 'tailwind-variants';

import { cn } from "@/lib/utils"

const buttonVariants = tv(
  {
    base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-extrabold font-title ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-white hover:text-primary dark:bg-primary dark:text-white dark:hover:bg-white dark:hover:text-primary",
        destructive:
          "bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90 ",
        outline:
          "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
        ghost:
          "text-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white",
        link:
          "text-white underline-offset-4 hover:text-primary dark:text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "py-6 rounded-md px-10 text-5xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
