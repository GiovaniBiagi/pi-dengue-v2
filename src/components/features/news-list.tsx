"use client";

import { useEffect, useState } from "react";
import { Card } from "../card/card";
import Api from "@/lib/api";
import { News } from "@/services/news/news.schema";

export const NewsList = () => {
  const [news, setNews] = useState<News[]>([]);

  const fetchNews = async () => {
    const response = await Api.get("/news");

    setNews(response.data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (!news.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>
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
