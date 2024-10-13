import Login from "@/components/login";
import Register from "@/components/register";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const {isAuthenticated}= getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if(isUserAuthenticated){
    redirect("/dashboard")
  }

  return (
    <>
      <Image
        className="dark:invert"
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1 className="text-2xl font-bold">Hi, welcome to the Quiz App built with Next.JS!</h1>
      <h2 className="text-xl font-medium">Please Sign-in to continue!</h2>

      <div className="w-full flex gap-4 items-center flex-col font-bold text-xl">
        <Login />
        <Register />
      </div>
    </>
  );
}
