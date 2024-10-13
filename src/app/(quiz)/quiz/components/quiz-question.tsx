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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { questionIdAtom, questionsDataAtom } from "@/store";
import { useAtom } from "jotai";
import React from "react";
import QuizSkeleton from "./quiz-skeleton";

const QuizQuestion = () => {
  const [questionId, setQuestionId] = useAtom(questionIdAtom);
  const [questionsData, setQuestionsData] = useAtom(questionsDataAtom);

  if (!questionsData[questionId]) return <QuizSkeleton />;

  return (
    <Card>
      <CardHeader>
        <CardDescription>Question {questionId + 1}</CardDescription>
        <CardTitle
          dangerouslySetInnerHTML={{ __html: questionsData[questionId].question }}
        />
      </CardHeader>
      <CardContent>
        <RadioGroup
          onValueChange={(value) => {
            setQuestionsData((prev) => {
              const updatedData = [...prev];
              updatedData[questionId] = {
                ...updatedData[questionId],
                user_answer: value,
                answered: true,
              };
              return updatedData;
            });
          }}
          defaultValue={questionsData[questionId].user_answer}
        >
          {questionsData[questionId].answer.map((ans, idx) => (
            <div
              className={cn(
                buttonVariants({
                  variant:
                  questionsData[questionId].user_answer == ans ? "default" : "ghost",
                  size: "default",
                }),
                questionsData[questionId].user_answer == ans ? "bg-blue-500" : null,
                "justify-start"
              )}
              key={idx}
            >
              <RadioGroupItem
                value={ans}
                id={ans}
                className="hidden w-full h-full"
              />
              <Label
                htmlFor={ans}
                className="font-bold w-full h-full flex items-center"
                dangerouslySetInnerHTML={{ __html: ans }}
              />
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="default"
          disabled={questionId == 0}
          onClick={() => {
            setQuestionId(questionId - 1);
          }}
        >
          Back
        </Button>
        <Button
          variant="default"
          disabled={questionId == 9}
          onClick={() => {
            setQuestionId(questionId + 1);
          }}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizQuestion;
