import { CreateNewsForm } from "@/components/forms/create-news/create-news";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function CreateNewsPage() {
  return (
    <>
      <Link
        href="/news"
        className="flex items-center self-start text-blue-500 gap-2 absolute lg:top-20 lg:left-20 top-4 left-4"
      >
        <ArrowLeft className="w-8 h-8" />
        <p>Ir para Notícias</p>
      </Link>
      <ToastContainer />
      <CreateNewsForm />
    </>
  );
}
