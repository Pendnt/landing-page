import Link from "next/link";
import Image from "next/image"

export default function Footer() {
    return (
      <footer className="container mx-auto py-12 px-4 md:px-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Link href="#nav" className="transition-colors">
              <Image src="/images/pendnt-logo.svg" alt="Pendnt Logo" width={120} height={35} />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link href="/#privacy" className="text-gray-600 hover:text-black transition-colors">
              Privacy
            </Link>
            <Link href="/contact#" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
            <Link href="/#terms" className="text-gray-600 hover:text-black transition-colors">
              Terms
            </Link>
            <Link href="/learn-more" className="text-gray-600 hover:text-black transition-colors">
              Learn More
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Turn conversations into customers.</p>
          <p className="mt-2">© {new Date().getFullYear()} Pendnt. All rights reserved.</p>
        </div>
      </footer>
    )
}
