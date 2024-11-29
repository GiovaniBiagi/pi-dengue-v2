import { toast } from "react-toastify";
import { CreateNewsData } from "./schema";
import Api from "@/lib/api";
import { useEffect, useState } from "react";
import { me } from "@/services/user/me";
import { useRouter } from "next/navigation";

export const useNews = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetcUserInfo = async () => {
    const response = await me();
    setUserId(response.data.id);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }

    fetcUserInfo();
  }, [router]);

  const create = async (data: CreateNewsData) => {
    setIsLoading(true);
    try {
      await Api.post(
        "/news",
        {
          ...data,
          authorId: userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Notícia criada com sucesso", {
        onClose: () => {
          router.push("/news");
        },
      });
    } catch (error: unknown) {
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };
  return { create, isLoading };
};
