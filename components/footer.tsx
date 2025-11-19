import Link from "next/link"
import { Twitter, Linkedin, Mail } from 'lucide-react'
import Image from "next/image"

const footerSections = [
  {
    title: "Products",
    links: [
      { label: "Payment Gateway", href: "/payments" },
      { label: "International Payments", href: "/international-payments" },
      { label: "Subscriptions", href: "/subscriptions" },
      { label: "ZtakeX Banking", href: "/ztakex" },
      { label: "Capital", href: "/capital" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "https://docs.ztake.in" },
      { label: "API Reference", href: "https://docs.ztake.in" },
      { label: "SDKs", href: "https://docs.ztake.in" },
      { label: "Webhooks", href: "https://docs.ztake.in" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources" },
      { label: "Support", href: "/support" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "API Terms of Use", href: "/api-use" },
      { label: "Security", href: "/security" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-accent/20 dark:from-black dark:to-gray-950 border-t border-white/30 dark:border-white/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent dark:from-primary/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 animate-fadeInUp">
            <Link href="/">
              <div className="inline-block cursor-pointer transform transition-all duration-300 hover:scale-105">
                <img
                  src="/ztake-logo.png"
                  alt="Ztake"
                  width={64}
                  height={64}
                  className="w-16 h-16 mb-4"
                />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">Empowering modern businesses to get paid instantly.</p>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-[14px] backdrop-blur-[20px] bg-white/30 dark:bg-white/8 hover:bg-white/40 dark:hover:bg-white/12 transition-all duration-300 shadow-sm dark:shadow-md transform hover:scale-110 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-[14px] backdrop-blur-[20px] bg-white/30 dark:bg-white/8 hover:bg-white/40 dark:hover:bg-white/12 transition-all duration-300 shadow-sm dark:shadow-md transform hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:sale@ztake.in"
                className="p-2 rounded-[14px] backdrop-blur-[20px] bg-white/30 dark:bg-white/8 hover:bg-white/40 dark:hover:bg-white/12 transition-all duration-300 shadow-sm dark:shadow-md transform hover:scale-110 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section, idx) => (
            <div key={section.title} className="animate-fadeInUp" style={{ animationDelay: `${idx * 50}ms` }}>
              <h3 className="font-semibold text-sm mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <div className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer transform hover:translate-x-1">
                          {link.label}
                        </div>
                      </a>
                    ) : (
                      <Link href={link.href}>
                        <div className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer transform hover:translate-x-1">
                          {link.label}
                        </div>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/30 dark:border-white/10 animate-fadeInUp">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ztake Payments. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Made with precision in India</span>
              <span className="hidden md:inline">•</span>
              <a href="mailto:care@ztake.in" className="hover:text-foreground transition-all duration-300 transform hover:scale-105">
                care@ztake.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
