"use client"

import { Github, Linkedin, Mail, Twitter, Home } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Navigation() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false)
      } else {
        // Scrolling up
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-full border border-border bg-background/95 px-8 py-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="transition-transform hover:scale-110 active:scale-95"
        >
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <Home className="h-5 w-5" />
          </Button>
        </button>
        <div className="mx-2 h-8 w-px bg-border" />
        <Link
          href="https://github.com/sunnyrock"
          target="_blank"
          className="transition-transform hover:scale-110 active:scale-95"
        >
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <Github className="h-5 w-5" />
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/sunny-mall"
          target="_blank"
          className="transition-transform hover:scale-110 active:scale-95"
        >
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <Linkedin className="h-5 w-5" />
          </Button>
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          className="transition-transform hover:scale-110 active:scale-95"
        >
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <Twitter className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="mailto:sunnypratap859@gmail.com" className="transition-transform hover:scale-110 active:scale-95">
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <Mail className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </nav>
  )
}
