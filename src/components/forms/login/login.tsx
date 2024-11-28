"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { LoginData, loginSchema } from "./schema";
import { useLogin } from "./useLogin";
import { Input } from "@/components/input/input";

const defaultValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const { login } = useLogin();
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
          <button className="w-full py-2 px-4 text-white bg-red-500 rounded hover:bg-red-600">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};
