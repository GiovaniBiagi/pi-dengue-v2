import Api from "@/lib/api";

export type DengueData = {
  date: Date;
  value: number;
};

export const getDengueData = async () => Api.get("/dengue");
