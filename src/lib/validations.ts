import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Escribe tu nombre."),
  company: z.string().min(2, "Escribe tu empresa o proyecto."),
  email: z.string().email("Escribe un email válido."),
  service: z.string().min(2, "Selecciona un servicio."),
  message: z
    .string()
    .min(20, "Cuéntanos un poco más sobre el proyecto.")
    .max(1600, "Mantén el mensaje por debajo de 1600 caracteres."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
