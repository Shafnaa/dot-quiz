"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { questionIdAtom, questionsDataAtom, quizTimerAtom } from "@/store";
import { useAtom, useAtomValue } from "jotai";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const format = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const QuizNavigation = () => {
  const [quizTimer, setQuizTimer] = useAtom(quizTimerAtom);
  const questionsData = useAtomValue(questionsDataAtom);
  const [questionId, setQuistionId] = useAtom(questionIdAtom);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setQuizTimer(quizTimer - 1);
    }, 1000);

    if (quizTimer === 0) {
      redirect("/result");
    }

    return () => {
      clearInterval(timer);
    };
  }, [quizTimer, setQuizTimer]);

  return (
    <header>
      <Card>
        <CardHeader>
          <CardTitle>{format(quizTimer)}</CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="grid grid-cols-5 gap-4">
            {questionsData.map((val, idx) => {
              return (
                <Button
                  key={idx}
                  variant={
                    idx === questionId
                      ? "destructive"
                      : val.answered
                      ? "default"
                      : "outline"
                  }
                  className="w-full h-full aspect-square"
                  onClick={() => setQuistionId(idx)}
                >
                  {idx + 1}
                </Button>
              );
            })}
          </nav>
        </CardContent>
        <CardFooter>
          <Link
            href="/result"
            className={cn(buttonVariants({ variant: "default" }), "w-full")}
          >
            Finish
          </Link>
        </CardFooter>
      </Card>
    </header>
  );
};

export default QuizNavigation;
