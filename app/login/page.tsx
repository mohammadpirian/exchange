import BannerSide from "@/modules/login/BannerSide";
import { LoginForm } from "@/modules/login/LoginForm/LoginForm";

export default function Login() {
  return (
    <div className="grid min-h-screen gap-16">
      <main className="w-full h-full grid grid-cols-2 justify-center items-center gap-20">
        <BannerSide />
        <LoginForm />
      </main>
    </div>
  );
}
