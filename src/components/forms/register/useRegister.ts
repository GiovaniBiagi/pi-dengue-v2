import { toast } from "react-toastify";
import { RegisterData } from "./schema";
import Api, { type Error } from "@/lib/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useRegister = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const register = async (data: RegisterData) => {
    setIsLoading(true);
    try {
      await Api.post("/auth/register", data);

      toast.success(
        "Cadastro realizado com sucesso! Aguarde e será redirecionado.",
        {
          onClose: () => router.push("/login"),
        }
      );
    } catch (error: unknown) {
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading };
};
