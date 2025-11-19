"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu, X, LogIn } from 'lucide-react'
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Payments", href: "/payments" },
  { label: "Subscriptions", href: "/subscriptions" },
  { label: "ZtakeX", href: "/ztakex" },
  { label: "Capital", href: "/capital" },
  { label: "Developers", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[40px] bg-white/70 dark:bg-gray-900/60 border-b border-white/30 dark:border-white/15 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo with ZTAKE text */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity duration-300">
              <img
                src="/ztake-logo.png"
                alt="Ztake Logo"
                className="h-10 w-auto select-none"
              />
              <span className="text-xs sm:text-sm text-foreground inline font-black">ZTAKE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/")

              return (
                <Link key={link.href} href={link.href}>
                  <div
                    className={cn(
                      "px-4 py-2 rounded-[20px] text-sm font-medium cursor-pointer",
                      "transition-all duration-300 backdrop-blur-[20px]",
                      "hover:bg-white/30 dark:hover:bg-white/8 hover:shadow-sm hover:scale-[1.03] active:scale-[0.98]",
                      isActive
                        ? "bg-white/50 dark:bg-white/15 text-primary shadow-md dark:shadow-lg"
                        : "text-foreground/70 dark:text-foreground/80 hover:text-foreground"
                    )}
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-[16px] backdrop-blur-[20px] bg-white/30 dark:bg-white/8 hover:bg-white/40 dark:hover:bg-white/12 transition-all duration-300 shadow-sm dark:shadow-md"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <div className="hidden md:flex items-center space-x-2">
              <Link href="/contact">
                <div className={cn(
                  "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-[24px] shadow-sm dark:shadow-md backdrop-blur-[20px]",
                  "h-10 px-6 py-2 text-sm",
                  "hover:bg-white/20 dark:hover:bg-white/10 hover:scale-105 active:scale-95 cursor-pointer"
                )}>
                  Contact
                </div>
              </Link>
              <a href="https://ztake.in/login">
                <div className={cn(
                  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-[24px] shadow-md dark:shadow-lg backdrop-blur-[20px]",
                  "h-10 px-4 py-2 text-sm",
                  "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 cursor-pointer"
                )}>
                  <LogIn className="w-4 h-4" />
                  Login
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-[16px] backdrop-blur-[20px] bg-white/30 dark:bg-white/8 hover:bg-white/40 dark:hover:bg-white/12 transition-all duration-300 shadow-sm dark:shadow-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-[40px] bg-white/80 dark:bg-black/70 border-t border-white/30 dark:border-white/10 transition-all duration-300">
          <div className="px-4 py-4 space-y-2 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/")

              return (
                <Link key={link.href} href={link.href}>
                  <div
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-[16px] text-sm font-medium cursor-pointer transition-all duration-300",
                      "hover:bg-white/40 dark:hover:bg-white/10 hover:shadow-sm hover:scale-[1.02]",
                      isActive
                        ? "bg-white/50 dark:bg-white/12 text-primary shadow-sm"
                        : "text-foreground/70 dark:text-foreground/80"
                    )}
                  >
                    {link.label}
                  </div>
                </Link>
              )
            })}

            <div className="flex flex-col space-y-2 pt-2">
              <Link href="/contact">
                <div className={cn(
                  "block px-4 py-3 rounded-[24px] text-sm font-medium cursor-pointer transition-all duration-300 text-center",
                  "border-2 border-white/20 dark:border-white/10 dark:bg-white/8 bg-input",
                  "hover:bg-white/40 dark:hover:bg-white/12 hover:scale-105 active:scale-95"
                )}>
                  Contact 
                </div>
              </Link>
              <a href="https://ztake.in/login">
                <div className={cn(
                  "flex items-center justify-center gap-2 px-4 py-3 rounded-[24px] text-sm font-medium cursor-pointer transition-all duration-300",
                  "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95"
                )}>
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
