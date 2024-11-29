import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-h-screen relative">
      <Link
        href="/"
        className="flex items-center self-start text-blue-500 gap-2 absolute lg:top-20 lg:left-20 top-4 left-4"
      >
        <ArrowLeft className="w-8 h-8" />
        <p>Ir para a home</p>
      </Link>
      {children}
    </div>
  );
}
