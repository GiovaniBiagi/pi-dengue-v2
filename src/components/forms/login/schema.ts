import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Entre com um email válido",
  }),
  password: z
    .string()
    .min(8, "A senha precisa conter mais de 8 caracteres")
    .max(16, "A senha precisa conter menos de 16 caracteres"),
});

export type LoginData = z.infer<typeof loginSchema>;
