import { toast } from "react-toastify";
import { RegisterData } from "./schema";
import Api, { type Error } from "@/lib/api";
import { useState } from "react";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const register = async (data: RegisterData) => {
    setIsLoading(true);
    try {
      const response = await Api.post("/auth/register", data);

      return response.data;
    } catch (error: unknown) {
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading };
};
