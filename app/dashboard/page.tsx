"use client";

import { logout } from "@/modules/login/LoginForm/actions";

export default function Dashboard() {
  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
