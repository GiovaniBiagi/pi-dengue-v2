"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";

import { Gender, type RegisterData, registerSchema } from "./schema";
import { useRegister } from "./useRegister";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/date-picker/date-picker";

const defaultValues: RegisterData = {
  email: "",
  firstName: "",
  lastName: "",
  birthDate: "",
  phone: "",
  gender: Gender.unspecified,
  zipcode: "",
  password: "",
  passwordConfirmation: "",
};

const genderOptions = [
  { value: Gender.male, label: "Masculino" },
  { value: Gender.female, label: "Feminino" },
];

export const RegisterForm = () => {
  const { register } = useRegister();
  const form = useForm({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
    defaultValues,
  });

  const onSubmit = async (data: RegisterData) => await register(data);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-2xl p-4 space-y-4 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center">Cadastre-se</h1>
        <form className="space-y-1" onSubmit={form.handleSubmit(onSubmit)}>
          <Input
            label="Primeiro nome *"
            {...form.register("firstName")}
            error={form.formState.errors.firstName}
          />
          <Input
            label="Último nome *"
            {...form.register("lastName")}
            error={form.formState.errors.lastName}
          />
          <Input
            label="Email *"
            type="email"
            {...form.register("email")}
            error={form.formState.errors.email}
          />
          <div className="w-full flex flex-col ">
            <Label className="mb-2">Data de nascimento *</Label>
            <DatePicker
              placeholder="Selecione sua data de nascimento "
              onDateSelect={(date) =>
                form.setValue(
                  "birthDate",
                  format(!!date ? date?.toString() : new Date(), "dd/MM/yyyy")
                )
              }
            />
            {form.formState.errors.birthDate && (
              <span className="text-red-500 text-xs">
                {form.formState.errors.birthDate.message}
              </span>
            )}
          </div>
          <Input
            label="Telefone *"
            type="tel"
            {...form.register("phone")}
            error={form.formState.errors.phone}
          />
          <div className="flex gap-4 items-baseline w-full">
            <div className="w-full">
              <Label>Gênero *</Label>
              <Select
                onValueChange={(value) =>
                  form.setValue("gender", value as Gender)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Escolha seu gênero" />
                </SelectTrigger>
                <SelectContent>
                  {genderOptions.map((gender) => (
                    <SelectItem key={gender.value} value={gender.value}>
                      {gender.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.gender && (
                <span className="text-red-500 text-xs">
                  {form.formState.errors.gender.message}
                </span>
              )}
            </div>
            <Input
              label="CEP *"
              {...form.register("zipcode")}
              error={form.formState.errors.zipcode}
            />
          </div>
          <Input
            label="Senha *"
            type="password"
            error={form.formState.errors.password}
            {...form.register("password")}
          />
          <Input
            label="Confirme sua senha *"
            type="password"
            error={form.formState.errors.passwordConfirmation}
            {...form.register("passwordConfirmation")}
          />
          <button className="w-full py-2 px-4 text-white bg-red-500 rounded hover:bg-red-600">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};
