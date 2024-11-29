import { CreateNewsData } from "@/components/forms/create-news/schema";
import Api from "@/lib/api";
import { AxiosResponse } from "axios";
import { News } from "./news.schema";

export const fetchNews = async (): Promise<AxiosResponse<News[]>> => {
  const response = await Api.get("/news");

  return response.data;
};

export const createNews = async (data: CreateNewsData) => {
  const response = await Api.post("/news", data);

  return response.data;
};
