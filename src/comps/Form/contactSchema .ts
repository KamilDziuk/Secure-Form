import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "Imię jest wymagane")
    .max(20, "Maksymalnie 20 znaków"),

  lastName: z
    .string()
    .min(1, "Nazwisko jest wymagane")
    .max(20, "Maksymalnie 20 znaków"),

  phone: z
    .string()
    .min(6, "Numer telefonu jest za krótki")
    .max(20, "Numer telefonu jest za długi"),

  email: z.string().email("Nieprawidłowy adres e-mail"),

  message: z
    .string()
    .min(1, "Wiadomość jest wymagana")
    .max(2000, "Wiadomość jest za długa"),
});
