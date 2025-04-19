"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Function to handle smooth scrolling for anchor links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check if the clicked element is an anchor link with a hash
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        const href = target.getAttribute("href")
        if (!href) return

        const targetId = href.replace("#", "")
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          e.preventDefault()

          // Smooth scroll to the target element
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })

          // Update URL without causing a page jump
          window.history.pushState(null, "", href)
        }
      }
    }

    // Add event listener to the document
    document.addEventListener("click", handleLinkClick)

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [])

  return null
}
