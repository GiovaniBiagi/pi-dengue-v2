import { z } from "zod";

export const newsSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  content: z.string(),
});

export type News = z.infer<typeof newsSchema>;
