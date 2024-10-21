import Logout from "@/components/logout";
import Image from "next/image";
import StartQuiz from "./components/start-quiz";

export default function page() {
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
      <h1 className="text-2xl font-bold">Welcome to the Quiz App!</h1>

      <div className="w-full flex gap-4 items-center flex-col font-bold text-xl">
        <StartQuiz />
        <Logout />
      </div>
    </>
  );
}
