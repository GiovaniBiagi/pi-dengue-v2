"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { LoginData, loginSchema } from "./schema";
import { useLogin } from "./useLogin";
import { Input } from "@/components/input/input";
import { Button } from "@/components/button/button";

const defaultValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const { login, isLoading } = useLogin();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  const onSubmit = async (data: LoginData) => await login(data);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-4 space-y-4 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <Input
              label="E-mail"
              type="email"
              {...form.register("email")}
              error={form.formState.errors.email}
            />
          </div>
          <div>
            <Input
              label="Senha"
              type="password"
              {...form.register("password")}
              error={form.formState.errors.password}
            />
          </div>
          <Button
            variant="primary"
            label="Entrar"
            loading={isLoading}
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  );
};
