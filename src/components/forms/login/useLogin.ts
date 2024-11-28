import { toast } from "react-toastify";
import { LoginData } from "./schema";
import Api, { Error } from "@/lib/api";

export const useLogin = () => {
  const login = async (data: LoginData) => {
    try {
      const response = await Api.post("/auth/login", data);

      return response.data;
    } catch (error: unknown) {
      toast.error((error as Error).message);
    }
  };

  return { login };
};
