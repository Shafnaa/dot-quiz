import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const QUESTIONS_DATA: {
  question: string;
  answer: string[];
  correct_answer: string;
  user_answer?: string;
  answered: boolean;
}[] = [];
const QUESTION_ID = 0;
const QUIZ_TIMER = 10 * 60;

export const questionsDataAtom = atomWithStorage(
  "quiz-questions",
  QUESTIONS_DATA
);
export const questionIdAtom = atom(QUESTION_ID);
export const quizTimerAtom = atomWithStorage("quiz-timer", QUIZ_TIMER);
