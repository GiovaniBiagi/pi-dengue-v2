import { z } from "zod";

export const createNewsSchema = z.object({
  title: z.string().min(3, "Título inválido"),
  subtitle: z.string().min(3, "Subtítulo inválido"),
  content: z.string().min(3, "Conteúdo inválido"),
  authorId: z.string(),
});

export type CreateNewsData = z.infer<typeof createNewsSchema>;
