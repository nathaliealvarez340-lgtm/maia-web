import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  company: z.string().min(2, "Enter your company or project name."),
  email: z.string().email("Enter a valid email."),
  service: z.string().min(2, "Select a service."),
  message: z
    .string()
    .min(20, "Tell us a little more about the project.")
    .max(1600, "Keep the message under 1600 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
