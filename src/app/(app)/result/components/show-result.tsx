"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { questionsDataAtom, quizTimerAtom } from "@/store";
import { useAtom, useSetAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ShowResult = () => {
  const setQuizTimer = useSetAtom(quizTimerAtom);
  const [questionsData, setQuestionsData] = useAtom(questionsDataAtom);
  const router = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle>You have finished the quiz!</CardTitle>
        <CardDescription>You scored:</CardDescription>
      </CardHeader>
      <CardContent>
        <h1 className="text-xl font-bold">
          {
            questionsData.filter(
              (val) => val.user_answer === val.correct_answer
            ).length
          }
          /10
        </h1>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button
          className={cn(buttonVariants({ variant: "default" }), "w-full")}
          onClick={async () => {
            setQuizTimer(60 * 10);

            const res = await fetch("/api/quiz", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });

            if (!res.ok) throw new Error("Failed to fetch quiz data");

            const data = await res.json();

            setQuestionsData([
              ...data.data.map((result: any) => {
                return {
                  question: result.question,
                  answer: result.answer,
                  correct_answer: result.correct_answer,
                  user_answer: undefined,
                  answered: false,
                };
              }),
            ]);

            router.push("/quiz");
          }}
        >
          Retake the quiz
        </Button>
        <Link
          href="/dashboard"
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          Back to Home
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ShowResult;
