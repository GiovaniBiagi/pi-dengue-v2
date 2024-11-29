import Api from "@/lib/api";
export const me = async () => {
  return await Api.get("/users/me");
};
