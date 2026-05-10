import { Resend } from "resend";

let resend: Resend | null = null;

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!resend) {
    resend = new Resend(apiKey);
  }

  return resend;
}

export function getContactRecipient() {
  const email = process.env.CONTACT_TO_EMAIL;

  if (!email) {
    throw new Error("CONTACT_TO_EMAIL is not configured.");
  }

  return email;
}

export function getSenderEmail() {
  return process.env.RESEND_FROM_EMAIL ?? "MAIA <onboarding@resend.dev>";
}
