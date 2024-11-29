import {
  Card as CardComponent,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreateNewsData } from "../forms/create-news/schema";

type NewsData = Omit<CreateNewsData, "authorId"> & {
  id: string;
};

export const Card = ({ id, title, subtitle, content }: NewsData) => {
  return (
    <CardComponent key={id} className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{content}</p>
      </CardContent>
    </CardComponent>
  );
};
