import Api from "@/lib/api";
export const me = async () => {
  return await Api.get("/users/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
