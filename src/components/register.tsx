"use client";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "./ui/button";

export default function Register() {
  return (
    <Button
      variant="secondary"
      className="w-full rounded-full font-bold text-lg"
      size="lg"
    >
      <RegisterLink postLoginRedirectURL="/dashboard" className="w-full h-full flex justify-center items-center">Register</RegisterLink>
    </Button>
  );
}
