"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"
import { ArrowLeft, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  inquiryType: z.string().refine(s => s !== "", {
    message: "Please select an inquiry type.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000, {
    message: "Message cannot exceed 1000 characters.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      inquiryType: "",
      message: "",
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (values: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Failed to submit");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Submission error:", err);
    }
  };

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
        {/* Back button */}
        <div className="container mx-auto py-4 px-4 md:px-6">
          <Button variant="ghost" size="sm" className="text-gray-600" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-[#FF7A5F]/10 text-[#FF7A5F] hover:bg-[#FF7A5F]/20">Get in Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Pendnt</h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Have questions about Pendnt? Want to join our beta program? Our team is here to help.
            </p>
          </div>
        </section>

        {/* Contact Tabs */}
        <section className="container mx-auto py-8 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general">General Inquiries</TabsTrigger>
                <TabsTrigger value="sales">Sales & Pricing</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>

              {/* General Inquiries Tab */}
              <TabsContent value="general">
                <Card className="bg-white border-gray-200 p-6 md:p-8 shadow-md">
                  {isSubmitted ? (
                    // Success state
                    <div className="text-center py-8">
                      <div className="flex justify-center mb-6">
                        <CheckCircle2 className="h-16 w-16 text-[#FF7A5F]" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">Message Sent!</h2>
                      <p className="text-gray-600 text-lg mb-8">
                        Thank you for reaching out. We've received your message and will get back to you shortly.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-[#FF7A5F] to-[#FFA05E] text-white hover:opacity-90 transition-opacity"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    // Form state
                    <>
                      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input placeholder="john.doe@company.com" type="email" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="subject"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Subject</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Subject of your inquiry" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="inquiryType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Inquiry Type</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select inquiry type" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="general">General Question</SelectItem>
                                      <SelectItem value="beta">Beta Program</SelectItem>
                                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                                      <SelectItem value="press">Press Inquiry</SelectItem>
                                      <SelectItem value="careers">Careers</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="How can we help you?"
                                    className="min-h-[120px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>
                                  Please provide as much detail as possible so we can best assist you.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button
                            type="submit"
                            className="w-full md:w-auto bg-gradient-to-r from-[#FF7A5F] to-[#FFA05E] text-white hover:opacity-90 transition-opacity"
                          >
                            Send Message
                          </Button>
                        </form>
                      </Form>
                    </>
                  )}
                </Card>
              </TabsContent>

              {/* Sales & Pricing Tab */}
              <TabsContent value="sales">
                <Card className="bg-white border-gray-200 p-6 md:p-8 shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Sales & Pricing</h2>
                      <p className="text-gray-600 mb-6">
                        Interested in Pendnt for your organization? Our sales team is ready to help you find the right
                        solution for your needs.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-[#FF7A5F] mt-1" />
                          <div>
                            <h3 className="font-medium">Email Sales</h3>
                            <p className="text-gray-600">
                              <a href="mailto:sales@pendnt.dev" className="text-[#FF7A5F] hover:underline">
                                sales@pendnt.dev
                              </a>
                            </p>
                          </div>
                        </div>

                      </div>

                      <div className="mt-8">
                        <h3 className="font-bold text-lg mb-3">Enterprise Solutions</h3>
                        <p className="text-gray-600 mb-4">
                          For organizations with 10+ users, we offer custom enterprise solutions with:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Volume discounts</li>
                          <li>• Custom CRM integrations</li>
                          <li>• Dedicated account manager</li>
                          <li>• Advanced analytics dashboard</li>
                          <li>• Custom training sessions</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border border-gray-300 p-6 rounded-lg">
                      <h3 className="font-bold text-xl mb-4">Schedule a Demo</h3>
                      <p className="text-gray-600 mb-6">
                        See Pendnt in action with a personalized demo tailored to your organization's needs.
                      </p>

                      <form className="space-y-4">
                        <div>
                          <label htmlFor="demo-name" className="block text-sm font-medium mb-1">
                            Name
                          </label>
                          <Input id="demo-name" placeholder="Your name" />
                        </div>
                        <div>
                          <label htmlFor="demo-email" className="block text-sm font-medium mb-1">
                            Email
                          </label>
                          <Input id="demo-email" type="email" placeholder="Your email" />
                        </div>
                        <div>
                          <label htmlFor="demo-company" className="block text-sm font-medium mb-1">
                            Company
                          </label>
                          <Input id="demo-company" placeholder="Your company" />
                        </div>
                        <div>
                          <label htmlFor="demo-size" className="block text-sm font-medium mb-1">
                            Company Size
                          </label>
                          <Select>
                            <SelectTrigger id="demo-size">
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-500">201-500 employees</SelectItem>
                              <SelectItem value="501+">501+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-[#FF7A5F] to-[#FFA05E] text-white hover:opacity-90 transition-opacity">
                          Request Demo
                        </Button>
                      </form>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Support Tab */}
              <TabsContent value="support">
                <Card className="bg-white border-gray-200 p-6 md:p-8 shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Support</h2>
                      <p className="text-gray-600 mb-6">
                        Need help with your Pendnt device or have technical questions? Our support team is here to
                        assist.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-[#FF7A5F] mt-1" />
                          <div>
                            <h3 className="font-medium">Email Support</h3>
                            <p className="text-gray-600">
                              <a href="mailto:support@pendnt.dev" className="text-[#FF7A5F] hover:underline">
                                support@pendnt.dev
                              </a>
                            </p>
                            <p className="text-sm text-gray-500">Response within 24 hours</p>
                          </div>
                        </div>

                      </div>

                      <div className="mt-8">
                        <h3 className="font-bold text-lg mb-3">Beta Support</h3>
                        <p className="text-gray-600 mb-4">
                          Beta users receive priority support through our dedicated beta support channel:
                        </p>
                        <Button
                          variant="outline"
                          className="border-[#FF7A5F] text-[#FF7A5F] hover:bg-[#FF7A5F]/10"
                          asChild
                        >
                          <a href="mailto:beta-support@pendnt.dev">Contact Beta Support</a>
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-4">Common Support Questions</h3>
                      <Accordion type="single" collapsible className="w-full">
                        {[
                          {
                            question: "How do I set up my Pendnt device?",
                            answer:
                              "Setting up your Pendnt device is simple. Just charge it using the included USB-C cable, download the Pendnt app from the App Store or Google Play, and follow the in-app instructions to pair your device.",
                          },
                          {
                            question: "How do I connect Pendnt to my CRM?",
                            answer:
                              "In the Pendnt app, go to Settings > Integrations and select your CRM from the list of supported platforms. You'll be guided through the authentication process to securely connect your accounts.",
                          },
                          {
                            question: "What if Pendnt doesn't capture a lead correctly?",
                            answer:
                              "You can review and edit all captured leads in the Pendnt app before they're synced to your CRM. If you notice any issues with lead capture, you can manually edit the information or submit a support ticket for assistance.",
                          },
                          {
                            question: "How do I update my Pendnt device's firmware?",
                            answer:
                              "Firmware updates are delivered automatically through the Pendnt app. When a new update is available, you'll receive a notification, and the update will be installed the next time your device is connected to the app and charging.",
                          },
                        ].map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium py-3">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>

                      <div className="mt-6">
                        <Link
                          href="/learn-more#"
                          className="text-[#FF7A5F] hover:underline flex items-center gap-1 font-medium"
                        >
                          Learn More
                          <ArrowLeft className="h-4 w-4 rotate-180" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}

