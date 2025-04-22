import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Check, ChevronDown, ChevronUp, Mic, RefreshCw, Shield, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] text-black">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/pendnt-logo.svg" alt="Pendnt Logo" width={180} height={50} priority />
          </Link>
          <div>
            <Button
              className="bg-gradient-to-r from-[#FF7A5F] to-[#FFA05E] text-white hover:opacity-90 transition-opacity"
              asChild
            >
              <Link href="/join-the-beta">Join the Beta</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">
              Pendnt Technology
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Revolutionizing Trade Show Lead Capture</h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Discover how Pendnt's AI-powered technology transforms conversations into qualified leads, saving you time and increasing your ROI at trade shows.
            </p>
          </div>
        </section>

        {/* Technology Overview */}
        <section className="container mx-auto py-16 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">
                The Technology
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced AI in a Simple Package</h2>
              <p className="text-gray-600 text-lg mb-6">
                Pendnt combines cutting-edge hardware with sophisticated AI to create a seamless lead capture experience. Our proprietary technology works in three key stages:
              </p>

              <div className="space-y-6 mt-8">
                <div className="flex gap-4">
                  <div className="h-fit mt-1 bg-[#FF7A5F]/10 p-2 rounded-full">
                    <Mic className="h-5 w-5 text-[#FF7A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Audio Capture</h3>
                    <p className="text-gray-600">
                      High-quality microphones discreetly capture conversations with noise cancellation technology that works even in loud trade show environments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-fit mt-1 bg-[#FF7A5F]/10 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-[#FF7A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">On-Phone Processing</h3>
                    <p className="text-gray-600">
                      Our app processes speech in real-time, extracting contact information, company details, and conversation context without requiring an internet connection.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-fit mt-1 bg-[#FF7A5F]/10 p-2 rounded-full">
                    <RefreshCw className="h-5 w-5 text-[#FF7A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Seamless Integration</h3>
                    <p className="text-gray-600">
                      When connected to WiFi or mobile data, Pendnt automatically syncs structured lead data to your CRM system with custom field mapping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0f0f0] to-[#c0c0c0] opacity-20 blur-xl rounded-3xl"></div>
              <div className="relative bg-white p-6 rounded-3xl border border-gray-200 shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Pendnt Technology Diagram"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works (Detailed) */}
        <section className="container mx-auto py-16 px-4 md:px-6 bg-white rounded-3xl shadow-md">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">
                Detailed Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Pendnt Works</h2>
              <p className="text-gray-600 text-lg">
                A closer look at the technology and process that makes Pendnt revolutionary.
              </p>
            </div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="bg-[#FF7A5F]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#FF7A5F] font-bold text-xl">01</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Wear & Activate</h3>
                  <p className="text-gray-600">
                    Simply wear the pendant around your neck and activate it with a single tap. The device will vibrate gently to confirm it's active and ready to capture leads.
                  </p>
                </div>
                <div className="md:col-span-3">
                  <Image
                    src="/images/wearing-pendnt.jpg"
                    alt="Wearing Pendnt"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-3 order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt="Conversation Detection"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:col-span-2 order-1 md:order-2">
                  <div className="bg-[#FF7A5F]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#FF7A5F] font-bold text-xl">02</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Conversation Detection</h3>
                  <p className="text-gray-600">
                    Pendnt's AI automatically detects when you're having a meaningful conversation with a potential lead. It filters out background noise and only processes relevant interactions.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="bg-[#FF7A5F]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#FF7A5F] font-bold text-xl">03</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Information Extraction</h3>
                  <p className="text-gray-600">
                    As you talk, Pendnt identifies key information like names, email addresses, phone numbers, company details, and conversation context. The AI understands natural speech patterns and can extract data even when it's mentioned casually.
                  </p>
                </div>
                <div className="md:col-span-3">
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt="Information Extraction"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-3 order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt="Data Structuring"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:col-span-2 order-1 md:order-2">
                  <div className="bg-[#FF7A5F]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#FF7A5F] font-bold text-xl">04</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Data Structuring</h3>
                  <p className="text-gray-600">
                    The extracted information is structured into a standardized format that's ready for your CRM. Pendnt also generates tags based on conversation topics to help with lead qualification.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="bg-[#FF7A5F]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#FF7A5F] font-bold text-xl">05</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">CRM Integration</h3>
                  <p className="text-gray-600">
                    When connected to WiFi or mobile data, Pendnt automatically syncs with your CRM system. You can review leads in the Pendnt app before they're pushed to your CRM, or set up automatic syncing for real-time updates.
                  </p>
                </div>
                <div className="md:col-span-3">
                  <Image
                    src="/images/pendnt-crms.png"
                    alt="CRM Integration"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="container mx-auto py-16 px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">
              Applications
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Pendnt is designed for professionals who need to capture leads efficiently in high-volume, fast-paced environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Trade Show Exhibitors",
                description: "Capture every lead without interrupting your pitch or fumbling with scanners.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Sales Representatives",
                description: "Focus on building relationships while Pendnt handles the data collection.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Conference Attendees",
                description: "Network effectively and never forget who you met or what you discussed.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Event Organizers",
                description: "Provide a premium lead capture solution for your exhibitors and sponsors.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Business Development",
                description: "Turn casual conversations into qualified opportunities with detailed context.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Marketing Teams",
                description: "Gather rich data about prospect interests and pain points for better follow-up.",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white border-gray-200 overflow-hidden shadow-md">
                {/* TODO: ADD IMAGES FOR EVERYTHING. 
                <div className="h-40 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits & ROI */}
        <section className="container mx-auto py-16 px-4 md:px-6 bg-gradient-to-r from-white to-gray-100 rounded-3xl shadow-md">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">
                Business Impact
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits & ROI</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Pendnt delivers measurable results that impact your bottom line.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white border-gray-200 p-6 shadow-md">
                <h3 className="text-2xl font-bold mb-4">Quantifiable Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Capture 3x more leads than traditional methods",
                    "Reduce lead capture time by 95%",
                    "Improve lead quality with 40% more contextual data",
                    "Increase follow-up conversion rates by 27%",
                    "Eliminate manual data entry errors",
                    "Reduce cost per lead by up to 60%",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#FF7A5F] mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="bg-white border-gray-200 p-6 shadow-md">
                <h3 className="text-2xl font-bold mb-4">ROI Calculator</h3>
                <p className="text-gray-600 mb-4">
                  Based on industry averages, here's what you can expect from using Pendnt at your next trade show:
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium">Average leads per day (traditional)</span>
                    <span>25</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium">Average leads per day (with Pendnt)</span>
                    <span className="font-bold">75</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium">Average deal size</span>
                    <span>$5,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium">Conversion rate</span>
                    <span>5%</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2 text-[#FF7A5F]">
                    <span className="font-bold">Additional revenue per day</span>
                    <span className="font-bold">$12,500</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  *Based on industry averages. Your results may vary depending on your specific business and trade show environment.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="container mx-auto py-16 px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">
              Competitive Edge
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Pendnt Compares</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how Pendnt stacks up against traditional lead capture methods.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Pendnt</th>
                  <th className="p-4 text-center">Badge Scanners</th>
                  <th className="p-4 text-center">Business Cards</th>
                  <th className="p-4 text-center">Manual Entry</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Hands-free operation",
                    pendnt: true,
                    scanners: false,
                    cards: false,
                    manual: false,
                  },
                  {
                    feature: "Captures conversation context",
                    pendnt: true,
                    scanners: false,
                    cards: false,
                    manual: true,
                  },
                  {
                    feature: "Works without internet",
                    pendnt: true,
                    scanners: false,
                    cards: true,
                    manual: true,
                  },
                  {
                    feature: "Automatic CRM integration",
                    pendnt: true,
                    scanners: "Limited",
                    cards: false,
                    manual: false,
                  },
                  {
                    feature: "Captures contact details",
                    pendnt: true,
                    scanners: "Limited",
                    cards: "Limited",
                    manual: true,
                  },
                  {
                    feature: "Natural conversation flow",
                    pendnt: true,
                    scanners: false,
                    cards: true,
                    manual: true,
                  },
                  {
                    feature: "Lead qualification data",
                    pendnt: true,
                    scanners: false,
                    cards: false,
                    manual: "Limited",
                  },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.pendnt === true ? (
                        <Check className="h-5 w-5 text-[#FF7A5F] mx-auto" />
                      ) : row.pendnt === false ? (
                        <span className="text-gray-400">—</span>
                      ) : (
                        <span className="text-gray-600">{row.pendnt}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.scanners === true ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.scanners === false ? (
                        <span className="text-gray-400">—</span>
                      ) : (
                        <span className="text-gray-600">{row.scanners}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.cards === true ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.cards === false ? (
                        <span className="text-gray-400">—</span>
                      ) : (
                        <span className="text-gray-600">{row.cards}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.manual === true ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.manual === false ? (
                        <span className="text-gray-400">—</span>
                      ) : (
                        <span className="text-gray-600">{row.manual}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="container mx-auto py-16 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">
                Trust & Security
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Privacy By Design</h2>
              <p className="text-gray-600 text-lg mb-6">
                We've built Pendnt with privacy and security as core principles, not afterthoughts.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-fit mt-1 bg-[#FF7A5F]/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-[#FF7A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">On-Phone Processing</h3>
                    <p className="text-gray-600">
                      Conversations are transcribed locally on your phone, sent to the cloud for processing with <b className="text-[#FF7A5F] font-medium">no data stored</b>, ensuring your sensitive business discussions remain private.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-fit mt-1 bg-[#FF7A5F]/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-[#FF7A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">End-to-End Encryption</h3>
                    <p className="text-gray-600">
                      All data transmitted between Pendnt and your CRM is protected with enterprise-grade encryption.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-fit mt-1 bg-[#FF7A5F]/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-[#FF7A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">User Control</h3>
                    <p className="text-gray-600">
                      You have complete control over your data, with options to review and delete recordings before they're processed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0f0f0] to-[#c0c0c0] opacity-20 blur-xl rounded-3xl"></div>
              <div className="relative bg-white p-6 rounded-3xl border border-gray-200 shadow-lg">
                <Image
                  src="/images/pendnt-lock.png"
                  alt="Privacy and Security"
                  width={500}
                  height={400}
                  className="w-full h-auto p-16"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto py-16 px-4 md:px-6 bg-white rounded-3xl shadow-md">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">
                Common Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">
                Everything you need to know about Pendnt.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How accurate is Pendnt's voice recognition?",
                  answer: <>Pendnt uses <Link href="https://github.com/ggml-org/whisper.cpp" className="text-[#FF7A5F] hover:underline" target="_blank">whisper.cpp</Link> to transcribe audio with a 90% accuracy rate.</>
                },
                {
                  question: "Which CRM systems does Pendnt integrate with?",
                  answer: <>
                    Pendnt integrates with all major CRM systems including Salesforce, HubSpot, Zoho, Microsoft Dynamics, and more. We also offer a REST API for custom integrations with proprietary systems. 
                    <br />
                    <Link href="/contact#" className="text-[#FF7A5F] hover:underline">Contact us</Link> to learn more.
                  </>
                },
                {
                  question: "How long does the battery last?",
                  answer: "Pendnt's battery lasts for up to 12 hours of active use, easily covering a full day at a trade show."
                },
                {
                  question: "Is there a mobile app for Pendnt?",
                  answer: "Yes, Pendnt requires you to use a companion mobile app for iOS and Android. The app allows you to review captured leads, edit information before syncing to your CRM, view analytics, and manage device settings."
                },
                {
                  question: "Can multiple team members use the same Pendnt account?",
                  answer: "Yes, Pendnt supports team accounts where multiple devices can be managed under a single dashboard. Each team member can have their own device while administrators can view team-wide analytics and manage permissions."
                },
                {
                  question: "What happens if someone doesn't want to be recorded?",
                  answer: "Pendnt includes a privacy mode that can be activated with a simple tap. We also recommend informing conversation partners that you're using an AI assistant for note-taking, similar to how you might disclose that you're taking notes on a phone or tablet."
                },
                {
                  question: "Does Pendnt work in languages other than English?",
                  answer: "Currently, Pendnt only supports English."
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto py-16 px-4 md:px-6">
          <div className="bg-gradient-to-r from-[#FF7A5F] to-[#FFA05E] rounded-3xl shadow-lg p-10 md:p-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Lead Capture?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join our beta program today and be among the first to experience the future of trade show lead capture.
              </p>
              <Button
                size="lg"
                className="bg-white text-[#FF7A5F] hover:bg-white/90 transition-colors"
                asChild
              >
                <Link href="/join-the-beta">
                  Join the Beta <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
