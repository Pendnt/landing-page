import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Mic, RefreshCw, Zap } from "lucide-react"

// Import the MobileMenu component at the top of the file
import MobileMenu from "@/components/mobile-menu"
import DraggablePendant from "@/components/draggable_pendant"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] text-black">
      {/* Navbar */}
      <header id="nav" className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="#" className="transition-colors">
              <Image src="/images/pendnt-logo.svg" alt="Pendnt Logo" width={180} height={50} priority />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-gray-600 hover:text-black transition-colors" scroll={false}>
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-black transition-colors" scroll={false}>
              How It Works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-black transition-colors" scroll={false}>
              Pricing
            </Link>
          </nav>
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-[#FF7A5F] to-[#FFA05E] text-white hover:opacity-90 transition-opacity">
              Join the Beta
            </Button>
          </div>
          <MobileMenu />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto py-20 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">
                AI-Powered Lead Capture
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black">
                Turn Conversations into Contacts — Automatically
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-xl">
                Pendnt is an AI-powered pendant that listens to your trade show conversations and turns them into
                qualified CRM leads — no scanning, typing, or tapping required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FF7A5F] to-[#FFA05E] text-white hover:opacity-90 transition-opacity"
                >
                  Join the Beta <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-black hover:bg-gray-100">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0f0f0] to-[#c0c0c0] opacity-20 blur-xl rounded-3xl"></div>
              <div className="relative bg-white p-6 rounded-3xl border border-gray-200 shadow-lg">
              <Image
                  src="/images/pendant-3d-render.png"
                  alt="Pendnt Logo Mark"
                  width={500}
                  height={500}
                  className="w-full h-auto"
              />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="container mx-auto py-20 px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">The Problem</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Lead Capture is Broken</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Traditional methods of capturing leads at trade shows are inefficient, awkward, and often lead to missed
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "✍️",
                title: "Write it down",
                description: "Slow and easy to forget important details during busy conversations.",
              },
              {
                icon: "📱",
                title: "Scan with an app",
                description: "Awkward to interrupt your pitch to scan a badge or business card.",
              },
              {
                icon: "💰",
                title: "Use the event's scanner",
                description: "Expensive and vendor-locked with limited data and integration options.",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white border-gray-200 p-6 shadow-md">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Solution Section */}
        <section id="features" className="container mx-auto py-20 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">The Solution</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Meet Pendnt</h2>
              <blockquote className="border-l-4 border-[#FF7A5F] pl-4 mb-8 italic text-xl text-gray-700">
                "Just talk. Pendnt takes care of the rest."
              </blockquote>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mic className="h-5 w-5 text-[#FF7A5F]" />,
                    title: "Records audio from real Bluetooth hardware",
                    description: "Discreetly captures conversations without interrupting your flow.",
                  },
                  {
                    icon: <Zap className="h-5 w-5 text-[#FF7A5F]" />,
                    title: "Transcribes speech on-device",
                    description: "No internet required, ensuring privacy and real-time processing.",
                  },
                  {
                    icon: <RefreshCw className="h-5 w-5 text-[#FF7A5F]" />,
                    title: "Pushes structured data into your CRM",
                    description: "Automatically formats and sends contact information to your CRM system.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 h-fit bg-[#FF7A5F]/10 p-2 rounded-full">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-black">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0f0f0] to-[#c0c0c0] opacity-20 blur-xl rounded-3xl"></div>
              <div className="relative bg-white p-6 rounded-3xl border border-gray-200 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Pendnt Logo Mark"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="container mx-auto py-20 px-4 md:px-6">
          <div className="mx-4 md:mx-8 lg:mx-16 bg-white rounded-3xl shadow-lg p-10 md:p-16">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">Simple Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">How It Works</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Three simple steps to transform how you capture leads at trade shows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Wear the pendant",
                  description: "No setup required. Just put it on and you're ready to go.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  step: "02",
                  title: "Have a conversation",
                  description: "AI detects who's a lead and captures relevant information.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  step: "03",
                  title: "Sync to CRM",
                  description: "Context, names, companies captured automatically.",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="mb-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={`Step ${item.step}: ${item.title}`}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-[#FF7A5F] text-white font-bold w-10 h-10 rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-[#FF7A5F] font-medium">Built for the chaos of trade show floors.</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="container mx-auto py-20 px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Simple Daily Credits</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Buy credits that cover one user per day. No contracts, no minimums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                credits: "1",
                price: "$199",
                perCredit: "$199.00 per credit",
                features: ["1 user per day", "Full CRM integration", "Basic analytics"],
              },
              {
                credits: "5",
                price: "$899",
                perCredit: "$179.80 per credit",
                features: ["1 user per day", "Full CRM integration", "Advanced analytics", "Priority support"],
                popular: true,
              },
              {
                credits: "20",
                price: "$2,999",
                perCredit: "$149.90 per credit",
                features: [
                  "1 user per day",
                  "Full CRM integration",
                  "Advanced analytics",
                  "Priority support",
                  "Custom integrations",
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`flex flex-col justify-between bg-white border-gray-200 p-8 relative shadow-md overflow-hidden ${plan.popular ? "border-[#FF7A5F]" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#FF7A5F] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-black">{plan.credits} credits</h3>
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-3xl font-bold text-black">{plan.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{plan.perCredit}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-[#FF7A5F]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#FF7A5F] to-[#FFA05E] text-white hover:opacity-90"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Team plans available.{" "}
              <Link href="#" className="text-[#FF7A5F] hover:underline">
                Contact us
              </Link>{" "}
              for custom pricing.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto py-20 px-4 md:px-6">
          <div className="mx-4 md:mx-8 lg:mx-16 bg-gradient-to-r from-white to-gray-100 rounded-3xl shadow-lg p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Never Miss a Lead Again</h2>
              <p className="text-gray-600 text-lg mb-8">
                Your next big customer might be a five-minute chat away. Pendnt makes sure you never forget who they
                were.
              </p>

              <div className="max-w-md mx-auto">
                <div className="flex flex-col items-center sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF7A5F] focus:border-transparent"
                  />
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#FF7A5F] to-[#FFA05E] text-white hover:opacity-90 transition-opacity"
                  >
                    Join the Beta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-12 px-4 md:px-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Link href="#nav" className="transition-colors">
              <Image src="/images/pendnt-logo.svg" alt="Pendnt Logo" width={120} height={35} />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link href="#privacy" className="text-gray-600 hover:text-black transition-colors">
              Privacy
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
            <Link href="#terms" className="text-gray-600 hover:text-black transition-colors">
              Terms
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Conversations remembered.</p>
          <p className="mt-2">© {new Date().getFullYear()} Pendnt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
