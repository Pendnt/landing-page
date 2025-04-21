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
  // parse & validate incoming JSON
  const body = await request.json();
  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.flatten() },
      { status: 400 }
    );
  }
  const data = result.data;

  // build HubSpot payload
  const properties: Record<string, string> = {
    email: data.email,
    firstname: data.firstName,
    lastname: data.lastName,
  };
  if (data.company)      properties.company = data.company;
  if (data.jobTitle)     properties.jobtitle = data.jobTitle;
  if (data.companySize)  properties.company_size = data.companySize;
  if (data.tradeShowsPerYear)
                          properties.trade_shows_per_year = data.tradeShowsPerYear;
  if (data.currentSolution)
                          properties.hs_lead_status = data.currentSolution;
  if (data.useCase)      properties.use_case = data.useCase;

  properties.referral_method = "website_join_beta_form";

  try {
    // POST to HubSpot
    const hubspotRes = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
        },
        body: JSON.stringify({ properties }),
      }
    );

    if (!hubspotRes.ok) {
      const text = await hubspotRes.text();
      console.error("HubSpot error:", text);
      return NextResponse.json(
        { error: "HubSpot API error", details: text },
        { status: hubspotRes.status }
      );
    }

    const hubspotBody = await hubspotRes.json();
    console.log("Created HubSpot contact:", hubspotBody.id);

    // return success to the client
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (err: any) {
    console.error("Unexpected error:", err);
    if (err.message.contains("Contact already exists.")) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }
    return NextResponse.json(
      { error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
