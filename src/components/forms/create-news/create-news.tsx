"use client";
import { Input } from "@/components/ui/input";
import { CreateNewsData, createNewsSchema } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNews } from "./useNews";
import { Button } from "@/components/ui/button";

const defaultValues: CreateNewsData = {
  title: "",
  subtitle: "",
  content: "",
  authorId: "",
};

export const CreateNewsForm = () => {
  const { create } = useNews();
  const form = useForm({
    mode: "onBlur",
    resolver: zodResolver(createNewsSchema),
    defaultValues,
  });

  const onSubmit = async (data: CreateNewsData) => await create(data);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-2xl p-4 space-y-4 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center">Criar notícia</h1>
        <form className="space-y-1" onSubmit={form.handleSubmit(onSubmit)}>
          <Input
            label="Título da notícia *"
            {...form.register("title")}
            error={form.formState.errors.title}
          />
          <Input
            label="Subtitulo da notícia *"
            {...form.register("subtitle")}
            error={form.formState.errors.subtitle}
          />
          <Input
            label="Conteúdo *"
            {...form.register("content")}
            error={form.formState.errors.content}
          />

          <Button variant="default">Cadastrar</Button>
        </form>
      </div>
    </div>
  );
};
