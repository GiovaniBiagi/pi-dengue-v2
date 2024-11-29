"use client";

import { useEffect, useState } from "react";
import { Card } from "../card/card";
import Api from "@/lib/api";
import { News } from "@/services/news/news.schema";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const NewsList = () => {
  const router = useRouter();
  const [news, setNews] = useState<News[]>([]);

  const fetchNews = async () => {
    const response = await Api.get("/news", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setNews(response.data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (!news.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="flex justify-between border-b mb-4">
        <h1 className="text-3xl font-bold mb-6">Notícias cadastradas</h1>
        <div className="flex items-center gap-4">
          <Link href="/news/create">
            <Button variant="default">Criar notícia</Button>
          </Link>

          <Button variant="destructive" onClick={handleSignOut}>
            Sair
          </Button>
        </div>
      </header>
      <div className="flex justify-between items-center"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};
