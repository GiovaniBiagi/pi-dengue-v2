import Api from "@/lib/api";

export type NewsletterBody = {
  email: string;
};

export const newsletterSubscription = async (body: NewsletterBody) =>
  Api.post("/newsletter/subscribe", body);
