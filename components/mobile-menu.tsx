"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-black">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="">
          <div className="flex flex-col gap-6 mt-10">
            <Link
              href="#features"
              className="text-xl font-medium text-black hover:text-[#FF7A5F] transition-colors"
              onClick={handleLinkClick}
              scroll={false}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-xl font-medium text-black hover:text-[#FF7A5F] transition-colors"
              onClick={handleLinkClick}
              scroll={false}
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-xl font-medium text-black hover:text-[#FF7A5F] transition-colors"
              onClick={handleLinkClick}
              scroll={false}
            >
              Pricing
            </Link>
            <Button className="mt-4 bg-gradient-to-r from-[#FF7A5F] to-[#FFA05E] text-white hover:opacity-90 transition-opacity">
              Join the Beta
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
