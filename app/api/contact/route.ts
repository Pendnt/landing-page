import { NextResponse } from "next/server";
import { z } from "zod";
import Mailgun from "mailgun.js";

const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  inquiryType: z.string({
    required_error: "Please select an inquiry type.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000, {
    message: "Message cannot exceed 1000 characters.",
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

  try {
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
        username: 'api',
        key: process.env.MAILGUN_API_KEY!,
    })
    mg.messages.create(process.env.MAILGUN_DOMAIN!, {
        from: `${data.name} <contact@${process.env.MAILGUN_DOMAIN!}>`,
        to: process.env.MY_RECEIVING_EMAIL!,
        subject: `Pendnt Contact Form: ${data.subject}`,
        text: `${data.subject}\n\n${data.message}\n\nFrom: ${data.email}`,
        html: `
            <h1>${data.subject}</h1>
            <p>${data.message}</p>
            <hr />
            <p>From: ${data.email}</p>
        `
    })

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (err: any) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
