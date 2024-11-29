import { toast } from "react-toastify";
import { LoginData } from "./schema";
import Api, { type Error } from "@/lib/api";
import { useState } from "react";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const login = async (data: LoginData) => {
    setIsLoading(true);
    try {
      const response = await Api.post("/auth/login", data);

      return response.data;
    } catch (error: unknown) {
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};
