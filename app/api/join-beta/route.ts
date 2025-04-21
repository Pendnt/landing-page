import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
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

export async function POST(request: Request) {
  const body = await request.json();
  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ errors: result.error.flatten() }, { status: 400 });
  }

  console.log("beta signup:", result.data);
  // e.g. await sendToCRM(result.data)

  return NextResponse.json({ message: "ok" });
}
