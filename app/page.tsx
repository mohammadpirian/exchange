"use client";

import SignupForm from "@/modules/signup/formSignUp";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen gap-16">
      <main className="w-full h-full grid grid-cols-2 justify-center items-center gap-20">
        <div className="w-full flex justify-end">
          <Image src="loginBanner.svg" alt="Logo" width={428} height={428} />
        </div>
        <SignupForm />
      </main>
    </div>
  );
}
