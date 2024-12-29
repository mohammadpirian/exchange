"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./actions";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={loginAction} className="flex max-w-[300px] flex-col gap-2">
      <Input
        type="text"
        variant="authInput"
        name="email"
        placeholder="ایمیل/موبایل"
        componentName="email"
        error={state?.errors?.email}
      />
      <div className="flex flex-col gap-2">
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
      {state?.errors?.password && (
        <p className="text-red-500">{state.errors.password}</p>
      )}
      <Button variant="login" disabled={pending} type="submit">
        Login
      </Button>
    </form>
  );
}

// function SubmitButton() {
// const { pending } = useFormStatus();

//   return (
//     <button disabled={pending} type="submit">
//       Login
//     </button>
//   );
// }
