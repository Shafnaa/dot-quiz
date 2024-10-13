"use client";
import { Button } from "@/components/ui/button";
import { questionsDataAtom, quizTimerAtom } from "@/store";
import { useSetAtom } from "jotai";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const StartQuiz = () => {
  const setQuizTimer = useSetAtom(quizTimerAtom);
  const setQuestionsData = useSetAtom(questionsDataAtom);
  const router = useRouter();

  return (
    <Button
      className="w-full rounded-full font-bold text-lg"
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
      Start
    </Button>
  );
};

export default StartQuiz;
