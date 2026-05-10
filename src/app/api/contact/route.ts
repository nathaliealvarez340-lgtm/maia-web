import { NextResponse } from "next/server";
import { ContactEmail } from "@/emails/ContactEmail";
import { getContactRecipient, getResend, getSenderEmail } from "@/lib/email";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid contact request.", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const submittedAt = new Intl.DateTimeFormat("en", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Mexico_City",
    }).format(new Date());

    const resend = getResend();
    const to = getContactRecipient();

    const { error } = await resend.emails.send({
      from: getSenderEmail(),
      to,
      replyTo: parsed.data.email,
      subject: `MAIA inquiry: ${parsed.data.company}`,
      react: ContactEmail({ ...parsed.data, submittedAt }),
    });

    if (error) {
      return NextResponse.json(
        { error: "Email provider rejected the request." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected contact error.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
