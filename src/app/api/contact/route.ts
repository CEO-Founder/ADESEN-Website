import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { org } from "@/lib/data/site";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organisation: z.string().optional(),
  reason: z.enum(["partnership", "donor", "volunteer", "media", "general"]),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || org.contact.email;

  if (!apiKey) {
    // Fail loudly rather than pretending the message was sent — see
    // README "Wiring up the contact form" for setup steps.
    return NextResponse.json(
      { error: "The contact form isn't configured to send email yet." },
      { status: 503 }
    );
  }

  const { name, email, organisation, reason, message } = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "ADESEN Website <onboarding@resend.dev>",
    to: toEmail,
    replyTo: email,
    subject: `New ${reason} enquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${organisation || "—"}`,
      `Reason: ${reason}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
