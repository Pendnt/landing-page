"use client"

import { Suspense, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

// Form schema with validation
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  jobTitle: z.string().min(2, { message: "Job title must be at least 2 characters." }),
  companySize: z.string({
    required_error: "Please select your company size.",
  }),
  tradeShowsPerYear: z.string({
    required_error: "Please select the number of trade shows you attend.",
  }),
  currentSolution: z.string().optional(),
  useCase: z.string().min(10, { message: "Please provide at least 10 characters." }).max(500, {
    message: "Your use case description cannot exceed 500 characters.",
  }),
  termsAccepted: z.boolean().refine((v) => v === true, {
    message: "You must accept the terms and conditions."
  }),
})

type FormValues = z.infer<typeof formSchema>

function JoinBeta() {
  const searchParams = useSearchParams();
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      companySize: "",
      tradeShowsPerYear: "",
      currentSolution: "",
      useCase: "",
      termsAccepted: false,
    },
  })

  // Form submission handler
  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/.netlify/functions/join-beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Failed to submit");
      }

      // success!
      setIsSubmitted(true);

      // optional redirect after delay
      // setTimeout(() => window.location.replace("/thank-you"), 2000);
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMsg(err.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const emailParam = searchParams.get("email") || "";
    if (emailParam) {
        form.setValue("email", emailParam, { shouldValidate: true })
    }
  }, [])

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto text-center p-4">
        <h2 className="text-2xl font-semibold">Thank you!</h2>
        <p>We’ve received your request and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-black">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/pendnt-logo.svg" alt="Pendnt Logo" width={180} height={50} priority />
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 md:px-6">
        {/* Back button */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" className="text-gray-600" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {isSubmitted ? (
          // Success state
          <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-white shadow-lg">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle2 className="h-16 w-16 text-[#FF7A5F]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Application Received!</h1>
              <p className="text-gray-600 text-lg mb-8">
                Thank you for your interest in joining the Pendnt beta program. We've received your application and will
                be in touch soon.
              </p>
              <p className="text-gray-600 mb-8">
                Our team reviews all applications carefully to ensure we can provide the best experience for our beta
                users. You can expect to hear from us within 3-5 business days.
              </p>
              <Button
                className="bg-gradient-to-r from-[#FF7A5F] to-[#FFA05E] text-white hover:opacity-90 transition-opacity"
                asChild
              >
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </Card>
        ) : (
          // Form state
          <>
            {/* Hero section */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Join the Pendnt Beta Program</h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Be among the first to experience how Pendnt transforms trade show lead capture. Complete the form below
                to apply for our exclusive beta program.
              </p>
            </div>

            {/* Form section */}
            <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-white shadow-lg">
              <Form {...form}>
                <form 
                  onSubmit={form.handleSubmit(onSubmit)} 
                  className="space-y-8"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  name="join-beta"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Inc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Marketing Manager" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="companySize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Size</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-500">201-500 employees</SelectItem>
                              <SelectItem value="501+">501+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="tradeShowsPerYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Trade Shows Per Year</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select number of trade shows" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-3">1-3 trade shows</SelectItem>
                              <SelectItem value="4-6">4-6 trade shows</SelectItem>
                              <SelectItem value="7-12">7-12 trade shows</SelectItem>
                              <SelectItem value="13+">13+ trade shows</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="currentSolution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Lead Capture Solution (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="What do you currently use for lead capture?" {...field} />
                        </FormControl>
                        <FormDescription>
                          Tell us what you're currently using to capture leads at trade shows.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="useCase"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Use Case</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your specific needs and challenges with lead capture at trade shows."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          This helps us understand how Pendnt can best serve your needs.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the{" "}
                            <Link href="#" className="text-[#FF7A5F] hover:underline">
                              terms and conditions
                            </Link>{" "}
                            and{" "}
                            <Link href="#" className="text-[#FF7A5F] hover:underline">
                              privacy policy
                            </Link>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  {errorMsg && (
                    <p className="text-red-600 text-sm text-center">{errorMsg}</p>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FF7A5F] to-[#FFA05E] text-white hover:opacity-90 transition-opacity"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting…" : "Submit Application"}
                  </Button>
                </form>
              </Form>
            </Card>

            {/* Beta program info */}
            <div className="mt-16 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">What to Expect as a Beta User</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">Early Access</h3>
                  <p className="text-gray-600">
                    Be among the first to use Pendnt's innovative AI-powered lead capture technology before it's
                    available to the general public.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">Direct Support</h3>
                  <p className="text-gray-600">
                    Receive personalized onboarding and dedicated support from our team throughout your beta experience.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">Shape the Product</h3>
                  <p className="text-gray-600">
                    Your feedback will directly influence product development and future features. Help us build the
                    perfect lead capture solution.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">Preferred Pricing</h3>
                  <p className="text-gray-600">
                    Beta users will receive special pricing when Pendnt launches commercially, as a thank you for your
                    early support.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default function JoinBetaWrapped() {
  return (
    <Suspense>
      <JoinBeta />
    </Suspense>
  )
}
