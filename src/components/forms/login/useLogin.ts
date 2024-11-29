import { toast } from "react-toastify";
import { LoginData } from "./schema";
import Api, { type Error } from "@/lib/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/news");
    }
  }, [router]);

  const login = async (data: LoginData) => {
    setIsLoading(true);
    try {
      const response = await Api.post("/auth/login", data);

      localStorage.setItem("token", response.data.token);

      router.push("/news");
    } catch (error: unknown) {
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};
