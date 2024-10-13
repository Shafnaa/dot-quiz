"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "./ui/button";

export default function Logout() {
  return (
    <Button
      variant="destructive"
      className="w-full rounded-full font-bold text-lg"
      size="lg"
    >
      <LogoutLink postLogoutRedirectURL="/" className="w-full h-full flex justify-center items-center">Logout</LogoutLink>
    </Button>
  );
}
