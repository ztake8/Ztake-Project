"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import Link from "next/link"

interface PillButtonProps {
  children: ReactNode
  variant?: "default" | "outline" | "ghost" | "primary"
  size?: "default" | "sm" | "lg"
  className?: string
  onClick?: () => void
  href?: string
  type?: "button" | "submit"
}

export function PillButton({
  children,
  variant = "default",
  size = "default",
  className,
  onClick,
  href,
  type = "button",
}: PillButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-[24px] shadow-sm backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"

  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95",
    outline:
      "border-2 border-white/30 dark:border-white/20 bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/15 hover:scale-105 active:scale-95 transition-all",
    ghost: "hover:bg-white/40 dark:hover:bg-white/10 hover:scale-105 active:scale-95",
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95",
  }

  const sizeStyles = {
    default: "h-10 px-6 py-2 text-sm",
    sm: "h-9 px-4 text-sm",
    lg: "h-12 px-8 text-base",
  }

  const combinedClassName = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  )
}
