"use client";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "./ui/button";

export default function Login() {
  return (
    <Button
      variant="default"
      className="w-full rounded-full font-bold text-lg"
      size="lg"
    >
      <LoginLink postLoginRedirectURL="/dashboard" className="w-full h-full flex justify-center items-center">Login</LoginLink>
    </Button>
  );
}
