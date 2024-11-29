import Api from "@/lib/api";

export type NewsletterBody = {
  email: string;
};

export const newsletterSubscription = async (body: NewsletterBody) =>
  Api.post(
    "https://api-dengue-v2.onrender.com/api/v1/newsletter/subscribe",
    body
  );
