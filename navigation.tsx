"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
            KoinX
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/crypto-taxes" className="text-sm font-medium">
              Crypto Taxes
            </Link>
            <Link href="/free-tools" className="text-sm font-medium">
              Free Tools
            </Link>
            <Link href="/resource-center" className="text-sm font-medium">
              Resource Center
            </Link>
            <Button>Get Started</Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/crypto-taxes" className="block px-3 py-2 text-base font-medium">
              Crypto Taxes
            </Link>
            <Link href="/free-tools" className="block px-3 py-2 text-base font-medium">
              Free Tools
            </Link>
            <Link href="/resource-center" className="block px-3 py-2 text-base font-medium">
              Resource Center
            </Link>
            <Button className="w-full mt-2">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  )
}

