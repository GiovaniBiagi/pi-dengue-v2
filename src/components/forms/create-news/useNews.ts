import { toast } from "react-toastify";
import { CreateNewsData } from "./schema";
import Api from "@/lib/api";
import { useEffect, useState } from "react";
import { me } from "@/services/user/me";

export const useNews = () => {
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetcUserInfo = async () => {
    const response = await me();
    console.log(response.data);
    setUserId(response.data.id);
  };

  useEffect(() => {
    fetcUserInfo();
  }, []);

  const create = async (data: CreateNewsData) => {
    setIsLoading(true);
    try {
      const response = await Api.post("/news", {
        ...data,
        authorId: userId,
      });

      return response.data;
    } catch (error: unknown) {
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };
  return { create, isLoading };
};
