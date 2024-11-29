"use client";

import Link from "next/link";
import { toast } from "react-toastify";
import { PropsWithChildren } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../input/input";
import { Button } from "../button/button";
import { newsletterSubscription } from "@/services/newsletter";

const Text = ({ children }: PropsWithChildren) => {
  return <p className="text-white text-center">{children}</p>;
};

export const Footer = () => {
  const form = useForm({
    defaultValues: {
      newsletterEmail: "",
    },
  });

  const onSubmit = async (data: { newsletterEmail: string }) => {
    try {
      await newsletterSubscription({
        email: data.newsletterEmail,
      });

      form.reset();
      toast.success("Inscrição realizada com sucesso!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Erro ao se inscrever na newsletter");
    }
  };

  return (
    <footer className="p-8 bg-blue-500 flex flex-col-reverse gap-4 lg:flex-row lg:justify-evenly lg:items-center">
      <div>
        <Text>
          Av. Eng. Fábio Roberto Barnabé, 2800 - M.D. - CEP: 13331-900
        </Text>
        <Text>Telefones: (19)3834-9000 / 0800-770-7702</Text>
        <Text>
          Mais informações em:{" "}
          <Link
            href="https://www.indaiatuba.sp.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800"
          >
            https://www.indaiatuba.sp.gov.br/
          </Link>
        </Text>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="input-container">
          <Input
            type="email"
            id="newsletterEmail"
            label="Receba atualizações:"
            labelStyle="text-white"
            placeholder="Digite seu e-mail"
            {...form.register("newsletterEmail")}
          />
        </div>
        <Button
          type="submit"
          variant="secondary"
          className="mt-2"
          label="Enviar"
        />
      </form>
    </footer>
  );
};
