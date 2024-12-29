"use client";

import { Input } from "@/components/Input";
import { useActionState } from "react";
import { signup } from "./actions";

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <form action={action} className="flex flex-col gap-4 w-96">
      <div>
        <Input
          type="text"
          variant="authInput"
          name="email"
          placeholder="ایمیل/موبایل"
          componentName="email"
          error={state?.errors?.email}
        />
      </div>

      <div>
        <Input
          id="password"
          variant="authInput"
          name="password"
          type="password"
          placeholder="رمز عبور"
          componentName="email"
          error={state?.errors?.password}
        />
      </div>
      <button disabled={pending} type="submit">
        عضویت
      </button>
    </form>
  );
}
