import { z } from "zod";

export enum Gender {
  male = "male",
  female = "female",
  unspecified = "unspecified",
}

export const registerSchema = z
  .object({
    email: z.string().email("Email inválido"),
    firstName: z.string().min(3, "Nome inválido"),
    lastName: z.string().min(3, "Sobrenome inválido"),
    birthDate: z.string(),
    phone: z.string().min(10, "Telefone inválido"),
    gender: z.nativeEnum(Gender).refine(
      (value) => {
        if (value.startsWith("m") || value.startsWith("f")) return true;
      },
      {
        message: "Selecione uma das opções",
      }
    ),
    zipcode: z.string().refine((value) => value.match(/\d{5}-\d{3}/) !== null, {
      message: "CEP inválido",
    }),
    password: z
      .string()
      .min(6, "Senha deve ter no mínimo 6 caracteres")
      .max(20, "Senha deve ter no máximo 20 caracteres"),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não conferem",
    path: ["passwordConfirmation"],
  });

export type RegisterData = z.infer<typeof registerSchema>;
