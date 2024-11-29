import { RegisterForm } from "@/components/forms/register/register";
import { ToastContainer } from "react-toastify";

export default function RegisterPage() {
  return (
    <div className="max-h-screen">
      <ToastContainer />
      <RegisterForm />
    </div>
  );
}
